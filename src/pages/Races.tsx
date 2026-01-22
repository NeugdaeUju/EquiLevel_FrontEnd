import type { RootState } from '../store/store.ts'
import { useSelector } from 'react-redux';
//import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// import Modal from '../components/Modal.tsx';
import '../assets/scss/race.scss'
import { FaPenToSquare } from "react-icons/fa6";

function Races() {
    const { id } = useParams<{ id: string}>()

    const raceState = useSelector((state : RootState) => state.racesGet)
    const especeState = useSelector((state : RootState) => state.especesGet)
    const token = useSelector((state: RootState) => state.auth.token)

    const race = raceState.races.find(r => r._id === id)
    const espece = race ? especeState.especes.find(e => e._id === race.especeId) : undefined

    //console.log(race)
    //console.log (espece)
    
    if(raceState.loading || especeState.loading) {
        return <h1>Chargement...</h1>
    }

    if(!race) {
        return <h1>Race non trouvée</h1>
    }
    

    return(
         <>
            <div className='race-dashboard'>
                <div className='race-dashboard__hero'>
                    <h1 className='race-dashboard__hero--title'>{race.name}</h1>
                    {token &&
                        <button /*onClick={() => setIsModalOpen(true)}*/ className='race-dashboard__hero--button'> <FaPenToSquare/> Ajouter une espèces </button>}
                </div>
                

                <div className='race-dashboard__presentation'>
                    <img src='' alt="" className='race-dashboard__presentation--image'/>
                    <div className='race-dashboard__presentation__informations'>
                        <h2 className='read-only' hidden>Informations générales de la race</h2>
                        <p><span className='race-dashboard__presentation__informations--name'>Espèces : </span>{espece ? espece.name : '-'}</p>
                        <p><span className='race-dashboard__presentation__informations--name'>Meilleures compétences : </span>{}</p>
                        <p><span className='race-dashboard__presentation__informations--name'>Localisation Centre équestre : </span>{}</p>
                        <p><span className='race-dashboard__presentation__informations--name'>Spécialisation : </span>{}</p>
                        <div className='race-dashboard__presentation__informations__links'>
                            <Link to='/' className='race-dashboard__presentation__informations__links--link'>Reproduction</Link>
                            <Link to='/' className='race-dashboard__presentation__informations__links--link'>Robes</Link>
                        </div>
                    </div>
                </div>

                <div className='race-dashboard__etapes-vie'>
                    <h2 className='read-only' hidden>Etapes de vie d'un cheval</h2>
                    <div className='race-dashboard__etapes-vie__block'>
                        <h3>Jeux</h3>
                        <img src='' alt=""/>
                    </div>
                    <div className='race-dashboard__etapes-vie__block'>
                        <h3>Balades</h3>
                        <img src='' alt=""/>
                    </div>
                    <div className='race-dashboard__etapes-vie__block'>
                        <h3>Entraînements</h3>
                        <img src='' alt=""/>
                    </div>
                    <div className='race-dashboard__etapes-vie__block'>
                        <h3>Compétitions</h3>
                        <img src='' alt=""/>
                    </div>
                    <div className='race-dashboard__etapes-vie__block'>
                        <h3>Compétences</h3>
                        <img src='' alt=""/>
                    </div>
                    <div className='race-dashboard__etapes-vie__block'>
                        <h3>Blup 100</h3>
                        <img src='' alt=""/>
                    </div>
                </div>

                <div className='race-dashboard__reproduction'>
                    <h2>Reproduction</h2>
                    <div className='race-dashboard__reproduction__types'>
                        <div className='race-dashboard__reproduction__types--competences'>
                            <h3>Compétences</h3>
                        </div>
                        <div className='race-dashboard__reproduction__types--robes'>
                            <h3>Robes</h3>
                        </div>
                    </div>
                    
                </div>

                <div className='race-dashboard__links'>
                    <h2 className='read-only' hidden>Liens de navigations</h2>
                    <Link to='/all-races'>Retourner sur la page des races</Link>
                    <Link to='/especes'>Retourner sur la page des especes</Link>
                </div>
            </div>

            
        </>
            
    )
}

export default Races

/*<Modal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        title='Ajouter une espèce'
                        children=''>
                    </Modal>

*/