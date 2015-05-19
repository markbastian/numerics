(ns numerics.canvasui
  (:require [numerics.tableaus :as tableaus]
            [numerics.runge-kutta :as rk]
            [numerics.canvas-common :as cc]))

(defn draw [canvas steps x y]
  (let [ctx (.getContext canvas "2d")]
    (doto ctx
      (-> .-fillStyle (set! "#000000"))
      (.fillRect 0 0 (.-width canvas) (.-height canvas))
      (-> .-strokeStyle (set! "#333333"))
      (cc/draw-grid (.-width canvas) (.-height canvas) x y)
      (-> .-strokeStyle (set! "#00FF00"))
      (.beginPath)
      (cc/draw-points steps (.-width canvas) (.-height canvas) x y)
      (.stroke))))

(defn sim [initial-prey
           initial-predators
           reproduction-rate
           predation-rate
           growth-rate
           death-rate]
  (let [dt 0.05
        ic [0 initial-prey initial-predators]
        dr (fn [[_ R F]] (- (* reproduction-rate R) (* predation-rate R F)))
        df (fn [[_ R F]] (- (* growth-rate R F) (* death-rate F)))]
    (take 300 (iterate #(rk/rk-step [dr df] % dt tableaus/classic-fourth-order) ic))))

(defn parametric-value [slider range] (* range(/ (.-value slider) (.-max slider))))

(defn ^:export init[canvas]
  (set!
  (.-onload js/window)
  (when (and js/document (.-getElementById js/document))
    (let [prey-population-slider (.getElementById js/document "prey-population-slider")
          predator-population-slider (.getElementById js/document "predator-population-slider")
          reproduction-slider (.getElementById js/document "reproduction-rate-slider")
          predation-slider (.getElementById js/document "predation-rate-slider")
          growth-slider (.getElementById js/document "growth-rate-slider")
          death-slider (.getElementById js/document "death-rate-slider")
          draw-func #(draw canvas (sim
                                    (inc (parametric-value prey-population-slider 3.0))
                                    (inc (parametric-value predator-population-slider 3.0))
                                    (parametric-value reproduction-slider 3.0)
                                    (parametric-value predation-slider 3.0)
                                    (parametric-value growth-slider 3.0)
                                    (parametric-value death-slider 3.0)) 10 10)]
      (do
        (doseq [slider [prey-population-slider predator-population-slider
                        reproduction-slider predation-slider growth-slider death-slider]]
          (set! (.-oninput slider) draw-func))
        (draw-func))))))