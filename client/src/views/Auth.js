import LoginForm from '../components/auth/LoginForm'
import RegisterForm from '../components/auth/RegisterForm'
const Auth = ({ authRoute }) => {
    let body = (
        <>
		{authRoute === 'login' && <LoginForm />}
        {authRoute === 'register' && <RegisterForm />}
        </>
    )
	return (
        <div className='body'>
        <div className="container-fluid">
            {body}
        </div>
        </div>
	)
}

export default Auth
