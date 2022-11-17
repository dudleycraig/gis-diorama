(ns main.utilities.logging)

(defn log
  "logs cljs/js to console"
  [name value]
  (println "---- " name " ----")
  (cljs.pprint/pprint value)
  (.log js/console value)
  (println "----" (apply str (repeat (+ (count name) 2) "-")) "----"))
