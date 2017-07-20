(ns numerics.madd-checks
  (:require [numerics.madd :refer :all]))

(def M [[1.0 2.4 3.2 4.0]
        [0.5 1.2 5.4 0.3]
        [0.4 2 0.4 5.4]
        [0.4 3.2 1.2 5.6]])

(def n 1000000)
(prn (str "super-fast-madd x " n))
(time (dotimes [_ n] (super-fast-madd M M)))

(prn (str "fast-madd x " n))
(time (dotimes [_ n] (fast-madd M M)))

(prn (str "idiomatic-madd x " n))
(time (dotimes [_ n] (idiomatic-madd M M)))

(prn (str "madd x " n))
(time (dotimes [_ n] (madd M M)))

;(time (super-fast-madd M M))
;(time (fast-madd M M))
;(time (idiomatic-madd M M))
;(time (madd M M))