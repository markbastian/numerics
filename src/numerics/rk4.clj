(ns numerics.rk4)

;To make this more generic, reimplement this as a nested map. Different
;tableaus would be different maps. They'd just get passed to step, etc.
(def c [0 0.5 0.5 1.0])
(def a [[]
        [0.5]
        [0.0 0.5]
        [0.0 0.0 1.0]])
(def b [(/ 1.0 6.0) (/ 1.0 3.0) (/ 1.0 3.0) (/ 1.0 6.0)])

(defn ak [a k] (map #(reduce + (map * a %)) k))
;(defn ak [a k] (vec (map #(reduce + (map * a %)) k)))
;(defn ak [a k] (reduce + (map * a k)))

(defn ki [f tn yn h]
  (loop [k [[]] i (count k)]
    (if (= i (count a))
    k
    (let [t (+ tn (* (c i) h))
          dy (map #(* % h) (ak (a i) k))
          y (vec (map + yn dy))]
      (recur (conj k (f t y)) (inc i))))))

(defn bk [b k] (map #(reduce + (map * b %)) k))

;https://ece.uwaterloo.ca/~dwharder/NumericalAnalysis/14IVPs/rk/examples.html
(defn step [f t y h]
  (let [k (ki f t y h)
        d (map #(* h %) (bk b k))]
    (vec (map + y (repeat d)))))

;Example. To test general case, return a vector.
(defn yp [t y] [(- 1.0 (* t (y 0)))])
;To adjust for this modify k access - maybe line 19
;(defn yp [t y] [(- 1.0 (* t (y 0)))])
(def y0 [1.0])
(def t0 0.0)
(def h 1.0)
(println "f(" t0 ", " y0 ") = " (yp t0 y0))
(println "ki: " (ki yp t0 y0 h))
(println "bk: " (reduce + (bk b (ki yp t0 y0 h))))

(def ks (ki yp t0 y0 h))
(def bs (bk b (ki yp t0 y0 h)))

;;what I want in the 2x case....
(def w [[-2 1.8]
        [-1.75 1.715]
        [-1.78125 1.715125]
        [-1.554688 1.631794]])

;;For the simple case, we should get...
(def ans [[1.0]
          [0.25]
          [0.4375]
          [-0.4375]])

(def ak1 (reduce + (map * (a 0) [])))
(def t1 (+ t0 (* (c 0) h)))
(def dy1 (+ (* ak1 h) (y0 0)))
(def k1 (into [] (yp t1 [dy1])))

(def ak2 (reduce + (map * (a 1) k1)))
(def t2 (+ t0 (* (c 1) h)))
(def dy2 (+ (* ak2 h) (y0 0)))
(def k2 (into k1 (yp t2 [dy2])))

(def ak3 (reduce + (map * (a 2) k2)))
(def t3 (+ t0 (* (c 2) h)))
(def dy3 (+ (* ak3 h) (y0 0)))
(def k3 (into k2 (yp t3 [dy3])))

(def ak4 (reduce + (map * (a 3) k3)))
(def t4 (+ t0 (* (c 3) h)))
(def dy4 (+ (* ak4 h) (y0 0)))
(def k4 (into k3 (yp t4 [dy4])))

;;System of equations
(defn f [t y](* -0.5 (y 0)))
(defn g [t y](- 4.0 (* 0.3 (y 1)) (* 0.1 (y 0))))

(def sys [f g])
(def ti 0.0)
(def yy [4.0 6.0])
(f ti yy)
(g ti yy)

(def kk (vec (repeat (count sys) [])))
(apply #(map * %1 %2) kk)

(def ak1a (repeat (count sys) 0))
(def t1a (+ t0 (* (c 0) h)))
(def dy1a (map + yy (map #(* % h) [0 0])))
(def k1a (conj [] (vec (map #(% t1a yy) sys))))

;; (a 2)

;; (def ak2a (map #(reduce + (map * (a 1) %)) k1a))
;; (def t2a (+ t0 (* (c 0) h)))
;; (def dy2a (map + y0 (map #(* h %) ak2a)))
;; (def k2a (into [] (yp t1 (vec dy2a))))
