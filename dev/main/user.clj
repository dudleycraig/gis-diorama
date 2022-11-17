(ns user
  (:require ;; [cprop.source :as cprop-source]
            [integrant.repl :as integrant-repl :refer [go halt reset reset-all]]
            [integrant.core :as integrant]
            ;; [com.walmartlabs.lacinia :as lacinia]
            ;; [gis.core :as core]
            ;; [gis.system :as system]
            ;; [gis.schema :as schema]))
  )
)

;; (def system-properties (cprop-source/from-props-file "resources/gis_server/system.properties"))

;; (def integrant-configuration (system/populate-integrant-configuration system-properties))

;; (integrant-repl/set-prep!
;;  (fn [] integrant-configuration))

;; (defn query 
;;   [query-string] 
;;   (lacinia/execute (schema/load-schema) query-string nil nil))

;; (def app (-> state/system :main/app))
;; (def db (-> state/system :database.sql/connection))

(comment
  (query "{ weather-by-coord(coords: \"-25.808589,28.255833\", location_buffer: 10000, station_count: 3) { code source result }}"))
