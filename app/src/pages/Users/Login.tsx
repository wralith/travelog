import { Link } from 'react-router-dom'
import FormPageWrapper from '../../components/Shared/UI/Forms/FormPageWrapper'
import LoginForm from '../../components/User/Login/LoginForm'


export function Login() {
  return (
    <FormPageWrapper>
      <LoginForm />
      <p className="text-right mt-5">
        Do you need to create an account?{' '}
        <span>
          <Link to="/register" className="link link-primary">
            Register
          </Link>
        </span>
      </p>
    </FormPageWrapper>
  )
}
