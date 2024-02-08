import { useState } from "react"
import { Pressable, Text, TextInput, View, StyleSheet, Image } from "react-native"
import { PALETTE } from "../utils/colorPalette"
import addIcon from '../assets/icon-search-flame.png'

const SearchBar = ({ handleSearch }) => {
  const [inputValue, setInputValue] = useState('')

  const handlePress = () => {
    handleSearch(inputValue)
    setInputValue('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Nueva tarea'
        onChangeText={setInputValue}
        value={inputValue} />
      <Pressable style={styles.button} onPress={handlePress}>
        <Image style={styles.icon} source={addIcon} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    margin: 15,
    padding: 15,
    backgroundColor: PALETTE.timberwolf,
    borderRadius: 10
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PALETTE.white,
    borderColor: PALETTE.flame,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    minWidth: 40,
    minHeight: 40,
  },
  input: {
    backgroundColor: PALETTE.white,
    color: PALETTE.eerieBlack,
    width: '80%',
    padding: 5,
    borderRadius: 5
  },
  icon: {
    width: 25,
    height: 25,
    objectFit: 'contain'
  }
});


export default SearchBar