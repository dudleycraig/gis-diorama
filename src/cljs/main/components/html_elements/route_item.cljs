(ns main.components.html-elements.route-item
  (:require [goog.object :as go]
            ["react" :as react]
            ["react-dom" :as rd]
            [helix.core :refer [defnc $]]
            [helix.hooks :as hooks]
            [helix.dom :as hd]
            [reitit.frontend.easy :as reitit-frontend-easy]
            [main.utilities.svg :as svg]
            [main.router :as router]))

(defnc component [{:keys [name path title icon active] :as props}]
  (hd/li 
    {:className (str "route-item " (if active "active" "inert"))}
    (hd/a
      {:href (reitit-frontend-easy/href name)}
      ($ svg/icon 
         {:icon icon})
      (hd/span {:style {:margin-left "5px"}} title))))
