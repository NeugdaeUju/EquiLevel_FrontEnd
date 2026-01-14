import { Link } from 'react-router-dom'
import '../assets/scss/donkeys.scss'

function SpecialsHorses() {
    return (
        <div className='container'>
            <h1 className='container__title' >Chevaux divins et spéciaux</h1>
            <div className='container__links'>
                <Link to='/all-races' className='container__links--link'>Toutes les races</Link>
                <Link to='/especes' className='container__links--link'>Voir toutes les expèces</Link>
            </div>
            
        </div>
    )
}

export default SpecialsHorses;