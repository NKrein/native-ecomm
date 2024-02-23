import { FlatList, StyleSheet, View } from 'react-native'
import categoriesList from '../assets/data/categories.json'
import CategoryCard from '../components/CategoryCard'
import { PALETTE } from '../utils/colorPalette'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categoriesList}
        renderItem={({item}) => <CategoryCard item={item} navigation={navigation}/>}
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