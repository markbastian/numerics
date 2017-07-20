(defproject
  numerics "0.1.0-SNAPSHOT"
  :description "A numerical analysis library in Clojure"
  :url "https://github.com/markbastian/numerics"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0-alpha16"]
                 [org.jfree/jfreechart "1.0.19"]
                 [org.clojure/clojurescript "1.9.671"]
                 [net.mikera/core.matrix "0.60.3"]]

  :plugins [[lein-cljsbuild "1.1.3"]
            [org.clojure/clojurescript "1.9.671"]]

  :jar-exclusions [#"\.swp|\.swo|\.DS_Store"]
  :profiles {:uberjar {:aot :all}
             :dev {:dependencies [[org.clojure/test.check "0.9.0"]]
                   :plugins []}
             :cljs {:plugins [] }}

  :source-paths ["src/clj" "src/cljc"]

  :clj {:builds [{ :source-paths ["src/clj" "src/cljc" "test"] }]}

  :cljsbuild {:builds [{ :source-paths ["src/cljs" "src/cljc"]
                        :compiler { :output-to "resources/public/js/rk.js"
                                   :optimizations :advanced
                                   :pretty-print true}}]})
