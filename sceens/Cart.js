import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { PALETTE } from '../utils/colorPalette'
import { useSelector } from 'react-redux'
import CartProductCard from '../components/CartProductCard'

const Cart = () => {

  const cart = useSelector(({ cartReducer }) => cartReducer.value.cart)
  const total = cart.reduce((accum, current) => accum += (current.price * current.qty), 0)

  return (
    <View style={styles.container}>
      {cart.length === 0
        ? <View style={styles.emptyCart}>
            <Text style={styles.emptyCartText}>El carrito está vacío</Text>
          </View>
        : <>
            <FlatList
              data={cart}
              renderItem={({ item }) => <CartProductCard item={item} />}
              keyExtractor={item => item.id} />
            <View style={styles.footer}>
              <View style={styles.cartDetail}>
                <Text style={styles.label}>TOTAL</Text>
                <Text style={styles.total}>${total}</Text>
              </View>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Confirmar</Text>
              </Pressable>
            </View>
          </>
      }
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: PALETTE.white,
  },
  footer: {
    backgroundColor: PALETTE.timberwolf,
    width: '90%',
    marginHorizontal: '5%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
    padding: 15,

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
  },
  buttonText: {
    color: PALETTE.flame,
    fontFamily: 'playBold',
    fontSize: 18,
  },
  cartDetail: {
    backgroundColor: PALETTE.white,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderRadius: 10,
    width: '40%',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'playRegular',
    fontSize: 12,
    margin: 5,
  },
  total: {
    fontFamily: 'playBold',
    fontSize: 20,
  },
  emptyCart: {
    flexGrow: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontFamily: 'playRegular',
    fontSize: 32,
    margin: 16,
  },
})