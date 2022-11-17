(ns main.pages.contact
  (:require ["react-dom" :as rdom] ;; NOTE: include for react 17, >= 18 :requires ["react-dom/client" :as rdom]
            [helix.core :refer [defnc $]]
            [helix.hooks :as hooks]
            [helix.dom :as hd]))

(defnc page 
  "/contact"
  [props] 
   (hd/article
    (hd/h1 "contact")))
