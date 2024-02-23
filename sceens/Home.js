import { FlatList, StyleSheet, View } from 'react-native'
import CategoryCard from '../components/CategoryCard'
import { PALETTE } from '../utils/colorPalette'
import { useSelector } from 'react-redux'

const Home = ({ navigation }) => {

  const categoriesList = useSelector(({ shopReducer }) => shopReducer.value.categories)

  return (
    <View style={styles.container}>
      <FlatList
        data={categoriesList}
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