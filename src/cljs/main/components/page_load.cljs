(ns main.components.page-load
  (:require ["react-dom" :as rdom] ;; NOTE: include for react 17, >= 18 :requires ["react-dom/client" :as rdom]
            [helix.core :refer [defnc $]]
            [helix.hooks :as hooks]
            [helix.dom :as hdom]))

(defnc component ;; TODO: create svg animation
  "suspense animation before content"
  [props]
  (hdom/h1 "whoops ..."))
