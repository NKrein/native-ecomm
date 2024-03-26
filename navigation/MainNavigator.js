import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigator from './Navigator'
import AuthStack from './AuthStack'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSession } from '../db'
import { setUser } from '../features/authSlice'
import Loading from '../components/Loading'

const MainNavigator = () => {
  const { user} = useSelector(({ authReducer }) => authReducer.value)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        const session = await fetchSession()
        if (session.rows.length) {
          const user = session.rows._array[0]
          dispatch(setUser(user))
        }
      } catch (error) {
        console.log('Error ->', error.message)
      } finally {
        setLoading(false)
      }
    })()
  }, [])
  
  return (
    <NavigationContainer>
      {user ? <Navigator /> : <AuthStack />}
      <Loading isLoading={loading} />
    </NavigationContainer>
  )
}

export default MainNavigator