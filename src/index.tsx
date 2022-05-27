import { ChakraProvider, ColorModeScript, CSSReset } from "@chakra-ui/react"
import React, { Fragment } from "react"

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
import UserSettings from './pages/userSettings/userSettings.page'

import { Provider } from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';
import {store} from './app/store'
import theme from "./theme"
import './styles.css'
import { createRoot } from 'react-dom/client';
import { ReactDOM } from "react"

const container = document.getElementById('root')!;
const root = createRoot(container);

/*
  signup
  Login
  Admin
  mainScreenTo
  Question
  Tour completed
*/
console.log(theme)
root.render(
  <Fragment>

    <ColorModeScript />
      <ChakraProvider theme={theme}>
        <Provider store={store}>
            <CSSReset />
            <App />
        </Provider>
      </ChakraProvider>
  </Fragment>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()