import { useForm } from 'react-hook-form'
import { useYupValidationResolver } from '../../../hooks/useYupValidationResolver'
import FormItem from '../../Shared/UI/FormItem'
import { LoginInputs, loginSchema } from './loginValidationSchema'

function LoginForm() {
  const resolver = useYupValidationResolver<LoginInputs>(loginSchema)
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ resolver })

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))} className="flex flex-col gap-2 w-full">
      <FormItem error={errors.username} schema={register('username')} name="Username" />
      <FormItem error={errors.password} schema={register('password')} name="Password" type="password" />

      <input className="btn btn-primary" type="submit" />
    </form>
  )
}

export default LoginForm
