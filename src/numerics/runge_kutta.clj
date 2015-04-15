(ns numerics.runge-kutta
  (:require [numerics.tableaus :as tableaus]))

(defmacro ? "Print a form and its value"
  [& rest]
  `(doto ~rest (->> (str '~rest " -> ") prn)))

(defn scale [s v] (map #(* s %) v))

;;This gives incorrect answers for cash-karp
(defn ks[f [tn & yn] dt { :keys [a c]}]
  (let [fty (apply juxt f)]
    (loop [k [] ai a ci c]
    (if (= (count c) (count k))
      k
      (let [t (+ tn (* (first ci) dt))
            ks (or (peek k) (repeat 0))
            y (vec (map + yn (map (fn [k] (* dt (reduce + (map #(* % k) (first ai))))) ks)))]
        (recur (conj k (fty (into [t] y))) (rest ai) (rest ci)))))))

;Note - for adaptive RK, just do two deltas inside of here
(defn rk-step [f [tn & yn :as ic] dt { :keys [b] :as tableau}]
  (let [k (ks f ic dt tableau)
        deltas (apply map + (map scale b k))]
    (into [(+ tn dt)] (map #(-> %1 (* dt) (+ %2)) deltas yn))))

(defn adaptive-step [f [tn & yn :as ic] dt tol { :keys [b b*] :as tableau}]
  (let [k (ks f ic dt tableau)
        d (apply map + (map scale b k))
        y (into [(+ tn dt)] (map #(-> %1 (* dt) (+ %2)) d yn))
        d* (apply map + (map scale b* k))
        y* (into [(+ tn dt)] (map #(-> %1 (* dt) (+ %2)) d* yn))
        error-estimate (Math/abs (- y y*))]
    error-estimate))

;(defn adaptive-step [f [tn & yn :as ic] dt tol { :keys [b b*] :as tableau}]
;  (let [k (ks f ic dt tableau)
;        d (apply map + (map scale b k))
;        y (into [(+ tn dt)] (map #(-> %1 (* dt) (+ %2)) d yn))
;        d* (apply map + (map scale b* k))
;        y* (into [(+ tn dt)] (map #(-> %1 (* dt) (+ %2)) d* yn))
;        error-estimate (Math/abs (- y y*))]
;    (if (<= error-estimate tol)
;      [(* dt (Math/pow (/ tol error-estimate) 0.2)) y]
;      ;Note that this needs a recompute
;      [(* dt (Math/pow (/ tol error-estimate) 0.25)) y])))

;;;; 1 D
(defn ki [f tn yn dt a c k]
  (f [(+ tn (* dt c))
      (+ yn (* dt (reduce + 0 (for [j (range (count k))] (* (a j) (get k j 0))))))]))

(defn f [[x y]] (- (* 4.0 (Math/exp (* 0.8 x))) (* 0.5 y)))
(prn (ks [f] [0 2] 0.5 tableaus/classic-fourth-order))
(prn (rk-step [f] [0 2] 0.5 tableaus/classic-fourth-order))

;;This is wrong and needs fixing.
(prn (ks [f] [0 2] 2.0 tableaus/cash-karp))

(def c (tableaus/cash-karp :c))
(def a (tableaus/cash-karp :a))

(def tn 0.0)
(def yn 2.0)
(def dt 2.0)
;(def ks (or (peek k) (repeat 0)))
;(def y (vec (map + yn (map (fn [k] (* dt (reduce + (map #(* % k) (first ai))))) ks))))

;; http://en.wikipedia.org/wiki/List_of_Runge–Kutta_methods
;;This approach is probably right (well, there's no recursion).
;; Currently ki is not being accumulated, though.
;; kj is going to count up to s. At each loop they must be summed. IDK if this happens above.
(prn "YYYYYYYYY")
(def kk (loop [ks [] ai a ci c]
  (if-not (first ci)
    ks
    (recur (conj ks (ki f tn yn dt (first ai) (first ci) ks)) (rest ai) (rest ci)))))

(prn kk)