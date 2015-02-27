(ns numerics.runge-kutta)

(def rk4-tableau { :c [0 0.5 0.5 1.0]
                  :a [[]
                      [0.5]
                      [0.0 0.5]
                      [0.0 0.0 1.0]]
                  :b [(/ 1.0 6.0) (/ 1.0 3.0) (/ 1.0 3.0) (/ 1.0 6.0)] })

(defn dot [u v] (reduce + (map * u v)))
(defn scale [s v] (map #(* s %) v))

(defn ks[f ic h { :keys [a c]}]
  (let [fty (apply juxt f)]
    (loop [k [] ai a ci c]
    (if (= (count c) (count k))
      k
      (let [[tn & yn] ic
            t (+ tn (* (first ci) h))
            y (map + yn (map (fn [k] (* h (reduce + (map #(* % k) (first ai))))) (or (peek k) (repeat 0))))
            ty (into [t] y)]
        (recur (conj k (fty ty)) (rest ai) (rest ci)))))))

;Note - for adaptive RK, just do two deltas inside of here
(defn rk-step [f ic h { b :b :as tableau }]
  (let [k (ks f ic h tableau)
        deltas (apply map + (map scale b k))
        [tn & yn] ic]
    (into [(+ tn h)] (map #(-> %1 (* h) (+ %2)) deltas yn))))

;(def c [0 0.5 0.5 1.0])
;(def a [[]
;        [0.5]
;        [0.0 0.5]
;        [0.0 0.0 1.0]])
;(def b [(/ 1.0 6.0) (/ 1.0 3.0) (/ 1.0 3.0) (/ 1.0 6.0)])
;
;(def h 0.5)
;(def ic [0 4 6])
;(defn f [[_ y1 _]] (* -0.5 y1))
;(defn g [[_ y1 y2]] (- 4.0 (* 0.3 y2) (* 0.1 y1)))
;(def fg (juxt f g))
;
;(def k0 (let [[tn & yn] ic
;              t (+ tn (* (c 0) h))
;              y (map + yn (map (fn [k] (* h (reduce + (map #(* % k) (a 0))))) [0 0]))]
;          (fg (into [t] y))))
;
;(prn k0)
;
;(def k1 (let [[tn & yn] ic
;              t (+ tn (* (c 1) h))
;              y (map + yn (map (fn [k] (* h (reduce + (map #(* % k) (a 1))))) k0))]
;          (fg (into [t] y))))
;
;(prn k1)
;
;(def k2 (let [[tn & yn] ic
;              t (+ tn (* (c 2) h))
;              y (map + yn (map (fn [k] (* h (reduce + (map #(* % k) (a 2))))) k1))]
;          (fg (into [t] y))))
;
;(prn k2)
;
;(def k3 (let [[tn & yn] ic
;              t (+ tn (* (c 3) h))
;              y (map + yn (map (fn [k] (* h (reduce + (map #(* % k) (a 3))))) k2))]
;          (fg (into [t] y))))
;
;(prn k3)
