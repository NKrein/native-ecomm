import { object, ref, string } from "yup";

export const signUpSchema = object().shape({
  email: string().required('Campo obligatorio.').email('No es un email válido.'),
  password: string().required('Campo obligatorio.').min(6, 'Debe tenr al menos 6 caracteres.'),
  passwordVerification: string().oneOf([ref('password'), null], 'Contraseñas no coinciden.').required('Campo obligatorio.')
})

export const loginSchema = object().shape({
  email: string().required('Campo obligatorio.').email('No es un email válido.'),
  password: string().required('Campo obligatorio.').min(6, 'Debe tenr al menos 6 caracteres.'),
})