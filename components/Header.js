import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { PALETTE } from '../utils/colorPalette'
import arrowIcon from '../assets/icons/icon-arrow-left-flame.png'
import checkoutIcon from '../assets/icons/icon-checkout-flame.png'

const Header = ({ title, handleBack }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.buttonBox}>
        <Pressable style={styles.button}>
          <Image style={styles.icon} source={checkoutIcon} />
        </Pressable>
        {handleBack &&
          <Pressable style={styles.button} onPress={handleBack}>
            <Image style={styles.icon} source={arrowIcon} />
          </Pressable>
        }
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: PALETTE.timberwolf,
    borderRadius: 10,
    padding: 10,
    marginVertical: 12
  },
  text: {
    fontSize: 32,
    color: PALETTE.white,
    fontFamily: 'playBold',
    marginBottom: 10,
  },
  buttonBox: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
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
    resizeMode: 'contain'
  }
})