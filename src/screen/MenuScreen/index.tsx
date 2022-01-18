import { CommonActions, useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Alert, Image, KeyboardAvoidingView, Modal, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { color } from '../../assets/color'
import { fontSize, height, width } from '../../assets/size'
import call from "react-native-phone-call"

const ERROR_MESSAGE = {
  emailValid: 'Email is invalid!',
}

const MenuScreen = () => {
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)


  useEffect(() => {
    setModalVisible(true)
  }, [])

  const chatGao = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'AuthStack',
      }))
  }

  const alert = () => {
    Alert.alert("Hicccc...", "Gạo nô tài chưa kịp làm tính năng này, Pong iu đợi gạo update sau nha!")
  }

  const callGao = () => {
    const phone = {
      number: '032483',
      prompt: false
    }
    call(phone).catch(console.error)
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={color.pink}
        hidden={false} />
      <Image source={require('../../assets/icon/PongGao.png')} style={styles.logo} />
      <View style={styles.inputContainer}>

        <TouchableOpacity
          onPress={() => navigation.dispatch(
            CommonActions.navigate({
              name: 'ChatScreen',
            }))}
          style={styles.button}
        >
          <Text style={styles.buttonTitle}>Chiện zới gạo robot</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert()}
          style={styles.button}
        >
          <Text style={styles.buttonTitle}>Coi lại kỷ niệm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => callGao()}
          style={styles.button}
        >
          <Text style={styles.buttonTitle}>Gọi cho Gạo iu</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        statusBarTranslucent={true}
        onRequestClose={() => { }}>
        <View style={styles.modalContainer}>
          <View style={styles.boxContainer}>
            <Text style={styles.happy}>Happy birthday pong iuuuuu</Text>
            <View style={styles.happyContainer}>
              <Text style={styles.happyContent}>{`    Công chúa pong iu của gạo đó ạ? Hihi. Pong iu vào được đây oy. Gạo đã suy nghĩ rất nhiều về cuộc đời gạo. Nhưng hiện tại cái ngày tưởng chừng đơn giản vậy lại trở thành ngày may mắn nhất của gạo, có thể là ngày may mắn nhất suốt cuộc đời oy.`}
              </Text>
              <Text style={styles.happyContent}>{`     Đây là .. một thứ gì đó gạo muốn làm cho pong bằng những gì gạo có. Có thể coi là một thứ gì đó pong iu vào chơi mỗi khi gạo chưa có mặt kịp thời được, hay là một nơi lưu giữ kỉ niệm của bọn mình nha. Hihi. Gạo biết app này vẫn còn sơ khai và chưa có gì nhiều. Nhưng gạo biết pong iu mún đọc nhiều. Nên gạo đã làm một vài tính năng nho nhỏ trước tặng pong ngày sinh nhật. Mong nó sẽ là một món quà có ý nghĩa đối với pong <3`}
              </Text>
              <Text style={styles.happyContent}>{`Gạo iuuuu pong nhìu lắm!`}
              </Text>
            </View>
            <TouchableOpacity style={{ marginBottom: 10 }}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.happy}>Ọ ké! Zo coi nào!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    marginBottom: 10
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
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: color.blackOpacity,
  },
  boxContainer: {
    backgroundColor: color.white,
    alignItems: "center",
    justifyContent: 'center',
    width: '85%',
    height: '80%',
    borderRadius: 10,
    padding: 10
  },
  happy: {
    fontSize: fontSize.content,
    color: color.pinkStrong,
    fontWeight: 'bold',
  },
  happyContent: {
    fontSize: fontSize.content,
    color: color.black,
  },
  happyContainer: {
    flex: 1,
    marginTop: 15,
    borderTopColor: color.pinkStrong,
    borderTopWidth: 1,
    paddingTop: 15,
    justifyContent: 'space-evenly'
  }
})

export default MenuScreen