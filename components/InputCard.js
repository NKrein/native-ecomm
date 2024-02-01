import { useState } from "react"
import { Pressable, Text, TextInput, View, StyleSheet } from "react-native"
import { PALETTE } from "../utils/colorPalette"

const InputCard = ({ handleAdd }) => {
  const [inputValue, setInputValue] = useState('')

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Nueva tarea' onChangeText={(value) => setInputValue(value)} />
      <Pressable style={styles.button} onPress={() => handleAdd(inputValue)}>
        <Text>🚀</Text>
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
    backgroundColor: PALETTE.paynesGray,
    borderRadius: 10
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PALETTE.richBlack50,
    borderRadius: 10,
    width: 30,
    height: 30
  },
  input : {
    backgroundColor: PALETTE.airBlue,
    color: PALETTE.richBlack,
    width: '80%',
    padding: 5,
    borderRadius: 5
  }
});


export default InputCard