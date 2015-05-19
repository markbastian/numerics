(ns numerics.canvas-common)

(defn draw-grid [ctx w h x-max y-max]
  (let [steps 10]
    (doseq [i (range steps)]
      (do
        (.beginPath ctx)
        (.moveTo ctx 0 (* (/ h steps) i))
        (.lineTo ctx w (* (/ h steps) i))
        (.moveTo ctx (* (/ w steps) i) 0)
        (.lineTo ctx (* (/ w steps) i) h)
        (.stroke ctx)))))

(defn draw-arrow [ctx x y dx dy]
  (do
    (.beginPath ctx)
    (.moveTo ctx x y)
    (.lineTo ctx (+ x dx) (+ y dy))
    (.stroke ctx)))

(defn draw-points [ctx steps w h x-max y-max]
  (let [[_ fi ri] (first steps)]
    (do
      (.moveTo ctx (/ (* w fi) x-max) (- h (/ (* h ri) y-max)))
      (doseq [[_ f r] (rest steps)]
        (.lineTo ctx (/ (* w f) x-max) (- h (/ (* h r) y-max)))))))
