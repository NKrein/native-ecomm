import { NavigationContainer } from '@react-navigation/native'
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

const Tab = createBottomTabNavigator()

const Navigator = () => {

  const screenOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: styles.tabBar
  }

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name='ShopStack'
          component={ShopStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image 
                  style={styles.icon} 
                  source={focused? shopIconSolid : shopIconDisabled} />
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
                  source={focused? checkoutIconSolid : checkoutIconDisabled} />
              </View>
            )
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
                  source={focused? orderIconSolid : orderIconDisabled} />
              </View>
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
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