(ns main.firebase
  (:require ["firebase/app" :as firebase]
            ["firebase/firestore" :refer [getFirestore]]))

(defn init [messaging config]
  #js{"apiKey"            (get config :api-key),
      "authDomain"        (get config :auth-domain),
      "projectId"         (get config :project-id),
      "storageBucket"     (get config :storage-bucket),
      "messagingSenderId" (get config :messaging-sender-id),
      "appId"             (get config :app-id),
      "measurementId"     (get config :measurement-id),
      "databaseURL"       (get config :database-url)})
