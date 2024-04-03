import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PALETTE } from '../utils/colorPalette'

const Loading = ({ message, isLoading }) => {
  return (
    <Modal
      animationType='slide'
      transparent
      visible={isLoading}>
      <View style={styles.container}>
        <ActivityIndicator color={PALETTE.flame} size={'large'}/>
        <Text style={styles.text}>{message}</Text>
      </View>
    </Modal>
  )
}

export default Loading

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PALETTE.white80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 16,
    fontFamily: 'playBold',
    color: PALETTE.flame
  },
})