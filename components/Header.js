import { StyleSheet, Text, View } from 'react-native'
import { PALETTE } from '../utils/colorPalette'

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '12%',
    backgroundColor: PALETTE.timberwolf,
    borderRadius: 10,
    padding: 10,
    marginVertical: 12
  },
  text: {
    fontSize: 32,
    color: PALETTE.white,
    fontFamily: 'playBold'
  }
})