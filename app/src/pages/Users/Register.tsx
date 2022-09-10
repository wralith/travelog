import { Link } from 'react-router-dom'
import FormPageWrapper from '../../components/Shared/UI/Forms/FormPageWrapper'
import RegisterForm from '../../components/User/Register/RegisterForm'

export function Register() {
  return (
    <FormPageWrapper>
      <RegisterForm />
      <p className="text-right mt-5">
        Already have an account?{' '}
        <span>
          <Link to="/login" className="link link-primary">
            Login
          </Link>
        </span>
      </p>
    </FormPageWrapper>
  )
}
