import { FlatList, StyleSheet, View } from 'react-native'
import CategoryCard from '../components/CategoryCard'
import { PALETTE } from '../utils/colorPalette'
import { useGetCategoriesQuery } from '../services/shopAPI'

const Home = ({ navigation }) => {

  const { data, isLoading, error } = useGetCategoriesQuery()

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <CategoryCard item={item} navigation={navigation} />}
        keyExtractor={item => item.id} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: PALETTE.white,
  }
})