import { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import InputForm from '../components/InputForm'
import { PALETTE } from '../utils/colorPalette'
import { useLogInMutation, useSignUpMutation } from '../services/authAPI'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/authSlice'
import Loading from '../components/Loading'

const Authentication = () => {

  const [register, setRegister] = useState(false)
  const [inputValidation, setInputValidation] = useState({})
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordVerification, setPasswordVerification] = useState('')
  const [triggerLogin, loginResult] = useLogInMutation()
  const [triggerSignUp, signUpResult] = useSignUpMutation()

  const dispatch = useDispatch()

  const handleSubmit = () => {
    if (register) {
      triggerSignUp({ email, password })
    } else {
      triggerLogin({ email, password })
    }
  }

  useEffect(() => {
    if (loginResult.isSuccess) {
      const { data } = loginResult
      dispatch(setUser(data))
    }
    if (signUpResult.isSuccess) {
      const { data } = signUpResult
      dispatch(setUser(data))
    }
  }, [loginResult, signUpResult])

  if (loginResult.isError || signUpResult.isError) {
    const error = loginResult.error || signUpResult.error
    const message = error.data.error.message
    if (message.includes('EMAIL_EXISTS')) {
      console.log('Email ya existe')
    }
    if (message.includes('INVALID_EMAIL')) {
      console.log('Email inválido')
    }
    if (message.includes('TOO_MANY_ATTEMPTS_TRY_LATER')) {
      console.log('Hemos bloqueado todas las solicitudes de este dispositivo debido a una actividad inusual. Vuelve a intentarlo más tarde.')
    }
    if (message.includes('EMAIL_NOT_FOUND')) {
      console.log('Usuario no encontrado')
    }
    if (message.includes('INVALID_LOGIN_CREDENTIALS')) {
      console.log('Credenciales inválidas, intente nuevamente')
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
          handleChange={setEmail}
          error={inputValidation.email || ''} />
        <InputForm
          label='Contraseña'
          handleChange={setPassword}
          error={inputValidation.password || ''}
          isSecure />
        {register &&
          <InputForm
            label='Confirmar contraseña'
            handleChange={setPasswordVerification}
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
      <Loading message='Cargando' isLoading={loginResult.isLoading || signUpResult.isLoading} />
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