(ns numerics.rk4a
  (:require [clojure.pprint]))

(def rk4 { :c [0 0.5 0.5 1.0]
          :a [[]
              [0.5]
              [0.0 0.5]
              [0.0 0.0 1.0]]
          :b [(/ 1.0 6.0) (/ 1.0 3.0) (/ 1.0 3.0) (/ 1.0 6.0)] })
(def c [0 0.5 0.5 1.0])
(def a [[]
        [0.5]
        [0.0 0.5]
        [0.0 0.0 1.0]])
(def b [(/ 1.0 6.0) (/ 1.0 3.0) (/ 1.0 3.0) (/ 1.0 6.0)])

(defn dot [u v] (reduce + (map * u v)))

(defn ks[f h ic]
  (loop [k [] ai a ci c]
    (if (= (count c) (count k)) k
      (let [deltas [(* h (first ci)) (* h (dot (first ai) k))]
            fc (map + ic deltas)]
        (recur (conj k (f fc)) (rest ai) (rest ci))))))

(defn rk-step [f h ic]
  (let [k (ks f h ic)
        deltas [h (* h (dot b k))]]
    (vec (map + ic deltas))))

(defn f [[t y]] (* -2 t y y))
(def ic [0 1])
(def x (partial rk-step f 0.1))

(clojure.pprint/pprint (take 21 (iterate x ic)))
