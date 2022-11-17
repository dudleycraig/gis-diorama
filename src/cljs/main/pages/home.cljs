(ns main.pages.home
  (:require ["react-dom" :as rdom] ;; NOTE: include for react 17, >= 18 :requires ["react-dom/client" :as rdom]
            [helix.core :refer [defnc $]]
            [helix.hooks :as hooks]
            [helix.dom :as hd])) 

(defnc page
  [props]
  (hd/article
    (hd/h1 "home")))
