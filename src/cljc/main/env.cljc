(ns main.env
  #?(:cljs (:require-macros [main.env :as env])))
                       
(def config
  #?(:cljs (let [config (env/get-config-map)]
             config)
     :clj {}))

#?(:clj
   (defmacro ^:private get-config-map
     [] 
     config))
