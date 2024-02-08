import { Pressable, StyleSheet, Text, View } from 'react-native'
import { PALETTE } from '../utils/colorPalette'

const CategoryCard = ({ item, handlePress }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => handlePress(item)}>
        <Text style={styles.text}>{item.title}</Text>
      </Pressable>
    </View>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
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