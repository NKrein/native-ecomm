import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import productsList from '../assets/data/products.json'
import SearchBar from '../components/SearchBar'
import ProductCard from '../components/ProductCard'
import Header from '../components/Header'

const ItemListCategories = ({ category, handleBack }) => {

  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState('')

  const handleSearch = (value) => setKeyword(value)

  useEffect(() => {
    const selectedCategoryItems = category.title
      ? productsList.filter(item => item.region === category.title)
      : productsList
    const updatedArray = selectedCategoryItems.filter(item => item.name.includes(keyword))
    setProducts(updatedArray)
  }, [category, keyword])

  return (
    <View style={styles.constainer}>
      <Header title={category.title || 'Todos los productos'} handleBack={handleBack} />
      <FlatList
        numColumns={2}
        data={products}
        renderItem={({ item }) => <ProductCard item={item} />}
        keyExtractor={item => item.id} />
      <SearchBar handleSearch={handleSearch} />
    </View>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    width: '90%',
  },
  cardsContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})