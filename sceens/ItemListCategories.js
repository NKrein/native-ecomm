import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import productsList from '../assets/data/products.json'
import SearchBar from '../components/SearchBar'
import ProductCard from '../components/ProductCard'
import { PALETTE } from '../utils/colorPalette'

const ItemListCategories = ({ route, navigation }) => {

  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState('')

  const { category } = route.params

  const handleSearch = (value) => setKeyword(value)

  useEffect(() => {
    const selectedCategoryItems = category.title
      ? productsList.filter(item => item.region === category.title)
      : productsList
    const updatedArray = selectedCategoryItems.filter(item => item.name.includes(keyword))
    setProducts(updatedArray)
  }, [category, keyword])

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <FlatList
          numColumns={2}
          data={products}
          renderItem={({ item }) => <ProductCard item={item} navigation={navigation} />}
          keyExtractor={item => item.id} />
        <SearchBar handleSearch={handleSearch} />
      </View>
    </View>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: PALETTE.white,
    alignItems: 'center'
  },
  container: {
    flex: 1,
    width: '90%',
    backgroundColor: PALETTE.white,
  },
})