(ns numerics.runge-kutta
  (:require [numerics.tableaus :as tableaus]))

(defn ki [f [tn & yn] dt a c k]
  (let [dy (map #(* dt (reduce + (map * a %))) k)]
    ((apply juxt f) (into [(+ tn (* dt c))] (map + yn dy)))))

(defn ks [f ic dt { :keys [a c] }]
  (loop [ks (repeat (count f) []) ai a ci c]
    (if-not (first ci)
      ks
      (recur
        (map conj ks (ki f ic dt (first ai) (first ci) ks))
        (rest ai)
        (rest ci)))))

(defn y-step [k [tn & yn] dt b]
  (let [deltas (map #(reduce + (map * b %)) k)]
    (into [(+ tn dt)] (map #(-> %1 (* dt) (+ %2)) deltas yn))))

(defn rk-step [f ic dt { :keys [b] :as tableau}]
  (y-step (ks f ic dt tableau) ic dt b))

(defn adaptive-step [f ic dt tol { :keys [b b*] :as tableau}]
  (let [[y y*] (map (partial y-step (ks f ic dt tableau) ic dt) [ b b*])
        error-estimate (->> (map - y y*) (map #(* % %)) (reduce +) Math/sqrt)]
    error-estimate))

(defn f [[x y]] (- (* 4.0 (Math/exp (* 0.8 x))) (* 0.5 y)))


;(def fks (ks [f] [0 2] 2 tableaus/cash-karp))
;(prn fks)
;(prn (rk-step [f] [0 2] 2 tableaus/cash-karp))
(prn (adaptive-step [f] [0 2] 2 0.1 tableaus/cash-karp))