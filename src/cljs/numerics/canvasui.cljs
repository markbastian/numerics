(ns numerics.canvasui)

;Copied from mazegen for initial ref.
;(defn draw-cell [ctx dx dy row col maze]
;  (let [sx (* dx col)
;        sy (* dy row)
;        cell (get-in maze [row col])]
;    (do
;      (when (or (cell :start) (cell :end))
;        (doto ctx
;          (.moveTo (+ sx dx) (+ sy (* 0.5 dy)))
;          (.arc (+ sx (* 0.5 dx)) (+ sy (* 0.5 dy)) (* 0.5 dx) 0 (* 2.0 Math/PI))))
;      (when-not (cell [row (dec col)])
;        (doto ctx (.moveTo sx sy) (.lineTo sx (+ sy dy))))
;      (when-not (cell [row (inc col)])
;        (doto ctx (.moveTo (+ sx dx) sy) (.lineTo (+ sx dx) (+ sy dy))))
;      (when-not (cell [(dec row) col])
;        (doto ctx (.moveTo sx sy) (.lineTo (+ sx dx) sy)))
;      (when-not (cell [(inc row) col])
;        (doto ctx (.moveTo sx (+ sy dy)) (.lineTo (+ sx dx) (+ sy dy)))))))
;
;(defn draw-maze [canvas maze]
;  (let [ctx (.getContext canvas "2d")
;        dx (/ (.-width canvas) (count (maze 0)))
;        dy (/ (.-height canvas) (count maze))]
;    (doto ctx
;      (-> .-fillStyle (set! "#FFFFFF"))
;      (.fillRect 0 0 (.-width canvas) (.-height canvas))
;      (.beginPath)
;      (-> .-fillStyle (set! "#000000"))
;      (#(doseq [row (range (count maze))]
;         (doseq [col (range (count (get maze row)))]
;           (draw-cell % dx dy row col maze))))
;      (.stroke))))
;
;(set!
;  (.-onload js/window)
;  (when (and js/document (.-getElementById js/document))
;    (let [cells 20
;          start [0 0]
;          end [(dec cells) (dec cells)]
;          empty-maze (rules/create-empty cells cells)
;          prim-canvas (.getElementById js/document "primCanvas")
;          dfb-canvas (.getElementById js/document "dfbCanvas")
;          reset-button (.getElementById js/document "regenMazes")]
;      (do
;        (draw-maze prim-canvas (rules/prim-gen empty-maze start end))
;        (draw-maze dfb-canvas (rules/depth-first-gen empty-maze start end))
;        (set! (.-onclick reset-button)
;              #(do
;                (draw-maze prim-canvas (rules/prim-gen empty-maze start end))
;                (draw-maze dfb-canvas (rules/depth-first-gen empty-maze start end))))))))