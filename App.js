import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants"
import { useState } from 'react';
import InputCard from './components/InputCard';
import List from './components/List';

export default function App() {
  const [list, setList] = useState([])


  const handleRemove = (id) => {
    const updatedArray = list.filter(item => item.id !== id)
    setList(updatedArray)
  }

  const handleAdd = (inputValue) => {
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
        <InputCard handleAdd={handleAdd} />
        <List list={list} handleRemove={handleRemove} />
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
  }
});
