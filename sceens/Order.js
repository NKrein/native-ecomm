import { FlatList, StyleSheet, Text, View } from 'react-native'
import { PALETTE } from '../utils/colorPalette'
import { useGetOrdersByUserIdQuery } from '../services/shopAPI'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import OrderCard from '../components/OrderCard'

const Order = () => {
  const { user } = useSelector(({ authReducer }) => authReducer.value)
  const { data, isLoading, error } = useGetOrdersByUserIdQuery(user.localId)
  const [ordersList, setOrdersList] = useState([])

  useEffect(() => {
    if (data) {
      const arrayFormatted = Object.entries(data).map(([key, value]) => ({ ...value, id: key }))
      setOrdersList(arrayFormatted)
    }
  }, [data])

  return (
    <View style={styles.container}>
      {ordersList.length === 0
        ? <View style={styles.emptyOrders}>
          <Text style={styles.emptyOrdersText}>No hay ordenes aún</Text>
        </View>
        : <FlatList
          data={ordersList}
          renderItem={({ item }) => <OrderCard item={item} />}
          keyExtractor={item => item.id} />
      }
      <Loading message='Cargando ordenes' isLoading={isLoading} />
    </View>
  )
}

export default Order

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: PALETTE.white,
  },
  emptyOrders: {
    flexGrow: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyOrdersText: {
    fontFamily: 'playRegular',
    fontSize: 32,
    margin: 16,
  },

})