(ns main.components.frame
  (:require [goog.object :as go]
            ["react" :as react]
            ["react-dom" :as rdom]

            [helix.core :refer [defnc provider $ <>]]
            [helix.hooks :refer [use-context]]
            [helix.dom :as hd]

            [reitit.frontend.easy :as reitit-frontend-easy]

            [main.context :refer [app-context]]
            [main.hooks.use-atom :as use-atom]
            [main.components.svg :as svg]
            [main.components.navigation :refer [nav-link nav-item navbar-nav navbar]]
            
            [main.router :refer [main-nav]]))

(defnc component [{routing :routing children :children}]
  [(hd/header {:key "header" :className "bar row"} ($ main-nav {:routing routing}))
   (hd/section {:key "section" :className "page"} children)
   (hd/footer {:key "footer" :className "bar row"})])

