(ns main.router
  (:require [goog.object :as go]
            ["react" :as react]
            ["react-dom" :as rd]
            [helix.core :refer [defnc $]]
            [helix.hooks :as hh]
            [helix.dom :as hd]
            [reitit.core :as rc]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]

            [main.components.page-load :as page-load]
            [main.components.navigation :refer [nav-link nav-item navbar-nav navbar]]
            [main.components.svg :as svg]

            [main.pages.home :as home]
            [main.pages.about :as about]
            [main.pages.portfolio :as portfolio]
            [main.pages.contact :as contact]
            [main.pages.resume :as resume]))

(def pages {:root home/page :home home/page :about about/page :portfolio portfolio/page :contact contact/page :resume resume/page})

(defonce current-route (atom {:current-route nil}))

(defn is-current-route 
  "compares router paths against current route path"
  [route-path current-route-path]
  (or
   (and (= route-path "/home") (= current-route-path "/"))
   (= route-path current-route-path)))

;; NOTE: this is an OOP setter and globally sets router via browser history
(defn set-current-route 
  "sets :current to true on current-route and to false on all other routes within router" 
  [router new-route]
  (.log js/console router)
  (let [routes (go/get router "routes" {})
        data (go/get router "data" {})]
    (doseq 
      [[path route] data] 
      (go/set route "data" (assoc (go/get route "data") :current (is-current-route route new-route))))
    router))

;; TODO: rather add page components in edn
(defn set-pages
  "adds page renderers to :data of routes"
  [router]
  (let [routes (go/get router "routes" {})
        data (go/get router "data" {})]
    (doseq 
      [[path route] data] 
      (let [route-data (go/get route "data")
            route-name (:name route-data)
            page (route-name pages)]
        (go/set route "data" (assoc route-data :page page))))
    router))

(defn subscribe-current-route
  "adds handler for current-route atom changes"
  [handler]
  (let [id (gensym "subscribe-current-route")]
    (add-watch current-route id handler)
    (fn [] (remove-watch current-route id))))

(defn get-current-route 
  "dereferences current-route atom"
  [] 
  @current-route)

(defn use-current-route
  "subscribes to changes of current route"
  [initial-route]
  (let [new-route (hh/use-subscription {:get-current-value get-current-route 
                                        :subscribe subscribe-current-route})
        [route set-route] (hh/use-state initial-route)]
    (hh/use-effect
     [new-route]
     (set-route new-route))
    new-route))

(defn on-navigate
  "triggered on browser navigation, updates current-route state"
  [new-route history]
  (reset! current-route new-route))

(defn init
  "initializes routes with renderers of routes"
  [messaging config]
  (let [routes (:router config)
        router (rf/router routes)]
    (rfe/start! (set-pages router) on-navigate {:use-fragment false})))

(defnc current-page
  "renders content for current browser address bar/url"
  [props]
  (let [new-route (use-current-route @current-route)
        new-route-data (go/get new-route "data")
        page (:page new-route-data)]
    ($ page {& props})))

(defnc main-nav
  "renders main navigation for current browser address bar/url"
  [{:keys [routing] :as props}]
  (let [new-route (use-current-route @current-route)
        new-route-path (:path new-route)]
    ($ navbar {:id "header-navigation"}
      ($ navbar-nav
        (map (fn [[path route]]
               (let [{title :title name :name icon :icon current :current} (go/get route "data")]
                 (if title
                   ($ nav-item {:key (str "nav-item-" title) :current (if (is-current-route path new-route-path) "true" "false")}
                     ($ nav-link {:href (rfe/href name)}
                       ($ svg/icon {:icon icon})
                       (hd/span title)))
                   nil)))
             (go/get (:router routing) "data"))))))

