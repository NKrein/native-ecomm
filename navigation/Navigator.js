import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from '../sceens/Home'
import ItemListCategories from '../sceens/ItemListCategories'
import Header from "../components/Header"
import ItemDetail from "../sceens/ItemDetail"

const Stack = createNativeStackNavigator()

const Navigator = () => {

  const screenOptions = ({ route, navigation }) => {
    const title = route.name === 'Home'
      ? 'Inicio'
      : route.name === 'ItemListCategories'
        ? route.params.category.title
        : 'ItemDetail'
    const handleBack = route.name !== 'Home'
      ? navigation.goBack
      : null
    return {
      header: () => <Header title={title} handleBack={handleBack}/>
    }
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ItemListCategories" component={ItemListCategories} />
        <Stack.Screen name="ItemDetail" component={ItemDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator