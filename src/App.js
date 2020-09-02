import React from 'react'
import { Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import LoginScreen from './screen/LoginScreen'
// import SplashScreen from './screen/SplashScreen'

const App = () => {
  const entireScreenWidth = Dimensions.get('window').width
  EStyleSheet.build({ $rem: entireScreenWidth / 320 })

  return (
    <LoginScreen />
    // <SplashScreen />
  )
}

export default App
