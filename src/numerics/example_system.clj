(ns numerics.example-system
  (:require [clojure.pprint]
            [numerics.runge-kutta :as rk]))

;Example 25.10 of Chapra and Canale
(def ic [0 4 6])
(defn f [[_ y1 _]] (* -0.5 y1))
(defn g [[_ y1 y2]] (- 4.0 (* 0.3 y2) (* 0.1 y1)))

(prn (f ic))
(prn (g ic))

(prn (rk/rk-step f ic 0.5 rk/rk4-tableau))
(prn (rk/rk-step g ic 0.5 rk/rk4-tableau))

;(def x #(rk/rk-step f % 0.1 rk/rk4-tableau))

;(clojure.pprint/pprint (take 21 (iterate x ic)))