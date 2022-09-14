import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
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
  const location = useLocation().state as { username: string }

  const usernameFromLocation = location?.username ? location.username : ''

  const resolver = useYupValidationResolver<LoginInputs>(loginSchema)
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ resolver })

  const loginPostRequest = (credentials: LoginInputs) => api.post('/users/login', credentials).then((res) => res.data)

  const mutate = useMutation(loginPostRequest, {
    onSuccess: (data) => {
      auth.login(data.username, data.token)
      navigate('/')
    },
    onError: (data) => {
      if ((data as any).response.status === 400) {
        toast('Username or password is incorrect', { type: 'error' })
      }
    }
  })

  return (
    <form onSubmit={handleSubmit((userInput) => mutate.mutateAsync(userInput))} className="flex flex-col gap-2 w-full">
      <FormItem
        error={errors.username}
        schema={register('username')}
        name="Username"
        defaultValue={usernameFromLocation}
        disabled={mutate.isLoading}
      />
      <FormItem
        error={errors.password}
        schema={register('password')}
        name="Password"
        type="password"
        disabled={mutate.isLoading}
      />

      <button
        className={`btn btn-primary ${mutate.isLoading ? 'loading' : ''}`}
        type="submit"
        disabled={mutate.isLoading}
      >Submit</button>
    </form>
  )
}

export default LoginForm
