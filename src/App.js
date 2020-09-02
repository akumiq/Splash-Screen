import React from 'react'
import { Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import SplashScreen from './screen/SplashScreen'

const App = () => {
  const entireScreenWidth = Dimensions.get('window').width
  EStyleSheet.build({ $rem: entireScreenWidth / 320 })

  return (
    <SplashScreen />
  )
}

export default App
