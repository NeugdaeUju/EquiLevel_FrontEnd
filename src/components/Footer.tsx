import '../assets/scss/footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='footer'>
            <Link to='/login' className='footer_link'>© 2024 EquiLevel. All rights reserved.</Link>
        </footer>
    )
}

export default Footer;