(ns numerics.linalg)

(set! *warn-on-reflection* true)
(set! *unchecked-math* :warn-on-boxed)

(def M [[1.0 2.4 3.2 4.0]
        [0.5 1.2 5.4 0.3]
        [0.4 2 0.4 5.4]
        [0.4 3.2 1.2 5.6]])

(def N [[1.1 2.1]
        [9.4 4.3]
        [1.2 5.6]
        [6.4 1.4]])

(defn mmul [A B] (vec (for [i (range (count A))]
  (vec (for [j (range (count (B i)))]
    (reduce + (map * (map #(% j) B) (A i))))))))

(defn fast-dot [^doubles Ai ^doubles Bi]
  (loop [c (transient []) j 0]
    (if (= j (count Ai))
      (persistent! c)
      (recur (conj! c (+ ^double (Ai j) ^double (Bi j))) (inc j)))))

(defn super-fast-madd [A B]
  (loop [r (transient []) i 0]
    (if (= i (count A))
      (persistent! r)
      (recur
        (conj! r (fast-dot (A i) (B i))) (inc i)))))

(defn fast-madd [A B]
  (vec (for [i (range (count A))
             :let [Ai ^doubles (A i) Bi ^doubles (B i)]]
         (vec (for [j (range (count Ai))]
                (+ ^double (Ai j) ^double (Bi j)))))))

(defn canonical-madd [A B] (mapv #(mapv + %1 %2) A B))

(defn madd [A B]
  (vec (for [i (range (count A))]
         (vec (for [j (range (count (A i)))]
                
                (+ (or (get-in A [i j]) 0.0)
                   (or (get-in B [i j]) 0.0)))))))

;(def n 10000)
;(time (dotimes [_ n] (super-fast-madd M M)))
;(time (dotimes [_ n] (fast-madd M M)))
;(time (dotimes [_ n] (canonical-madd M M)))
;(time (dotimes [_ n] (madd M M)))
;
;(time (super-fast-madd M M))
;(time (fast-madd M M))
;(time (canonical-madd M M))
;(time (madd M M))
