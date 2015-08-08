(defproject
  numerics "0.1.0-SNAPSHOT"
  :description "A numerical analysis library in Clojure"
  :url "https://github.com/markbastian/numerics"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.jfree/jfreechart "1.0.19"]
                 [org.clojure/clojurescript "0.0-3308"]]

  :jar-exclusions [#"\.swp|\.swo|\.DS_Store"]
  :profiles {:uberjar {:aot :all}
             :dev {:plugins [[lein-cljsbuild "1.0.6"]
                             [org.clojure/clojurescript "0.0-3308"]]}
             :cljs {:plugins [[lein-cljsbuild "1.0.6"]] }}

  :source-paths ["src/clj" "src/cljc"]

  :clj {:builds [{ :source-paths ["src/clj" "src/cljc" "test"] }]}

  :cljsbuild {:builds [{ :source-paths ["src/cljs" "src/cljc"]
                        :compiler { :output-to "resources/public/js/rk.js"
                                   :optimizations :advanced
                                   :pretty-print true}}]})
