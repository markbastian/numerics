(ns numerics.integrals)

;http://www.mathstat.dal.ca/~tkolokol/classes/1500/romberg.pdf
(defn f [x] (/ 1.0 x))

(defn expand [f s]
  (letfn [(h [[[lo :as a] [hi :as b]]]
            (let [m (* 0.5 (+ lo hi))]
              [a [m (f m)]]))]
    (conj (vec (mapcat h (partition 2 1 s))) (peek s))))

(defn trapezoid-area [[[lo flo] [hi fhi]]]
  (* (- hi lo) (+ fhi flo) 0.5))

(defn fraz [s]
  (->> s (partition 2 1) (map trapezoid-area) (reduce +)))

(defn trapezoid [f lo hi]
  (->> [[lo (f lo)] [hi (f hi)]]
       (iterate (partial expand f))
       (map fraz)))

(let [[a & r] (split-at 5 (trapezoid f 1 2))]
  a)

(defn romberg-reduce [a]
  (let [n (count a)]
    (loop [s a i 1]
      (if (= i n)
        (first s)
        (let [k (Math/pow 4 i)
              f (fn [[a b]] (/ (- (* k b) a) (dec k)))]
          (recur (->> s (partition 2 1) (map f)) (inc i)))))))

(defn romberg [f lo hi n]
  (romberg-reduce (take n (trapezoid f lo hi))))

(defn bazfoo [[i s]]
  (let [k (Math/pow 4 i)
        f (fn [[a b]] (/ (- (* k b) a) (dec k)))]
    [(inc i) (->> s (partition 2 1) (map f))]))

(def s (trapezoid f 1 2))

(def x (map first (map second (iterate bazfoo [1 s]))))

;(romberg f 1 2 5)
;(map vector (take 20 x) (map (partial romberg f 1 2) (range 1 21)))