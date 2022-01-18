import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import AuthScreen from '../screen/AuthScreen';
import ChatScreen from '../screen/ChatScreen';
import MenuScreen from '../screen/MenuScreen';
// import AuthScreen from '../screen/AuthScreen';
// import ChatScreen from '../screen/ChatScreen';
// import DeviceScreen from '../screen/ChatScreen';
// import MenuScreen from '../screen/MenuScreen';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();

  const _renderItemScreen = (name: string, component: any) => (
    <Stack.Screen
      name={name}
      key={name}
      component={component}
    />
  );

  return (
    <Stack.Navigator
      screenOptions={{ gestureEnabled: false, headerShown: false }}>
      {_renderItemScreen('ChatScreen', ChatScreen)}
      {_renderItemScreen('AuthScreen', AuthScreen)}
      {_renderItemScreen('MenuScreen', MenuScreen)}
    </Stack.Navigator>
  )
}

export default AuthStack