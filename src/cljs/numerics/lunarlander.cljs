(ns numerics.lunarlander
  (:require [numerics.tableaus :as tableaus]
            [numerics.runge-kutta :as rk]))

(def controls (atom { :theta 0 :thrust 0 }))

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
    (.lineTo -3 - 5)
    (.stroke)
    (draw-thrust s)
    (.restore)))

(defn draw [canvas { :keys [state] :as s}]
  (let [xmin -100 xmax 100 ymin 0 ymax 200 w (.-width canvas) h (.-height canvas)]
    (doto (.getContext canvas "2d")
      (-> .-fillStyle (set! "000000"))
      (.fillRect 0 0 w h)
      (-> .-fillStyle (set! "00FF00"))
      (-> .-strokeStyle (set! "FFFFFF"))
      (.save)
      (.translate (* (/ (- (state 1) xmin) (- xmax xmin)) w) (* (- 1 (/ (- (state 2) ymin) (- ymax ymin))) h))
      (draw-lander s)
      (.fillText (str (state 1) ", " (state 2)) 0 0)
      (.restore))))


(defn dx [[t x y vx vy]] vx)
(defn dy [[t x y vx vy]] vy)
(defn dvx [[t x y vx vy]] (-> (@controls :theta) (* Math/PI) (/ 180) Math/sin (* (@controls :thrust))))
(defn dvy [[t x y vx vy]] (+ -9.81 (-> (@controls :theta) (* Math/PI) (/ 180) Math/cos (* (@controls :thrust)))))

(defn sim [state]
  (let [t (.getTime (js/Date.))
        dt (* (- t (@state :time)) 1E-3)
        new-states (rk/rk-step [dx dy dvx dvy] (@state :state) dt tableaus/classic-fourth-order)]
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
                      (37 97) (swap! controls update :theta - 10)
                      (39 100) (swap! controls update :theta + 10)
                      32 (swap! controls assoc :thrust 100)
                      :else nil)))
      (set! (.-onkeyup js/document)
            (fn [e] (case (.-keyCode e)
                      32 (swap! controls assoc :thrust 0)
                      :else nil)))))))