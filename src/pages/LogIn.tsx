import '../assets/scss/login.scss';
import Form from '../components/SubForm.tsx';
import { FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function LogIn() {
    return (
            <div className='login-container'>
                <h1 className='login-container__title'>LogIn</h1>
                <Link to='/'  className='login-container__icon'><FaChevronLeft/></Link>
                <Form
                    button='LogIn'
                    link='/signup'
                    linkText="You don't have an account ? Go here !"/>
            </div>
    )
}

export default LogIn;