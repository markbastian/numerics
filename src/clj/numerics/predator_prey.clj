(ns numerics.predator-prey
  (:require [numerics.tableaus :as tableaus]
            [numerics.runge-kutta :as rk]
            [clojure.pprint :as pprint])
  (:import (org.jfree.chart ChartFactory ChartPanel JFreeChart)
           (org.jfree.chart.plot PlotOrientation XYPlot)
           (org.jfree.data.xy XYSeriesCollection XYSeries VectorSeries VectorSeriesCollection)
           (javax.swing JFrame JTabbedPane)
           (java.awt BorderLayout)
           (org.jfree.chart.renderer.xy VectorRenderer)
           (org.jfree.chart.axis NumberAxis)))

(def dt 0.1)
(def ic [0 4 1])
(defn dr [[_ R F]] (- (* 2.0 R) (* 1.2 R F)))
(defn df [[_ R F]] (- (* 0.9 R F) F))

(def steps (take 100 (iterate #(rk/rk-step [dr df] % dt tableaus/classic-fourth-order) ic)))

(def rabbits-series (XYSeries. "Rabbits"))
(def foxes-series (XYSeries. "Foxes"))
(def state-series (XYSeries. "State Space"))

(doseq [step steps]
  (.add state-series (step 1) (step 2))
  (.add rabbits-series (step 0) (step 1))
  (.add foxes-series (step 0) (step 2)))

(def chart
  (ChartFactory/createXYLineChart
    "Predator-Prey Model"
    "Time"
    "Population"
    (doto (XYSeriesCollection.)
      (.addSeries rabbits-series)
      (.addSeries foxes-series))
    PlotOrientation/VERTICAL
    true true true))

(defn create-phase-plot [dr df]
  (reduce
    (fn [vs [r f x y]]
      (doto vs (.add r f x y)))
    (VectorSeries. "Derivative")
    (let [scale 0.2]
      (for [r (range 0 5 0.2) f (range 0 5 0.2)
            :let
            [a (dr ['_ r f])
             b (df ['_ r f])
             m (Math/sqrt (+ (* a a) (* b b)))
             s (if (< m 1E-6) 1E6 m)
             x (* scale (/ a s))
             y (* scale (/ b s))]]
        [r f x y]))))

(def cp
  (JFreeChart.
    "Direction Field"
    (XYPlot.
      (doto (VectorSeriesCollection.) (.addSeries (create-phase-plot dr df)))
      (NumberAxis. "Rabbits")
      (NumberAxis. "Foxes")
      (VectorRenderer.))))

(doto (JFrame. "Predator Prey Example")
  (.setSize 800 600)
  (.setDefaultCloseOperation JFrame/DISPOSE_ON_CLOSE)
  (.add (doto (JTabbedPane.)
          (.addTab "Phase Plot" (ChartPanel. cp))
          (.addTab "Time Series Plot" (ChartPanel. chart))) BorderLayout/CENTER)
  (.setVisible true))
