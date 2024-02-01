import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { PALETTE } from '../utils/colorPalette';

const ListCard = ({ item, handleItemSelect }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.task}</Text>
      <Pressable style={styles.button} onPress={() => handleItemSelect(item)}>
        <Text>🗑️</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '90%',
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 15,
    backgroundColor: PALETTE.paynesGray,
    borderRadius: 10,
  },
  text: {
    flex: 1,
    color: PALETTE.richBlack,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PALETTE.richBlack50,
    borderRadius: 10,
    width: 30,
    height: 30,
    marginLeft: 10
  }
});

export default ListCard