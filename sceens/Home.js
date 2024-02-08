import { FlatList, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import categoriesList from '../assets/data/categories.json'
import CategoryCard from '../components/CategoryCard'

const Home = ({ handleCategorySelect }) => {
  return (
    <View style={styles.constainer}>
      <Header title={'Inicio'} />
      <FlatList
        data={categoriesList}
        renderItem={({item}) => <CategoryCard item={item} handlePress={handleCategorySelect}/>}
        keyExtractor={item => item.id} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    width: '90%',
  }
})