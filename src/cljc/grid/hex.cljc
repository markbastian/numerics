(ns grid.hex)

;http://www.redblobgames.com/grids/hexagons/

(defn ->axial [[x _ z]] [x z])
(defn ->cube [[q r]]
  [q (-> q (+ r) -) r])

(defn neighbors [[i j]]
  (let [x ((juxt inc inc identity dec dec dec identity inc) i)
        y ((juxt identity inc inc inc identity dec dec dec) j)]
    (map vector x y)))

(defn hex-neighbors [[i j]]
  (let [x ((juxt inc inc identity dec dec identity) i)
        y ((juxt dec identity inc inc identity dec) j)
        z (map - (map + x y))]
    (map vector x y z)))

(defn cube-dist [a b]
  (apply max (map #(Math/abs (- %1 %2)) a b)))

(defn cube-lerp [a b t]
  (vec (map (fn [ax bx] (+ ax (* t (- bx ax)))) a b)))

(defn cube-round [h] 
  (let [r (vec (map #(Math/round %) h))
        df (map #(Math/abs (- %1 %2)) r h)
        i (first (apply max-key second (map-indexed vector df)))
        fix (- (- (reduce + r) (r i)))]
   (assoc r i fix)))

(defn line-to [f t] 
  (let [n (cube-dist f t)]
    (loop [i 1 coords [f]]
      (if (< n i)
        coords
        (recur (inc i) (conj coords (cube-round (cube-lerp f t (double (/ i n))))))))))

;(prn (hex-neighbors [0 0]))
;(prn (cube-dist [0 9 -9] [3 4 -7]))
;(prn (line-to [0 5 -5] [-5 2 3]))
;(prn (cube-dist [0 5 -5] [0 5 -5]))
;(prn (line-to [0 5 -5] [0 5 -5]))