import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { PALETTE } from '../utils/colorPalette'
import arrowIcon from '../../assets/icons/icon-arrow-left-flame.png'
import logOutIcon from '../../assets/icons/icon-logout-flame.png'
import { useDispatch, useSelector } from 'react-redux'
import { clearUser } from '../features/authSlice'
import { deleteSession } from '../db'

const Header = ({ title, handleBack }) => {
  const { user } = useSelector(({ authReducer }) => authReducer.value)
  const dispatch = useDispatch()

  const handleLogOut = async () => {
    dispatch(clearUser())
    try {
      deleteSession({ localId: user.localId })
    } catch (error) {
      console.log('Error ->', error)
    }
  }

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        <View style={styles.buttonBox}>
          {handleBack &&
            <Pressable style={styles.button} onPress={handleBack}>
              <Image style={styles.icon} source={arrowIcon} resizeMode='contain' />
            </Pressable>
          }
          {user &&
            <Pressable style={styles.logOutButton} onPress={handleLogOut}>
              <Image style={styles.icon} source={logOutIcon} resizeMode='contain' />
            </Pressable>
          }
        </View>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  background: {
    width: '100%',
    backgroundColor: PALETTE.white,
  },
  container: {
    width: '90%',
    height: 108,
    backgroundColor: PALETTE.timberwolf,
    borderRadius: 10,
    padding: 10,
    marginVertical: 12,
    marginHorizontal: '5%',
  },
  text: {
    fontSize: 32,
    color: PALETTE.white,
    fontFamily: 'playBold',
    marginBottom: 10,
  },
  buttonBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 16,
    position: 'relative',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PALETTE.white,
    borderColor: PALETTE.flame,
    borderWidth: 1,
    borderRadius: 10,
    minWidth: 40,
    minHeight: 40,
  },
  icon: {
    width: 25,
    height: 25,
  },
  logOutButton: {
    position: 'absolute',
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PALETTE.white,
    borderColor: PALETTE.flame,
    borderWidth: 1,
    borderRadius: 10,
    minWidth: 40,
    minHeight: 40,
  },
})