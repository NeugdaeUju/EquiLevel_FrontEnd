import { Link } from 'react-router-dom';
import '../assets/scss/header.scss'

function Header() {
    return (
        <header className='header'>
            <Link to='/' className='header__title'>EquiLevel</Link>
            <nav className='header__nav'>
                <p>Un lien</p>
                <p>Un second lien</p>
            </nav>
        </header>
    )
}

export default Header;