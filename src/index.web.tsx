import * as React from 'react'
import { AppRegistry } from 'react-native'
import { AppContainer } from 'react-hot-loader'

import App from './App'

declare const module: any

const renderApp = () =>
  <AppContainer>
    <App />
  </AppContainer>

AppRegistry.registerComponent('App', () => renderApp)

if (module.hot) {
  module.hot.accept()

  const renderHotApp = () =>
    <AppContainer>
      <App />
    </AppContainer>

  AppRegistry.registerComponent('App', () => renderHotApp)
}

AppRegistry.runApplication('App', {
  rootTag: document.getElementById('root'),
})
