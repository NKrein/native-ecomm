import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigator from './Navigator'
import AuthStack from './AuthStack'
import { useSelector } from 'react-redux'

const MainNavigator = () => {
  const user = useSelector(({ authReducer }) => authReducer.value.user)
  return (
    <NavigationContainer>
      {user ? <Navigator /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default MainNavigator