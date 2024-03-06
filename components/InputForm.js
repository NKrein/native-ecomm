import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { PALETTE } from '../utils/colorPalette'

const InputForm = ({ label, handleChange, error= '', isSecure = false}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={error 
          ? {...styles.input, ...styles.invalidInput}
          : styles.input
        }
        onChangeText={handleChange}
        secureTextEntry={isSecure}/>
      {error 
        ? <Text style={styles.error}>{error}</Text>
        : null
      }
    </View>
  )
}

export default InputForm

const styles = StyleSheet.create({
  container: {
    margin: 16,
    width: '80%',
  },
  label: {
    fontFamily: 'playRegular',
    marginBottom: 4,
    color: PALETTE.eerieBlack,
    fontSize: 16,
  },
  input: {
    backgroundColor: PALETTE.white,
    color: PALETTE.eerieBlack,
    width: '90%',
    marginHorizontal: '5%',
    padding: 5,
    borderRadius: 10,
    height: 32,
    fontFamily: 'playRegular',
  },
  invalidInput: {
    shadowColor: PALETTE.errorBorder,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 10,
  },
  error: {
    fontFamily: 'playRegular',
    color: PALETTE.error,
    fontSize: 12,
    marginHorizontal: '5%',
    marginTop: 5,
  }
})