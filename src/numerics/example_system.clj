(ns numerics.example-system
  (:require [clojure.pprint :as pprint]
            [numerics.tableaus :as tableaus]
            [numerics.runge-kutta :as rk]))

;Example 25.10 of Chapra and Canale
(def ic [0 4 6])
(defn f [[_ y1 _]] (* -0.5 y1))
(defn g [[_ y1 y2]] (- 4.0 (* 0.3 y2) (* 0.1 y1)))

(prn (rk/ks [f g] ic 0.5 tableaus/classic-fourth-order))
(prn (rk/rk-step [f g] ic 0.5 tableaus/classic-fourth-order))

(def steps (take 10 (iterate #(rk/rk-step [f g] % 0.5 tableaus/classic-fourth-order) ic)))
(pprint/pprint (last steps))

;This just uses the forward step and isn't adaptive
(def steps2 (take 10 (iterate #(rk/rk-step [f g] % 0.5 tableaus/cash-karp) ic)))
(pprint/pprint (last steps2))
