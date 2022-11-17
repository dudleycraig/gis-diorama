(ns main.components.html-elements.header
  (:require [goog.object :as go]
            ["react-dom" :as rd]
            [helix.core :refer [defnc $]]
            [helix.hooks :as hooks]
            [helix.dom :as hd]

            [main.router :as router]
            [main.components.html-elements.main-navigation :as main-navigation]))

(defnc component
  [props]
  (hd/div ($ main-navigation {& props})))
