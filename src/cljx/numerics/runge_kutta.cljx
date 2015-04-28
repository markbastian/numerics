(ns numerics.runge-kutta)

(defn ki [f [tn & yn] dt a c k]
  (let [dy (map #(* dt (reduce + (map * a %))) k)]
    ((apply juxt f) (into [(+ tn (* dt c))] (map + yn dy)))))

(defn ks [f ic dt { :keys [a c] }]
  (loop [ks (repeat (count f) []) ai a ci c]
    (if-not (first ci)
      ks
      (recur
        (map conj ks (ki f ic dt (first ai) (first ci) ks))
        (rest ai)
        (rest ci)))))

(defn y-step [k [tn & yn] dt b]
  (let [deltas (map #(reduce + (map * b %)) k)]
    (into [(+ tn dt)] (map #(-> %1 (* dt) (+ %2)) deltas yn))))

(defn rk-step [f ic dt { :keys [b] :as tableau}]
  (y-step (ks f ic dt tableau) ic dt b))

(defn adaptive-step [f ic dt { :keys [b b*] :as tableau}]
  (let [ys (map (partial y-step (ks f ic dt tableau) ic dt) [ b b*])
        error-estimate (->> ys (apply map -) (map #(* % %)) (reduce +) Math/sqrt)]
    [(first ys) error-estimate]))

(defn rk-adaptive-step [f ic dt tol tableau]
  (loop [[y err] (adaptive-step f ic dt tableau)]
    (let [e (Math/abs (/ tol err))]
      (if (< err tol)
      [y (-> e (Math/pow 0.2) (* dt 0.9))]
      (recur (adaptive-step f ic (-> e (Math/pow 0.25) (* dt 0.9)) tableau))))))
