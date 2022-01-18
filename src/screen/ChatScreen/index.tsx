import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { Image } from 'react-native-elements'
import { fontSize } from '../../assets/size'
import Header from '../../component/Header'
import { ChatTemplate } from '../../model/Chat'
import { mainStyle } from '../mainStyle'
import { styles } from './DeviceScreen.style'
import { initChatTemplate } from './initChatTemplate'

const ChatScreen = () => {
  const [listChat, setListChat] = useState<ChatTemplate[]>(initChatTemplate)
  const [chatData, setChatData] = useState<ChatTemplate | null>()
  const [typeChat, setTypeChat] = useState('BO_DIT')
  const [changeData, setChangeData] = useState(false)

  useEffect(() => {
    getDataChat()
  }, [])

  useEffect(() => {

  }, [changeData])

  const getDataChat = async () => {
    try {
      const res: any = await axios.get('https://jsonblob.com/api/get/930506708573503488')
      setListChat([...listChat, ...res.data])
    }
    catch {
      Alert.alert("Hicccc", "Pong iu ơi hình như hong có mạng hay sao á. Pong iu nt cho gạo bít được hong?")
    }
  }

  const onRequest = (type?: string) => {
    const types = type ? type : typeChat
    const hours = new Date().getHours()
    if (hours > 0 && hours < 5) {
      const listChatByType = listChat.filter((item: ChatTemplate) => item.type === "SLEEP")
      const random = listChatByType[Math.floor(Math.random() * listChatByType.length)];
      setChatData(random)
      return
    }
    const listChatByType = listChat.filter((item: ChatTemplate) => item.type === types)
    const random = listChatByType[Math.floor(Math.random() * listChatByType.length)];
    setChatData(random)
  }

  const onPressRequestBoDit = (type?: string) => {
    setChatData(null)
    setTimeout(() => onRequest(type), 200);
  }

  const _renderEmptyDevice = () => {
    return (
      <View>
        <Text style={{ fontSize: fontSize.content }}>Gạo nô tài chưa nói gì. Pong iu ra lệnh nhá!</Text>
      </View>
    )
  }

  const _renderChat = () => {
    return (
      <View style={styles.viewChatContainer}>
        <Text style={{ fontSize: fontSize.content }}>{chatData?.content}</Text>
        {chatData && <Image
        transition
          PlaceholderContent={<ActivityIndicator />}
          style={styles.image}
          source={chatData.img_url !== ''
            ? { uri: chatData.img_url }
            : chatData.img
          }
        />}
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Chiện zới Gạo robot"
      />
      <View style={styles.mainContainer}>
        <View style={styles.buttonAddContainerRight}>
          <TouchableOpacity
            onPress={() => {
              setTypeChat('BO_DIT')
              onPressRequestBoDit('BO_DIT')
            }}
            style={styles.buttonAdd}>
            <Text style={styles.buttonAddTitle}>Gạo nô tài bợ đít pong coi</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setTypeChat('KI_NIEM')
              onPressRequestBoDit('KI_NIEM')
            }}
            style={styles.buttonAdd}>
            <Text style={styles.buttonAddTitle}>Gạo nô tài nói về một kỉ niệm gì đó coi</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setTypeChat('HONG_ZUI')
              onPressRequestBoDit('HONG_ZUI')
            }}
            style={styles.buttonAdd}>
            <Text style={styles.buttonAddTitle}>Gạo iuu, pong đang hong zui</Text>
          </TouchableOpacity>
        </View>
        {chatData ? _renderChat() : _renderEmptyDevice()}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => onPressRequestBoDit()}
        >
          <Text style={mainStyle.buttonTitle}>Khum</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPressRequestBoDit()}
        >
          <Text style={mainStyle.buttonTitle}>Hong chịu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Ỏy', "Em pé chơi thêm nhá!")
            setChatData(null)
          }}
        >
          <Text style={mainStyle.buttonTitle}>Ỏy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Ỏy', "Em pé chơi thêm nhá!")
            setChatData(null)
          }}
        >
          <Text style={mainStyle.buttonTitle}>Ọ ké</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default ChatScreen