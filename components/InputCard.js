import { useState } from "react"
import { Pressable, Text, TextInput, View, StyleSheet } from "react-native"

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
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    margin: 15,
    padding: 15,
    backgroundColor: 'gray',
    borderRadius: 10
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'coral',
    borderRadius: '50%',
    width: 30,
    height: 30
  },
  input : {
    backgroundColor: 'beige',
    width: '60%',
    padding: 5,
    borderRadius: 5
  }
});


export default InputCard