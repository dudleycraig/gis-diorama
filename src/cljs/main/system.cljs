(ns main.system
  (:require [integrant.core :as ig]
            [main.env :as env]
            [main.router :as routing]
            [main.firebase :as firebase]
            [main.app :as app])
  (:require-macros [main.utils :refer [read-config]]))

(defonce system (atom nil))

(defmethod ig/init-key ::app 
  [_ {:keys [messaging routing firebase config]}] 
  (app/init messaging routing firebase config))

(defmethod ig/init-key ::routing 
  [_ {:keys [messaging config]}]
  (routing/init messaging config))

(defmethod ig/init-key ::firebase 
  [_ {:keys [messaging config]}] 
  (firebase/init messaging config))

(defmethod ig/init-key ::messaging 
  [method-key {:keys [messages]}]
  (atom messages))

(defmethod ig/halt-key! ::app
  [app-key {:keys [app]}]
  (.stop app))

(defn run 
  [] 
  (reset! system (ig/init (env/get-config-map))))

(defn halt! 
  []
  (when @system (ig/halt! @system) (reset! system nil)))

(comment (env/get-config-map))



