import React from 'react'
import { Text, View, StatusBar } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor='red'
        barStyle='light-content'
      />
      <Text style={styles.text}>
        Hello, This is Splash Screen
      </Text>
    </View>
  )
}

export default SplashScreen

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: '40rem',
    color: 'white'
  }
})
