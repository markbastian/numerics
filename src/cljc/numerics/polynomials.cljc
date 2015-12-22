(ns numerics.polynomials)

(defn poly-eval
  "Evaluate a polynomial using Horner's method. Coefficients are in descending degree."
  [t c] (reduce #(+ (* t %1) %2) c))