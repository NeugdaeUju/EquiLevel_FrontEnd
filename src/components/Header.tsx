import '../assets/styles/header.css';


function Header() {

    return (
        <div class='header'>
            <h1>Tableau de bord</h1>
            <div class='header-actions'>
                <input type='search' placeholder='Recherche...' class='research'></input>
                <button type='button' class='add-horse'>Nouveau Cheval</button>
            </div>
        </div>
    )
}

export default Header;