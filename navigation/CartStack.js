import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Header from "../components/Header"
import Cart from "../sceens/Cart"

const Stack = createNativeStackNavigator()

const CartStack = () => {

  const screenOptions = ({ route, navigation }) => {
    const handleBack = route.name !== 'Cart'
      ? navigation.goBack
      : null
    return {
      header: () => <Header title={'Carrito'} handleBack={handleBack}/>
    }
  }
  
  return (
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
  )
}

export default CartStack