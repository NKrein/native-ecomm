import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigator from './Navigator'
import AuthStack from './AuthStack'

const MainNavigator = () => {
  const user = false
  return (
    <NavigationContainer>
      {user ? <Navigator /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default MainNavigator