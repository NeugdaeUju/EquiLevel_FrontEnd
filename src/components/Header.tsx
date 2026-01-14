import { Link } from 'react-router-dom';
import '../assets/scss/header.scss'

function Header() {
    return (
        <header className='header'>
            <Link to='/' className='header__title'>EquiLevel</Link>
            <nav className='header__nav'>
                <Link to='/'>Accueils</Link>
                <Link to='/especes'>Especes</Link>
            </nav>
        </header>
    )
}

export default Header;