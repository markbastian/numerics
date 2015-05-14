(ns numerics.roots)

(defn early-exit [xfx] (when (== 0 (second xfx)) xfx))

(defn bracket [step-func f bounds tol]
  (let [lu (map (juxt identity f) bounds)]
    (or (some identity (map early-exit lu))
        (when (neg? (apply * (map second lu)))
          (loop [[l u] lu]
            (let [m (step-func f l u)]
              (cond
                (early-exit m) m
                (<= (Math/abs (- (l 0) (u 0))) tol) (min-key #(-> % second Math/abs) l m u)
                (neg? (* (l 1) (m 1))) (recur [l m])
                :else (recur [m u]))))))))

(defn midpoint [f [xl _] [xh _]] ((juxt identity f) (* 0.5 (+ xl xh))))
(defn secant [f [xl fxl] [xh fxh]] ((juxt identity f) (- xh (/ (* fxh (- xh xl)) (- fxh fxl)))))

(def bisect (partial bracket midpoint))
(def false-pos (partial bracket secant))

(prn (bisect #(+ 0.1 (Math/sin %)) [-1 1] 1E-10))
(prn (bisect #(Math/sin %) [0.4 1] 1E-10))
(prn (bisect #(Math/sin %) [-1 1] 1E-10))
(prn (bisect #(Math/sin %) [0 1] 1E-10))
(prn (bisect #(Math/sin %) [0 0] 1E-10))
(prn (bisect #(Math/sin %) [-9 0] 1E-10))
(prn (false-pos #(Math/sin %) [-3 0] 1E-10))
(prn (false-pos #(+ 0.1 (Math/sin %)) [-1 1] 1E-10))
(prn (false-pos #(+ 0.1 (Math/tan %)) [-1 1] 1E-10))

(defn secant-step
  ([f x dx] (secant-step [f [x (f x)] [(+ x dx) (f (+ x dx))]]))
  ([[f [x0 fx0] [x1 fx1]]]
  (let[x2 (+ x1 (/ (* fx1 (- x1 x0)) (- fx1 fx0)))]
    [f [x1 fx1] [x2 (f x2)]])))

;(prn (secant-step (secant-step #(+ 0.1 (Math/sin %)) -1 1)))
