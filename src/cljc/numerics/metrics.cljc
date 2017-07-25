(ns numerics.metrics)

(defn abs-diff [a b] (Math/abs (- a b)))

(defn pct-diff [a b]
  (let [avg (* 0.5 (+ a b))]
    (if (zero? avg)
      (when (== a b 0.0) 0.0)
      (Math/abs (/ (- a b) avg 0.01)))))
