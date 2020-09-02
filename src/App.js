import React, { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import LoginScreen from './screen/LoginScreen'
import SplashScreen from './screen/SplashScreen'

const App = () => {
  const entireScreenWidth = Dimensions.get('window').width
  EStyleSheet.build({ $rem: entireScreenWidth / 320 })

  const [currentScreen, setCurrentScreen] = useState('splash')
  const mainScreen = currentScreen === 'splash'
    ? <SplashScreen />
    : <LoginScreen />

  useEffect(() => {
    setTimeout(() => {
      setCurrentScreen('Login')
    }, 2000)
  })

  return mainScreen
}

export default App
