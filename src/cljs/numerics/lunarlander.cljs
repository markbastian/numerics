(ns numerics.lunarlander
  (:require [numerics.tableaus :as tableaus]
            [numerics.runge-kutta :as rk]))

(defn fill-background [canvas color]
  (doto (.getContext canvas "2d")
    (-> .-fillStyle (set! color))
    (.fillRect 0 0 (.-width canvas) (.-height canvas))))

(defn intro-screen [canvas]
  (do
    (fill-background canvas "000000")
    (doto (.getContext canvas "2d")
      (-> .-fillStyle (set! "00FF00"))
      (-> .-strokeStyle (set! "FFFFFF"))
      (.fillText "Welcome to Lunar Lander!" 0 40)
      (.fillText "Press any key to play!" 0 50)
      (.fillText "Press left and right to rotate" 0 60)
      (.fillText "Press space to engage rocket" 0 70)
      (.fillText "Win by making a gentle landing" 0 80)
      (.fillText "Leaving the screen to the left, right, or top will cause you to lose." 0 90))))

(defn draw-triangle [ctx]
  (doto ctx
    (.beginPath)
    (.moveTo -3 -5)
    (.lineTo 0 5)
    (.lineTo 3 -5)
    (.lineTo -3 -5)
    (.stroke)))

(defn draw-thrust [ctx { :keys [state]} controls]
  (when (pos? (@controls :thrust))
    (doto ctx
      (.save)
      (.translate 0 -5)
      (-> .-strokeStyle (set! "FF0000"))
      draw-triangle
      (.restore))))

(defn draw-lander [ctx { :keys [state] :as s} controls]
  (doto ctx
    (.save)
    (.rotate (-> (@controls :theta) (* Math/PI) (/ 180)))
    (-> .-strokeStyle (set! "FFFFFF"))
    draw-triangle
    (draw-thrust s controls)
    (.restore)))

(defn draw [canvas { :keys [state] :as s} controls]
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
        (draw-lander s controls)
        (.save)
        (.scale 1 -1)
        (.fillText (str (@controls :theta)) 0 0)
        (.restore)
        (.restore)))))

(defn sim [state {:keys [theta thrust]}]
  (let [t (.getTime (js/Date.))
        dt (* (- t (@state :time)) 1E-3)
        dvx #(-> theta (* Math/PI) (/ -180) Math/sin (* thrust))
        dvy #(+ -9.81 (-> theta (* Math/PI) (/ -180) Math/cos (* thrust)))
        new-states (rk/rk-step [#(% 3) #(% 4) dvx dvy] (@state :state) dt tableaus/classic-fourth-order)]
    (reset! state { :state new-states :time t })))

(defn ^:export init[canvas]
  (set!
    (.-onload js/window)
    (let [state (atom { :state [0 0 200 0 0] :time (.getTime (js/Date.)) })
          controls (atom { :theta 0 :thrust 0 })]
      (do
        ;(intro-screen canvas)
        (draw canvas @state controls)
        (js/setInterval #(do
                          (sim state @controls)
                          (draw canvas @state controls)) 1)
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