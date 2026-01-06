import { FaPenToSquare } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import '../assets/scss/headbandEdit.scss';

function HeadBandEdit() {
    return (
        <div className='headband'>
            <FaPenToSquare className='headband__icon'/>
            <p className='headband__text'>Edit Mode</p>
            <Link to='/' className='headband__link'>LogOut</Link>
        </div>
    )
}

export default HeadBandEdit;