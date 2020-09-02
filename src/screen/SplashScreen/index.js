import React from 'react'
import { Text, View, StatusBar } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor='rgb(32, 53, 70)'
        barStyle='light-content'
      />

      <Text style={styles.text}>
        Hello, This is Splash
      </Text>
    </View>
  )
}

export default SplashScreen

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(32, 53, 70)',
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: '40rem',
    color: '#f7c744'
  }
})
