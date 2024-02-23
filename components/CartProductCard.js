import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Counter from './Counter'
import { PALETTE } from '../utils/colorPalette'

const CartProductCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode='contain'
        source={{ uri: item.image }} />
      <View style={styles.details}>
        <View style={styles.detailSection}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>$ {item.price * item.qty}</Text>
        </View>
        <View style={styles.counterSection}>
          <Counter item={item} />
        </View>
      </View>
    </View>
  )
}

export default CartProductCard

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    marginHorizontal: '5%',
    marginVertical: 8,
    padding: 10,
    backgroundColor: PALETTE.timberwolf,
    borderRadius: 10,
  },
  image: {
    width: '30%',
    height: 112,
    backgroundColor: PALETTE.eerieBlack,
    borderRadius: 10,
  },
  details: {
    flexGrow: 2,
    justifyContent: 'center',
    marginLeft: 10,
  },
  detailSection: {
    width: '100%',
    height: 56,
    backgroundColor: PALETTE.white,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  counterSection: {
    alignItems: 'flex-end',
    height: 56,
    justifyContent: 'center',
    marginBottom: -10,
    marginTop: 10,
    marginRight: -10
  },
  name: {
    fontFamily: 'playRegular',
    fontSize: 20,
  },
  price: {
    fontFamily: 'playBold',
    fontSize: 20,
  },
})