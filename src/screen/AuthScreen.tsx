import { CommonActions, useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Alert, Image, KeyboardAvoidingView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { color } from '../assets/color'
import { fontSize, height, width } from '../assets/size'

const ERROR_MESSAGE = {
  emailValid: 'Email is invalid!',
}

const AuthScreen = () => {
  const navigation = useNavigation()
  const [userName, setUserName] = useState('0329228927')
  const [pass, setPass] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [seePass, setSeePass] = useState(false)

  const loginByFirebase = async () => {
    if (pass === '11011999') {
      navigation.dispatch(
        CommonActions.navigate({
          name: 'MenuScreen',
        }))
    }
    else {
      setErrorMessage('Password là ngày may mắn nhất của cuộc đời gạo <3')
    }
  }

    return (
      <KeyboardAvoidingView style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor={color.pink}
          // barStyle={statusBarStyle}
          // showHideTransition={statusBarTransition}
          hidden={false} />
        <Image source={require('../assets/icon/PongGao.png')} style={styles.logo} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Tên đăng nhập"
            value={userName}
            onChangeText={(value: string) => setUserName(value)}
          />
          <View style={styles.inputPass}>
            <TextInput
              secureTextEntry={seePass}
              placeholder="Mật khẩu"
              value={pass}
              onChangeText={(value: string) => setPass(value)}
              style={{ flex: 1, height: 40 }}
            />
            <TouchableOpacity onPress={() => setSeePass(!seePass)}>
              <Image source={require('../assets/icon/eye.png')} style={styles.iconEye} />

            </TouchableOpacity>
          </View>

          <Text style={styles.errMess}>{errorMessage}</Text>
          <TouchableOpacity
            onPress={() => loginByFirebase()}
            style={styles.button}
          >
            <Text style={styles.buttonTitle}>Xác nhận Pong iu</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: color.pink,
    },
    logo: {
      tintColor: 'black',
    },
    inputContainer: {
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    input: {
      backgroundColor: 'white',
      width: width.button,
      paddingHorizontal: 20,
      borderRadius: 30,
      marginBottom: 10,
      height: 40
    },
    inputPass: {
      backgroundColor: 'white',
      width: width.button,
      paddingHorizontal: 20,
      borderRadius: 30,
      marginBottom: 10,
      flexDirection: 'row',
      alignItems: 'center'
    },
    button: {
      paddingHorizontal: 30,
      paddingVertical: 5,
      height: height.button,
      width: width.button,
      backgroundColor: color.pinkStrong,
      alignContent: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      marginTop: 20
    },
    buttonTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center'
    },
    errMess: {
      fontSize: fontSize.tag,
      color: 'red'
    },
    iconEye: {
      width: 30,
      height: 30,
      tintColor: 'grey'
    },
    register: {
      marginTop: 10,
      fontSize: fontSize.contentSmall,
      color: color.pinkStrong,
      textDecorationLine: 'underline'
    }
  })

  export default AuthScreen