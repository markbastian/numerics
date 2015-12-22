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