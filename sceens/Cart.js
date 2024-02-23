import { FlatList, StyleSheet, Text, View } from 'react-native'
import { PALETTE } from '../utils/colorPalette'
import { useSelector } from 'react-redux'

const Cart = () => {

  const cart = useSelector(({ cartReducer }) => cartReducer.value.cart)

  return (
    <View style={styles.container}>
      <Text>Cart</Text>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>qty: {item.qty}</Text>
          </View>
        )}
        keyExtractor={item => item.id} />
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