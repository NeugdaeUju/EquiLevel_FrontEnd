import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Modal from '../components/Modal.tsx';
import RacesForm from '../components/RacesForm.tsx';
import type { RootState, AppDispatch } from '../store/store.ts'
import { FaPenToSquare } from "react-icons/fa6";
// import EspecesCard from '../components/EspecesCard.tsx';
import { createEspece } from '../features/especes/especesSlice.ts';
import '../assets/scss/allRaces.scss'


function AllRaces() {
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
        <div className='races-container'>
            <div className='races-container__hero'>
                <h1 className='races-container__hero--title'>Toutes les races</h1>
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
            {/*<div className='races-container__list'>
                {especes.map(espece => (
                    <EspecesCard key={espece.id} name={espece.name} link={`/${espece.name.toLowerCase().replace(/\s+/g, '-')}`} />
                ))}
            </div>*/}

        </div>
    )
}

export default AllRaces