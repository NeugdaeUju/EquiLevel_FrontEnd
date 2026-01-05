// import { Link } from 'react-router-dom';
import '../assets/scss/header.scss'

function Header() {
    return (
        <header className='header'>
            <h1 className='header__title'>EquiLevel</h1>
            <nav className='header__nav'>
                <p>Un lien</p>
                <p>Un second lien</p>
            </nav>
        </header>
    )
}

export default Header;