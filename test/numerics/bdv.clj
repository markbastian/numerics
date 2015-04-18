(ns numerics.bdv "Examples from Differential Equations, Preliminary Edition, Blanchard, Devaney, & Hall (1996)"
  (:require [clojure.test :refer :all]
            [numerics.runge-kutta :as rk]
            [numerics.tableaus :as tableaus]))

(deftest IVP540
  (testing "IVP Example, p. 540-542"
    (let [f (fn [[t y]] (* -2 t y y))
          ic [0 1]
          x #(rk/rk-step [f] % 0.1 tableaus/classic-fourth-order)
          ans (vec (take 21 (iterate x ic)))
          rms (fn [i ex] (->> (map - (ans i) ex) (map #(* % %)) (reduce +) Math/sqrt))]
      (is (and
            (<= (rms 0 [0 1]) 1E-6)
            (<= (rms 1 [0.1 0.990099]) 1E-6)
            (<= (rms 2 [0.2 0.961538]) 1E-6)
            (<= (rms 3 [0.3 0.917431]) 1E-6)
            (<= (rms 19 [1.9 0.21692]) 1E-6)
            (<= (rms 20 [2.0 0.200001]) 1E-6))))))