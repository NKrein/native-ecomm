import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import InputForm from '../components/InputForm'
import { PALETTE } from '../utils/colorPalette'

const Authentication = () => {

  const [register, setRegister] = useState(false)
  const [inputValidation, setInputValidation] = useState({})

  const handleSubmit = () => {
    if (register) {
      console.log('register')
    } else {
      console.log('login')
    }
  }

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          {register ? 'Registrarme' : 'Iniciar sesión'}
        </Text>
        <InputForm
          label='Email'
          handleChange={(value) => console.log(value)}
          error={inputValidation.email || ''} />
        <InputForm
          label='Contraseña'
          handleChange={(value) => console.log(value)}
          error={inputValidation.password || ''}
          isSecure />
        {register &&
          <InputForm
            label='Confirmar contraseña'
            handleChange={(value) => console.log(value)}
            error={inputValidation.passwordVerification || ''}
            isSecure />
        }
        <Pressable onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>
            {register ? 'Registrarme' : 'Iniciar sesión'}
          </Text>
        </Pressable>
        <View style={styles.optionContainer}>
          <Text style={styles.optionText}>
            {register ? '¿Ya tienes cuenta?' : 'Aún no tengo cuenta.'}
          </Text>
          <Pressable
            style={styles.optionButton}
            onPress={() => setRegister(!register)}>
            <Text style={styles.optionButtonText}>
              {register ? 'Ir a iniciar sesión' : 'Registrarme ahora'}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default Authentication

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: PALETTE.white,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: PALETTE.timberwolf,
    borderRadius: 10,
    width: '90%',
    marginHorizontal: '5%',
    padding: 16,
    alignItems: 'center'
  },
  heading: {
    fontFamily: 'playBold',
    textAlign: 'center',
    fontSize: 32,
    color: PALETTE.white,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PALETTE.white,
    borderColor: PALETTE.flame,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    minWidth: 40,
    minHeight: 40,
    margin: 16,
  },
  buttonText: {
    color: PALETTE.flame,
    fontFamily: 'playBold',
    fontSize: 18,
  },
  optionContainer: {
    width: '70%',
    marginHorizontal: '15%',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: PALETTE.eerieBlack50,
    padding: 10,
  },
  optionText: {
    fontFamily: 'playRegular',
    color: PALETTE.eerieBlack,
  },
  optionButton: {
    margin: 10,
  },
  optionButtonText: {
    fontFamily: 'playRegular',
    color: PALETTE.flame,
    textDecorationLine: 'underline',
  },
})