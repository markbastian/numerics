(ns numerics.runge-kutta)

(def rk4-tableau { :c [0 0.5 0.5 1.0]
                  :a [[]
                      [0.5]
                      [0.0 0.5]
                      [0.0 0.0 1.0]]
                  :b [(/ 1.0 6.0) (/ 1.0 3.0) (/ 1.0 3.0) (/ 1.0 6.0)] })

(defn dot [u v] (reduce + (map * u v)))

(defn ks[f ic h { :keys [a c]}]
  (loop [k [] ai a ci c]
    (if (= (count c) (count k))
      k
      (let [deltas [(* h (first ci)) (* h (dot (first ai) k))]
            fc (map + ic deltas)]
        (recur (conj k (f fc)) (rest ai) (rest ci))))))

;Note - for adaptive RK, just do two deltas inside of here
(defn rk-step [f ic h { b :b :as tableau }]
  (let [k (ks f ic h tableau)
        deltas [h (* h (dot b k))]]
    (vec (map + ic deltas))))

(def ic [0 4 6])
(defn f [[_ y1 _]] (* -0.5 y1))
(defn g [[_ y1 y2]] (- 4.0 (* 0.3 y2) (* 0.1 y1)))

(prn (f ic))
(prn (g ic))

(prn (f [0.25 3.5 6.45]))
(prn (g [0.25 3.5 6.45]))