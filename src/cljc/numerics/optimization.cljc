(ns numerics.optimization
  ;(:require [clojure.pprint :as pp])
  )

(def phi (* 0.5 (- (Math/sqrt 5.0) 1.0)))

(defn f [x] (- (* 2.0 (Math/sin x)) (* x x 0.1)))
(def xl 0.0)
(def xu 4.0)

(defn ea [[[xl _] _ _ [xu _] _ [xo _]]]
  (let [den (if (zero? xo) xo xo)]
    (* 100.0 (- 1.0 phi) (/ (- xu xl) den))))

(defn golden-step [obj f [l [x2 fx2 :as t] [x1 fx1 :as o] u d]]
  (let [d (* phi d)]
    (if ((if (= :maximize obj) > <) fx1 fx2)
      (let [x (+ x2 d)]
        [t o [x (f x)] u d o])
      (let [x (- x1 d)]
        [l [x (f x)] t o d t]))))

(def ic
  (let [d (* phi (- xu xl)) x1 (+ xl d) x2 (- xu d)]
    [[xl (f xl)] [x2 (f x2)] [x1 (f x1)] [xu (f xl)] d]))

(some
  (fn [[[l _] _ _ [u _] _ opt]] (when (<= (- u l) 1E-12) opt))
  (iterate (partial golden-step :maximize f) ic))

(ea (nth (iterate (partial golden-step :maximize f) ic) 20))

(defn quad-step [f [[x0 fx0] [x1 fx1] [x2 fx2]]]
  (let [a (map * [fx0 fx1 fx2] [(- x1 x2) (- x2 x0) (- x0 x1)])
        num (reduce + (map * a [(+ x1 x2) (+ x2 x0) (+ x0 x1)]))
        x3 (/ num (reduce + a) 2.0)]
    (if (> x3 x1)
      [[x1 fx1] [x3 (f x3)] [x2 fx2]]
      [[x0 fx0] [x3 (f x3)] [x1 fx1]])))

(take 5 (iterate (partial quad-step f) [[0 (f 0)] [1 (f 1)] [4 (f 4)]]))