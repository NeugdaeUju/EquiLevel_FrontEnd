import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Modal from '../components/Modal.tsx';
import RacesForm from '../components/RacesForm.tsx';
import type { RootState, AppDispatch } from '../store/store.ts'
import { FaPenToSquare } from "react-icons/fa6";
import { createEspece } from '../features/especes/especesSlice.ts';
import { Link } from 'react-router-dom'
import '../assets/scss/races.scss'

function Horses() {
    const token = useSelector((state: RootState) => state.auth.token)
    //const especes = useSelector((state: RootState) => state.especesGet.especes)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useDispatch<AppDispatch>()
    const [name, setName] = useState('');

    /*useEffect(() => {
        dispatch(fetchEspeces());
    }, [dispatch]);*/

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(createEspece(name))
        console.log('Vous avez créer une especes :', name)
    }

    return (
        <div className='container'>
            <div className='container__hero'>
                <h1 className='container__hero__title' >Chevaux de selle</h1>
                { token && 
                    <button onClick={() => setIsModalOpen(true)} className='races-container__hero--button'> <FaPenToSquare/> Ajouter une race </button>}
                    <Modal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        title='Ajouter une race'>
                            <RacesForm
                                handleSubmit={handleSubmit}
                                setRacesName={setName}
                                racesName={name}/>
                    </Modal>
            </div>
            <div className='container__links'>
                <Link to='/all-races' className='container__links--link'>Toutes les races</Link>
                <Link to='/especes' className='container__links--link'>Voir toutes les expèces</Link>
            </div>
            
        </div>
    )
}

export default Horses;