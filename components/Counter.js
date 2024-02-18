import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import addIcon from '../assets/icons/icon-add-flame.png'
import subtractIcon from '../assets/icons/icon-subtract-flame.png'
import deleteIcon from '../assets/icons/icon-delete-flame.png'
import { useState } from 'react'
import { PALETTE } from '../utils/colorPalette'

const Counter = ({ item, short = false }) => {
  const [qty, setQty] = useState(0)
  const isInCart = qty > 0

  const handleAdd = () => {
    if (qty < item.stock) {
      setQty(prev => prev + 1)
    }
  }

  const handleSubtract = () => {
    if (qty >= 1) {
      setQty(prev => prev - 1)
    }
  }

  const handleDelete = () => {
    setQty(0)
  }


  if (isInCart) {
    return (
      <View style={styles.container}>
        {!short &&
          <Pressable style={styles.button} onPress={handleDelete}>
            <Image style={styles.icon} source={deleteIcon} />
          </Pressable>
        }
        <Pressable style={styles.button} onPress={handleSubtract}>
          <Image style={styles.icon} source={subtractIcon} />
        </Pressable>
        <Text style={styles.text}>
          {qty}
        </Text>
        <Pressable style={styles.button} onPress={handleAdd}>
          <Image style={styles.icon} source={addIcon} />
        </Pressable>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={handleAdd}>
        <Image style={styles.icon} source={addIcon} resizeMode='contain'/>
      </Pressable>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PALETTE.white,
    borderColor: PALETTE.flame,
    borderWidth: 1,
    borderRadius: 10,
    minWidth: 35,
    minHeight: 35,
    marginHorizontal: 4
  },
  icon: {
    width: 20,
    height: 20,
  },
  text: {
    margin: 8,
    fontFamily: 'playBold',
    color: PALETTE.flame,
    fontSize: 16
  }
})