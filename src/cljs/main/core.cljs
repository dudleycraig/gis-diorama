(ns main.core
  (:require [main.system :as system]))

(defn before-load
  "shadow-cljs hook before browser reload"
  []
  (js/console.clear))

(defn after-load 
  "shadow-cljs hook after browser reload"
  []
  (system/run))

(defn init
  "initialize application"
  []
  (after-load))
