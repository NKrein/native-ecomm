import { FlatList, Pressable, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import Constants from "expo-constants"
import { useState } from 'react';

export default function App() {
  const [list, setList] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleRemove = (id) => {
    const updatedArray = list.filter(item => item.id !== id)
    setList(updatedArray)
  }

  const handleAdd = () => {
    const newItem = {
      id: Date.now(),
      task: inputValue,
      done: false
    }
    const updatedArray = [...list, newItem]
    setList(updatedArray)
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.main}>
        <Text>TO-DO list</Text>
        <View style={styles.card}>
          <TextInput placeholder='Nueva tarea' onChangeText={(value) => setInputValue(value)} />
          <Pressable onPress={handleAdd}>
            <Text>Agregar</Text>
          </Pressable>
        </View>
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.card}>{item.task}</Text>
              <Pressable onPress={() => handleRemove(item.id) }>
                <Text>Borrar</Text>
              </Pressable>
            </View>
          )}
          keyExtractor={item => item.id} />
        <Text>App by nkrein</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  main: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '80%',
    margin: 15
  },
});
