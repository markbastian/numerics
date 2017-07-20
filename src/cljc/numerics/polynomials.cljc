(ns numerics.polynomials)

(defn horner-eval
  "Evaluate a polynomial using Horner's method. Coefficients are in ascending degree."
  [t c] (reduce #(+ (* t %1) %2) (rseq c)))

(defmacro horner-expand [terms]
  (let [t# (rseq (eval terms))]
    `(fn [~'t]
       ~(reduce (fn [b a] `(+ ~a (* ~b ~'t))) t#))))