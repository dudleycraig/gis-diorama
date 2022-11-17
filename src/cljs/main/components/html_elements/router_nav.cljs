(ns main.components.html-elements.router-nav
  (:require [goog.object :as go]
            ["react-dom" :as rd]

            [helix.core :refer [defnc $]]
            [helix.hooks :as hooks]
            [helix.dom :as hd]

            [reitit.frontend.easy :as reitit-frontend-easy]

            [main.components.html-elements.route-item :as route-item]))

(defnc component [{:keys [router current-route] :as props}]
  (let [routes (go/get (:router router) "routes")]
    (hd/ul 
      {:className "router-nav"}
      (map
        (fn [[path {:keys [title name] :as attributes}]]
          (let [active (or ;; if currently active route
                           (= (:name (go/get current-route "data")) name)
                           (and
                             (= :main.system/home name)
                             (= :main.system/root (:name (go/get current-route "data")))))]
            (if title
              ($ route-item/component 
                 {:key (str "route-item-" title) :active active & attributes})
              nil)))
        routes))))
