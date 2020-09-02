import React, { useRef } from 'react'
import { View, Text, StatusBar, KeyboardAvoidingView, Image, TextInput, TouchableOpacity } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import logo from '../../assets/mq.png'

const LoginScreen = () => {
  const txtPass = useRef(null)

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor='rgb(32, 53, 70)'
        barStyle='light-content'
      />

      <KeyboardAvoidingView>
        <View style={styles.wrapperLogo}>
          <Image
            source={logo}
            style={styles.logo}
          />

          <Text style={styles.titleLogin}>
            Login
          </Text>
        </View>

        <View style={styles.wrapperForm}>
          <TextInput
            style={styles.inputForm}
            placeholder='Enter Username/Email'
            placeholderTextColor='rgba(255, 255, 255, 0.6)'
            keyboardType='email-address'
            returnKeyType='next'
            autoCorrect={false}
            onSubmitEditing={() => txtPass.current.focus()}
          />

          <TextInput
            ref={txtPass}
            style={styles.inputForm}
            placeholder='Enter Password'
            placeholderTextColor='rgba(255, 255, 255, 0.6)'
            returnKeyType='go'
            secureTextEntry
            autoCorrect={false}
          />

          <TouchableOpacity
            onPress={() => {}}
            style={styles.wrapperButton}
          >
            <Text style={styles.buttonText}>
              SIGN IN
            </Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    </View>
  )
}

export default LoginScreen

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(32, 53, 70)',
    justifyContent: 'center',
    paddingHorizontal: '20rem'
  },
  wrapperLogo: {
    alignItems: 'center'
  },
  logo: {
    height: '80rem',
    width: '120rem'
  },
  titleLogin: {
    fontSize: '18rem',
    color: '#f7c744',
    marginTop: '20rem',
    marginBottom: '40rem'
  },
  inputForm: {
    paddingVertical: '8rem',
    paddingHorizontal: '15rem',
    marginBottom: '20rem',
    color: 'rgba(255, 255, 255, 0.6)',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '8rem'
  },
  wrapperButton: {
    paddingVertical: '10rem',
    backgroundColor: '#f7c744',
    borderRadius: '8rem'
  },
  buttonText: {
    fontSize: '14rem',
    fontWeight: 'bold',
    color: 'rgb(32, 53, 70)',
    textAlign: 'center'
  }
})
