(ns numerics.mmult)

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

(defn cols [A ^double Aik ^doubles Bk]
  (loop [c [] j 0]
    (if (= j (count A))
      c
      (recur (conj c (* Aik ^double (Bk j))) (inc j)))))

(defn rows [^double A B ^doubles Bk k]
  (loop [c [] i 0]
    (if (= i (count B))
      c
      (recur (conj c (cols A (get-in A [i k]) Bk)) (inc i)))))

(defn fast-mmul [A B]
  (vec (for [k (range (count B))]
         (rows A B (B k) k))))

(defn mmul [A B]
  (vec (for [i (range (count A))]
         (vec (for [j (range (count (B i)))]
                (reduce + (map * (map #(% j) B) (A i))))))))

(prn (mmul M N))
;(prn (fast-mmul M N))

(def n 10000)
(prn (time (dotimes [_ n] (mmul M M))))
