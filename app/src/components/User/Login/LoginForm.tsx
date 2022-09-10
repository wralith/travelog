import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../context/authContext'
import { useYupValidationResolver } from '../../../hooks/useYupValidationResolver'
import FormItem from '../../Shared/UI/Forms/FormItem'
import { LoginInputs, loginSchema } from './loginValidationSchema'

function LoginForm() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const resolver = useYupValidationResolver<LoginInputs>(loginSchema)
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ resolver })

  const handleLogin = (values: LoginInputs) => {
    console.log(values)
    auth.login()
    navigate("/")
  }

  return (
    <form onSubmit={handleSubmit((data) => handleLogin(data))} className="flex flex-col gap-2 w-full">
      <FormItem error={errors.username} schema={register('username')} name="Username" />
      <FormItem error={errors.password} schema={register('password')} name="Password" type="password" />

      <input className="btn btn-primary" type="submit" />
    </form>
  )
}

export default LoginForm
