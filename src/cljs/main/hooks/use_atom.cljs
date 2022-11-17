(ns main.hooks.use-atom
  (:require ["react-dom" :as rdom]

            [helix.core :refer [defnc $]]
            [helix.hooks :as hooks]
            [helix.dom :as hdom]))

(defn hook [a]
  (let [[state set-state] (hooks/use-state @a)
        id (random-uuid)]
    (hooks/use-effect
       :once
       (add-watch a id #(set-state %4))
       #(remove-watch a id))
    state))

