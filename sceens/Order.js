import { StyleSheet, Text, View } from 'react-native'
import { PALETTE } from '../utils/colorPalette'

const Order = () => {
  return (
    <View style={styles.container}>
      <Text>Order</Text>
    </View>
  )
}

export default Order

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: PALETTE.white,
  }
})