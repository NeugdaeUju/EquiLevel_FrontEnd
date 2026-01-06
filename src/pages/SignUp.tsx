import Form from '../components/SubForm.tsx';
import { FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <div className='login-container'>
            <div className='login-card'>
                <Link to='/login'  className='login-container__icon'><FaChevronLeft/></Link>
                <h1 className='login-container__title'>SignUp</h1>
                <Form
                    button='SignUp'
                    link='/login'
                    linkText="You already have an account ? Go there !"/>
            </div>
        </div>
    )
}

export default SignUp;