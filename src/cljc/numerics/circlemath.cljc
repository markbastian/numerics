(ns numerics.circlemath)

(defn det2x2 [[[a b] [c d]]]
  (- (* a d) (* b c)))

(defn det3x3 [[[a b c] [d e f] [g h i]]]
  (+ (* a (- (* e i) (* f h)))
     (* b (- (* f g) (* d i)))
     (* c (- (* d h) (* e g)))))

(defn dot [u v] (reduce + (map * u v)))

(defn circumcircle [[ux uy :as u] [vx vy :as v] [wx wy :as w]]
  (let [a (det3x3 [[ux uy 1] [vx vy 1] [wx wy 1]])
        [uu vv ww] (map #(dot % %) [u v w])
        [bx by :as b] [(* -1 (det3x3 [[uu uy 1] [vv vy 1] [ww wy 1]]))
                       (det3x3 [[uu ux 1] [vv vx 1] [ww wx 1]])]
        c (* -1 (det3x3 [[uu ux uy] [vv vx vy] [ww wx wy]]))
        desc (- (dot b b) (* 4.0 a c))]
    {:cx (/ bx -2.0 a)
     :cy (/ by -2.0 a)
     :r (/ (Math/sqrt desc) 2.0 (Math/abs a))}))

