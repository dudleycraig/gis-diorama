(ns main.components.svg
  (:require [goog.object :as go]
            ["react" :as react]
            ["react-dom" :as rd]
            [helix.core :refer [defnc $]]
            [helix.hooks :as hooks]
            [helix.dom :as hd]
            ["@fortawesome/react-fontawesome" :refer [FontAwesomeIcon]]
            ["@fortawesome/free-solid-svg-icons" :refer [faEnvelope faImages faHome faUser faInfo]]))

(def icons
  {:envelope faEnvelope
   :images faImages
   :home faHome
   :user faUser
   :info faInfo})

(defnc icon 
  [{:keys [icon size spin] 
    :or {icon nil size "1x" spin false}
    :as props}] 
  (let [svg-icon-props (dissoc props :icon :size :spin)]
    (hd/div
      {:className "svg-icon" & svg-icon-props}
      ($ FontAwesomeIcon 
         {:icon (get-in icons [icon]) :size size :spin spin}))))
