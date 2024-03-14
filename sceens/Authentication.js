import { useEffect, useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import InputForm from '../components/InputForm'
import { PALETTE } from '../utils/colorPalette'
import { useLogInMutation, useSignUpMutation } from '../services/authAPI'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/authSlice'
import Loading from '../components/Loading'
import { loginSchema, signUpSchema } from '../validations'
import { Toast } from 'toastify-react-native'

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
    setInputValidation({})
    try {
      if (register) {
        signUpSchema.validateSync({ email, password, passwordVerification })
        triggerSignUp({ email, password })
      } else {
        loginSchema.validateSync({ email, password })
        triggerLogin({ email, password })
      }
    } catch (error) {
      const { path, message } = error
      setInputValidation({ [path]: message })
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
    if (loginResult.isError || signUpResult.isError) {
      const error = loginResult.error || signUpResult.error
      const message = error.data.error.message
      if (signUpResult.isError && message.includes('EMAIL_EXISTS')) {
        Toast.error('El email ya está registrado.')
      }
      if (message.includes('INVALID_EMAIL')) {
        setInputValidation({ email: 'No es un email válido.' })
      }
      if (message.includes('TOO_MANY_ATTEMPTS_TRY_LATER')) {
        Toast.error('Demasiados intentos, hemos bloqueado momentáneamente el dispositivo. Vuelva a intentarlo más tarde.')
      }
      if (message.includes('EMAIL_NOT_FOUND')) {
        Toast.error('Usuario no encontrado.')
      }
      if (message.includes('INVALID_LOGIN_CREDENTIALS')) {
        Toast.error('Credenciales inválidas.\nIntente nuevamente.')
      }
    }
  }, [loginResult, signUpResult])

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      scrollEnabled={true}
      style={{ flex: 1, width: '100%', backgroundColor: PALETTE.white }}
      contentContainerStyle={styles.background}>
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
            onPress={() => {
              setRegister(!register)
              setInputValidation({})
            }}>
            <Text style={styles.optionButtonText}>
              {register ? 'Ir a iniciar sesión' : 'Registrarme ahora'}
            </Text>
          </Pressable>
        </View>
      </View>
      <Loading message='Cargando' isLoading={loginResult.isLoading || signUpResult.isLoading} />
    </ScrollView>
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