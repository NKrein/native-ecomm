import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { PALETTE } from '../utils/colorPalette'
import { useSelector } from 'react-redux'

const Profile = ({ navigation }) => {

  const { user, profileImage } = useSelector(({ authReducer }) => authReducer.value)

  return (
    <View style={styles.container}>
      <Image
        source={profileImage
          ? { uri: profileImage }
          : require('../assets/default-profile-image.png')
        }
        style={styles.profileImage}
        resizeMode='contain' />
      <Text style={styles.title}>{user.displayName || user.email}</Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate('ImageSelector')}>
        <Text style={styles.buttonText}>
          {profileImage
            ? 'Cambiar imagen de perfil'
            : 'Agregar foto de perfil'
          }
        </Text>
      </Pressable>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: PALETTE.white,
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginVertical: 16,
  },
  title: {
    fontFamily: 'playRegular',
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PALETTE.white,
    borderColor: PALETTE.flame,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    minWidth: 40,
    minHeight: 40,
    margin: 16,
  },
  buttonText: {
    color: PALETTE.flame,
    fontFamily: 'playBold',
    fontSize: 18,
  },

})