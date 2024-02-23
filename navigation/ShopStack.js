import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Header from "../components/Header"
import Home from "../sceens/Home"
import ItemListCategories from "../sceens/ItemListCategories"
import ItemDetail from "../sceens/ItemDetail"

const Stack = createNativeStackNavigator()

const ShopStack = () => {

  const screenOptions = ({ route, navigation }) => {
    const title = route.name === 'Home'
      ? 'Inicio'
      : route.name === 'ItemListCategories'
        ? route.params.category.title
        : route.params.item.name
    const handleBack = route.name !== 'Home'
      ? navigation.goBack
      : null
    return {
      header: () => <Header title={title} handleBack={handleBack} />
    }
  }

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ItemListCategories" component={ItemListCategories} />
      <Stack.Screen name="ItemDetail" component={ItemDetail} />
    </Stack.Navigator>
  )
}

export default ShopStack