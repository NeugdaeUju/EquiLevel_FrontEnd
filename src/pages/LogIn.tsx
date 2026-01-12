import '../assets/scss/login.scss';
import Form from '../components/SubForm.tsx';
import { FaChevronLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { login } from '../features/auth/authSlice.ts'
import type { RootState, AppDispatch } from '../store/store.ts';

function LogIn() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const { loading: _loading, error } = useSelector((state: RootState) => state.auth);
    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const token = useSelector((state: RootState) => state.auth.token)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(login({ email, password }));
        console.log('Vous avez cliquez sur le bouton !');
        
    }
    
    if (token) {
        navigate('/');
    }


    return (
            <div className='login-container'>
                <div className='login-card'>
                    <Link to='/'  className='login-container__icon'><FaChevronLeft/></Link>
                    <h1 className='login-container__title'>LogIn</h1>
                    <Form
                        button='LogIn'
                        link='/signup'
                        linkText="You don't have an account ? Go here !"
                        handleSubmit={handleSubmit}
                        setEmail={setEmail}
                        email={email}
                        setPassword={setPassword}
                        password={password}/>
                    {error && (
                        <p className='login-card__error'>
                            {error}
                        </p>
                    )}
                </div>
            </div>
    )
}

export default LogIn;