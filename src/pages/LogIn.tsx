import { Link } from 'react-router-dom';
import '../assets/scss/login.scss';

function LogIn() {
    return (
            <div className='login-container'>
                <h1 className='login-container__title'>LogIn</h1>
                <form className='login-container__form'>
                    <label className='login-container__form__label'>Email : </label>
                    <input type='email' name='email' className='login-container__form__input'/>
                    <label className='login-container__form__label'>Password : </label>
                    <input type='password' name='password' className='login-container__form__input'/>
                    <button type='submit' className='login-container__form__btn'>LogIn</button>
                    <Link to="/signup" className='login-container__form__link'>No account ? SignUp here</Link>
                </form>
            </div>
    )
}

export default LogIn;