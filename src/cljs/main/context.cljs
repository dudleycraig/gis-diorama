(ns main.context
  (:require ["react" :as r]
            ["react-dom" :as rd]
            [helix.core :refer [create-context]]
            [helix.hooks :refer [use-state use-context]]
            [helix.dom :as hd]))

(def app-context
  (create-context nil))

(defmulti app-reducer
  (fn [_ action]
    (first action)))

(defmethod app-reducer ::init 
  [state [_ payload]]
  (assoc state :current-route payload))

(defmethod app-reducer ::update-current-route
  [state [_ payload]]
  (assoc state :current-route payload))

(defn use-app-state []
  (let [[state dispatch] (use-context app-context)]
    [state
     {:init (fn [state] (dispatch ::init state))
      :update-current-route (fn [route] (dispatch [::update-current-route route]))}]))
