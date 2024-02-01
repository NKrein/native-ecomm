import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants"
import { useState } from 'react';
import InputCard from './components/InputCard';
import List from './components/List';
import ModalConfirm from './components/ModalConfirm';
import { PALETTE } from './utils/colorPalette';

export default function App() {
  const [list, setList] = useState([])
  const [selectedItem, setSelectedItem] = useState({});

  const handleRemove = (id) => {
    const updatedArray = list.filter(item => item.id !== id)
    setList(updatedArray)
    setSelectedItem({})
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

  const handleModalClose = () => setSelectedItem({})
  const handleItemSelect = (item) => setSelectedItem(item)

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.main}>
        <Text>TO-DO list</Text>
        <InputCard handleAdd={handleAdd} />
        <List list={list} handleItemSelect={handleItemSelect}/>
        <Text>App by nkrein</Text>
      </View>
      <ModalConfirm
        handleModalClose={handleModalClose}
        handleRemove={handleRemove}
        selectedItem={selectedItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PALETTE.white,
  },
  main: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});
