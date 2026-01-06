import { FaPenToSquare } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../features/auth/authSlice';
import '../assets/scss/headbandEdit.scss';

function HeadBandEdit() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };
    return (
        <div className='headband'>
            <FaPenToSquare className='headband__icon'/>
            <p className='headband__text'>Edit Mode</p>
            <Link to='/' className='headband__link' onClick={handleLogout}>LogOut</Link>
        </div>
    )
}

export default HeadBandEdit;