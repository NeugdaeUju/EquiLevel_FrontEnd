import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Modal from '../components/Modal.tsx';
import RacesForm from '../components/RacesForm.tsx';
import type { RootState, AppDispatch } from '../store/store.ts'
import { FaPenToSquare } from "react-icons/fa6";
import RacesCard from '../components/RacesCard.tsx';
import { createRace } from '../features/races/racesSlice.ts';
import { fetchRaces } from '../features/races/racesGetSlice.ts';
import { fetchEspeces } from '../features/especes/especesGetSlice.ts';
import '../assets/scss/allRaces.scss'
import { Link } from 'react-router-dom';


function AllRaces() {
    const token = useSelector((state: RootState) => state.auth.token)
    const createdRace = useSelector((state: RootState) => state.races.race)
    const races = useSelector((state: RootState) => state.racesGet.races)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useDispatch<AppDispatch>()
    const [name, setName] = useState('');
    const [especeId, setEspeceId] = useState('');

    useEffect(() => {
        dispatch(fetchRaces());
        dispatch(fetchEspeces());
    }, [dispatch]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(createRace({name , especeId}))
        console.log('Vous avez créé une race :', name)
    }

    useEffect(() => {
        if (createdRace?._id) {
            console.log('ID de la race créée :', createdRace._id);
            setIsModalOpen(false);
            setName('');
            setEspeceId('');
        }
    }, [createdRace]);

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
                                racesName={name}
                                setEspeceId={setEspeceId}
                                especeId={especeId}/>
                    </Modal>
            </div>
            <div className='races-container__filtres-container'>
                <Link to="/horses" className='races-container__filtres'>Chevaux de selle</Link>
                <Link to="/poneys" className='races-container__filtres'>Poneys de selle</Link>
                <Link to="/trail-horses" className='races-container__filtres'>Chevaux de trait</Link>
                <Link to="/donkeys" className='races-container__filtres'>Anes</Link>
                <Link to="/special-horses" className='races-container__filtres'>Chevaux spéciaux et divins</Link>

            </div>
            <div className='races-container__list'>
                {races.map(race => (
                    <RacesCard key={race._id} name={race.name} link={`/races/${race._id}`}/>
                ))}
            </div>

        </div>
    )
}

export default AllRaces