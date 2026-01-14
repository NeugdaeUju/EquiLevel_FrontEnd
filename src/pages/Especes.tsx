import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Modal from '../components/Modal.tsx';
import EspecesForm from '../components/EspecesForm.tsx';
import type { RootState, AppDispatch } from '../store/store.ts'
import '../assets/scss/especes.scss';
import { Link } from 'react-router-dom'
import { FaPenToSquare } from "react-icons/fa6";
import EspecesCard from '../components/EspecesCard.tsx';
import { createEspece } from '../features/especes/especesSlice.ts';
import { fetchEspeces } from '../features/especes/especesGetSlice.ts';

function Especes() {
    const token = useSelector((state: RootState) => state.auth.token)
    const especes = useSelector((state: RootState) => state.especesGet.especes)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useDispatch<AppDispatch>()
    const [name, setName] = useState('');

    useEffect(() => {
        dispatch(fetchEspeces());
    }, [dispatch]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(createEspece(name))
        console.log('Vous avez créer une especes :', name)
    }

    return(
        <div className='especes-container'>
            <div className='especes-container__hero'>
                <h1 className='especes-container__hero--title'>Espèces</h1>
                { token && 
                    <button onClick={() => setIsModalOpen(true)} className='especes-container__hero--button'> <FaPenToSquare/> Ajouter une espèces </button>}
                    <Modal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        title='Ajouter une espèce'>
                            <EspecesForm
                                handleSubmit={handleSubmit}
                                setEspecesName={setName}
                                especesName={name}/>
                    </Modal>
            </div>
            <div className='especes-container__list'>
                {especes.map(espece => (
                    <EspecesCard key={espece.id} name={espece.name} link={`/${espece.name.toLowerCase().replace(/\s+/g, '-')}`} />
                ))}
            </div>
            
            <Link to='/all-races' className='especes-container__btn'>Toute les races</Link>

        </div>
    )
}

export default Especes;