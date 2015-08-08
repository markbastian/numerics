(ns vecmath.vec)

(defn dot [u v](reduce + (map * u v)))
(defn cross [[ux uy uz] [vx vy vz]]
       (if (and uz vz)
         [(- (* uy vz) (* uz vy))
          (- (* uz vx) (* ux vz))
          (- (* ux vy) (* uy vx))]
         (- (* ux vy) (* uy vx))))
(defn add [u v](mapv + u v))
(defn sub [u v](mapv - u v))
(defn scale[u s](mapv #(* s %) u))
(defn mag [u] (Math/sqrt (dot u u)))
(defn normalize [u] (scale u (/ 1.0 (mag u))))
(defn negate[u](scale u -1))
(defn dcos[v directions](mapv #(dot v %) directions))
(defn lerp [u v t] (add u (scale (sub v u) t)))

(def origin [0 0 0])
(def x-axis [1 0 0])
(def y-axis [0 1 0])
(def z-axis [0 0 1])

;(defprotocol IVecLike
;  (dot [u v] "Dot product of two vectors")
;  (cross [u v] "Cross product of two vectors")
;  (add [u v])
;  (sub [u v])
;  (scale [u s]))
;
;(extend-protocol IVecLike
;  #?@(:cljs [cljs.core.PersistentArrayMap]
;      :clj [clojure.lang.PersistentArrayMap])
;  (dot [{ ux :x uy :y uz :z } { vx :x vy :y vz :z }]
;    (+ (* ux vx) (* uy vy) (* (or uz 0) (or vz 0))))
;  (cross [{ ux :x uy :y uz :z } { vx :x vy :y vz :z }]
;    (if (and uz vz)
;      {:x (- (* uy vz) (* uz vy))
;       :y (- (* uz vx) (* ux vz))
;       :z (- (* ux vy) (* uy vx))}
;      {:z (- (* ux vy) (* uy vx))} ))
;  (add [u v](merge-with + u v))
;  (sub [u v](merge-with - u v))
;  (scale[u s](zipmap (keys u) (map #(* s %) (vals u))))
;  #?@(:cljs [cljs.core.PersistentVector]
;      :clj [clojure.lang.PersistentVector])
;  (dot [u v](reduce + (map * u v)))
;  (cross [[ux uy uz] [vx vy vz]]
;    (if (and uz vz)
;      [(- (* uy vz) (* uz vy))
;       (- (* uz vx) (* ux vz))
;       (- (* ux vy) (* uy vx))]
;      (- (* ux vy) (* uy vx))))
;  (add [u v](mapv + u v))
;  (sub [u v](mapv - u v))
;  (scale[u s](mapv #(* s %) u)))



;(def origin {:x 0 :y 0 :z 0 })
;(def x-axis {:x 1 :y 0 :z 0 })
;(def y-axis {:x 0 :y 1 :z 0 })
;(def z-axis {:x 0 :y 0 :z 1 })