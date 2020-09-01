/**
 * @format
 */

import React from 'react'
import { AppRegistry, View } from 'react-native'
import { name as appName } from './app.json'

import App from './src/App'

const Main = () => {
  return (
    <View>
      <App />
    </View>
  )
}

AppRegistry.registerComponent(appName, () => Main)
