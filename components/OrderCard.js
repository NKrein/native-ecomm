import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PALETTE } from '../utils/colorPalette'
import { timeAgo } from '../utils/dataFormat'

const OrderCard = ({ item }) => {

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <View style={styles.detailSection}>
          <Text numberOfLines={1} style={styles.timeAgo}>Hace {timeAgo(item.timestamp)}</Text>
          <Text numberOfLines={1} style={styles.name}>{item.id}</Text>
          <Text style={styles.price}>$ {item.total}</Text>
        </View>
      </View>
    </View>
  )
}

export default OrderCard

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
  details: {
    flexGrow: 2,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  detailSection: {
    width: '100%',
    backgroundColor: PALETTE.white,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  name: {
    fontFamily: 'playRegular',
    fontSize: 20,
  },
  price: {
    fontFamily: 'playBold',
    fontSize: 20,
  },
  timeAgo: {
    fontFamily: 'playRegular',
    fontSize: 13,
  }
})