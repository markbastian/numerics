(ns numerics.ex-25-7
  (:require [clojure.test :refer :all]
            [numerics.runge-kutta :as rk]
            [numerics.tableaus :as tableaus]))

(deftest example-25-7a
  (testing "Example 25.7a, page 702 of Chapra and Canale, 3rd Ed."
    (let [f (fn [[x _]] (reduce #(+ %2 (* x %1)) [-2.0 12.0 -20.0 8.5]))
          computed (rk/rk-step [f] [0 1] 0.5 tableaus/classic-fourth-order)
          expected [0.5 3.21875]]
      (is (<= (Math/abs (reduce + (map - computed expected))) 1E-15)))))

(defn f [[x y]](- (* 4.0 (Math/exp (* 0.8 x))) (* 0.5 y)))

(deftest example-25-7b
  (testing "Example 25.7b, page 702 of Chapra and Canale, 3rd Ed."
    (let [computed (rk/rk-step [f] [0 2] 0.5 tableaus/classic-fourth-order)
          expected [0.5 3.751699]]
      (is (<= (Math/abs (reduce + (map - computed expected))) 1E-6)))))

(deftest example-25-12
  (testing "Example 25.12, page 712 of Chapra and Canale, 3rd Ed."
    (let [dt 2.0
          computed (rk/rk-step [f] [0 2] dt tableaus/classic-fourth-order)
          step1 (rk/rk-step [f] [0 2] 1 tableaus/classic-fourth-order)
          step2 (rk/rk-step [f] step1 1 tableaus/classic-fourth-order)
          err (/ (- (second step2) (second computed)) 15.0)
          expected -0.01622]
      (is (<= (Math/abs (- err expected)) 1E-5)))))

(deftest example-25-13
  (testing "Example 25.13, page 713 of Chapra and Canale, 3rd Ed."
    (let [expected [3 3.908511 4.359883 6.832587 12.09831 10.13237]
          ic [0 2]
          dt 2.0
          fks (rk/ks [f] ic dt tableaus/cash-karp)
          diffs (map - (first fks) expected)
          err (Math/sqrt (reduce + (map * diffs diffs)))]
      (is (<= err 1E-5)))))







