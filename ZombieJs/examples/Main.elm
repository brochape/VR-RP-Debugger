import Counter exposing (update, view)
import StartApp


main =
  StartApp.start
    { model = 0
    , update = update
    , view = view
    }