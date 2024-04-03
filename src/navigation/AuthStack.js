import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Header from "../components/Header"
import Authentication from "../sceens/Authentication"

const Stack = createNativeStackNavigator()

const AuthStack = () => {

  const screenOptions = () => {
    return {
      header: () => <Header title={'Bienvenido'} />
    }
  }
  
  return (
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Authentication" component={Authentication} />
      </Stack.Navigator>
  )
}

export default AuthStack