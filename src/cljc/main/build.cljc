(ns main.build 
  (:require [integrant.core :as ig]
            [aero.core :as a]
            [clojure.java.io :as io]
            ;; [cprop.source :as cprop]
            ;; [clojure.edn :as edn]
            [shadow.cljs.devtools.config :as shadow-config]
            [shadow.cljs.devtools.api :as shadow]
            [main.env :as env]))

(defn release
  "Build :browser release, with advanced compilation"
  ([] (release "local"))
  ([release-flag]
   (shadow/release*
     (assoc (shadow-config/get-build! :browser) :release-flag release-flag) {})))

(defn watch
  "Watch the :browser release, reloading on changes."
  {:shadow/requires-server true}
  ([] (watch "local"))
  ([release-flag]
   (shadow/watch (assoc (shadow-config/get-build! :browser) :release-flag release-flag))))

(defmethod a/reader 'ig/ref
  [{:keys [profile] :as options} tag value]
  (ig/ref value))

(defn read-env
  [release-flag]
  (let [config (a/read-config (io/resource "main/system.edn") {:profile release-flag})]
    (ig/load-namespaces config)
    config))

(defn load-env
  {:shadow.build/stages #{:compile-prepare}}
  [{:keys [shadow.build/config] :as build-state}]
  (let [release-flag (:release-flag config) 
        app-env (read-env release-flag)]
    (alter-var-root #'env/config (constantly app-env))
    (assoc-in build-state [:compiler-options :external-config ::env] app-env)))


