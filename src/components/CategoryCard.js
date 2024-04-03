import { Pressable, StyleSheet, Text, View } from 'react-native'
import { PALETTE } from '../utils/colorPalette'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../features/shopSlice'

const CategoryCard = ({ item, navigation }) => {

  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <Pressable onPress={() => {
        dispatch(setCategorySelected(item))
        navigation.navigate('ItemListCategories', { category: item })
      }}>
        <Text style={styles.text}>{item.title}</Text>
      </Pressable>
    </View>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginVertical: 12,
    marginHorizontal: '5%',
    backgroundColor: PALETTE.timberwolf,
    padding: 12,
    borderRadius: 10
  },
  text: {
    color: PALETTE.white,
    fontSize: 24,
    fontFamily: 'playRegular'
  }
})