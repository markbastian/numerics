(defproject numerics "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.jfree/jfreechart "1.0.19"]
                 [org.clojure/clojurescript "0.0-3126"]]

  :jar-exclusions [#"\.cljx|\.swp|\.swo|\.DS_Store"]
  :profiles {:uberjar {:aot :all}
             :dev {:plugins [[com.keminglabs/cljx "0.6.0"]
                             [lein-cljsbuild "1.0.5"]
                             [org.clojure/clojurescript "0.0-3126"]]}
             :cljs {:plugins [[lein-cljsbuild "1.0.5"]] }}

  :prep-tasks [["cljx" "once"] "javac" "compile"]

  :source-paths ["src/clj"]

  :aliases {"cleantest" ["do" "clean," "cljx" "once," "test," "cljsbuild" "test"]}

  :clj {:builds [{ :source-paths ["src/clj" "target/classes" "target/test-classes"] }]}

  :cljsbuild {:builds [{ :source-paths ["src/cljs" "target/classes"]
                        :compiler { :output-to "resources/public/js/rk.js"
                                   :optimizations :advanced
                                   :pretty-print true}}]}

  :cljx {:builds [{:source-paths ["src/cljx"]
                   :output-path "target/classes"
                   :rules :clj}

                  {:source-paths ["src/cljx"]
                   :output-path "target/classes"
                   :rules :cljs}]})
