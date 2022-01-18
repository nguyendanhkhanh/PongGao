import { CommonActions, useNavigation } from '@react-navigation/native'
import React, { ReactElement, useEffect } from 'react'
import { StatusBar, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { color } from '../../assets/color'
import { RootState } from '../../redux/reducer'
import { styles } from './SplashScreen.style'

interface Props {

}

export default function SplashScreen(props: Props): ReactElement {
  const navigation = useNavigation()
  useEffect(() => {
    setTimeout(() => navigation.dispatch(
      CommonActions.navigate({
        name: 'AuthStack',
      })), 2000)
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={color.pink}
        hidden={false} />
      <Image source={require('../../assets/icon/PongGao.png')} style={styles.logo} />
    </SafeAreaView>
  )
}
