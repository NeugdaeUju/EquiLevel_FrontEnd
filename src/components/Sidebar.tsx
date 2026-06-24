import '../assets/styles/sidebar.css'

function Sidebar() {
    return (
        <header>
            <div className='header-block'>
                <h1 className='header-title'>Ecurie</h1>
                <span className='header-subtitle'>EQUIDOEW MANAGER</span>
            </div>

            <nav>
                <div className='navigation-block'>
                    <h2 className='navigation-block-title'>Général</h2>
                    <ul>
                        <li className='navigation-block-link active'>Tableau de bord</li>
                        <li className='navigation-block-link compteur'>
                            <p>Mes chevaux</p>
                            <span className='num'>12</span>
                        </li>
                    </ul>
                </div>
                <div className='navigation-block'>
                    <h2 className='navigation-block-title'>Elevage</h2>
                    <ul>
                        <li className='navigation-block-link'>Reproduction</li>
                        <li className='navigation-block-link'>Concours</li>
                    </ul>
                </div>
                <div className='navigation-block'>
                    <h2 className='navigation-block-title'>Suivi</h2>
                    <ul>
                        <li className='navigation-block-link'>Progression BLUP</li>
                        <li className='navigation-block-link'>Planning</li>
                        <li className='navigation-block-link'>Paramètres</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Sidebar;