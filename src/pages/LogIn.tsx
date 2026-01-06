import '../assets/scss/login.scss';
import Form from '../components/SubForm.tsx';

function LogIn() {
    return (
            <div className='login-container'>
                <h1 className='login-container__title'>LogIn</h1>
                <Form
                    button='LogIn'
                    link='/signup'
                    linkText="You don't have an account ? Go here !"/>
            </div>
    )
}

export default LogIn;