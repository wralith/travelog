import { useForm } from 'react-hook-form'
import { useYupValidationResolver } from '../../../hooks/useYupValidationResolver'
import FormItem from '../../Shared/UI/Forms/FormItem'
import { RegisterInputs, registerSchema } from './registerValidationSchema'

function RegisterForm() {
  const resolver = useYupValidationResolver<RegisterInputs>(registerSchema)
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ resolver })

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))} className="flex flex-col gap-2 w-full">
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
