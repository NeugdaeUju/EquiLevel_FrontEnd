import { Link } from 'react-router-dom';
import type { FormEvent } from 'react';

type HeaderProps = {
    button: string;
    link: string;
    linkText: string;
}

function Form({ button, link, linkText }: HeaderProps) {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('You clicked submit.')
    }

    return (
        <form className='login-container__form' onSubmit={handleSubmit}>
            <label className='login-container__form__label'>Email : </label>
            <input type='email' name='email' className='login-container__form__input' placeholder='exemple@e-mail.com'/>
            <label className='login-container__form__label'>Password : </label>
            <input type='password' name='password' className='login-container__form__input' placeholder='Your password'/>
            <button type='submit' className='login-container__form__btn'>{button}</button>
            <Link to={link} className='login-container__form__link'>{linkText}</Link>
        </form>
    )
}

export default Form;