import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import ReactDOM from "react-dom"
import { App } from "./App"
import Login from "./pages/login"
import MainScreenTO from "./pages/mainScreenTO"
import reportWebVitals from "./reportWebVitals"
import * as serviceWorker from "./serviceWorker"
import { Cart, LateralMenu, Summary } from "./components"
import Multiple from "./components/Multiple/multiple.component"
import GroupPrivate from "./components/GroupPrivate"
import Price from "./components/Price"
import Meeting from "./components/Meeting"
import Stops from "./components/Stops"
import Languages from "./components/Languages"
import Restrictions from "./components/Restrictions"
import TourCompleted from "./pages/tourCompleted"
import Signup from "./pages/signup"
import Question from "./pages/question"
import Admin from "./pages/admin/admin.page"
import UploadPhotos from "./components/Upload-Photos"
import Description from "./components/Description"
import WhatsIncluded from "./components/Whats-included"
import Faqs from './components/FAQS/faqs.component'
import Transportation from "./components/Transportation"
import ChildPolicy from "./components/ChildPolicy"
import ProfileSettings from './pages/adminSummary/adminSummary.page'
/*
  signup
  Login
  Admin
  mainScreenTo
  Question
  Tour completed
*/

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()