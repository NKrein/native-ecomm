import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import Profile from '../sceens/Profile'
import ImageSelector from '../sceens/ImageSelector'

const Stack = createNativeStackNavigator()
const screenOptions = ({ route, navigation }) => {
  const handleBack = route.name !== 'Profile'
    ? navigation.goBack
    : null
  return {
    header: () => <Header title={'Perfil'} handleBack={handleBack} />
  }

}
const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='ImageSelector' component={ImageSelector} />
    </Stack.Navigator>
  )
}

export default ProfileStack