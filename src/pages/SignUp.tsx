import Form from '../components/SubForm.tsx';
import { FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <div className='login-container'>
            <h1 className='login-container__title'>SignUp</h1>
            <Link to='/login'  className='login-container__icon'><FaChevronLeft/></Link>
            <Form
                button='SignUp'
                link='/login'
                linkText='You have an account ? Go there !'/>
        </div>
    )
}

export default SignUp;