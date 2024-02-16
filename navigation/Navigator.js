import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from '../sceens/Home'
import ItemListCategories from '../sceens/ItemListCategories'
import Header from "../components/Header"

const Stack = createNativeStackNavigator()

const Navigator = () => {

  const screenOptions = ({ route }) => {
    const title = route.name === 'Home'
      ? 'Inicio'
      : route.name === 'ItemListCategories'
        ? route.params.category.title
        : 'ItemDetail'
    return {
      header: () => <Header title={title}/>
    }
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ItemListCategories" component={ItemListCategories} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator