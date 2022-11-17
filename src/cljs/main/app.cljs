(ns main.app
  (:require [goog.object :as go]
            ["react" :as react]
            ["react-dom" :as rd]
            [helix.core :refer [defnc provider $ <>]]
            [helix.hooks :refer [use-state use-effect use-reducer]]
            [helix.dom :as hd]
            [main.context :refer [app-context app-reducer use-app-state]]
            [main.router :as router]
            [main.hooks.use-atom :as use-atom]
            [main.components.frame :as frame]))

(defnc app [{:keys [routing] :as props}]
  ($ frame/component {:routing routing}
     ($ router/current-page {& props})))

(defn init [messaging routing firebase config]
  (let [mount-id (:mount-id config)]
    (rd/render
      ($ app {:routing routing})
      (. js/document getElementById mount-id))))

