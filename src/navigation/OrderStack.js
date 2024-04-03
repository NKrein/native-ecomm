import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Order from '../sceens/Order'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()
const screenOptions = ({ route, navigation }) => {
  const handleBack = route.name !== 'Order'
    ? navigation.goBack
    : null
  return {
    header: () => <Header title={'Ordenes'} handleBack={handleBack} />
  }

}
const OrderStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name='Order' component={Order} />
    </Stack.Navigator>
  )
}

export default OrderStack