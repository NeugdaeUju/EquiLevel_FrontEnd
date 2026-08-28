import '../assets/styles/header.css';


function Header() {

    return (
        <div className='header'>
            <h1>Tableau de bord</h1>
            <div className='header-actions'>
                <input type='search' placeholder='Recherche...' className='research'></input>
                <button type='button' className='add-horse'>Nouveau Cheval</button>
            </div>
        </div>
    )
}

export default Header;