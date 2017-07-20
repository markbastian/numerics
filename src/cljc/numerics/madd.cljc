(ns numerics.madd
  (:require [no.disassemble :refer (disassemble)]))

(set! *warn-on-reflection* true)
(set! *unchecked-math* :warn-on-boxed)

(defn vector-add [^doubles A ^doubles B]
  (loop [v (transient []) i 0]
    (if (= i (count A))
      (persistent! v)
      (recur (conj! v (+ ^double (A i) ^double (B i))) (inc i)))))

(defn super-fast-madd [A B]
  (loop [v (transient []) i 0]
    (if (= i (count A))
      (persistent! v)
      (recur (conj! v (vector-add (A i) (B i))) (inc i)))))

(defn fast-madd [A B]
  (vec (for [i (range (count A))
             :let [Ai ^doubles (A i) Bi ^doubles (B i)]]
         (vec (for [j (range (count Ai))]
                (+ ^double (Ai j) ^double (Bi j)))))))

(defn idiomatic-madd [A B] (mapv #(mapv + %1 %2) A B))

(defn madd [A B]
  (vec (for [i (range (count A))]
         (vec (for [j (range (count (A i)))]
                (+ ^double (get-in A [i j] 0.0)
                   ^double (get-in B [i j] 0.0)))))))
