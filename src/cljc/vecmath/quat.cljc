(ns vecmath.quat
  (:require [vecmath.vec :as vec]))

(defn mul "Quaternion multiplication"
  ([{ us :s uv :v } { vs :s vv :v }]
   {:s (- (* us vs) (vec/dot uv vv))
    :v (reduce vec/add [(vec/scale vv us) (vec/scale uv vs) (vec/cross uv vv)])})
  ([u v & more] (reduce mul (mul u v) more)))

(defn invert [q] (update-in q [:v] vec/scale -1))

(defn rot [theta axis]
  (let [t (* 0.5 theta)]
    {:s (Math/cos t) :v (vec/scale axis (Math/sin t))}))

(defn rotx [theta] (rot theta vec/x-axis))
(defn roty [theta] (rot theta vec/y-axis))
(defn rotz [theta] (rot theta vec/z-axis))

(defn xform ([q p] (:v (mul (mul q {:s 0.0 :v p}) (invert q)))))

(def unit-quaternion {:s 1.0 :v vec/origin})
