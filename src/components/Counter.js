import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import addIcon from '../../assets/icons/icon-add-flame.png'
import subtractIcon from '../../assets/icons/icon-subtract-flame.png'
import deleteIcon from '../../assets/icons/icon-delete-flame.png'
import { PALETTE } from '../utils/colorPalette'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../features/cartSlice'

const Counter = ({ item, short = false }) => {
  const cart = useSelector(({ cartReducer }) => cartReducer.value.cart)
  const dispatch = useDispatch()
  const productInCart = cart.find(element => element.id === item.id)

  const handleAdd = () => {
    if (productInCart?.qty < item.stock || !productInCart) {
      dispatch(addToCart({ ...item, qty: 1 }))
    }
  }

  const handleSubtract = () => {
    if (productInCart.qty > 1) {
      dispatch(addToCart({ ...item, qty: -1 }))
    } else {
      dispatch(deleteFromCart(productInCart))
    }
  }

  const handleDelete = () => {
    dispatch(deleteFromCart(productInCart))
  }


  if (productInCart) {
    return (
      <View style={styles.container}>
        {!short &&
          <Pressable style={styles.button} onPress={handleDelete}>
            <Image style={styles.icon} source={deleteIcon} />
          </Pressable>
        }
        <Pressable style={styles.button} onPress={handleSubtract}>
          <Image style={styles.icon} source={subtractIcon} />
        </Pressable>
        <Text style={styles.text}>
          {productInCart.qty}
        </Text>
        <Pressable style={styles.button} onPress={handleAdd}>
          <Image style={styles.icon} source={addIcon} />
        </Pressable>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={handleAdd}>
        <Image style={styles.icon} source={addIcon} resizeMode='contain' />
      </Pressable>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PALETTE.white,
    borderColor: PALETTE.flame,
    borderWidth: 1,
    borderRadius: 10,
    minWidth: 35,
    minHeight: 35,
    marginHorizontal: 4
  },
  icon: {
    width: 20,
    height: 20,
  },
  text: {
    margin: 8,
    fontFamily: 'playBold',
    color: PALETTE.flame,
    fontSize: 16
  }
})