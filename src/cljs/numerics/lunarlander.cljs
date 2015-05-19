(ns numerics.lunarlander
  (:require [numerics.tableaus :as tableaus]
            [numerics.runge-kutta :as rk]))

(def controls (atom { :theta 0 :thrust 0 }))

(defn fill-background [canvas color]
  (doto (.getContext canvas "2d")
    (-> .-fillStyle (set! color))
    (.fillRect 0 0 (.-width canvas) (.-height canvas))))

(defn intro-screen [canvas]
  (fill-background canvas "000000"))

(defn draw-thrust [ctx { :keys [state]}]
  (when (pos? (@controls :thrust))
    (doto ctx
      (-> .-strokeStyle (set! "FF0000"))
      (.beginPath)
      (.moveTo -3 5)
      (.lineTo 0 -5)
      (.lineTo 3 5)
      (.lineTo -3 5)
      (.stroke))))

(defn draw-lander [ctx { :keys [state] :as s}]
  (doto ctx
    (.save)
    (.rotate (-> (@controls :theta) (* Math/PI) (/ 180)))
    (-> .-strokeStyle (set! "FFFFFF"))
    (.beginPath)
    (.moveTo -3 -5)
    (.lineTo 0 5)
    (.lineTo 3 -5)
    (.lineTo -3 -5)
    (.stroke)
    (draw-thrust s)
    (.restore)))

(defn draw [canvas { :keys [state] :as s}]
  (let [xmin -100 xmax 100 ymin 0 ymax 200 w (.-width canvas) h (.-height canvas)]
    (do
      (fill-background canvas "000000")
      (doto (.getContext canvas "2d")
        (-> .-fillStyle (set! "00FF00"))
        (-> .-strokeStyle (set! "FFFFFF"))
        (.save)
        (.translate 0 h)
        (.scale 1 -1)
        (.scale (/ w (- xmax xmin)) (/ h (- ymax ymin)))
        (.translate (- xmin) (- ymin))
        (.translate (state 1) (state 2))
        (draw-lander s)
        (.save)
        (.scale 1 -1)
        (.fillText (str (@controls :theta)) 0 0)
        ;(.fillText (str (state 1) ", " (state 2) ", " (@controls :theta)) 0 0)
        (.restore)
        (.restore)))))

(defn dvx [_] (-> (@controls :theta) (* Math/PI) (/ -180) Math/sin (* (@controls :thrust))))
(defn dvy [_] (+ -9.81 (-> (@controls :theta) (* Math/PI) (/ -180) Math/cos (* (@controls :thrust)))))

(defn sim [state]
  (let [t (.getTime (js/Date.))
        dt (* (- t (@state :time)) 1E-3)
        new-states (rk/rk-step [#(% 3) #(% 4) dvx dvy] (@state :state) dt tableaus/classic-fourth-order)]
    (reset! state { :state new-states :time t })))

(defn ^:export init[canvas]
  (set!
    (.-onload js/window)
    (let [state (atom { :state [0 0 200 0 0] :time (.getTime (js/Date.)) })]
      (do
      (draw canvas @state)
      (js/setInterval #(do
                        (sim state)
                        (draw canvas @state)) 1)
      (set! (.-onkeydown js/document)
            (fn [e] (case (.-keyCode e)
                      (37 97) (swap! controls update :theta (fn [theta] (mod (+ theta 10) 360)))
                      (39 100) (swap! controls update :theta (fn [theta] (mod (- theta 10) 360)))
                      32 (swap! controls assoc :thrust 100)
                      :else nil)))
      (set! (.-onkeyup js/document)
            (fn [e] (case (.-keyCode e)
                      32 (swap! controls assoc :thrust 0)
                      :else nil)))))))