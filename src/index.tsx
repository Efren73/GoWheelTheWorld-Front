import { ChakraProvider, ColorModeScript, CSSReset } from "@chakra-ui/react"
import React, { Fragment } from "react"

import { App } from "./App"
import reportWebVitals from "./reportWebVitals"
import * as serviceWorker from "./serviceWorker"
import { Provider } from 'react-redux';
import {store} from './app/store'
import theme from "./theme"
import './styles.css'
import { createRoot } from 'react-dom/client';
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