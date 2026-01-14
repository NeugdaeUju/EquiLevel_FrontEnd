import { Link } from 'react-router-dom';
// import type { FormEvent } from 'react';

type HeaderProps = {
    button: string;
    link: string;
    linkText: string;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    email: string;
    password: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
}

function Form({ button, link, linkText, handleSubmit, email, password, setEmail, setPassword }: HeaderProps) {

    return (
        <form className='login-container__form' onSubmit={handleSubmit}>
            <label className='login-container__form__label'>Email : </label>
            <input type='email' name='email' className='login-container__form__input' placeholder='exemple@e-mail.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label className='login-container__form__label'>Password : </label>
            <input type='password' name='password' className='login-container__form__input' placeholder='Your password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit' className='login-container__form__btn'>{button}</button>
            <Link to={link} className='login-container__form__link'>{linkText}</Link>
        </form>
    )
}

export default Form;