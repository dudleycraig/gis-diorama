(ns main.components.navigation
  (:require [goog.object :as go]
            ["react-dom" :as rd]
            [helix.core :refer [defnc $]]
            [helix.hooks :as hooks]
            [helix.dom :as hd]))

(defnc nav-link
  [{:keys [name children] :as props}]
  (hd/a 
    {:className "nav-link" 
     & props}
    children))

(defnc nav-item
  [{:keys [current children] :as props}]
  (hd/li
    {:className (str "nav-item" (if (= current "true") " current" " inert")) 
     & props}
    children))

(defnc navbar-nav 
  [{:keys [children] :as props}]
  (hd/ul
    {:className "navbar-nav" 
     & props}
    children))

(defnc navbar 
  [{:keys [children] :as props}]
  (hd/nav
    {:className "navbar" 
     & props}
    children))
