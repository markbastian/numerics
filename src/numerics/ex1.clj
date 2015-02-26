(ns numerics.ex1
  (:require [numerics.rk4 :as rk4]
            [clojure.pprint :as pprint]))

;;System of equations
(defn f [t y](* -0.5 (y 0)))
(defn g [t y](- 4.0 (* 0.3 (y 1)) (* 0.1 (y 0))))

(def sys [f g])
(def ti 0.0)
(def yi [4.0 6.0])
(def h 0.5)

(def a rk4/a)
(def b rk4/b)
(def c rk4/c)

(defn tn [ti c h] (+ ti (* c h)))
(defn ak [a k](reduce + (map #(* k %) a)))
(defn ydelta [a k h] (map #(* h %) (map #(ak a %) k)))
(defn yn [yi a k h] (vec (map + yi (ydelta a k h))))

(defn ki [i ks ko]
  (let[t (tn ti (c i) h)
       y (yn yi (a i) ks h)]
    (conj ko (map #(% t y) sys))))

(defn kis [sys a]
  (loop[i 0
        k (ki 0 (repeat (count sys) 0) [])]
      (if (= (count k) (count a))
        k
        (recur (inc i) (ki (inc i) (k i) k)))))

(def kk (kis sys a))

(map #(map * (repeat 2) %) kk)


;;what I want in the 2x case....
(def ks [[-2 1.8]
        [-1.75 1.715]
        [-1.78125 1.715125]
        [-1.554688 1.631794]])




