import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import SearchBar from '../components/SearchBar'
import ProductCard from '../components/ProductCard'
import { PALETTE } from '../utils/colorPalette'
import { useSelector } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../services/shopAPI'

const ItemListCategories = ({ navigation }) => {

  const category = useSelector(({ shopReducer }) => shopReducer.value.categorySelected)
  const { data, isLoading, error} = useGetProductsByCategoryQuery(category.title)
  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState('')

  const handleSearch = (value) => setKeyword(value)

  useEffect(() => {
    if (data) {
      const productsArray = Object.values(data)
      const updatedArray = productsArray.filter(item => item.name.includes(keyword))
      setProducts(updatedArray)  
    }
  }, [data, keyword])

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