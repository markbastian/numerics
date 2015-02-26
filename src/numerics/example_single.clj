(ns numerics.example-single
  (:require [clojure.pprint]
            [numerics.runge-kutta :as rk]))

;IVP Problem, page 540 of Blanchard, Devaney, and Hall
(defn f [[t y]] (* -2 t y y))
(def ic [0 1])
(def x #(rk/rk-step f % 0.1 rk/rk4-tableau))

(clojure.pprint/pprint (take 21 (iterate x ic)))
