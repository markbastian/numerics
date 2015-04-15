(ns numerics.rkf-error-estimate
  (:require [numerics.runge-kutta :as rk]
            [numerics.tableaus :as tableaus]))


(def dt 2.0)
(def ic [0 2])
(defn dy [[t y]] (- (* 4.0 (Math/exp (* 0.8 t))) (* 0.5 y)))

(prn (rk/rk-step [dy] ic dt tableaus/classic-fourth-order))
;(prn (rk/adaptive-step [dy] ic dt 0.01 tableaus/cash-karp))
