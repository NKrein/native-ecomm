import React from 'react'
import { FlatList, StyleSheet } from 'react-native';
import ListCard from './ListCard';

const List = ({ list, handleRemove }) => {
  return (
    <FlatList
      style={styles.container}
      data={list}
      renderItem={({ item }) => <ListCard item={item} handleRemove={handleRemove} />}
      keyExtractor={item => item.id} />
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  }
})
export default List