import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import productsList from '../assets/data/products.json'
import { PALETTE } from '../utils/colorPalette'
import Counter from '../components/Counter'

const ItemDetail = ({ route }) => {
  const [product, setProduct] = useState({})
  const { id } = route.params

  useEffect(() => {
    const selectedItem = productsList.find(item => item.id === id)
    setProduct(selectedItem)
  }, [id])

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode='cover'
        source={{ uri: product.image }} />
      <ScrollView style={styles.detail}>
        <Text style={styles.heading}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </ScrollView>
      <View style={styles.counterContainer}>
        <View style={styles.bottomBar}>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.unit}>/{product.weight}g</Text>
        </View>
        <Counter item={product} />
      </View>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PALETTE.white,
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: '40%',
    backgroundColor: PALETTE.eerieBlack,
    borderRadius: 10,
    marginVertical: 16,
  },
  detail: {
    width: '90%',
    maxHeight: '40%',
    color: PALETTE.eerieBlack,
    marginVertical: 0,
    flexGrow: 2,
  },
  heading: {
    fontFamily: 'playBold',
    color: PALETTE.eerieBlack,
    fontSize: 26,
    marginVertical: 8,
  },
  description: {
    fontFamily: 'playRegular',
    color: PALETTE.eerieBlack,
    fontSize: 16,
    marginVertical: 8,
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  price: {
    fontFamily: 'playBold',
    color: PALETTE.eerieBlack,
    fontSize: 24,
    textAlign: 'right',
    marginLeft: 10,
    marginRight: 3,
  },
  counterContainer: {
    backgroundColor: PALETTE.timberwolf,
    width: '90%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
    padding: 10,

  }
})