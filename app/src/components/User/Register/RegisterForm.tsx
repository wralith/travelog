import { useMutation } from '@tanstack/react-query'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { AuthContext } from '../../../context/authContext'
import { useYupValidationResolver } from '../../../hooks/useYupValidationResolver'
import { api } from '../../../utils/api'
import FormItem from '../../Shared/UI/Forms/FormItem'
import { RegisterInputs, registerSchema } from './registerValidationSchema'

function RegisterForm() {
  const navigate = useNavigate()
  const auth = useContext(AuthContext)

  const resolver = useYupValidationResolver<RegisterInputs>(registerSchema)
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ resolver })

  const inputMapper = (inputs: RegisterInputs): Omit<RegisterInputs, 'passwordConfirmation'> => ({
    username: inputs.username,
    email: inputs.email,
    password: inputs.password
  })

  const registerPostRequest = (registerInputs: RegisterInputs) =>
    api.post('/users/register', inputMapper(registerInputs)).then((res) => res.data)

  const mutate = useMutation(registerPostRequest, {
    onSuccess: (data) => {
      navigate('/login', { state: { username: data.username } })
    },
    onError: (data) => {
      toast(`Something went wrong code: ${(data as any).response.status}`, { type: 'error' })
    }
  })

  return (
    <form onSubmit={handleSubmit((userInput) => mutate.mutateAsync(userInput))} className="flex flex-col gap-2 w-full">
      <FormItem error={errors.username} schema={register('username')} name="Username" />
      <FormItem error={errors.email} schema={register('email')} name="Email" />
      <FormItem error={errors.password} schema={register('password')} name="Password" type="password" />
      <FormItem
        error={errors.passwordConfirmation}
        schema={register('passwordConfirmation')}
        name="Password Confirmation"
        type="password"
      />

      <input className="btn btn-primary" type="submit" />
    </form>
  )
}

export default RegisterForm
