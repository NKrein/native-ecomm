import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { PALETTE } from '../utils/colorPalette'
import Counter from './Counter'
import { useDispatch } from 'react-redux'
import { setProductSelected } from '../features/shopSlice'

const ProductCard = ({ item, navigation }) => {

  const dispatch = useDispatch()

  return (
    <Pressable
      onPress={() => {
        dispatch(setProductSelected(item))
        navigation.navigate('ItemDetail', { item })
      }}
      style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          resizeMode='contain'
          source={{ uri: item.image }} />
        <Text numberOfLines={1} style={styles.text}>{item.name}</Text>
        <Text style={styles.text}>${item.price}</Text>
        <Counter item={item} short />
      </View>
    </Pressable>
  )
}

export default ProductCard

const styles = StyleSheet.create({
  container: {
    height: 245,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    backgroundColor: PALETTE.timberwolf,
    borderRadius: 10,
    width: '90%',
    height: '90%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 110,
    backgroundColor: PALETTE.eerieBlack,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text: {
    margin: 5,
    color: PALETTE.eerieBlack,
    fontFamily: 'playRegular',
    fontSize: 16
  }
})