import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import OrderStack from './OrderStack'
import { Image, StyleSheet, View } from 'react-native'
import { PALETTE } from '../utils/colorPalette'
import checkoutIconSolid from '../assets/icons/icon-checkout-solid.png'
import checkoutIconDisabled from '../assets/icons/icon-checkout-disabled.png'
import shopIconSolid from '../assets/icons/icon-shop-solid.png'
import shopIconDisabled from '../assets/icons/icon-shop-disabled.png'
import orderIconSolid from '../assets/icons/icon-order-solid.png'
import orderIconDisabled from '../assets/icons/icon-order-disabled.png'
import userIconSolid from '../assets/icons/icon-user-solid.png'
import userIconDisabled from '../assets/icons/icon-user-disabled.png'
import { useDispatch, useSelector } from 'react-redux'
import ProfileStack from './ProfileStack'
import { useGetProfileImageQuery } from '../services/shopAPI'
import { useEffect } from 'react'
import { setProfileImage } from '../features/authSlice'

const Tab = createBottomTabNavigator()

const Navigator = () => {
  const { user } = useSelector(({ authReducer }) => authReducer.value)
  const dispatch = useDispatch()
  const {data, isLoading, error } = useGetProfileImageQuery(user.localId)

  useEffect(() => {
    if (data) {
      dispatch(setProfileImage(data.image))
    }
  }, [data])

  const cart = useSelector(({ cartReducer }) => cartReducer.value.cart)
  const totalQty = cart.reduce((accum, current) => accum += current.qty, 0)

  const screenOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: styles.tabBar
  }

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name='ShopStack'
        component={ShopStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                style={styles.icon}
                source={focused ? shopIconSolid : shopIconDisabled} />
            </View>
          )
        }}
      />
      <Tab.Screen
        name='CartStack'
        component={CartStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                style={styles.icon}
                source={focused ? checkoutIconSolid : checkoutIconDisabled} />
            </View>
          ),
          tabBarBadge: totalQty || null,
          tabBarBadgeStyle: {
            backgroundColor: PALETTE.flame,
            color: PALETTE.white,
          }
        }}
      />
      <Tab.Screen
        name='OrderStack'
        component={OrderStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                style={styles.icon}
                source={focused ? orderIconSolid : orderIconDisabled} />
            </View>
          )
        }}
      />
      <Tab.Screen
        name='ProfileStack'
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                style={styles.icon}
                source={focused ? userIconSolid : userIconDisabled} />
            </View>
          )
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: PALETTE.white
  },
  icon: {
    width: 25,
    height: 25,
  },
});


export default Navigator