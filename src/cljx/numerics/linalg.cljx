(ns numerics.linalg)

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

(defn madd [A B] (vec (for [i (range (count A))]
  (vec (for [j (range (count (A i)))]
    (+ (or (get-in A [i j]) 0.0) (or (get-in B [i j]) 0.0)))))))


(mmul M N)

(madd M M)

(madd M N)

(mmul [[0 0 0 0]] [[0] [0] [0] [0]])