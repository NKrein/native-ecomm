import { StyleSheet, Text, View } from 'react-native'
import { PALETTE } from '../utils/colorPalette'

const Cart = () => {
  return (
    <View style={styles.container}>
      <Text>Cart</Text>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: PALETTE.white,
  }
})