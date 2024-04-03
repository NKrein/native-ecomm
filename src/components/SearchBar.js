import { useState } from "react"
import { Pressable, TextInput, View, StyleSheet, Image } from "react-native"
import { PALETTE } from "../utils/colorPalette"
import searchIcon from '../../assets/icons/icon-search-flame.png'
import deleteIcon from '../../assets/icons/icon-delete-back-line.png'

const SearchBar = ({ handleSearch }) => {
  const [inputValue, setInputValue] = useState('')

  const handlePress = () => handleSearch(inputValue)

  const handleBackLine = () => {
    setInputValue('')
    handleSearch('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setInputValue}
          value={inputValue} />
        <Pressable style={styles.backLineButton} onPress={handleBackLine}>
          {inputValue 
            ? <Image style={styles.icon} source={deleteIcon} resizeMode='contain'/>
            : null
          }
        </Pressable>
      </View>
      <Pressable style={styles.button} onPress={handlePress}>
        <Image style={styles.icon} source={searchIcon} resizeMode='contain'/>
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
    width: '100%',
    marginVertical: 15,
    padding: 15,
    backgroundColor: PALETTE.timberwolf,
    borderRadius: 10
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PALETTE.white,
    borderColor: PALETTE.flame,
    borderWidth: 1,
    borderRadius: 10,
    minWidth: 40,
    minHeight: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '80%',
    height: 32,
  },
  input: {
    backgroundColor: PALETTE.white,
    color: PALETTE.eerieBlack,
    width: '90%',
    padding: 5,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    height: 32,
  },
  backLineButton: {
    width: '10%',
    backgroundColor: PALETTE.white,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    height: 32,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 25,
    height: 25,
  }
});


export default SearchBar