import Form from '../components/SubForm.tsx';
import { FaChevronLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { signup } from '../features/signup/signupSlice.ts'
import type { RootState, AppDispatch } from '../store/store.ts';

function SignUp() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const { loading: _loading, error: _error } = useSelector((state: RootState) => state.auth);
    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(signup({ email, password }));
        console.log('Vous avez cliquez sur le bouton !');
        navigate('/login');
    }

    return (
        <div className='login-container'>
            <div className='login-card'>
                <Link to='/login'  className='login-container__icon'><FaChevronLeft/></Link>
                <h1 className='login-container__title'>SignUp</h1>
                <Form
                    button='SignUp'
                    link='/login'
                    linkText="You already have an account ? Go there !"
                    handleSubmit={handleSubmit}
                    setEmail={setEmail}
                    email={email}
                    setPassword={setPassword}
                    password={password}/>
            </div>
        </div>
    )
}

export default SignUp;