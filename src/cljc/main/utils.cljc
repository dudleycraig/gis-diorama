(ns main.utils
  (:require [integrant.core :as ig]
            [aero.core :as a]
            [clojure.java.io :as io]
            #?(:clj [clojure.data.json :as json])
            #?(:clj [clojure.java.io :as io])))

(defmethod a/reader 'ig/ref
  [{:keys [profile] :as options} tag value]
  (ig/ref value))

(defmacro read-config [resource profile]
  #?(:clj (let [config (a/read-config (io/resource resource) {:profile profile})]
            (ig/load-namespaces config)
            config)))
