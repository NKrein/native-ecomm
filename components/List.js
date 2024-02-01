import React from 'react'
import { FlatList, StyleSheet } from 'react-native';
import ListCard from './ListCard';

const List = ({ list, handleItemSelect }) => {
  return (
    <FlatList
      style={styles.container}
      data={list}
      renderItem={({ item }) => <ListCard item={item} handleItemSelect={handleItemSelect} />}
      keyExtractor={item => item.id} />
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  }
})
export default List