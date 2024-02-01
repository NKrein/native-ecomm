import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { PALETTE } from '../utils/colorPalette';
import deleteIcon from '../assets/icon-delete-flame.png'

const ListCard = ({ item, handleItemSelect }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.task}</Text>
      <Pressable style={styles.button} onPress={() => handleItemSelect(item)}>
        <Image style={styles.icon} source={deleteIcon} />
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
    backgroundColor: PALETTE.timberwolf,
    borderRadius: 10,
  },
  text: {
    flex: 1,
    color: PALETTE.eerieBlack,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PALETTE.white,
    borderColor: PALETTE.flame,
    borderWidth: 2,
    borderRadius: 10,
    minWidth: 40,
    minHeight: 40,
    marginLeft: 10,
    padding: 10,
  },
  icon: {
    width: 20,
    height: 20,
    objectFit: 'contain'
  }
});

export default ListCard