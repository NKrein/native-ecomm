import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';

const ListCard = ({ item, handleRemove }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.task}</Text>
      <Pressable style={styles.button} onPress={() => handleRemove(item.id)}>
        <Text>🗑️</Text>
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
    marginBottom: 15,
    padding: 15,
    backgroundColor: 'gray',
    borderRadius: 10,
  },
  text: {
    flex: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'coral',
    borderRadius: '50%',
    width: 30,
    height: 30,
    marginLeft: 10
  }
});

export default ListCard