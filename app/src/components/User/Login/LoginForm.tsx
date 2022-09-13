import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { api } from '../../../utils/api'
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

  const loginPostRequest = (credentials: LoginInputs) => api.post('/users/login', credentials).then((res) => res.data)

  const mutate = useMutation(loginPostRequest, {
    onSuccess: (data, variables, context) => {
      auth.login((data as User).username)
      navigate('/')
    },
    onError: (data) => {
      if ((data as any).response.status === 400) {
        toast('Username or password is incorrect', { type: 'error' })
      }
    }
  })
  // const handleLogin = async (credentials: LoginInputs) => {

  // if (data) {
  //   console.log(data)
  //   auth.login((data as User).username)
  //   navigate('/')
  // }

  // console.log(error)
  // }

  return (
    <form onSubmit={handleSubmit((userInput) => mutate.mutateAsync(userInput))} className="flex flex-col gap-2 w-full">
      <FormItem error={errors.username} schema={register('username')} name="Username" />
      <FormItem error={errors.password} schema={register('password')} name="Password" type="password" />

      {mutate.isLoading && <p>Loading...</p>}

      <input className="btn btn-primary" type="submit" />
    </form>
  )
}

export default LoginForm
