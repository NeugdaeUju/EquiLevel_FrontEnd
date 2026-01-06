import { Link } from 'react-router-dom';
import type { FormEvent } from 'react';
import '../assets/scss/login.scss';

function LogIn() {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('You clicked submit.')
    }
    return (
            <div className='login-container'>
                <h1 className='login-container__title'>LogIn</h1>
                <form className='login-container__form' onSubmit={handleSubmit}>
                    <label className='login-container__form__label'>Email : </label>
                    <input type='email' name='email' className='login-container__form__input' placeholder='exemple@e-mail.com'/>
                    <label className='login-container__form__label'>Password : </label>
                    <input type='password' name='password' className='login-container__form__input' placeholder='Your password'/>
                    <button type='submit' className='login-container__form__btn'>LogIn</button>
                    <Link to="/signup" className='login-container__form__link'>No account ? SignUp here</Link>
                </form>
            </div>
    )
}

export default LogIn;