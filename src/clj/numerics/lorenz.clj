(ns numerics.lorenz
  (:require [numerics.runge-kutta :as rk]
            [numerics.tableaus :as tableaus]
            [clojure.pprint :as pprint]
            [clojure.string :as cs]))

(def sigma 10.0)
(def beta (/ 8.0 3.0))
(def rho 28.0)
(def ic [0 0 1 0])

(defn dx [[_ x y _]] (* sigma (- y x)))
(defn dy [[_ x y z]] (- (* rho x) y (* x z)))
(defn dz [[_ x y z]] (- (* x y) (* beta z)))

(def steps (take 100 (iterate #(rk/rk-step [dx dy dz] % 0.1 tableaus/classic-fourth-order) ic)))

(spit "lorenz.csv" (cs/join "\n" (map (partial cs/join ",") steps)))
