(ns numerics.roots)

(defn early-exit [x fx] (when (== 0 fx) [x fx]))

(defn bracket [step-func f lo hi tol]
  (let [flo (f lo) fhi (f hi)]
    (or (early-exit lo flo) (early-exit hi fhi)
        (when (neg? (* flo fhi))
          (loop [lo lo flo flo hi hi fhi fhi]
            (let [mid (step-func lo flo hi fhi) fmid (f mid)]
              (cond
                (== 0.0 fmid) [mid fmid]
                (<= (Math/abs (- lo hi)) tol)
                (min-key #(-> % second Math/abs) [lo flo] [mid fmid] [hi fhi])
                (neg? (* flo fmid)) (recur lo flo mid fmid)
                :else (recur mid fmid hi fhi))))))))

(def bisect (partial bracket (fn [lo _ hi _](* 0.5 (+ lo hi)))))
(def false-pos (partial bracket (fn [lo flo hi fhi](- hi (/ (* fhi (- hi lo)) (- fhi flo))))))

(prn (bisect #(+ 0.1 (Math/sin %)) -1 1 1E-10))
(prn (bisect #(Math/sin %) 0 1 1E-10))
(prn (bisect #(Math/sin %) 0 0 1E-10))
(prn (bisect #(Math/sin %) -3 0 1E-10))

(prn (false-pos #(+ 0.1 (Math/sin %)) -1 1 1E-10))