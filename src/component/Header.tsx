import { useNavigation } from '@react-navigation/native'
import React, { ReactElement } from 'react'
import { Image, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { color } from '../assets/color'
import { fontSize } from '../assets/size'

interface Props {
  renderLeft?: () => ReactElement
  renderCenter?: () => ReactElement
  renderRight?: () => ReactElement
  title: string
  disableGoBack?: boolean
}

const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
const HEADER_HEIGHT = Platform.OS === "ios" ? 44 : 56;

const StatusHeaderBar = (props: Props) => {
  const { renderLeft, renderCenter, renderRight, title, disableGoBack } = props
  const navigation = useNavigation()
  const _renderLeft = () => (
    <TouchableOpacity
      disabled={disableGoBack}
      onPress={() => navigation.goBack()}>
      <Image source={require('../assets/icon/back.png')} style={styles.iconBack} />
    </TouchableOpacity>
  )
  const _renderCenter = () => (
    <Text style={styles.titleCenter}>{title}</Text>
  )

  return (
    <View style={styles.container}>
      <View style={{ height: STATUS_BAR_HEIGHT, backgroundColor: "white", flex: 1 }}>
        <StatusBar
          translucent
          backgroundColor="white"
          barStyle="light-content"
          animated={true}
          hidden={false}
        />
      </View>
      <View style={styles.headerContainer}>
        {renderLeft ? renderLeft : _renderLeft()}
        {renderCenter ? renderCenter : _renderCenter()}
        {renderRight ? renderRight : <View style={{ marginRight: 15 }}></View>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  statusBarContainer: {
    flex: 1,
    height: 200,
    backgroundColor: 'red'
  },
  headerContainer: {
    height: 36,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10
  },
  iconBack: {
    tintColor: color.pinkStrong,
    marginHorizontal: 20
  },
  titleCenter: {
    flex: 1,
    fontSize: fontSize.title,
    color: color.pinkStrong,
    fontWeight: 'bold',
  }
})

export default StatusHeaderBar