# numerics

A Clojure numerical analysis library.

## Usage

Runge-Kutta Methods are concisely implemented.

~~~~
(defn horner
  [t c] (reduce #(+ (* t %1) %2) (rseq c)))
~~~~

## TODO

Verify adaptive step control

Create web demo

## License

Copyright © 2014 Mark Bastian

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
