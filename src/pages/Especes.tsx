import { useSelector } from 'react-redux';
import { useState} from 'react';
import Modal from '../components/Modal.tsx';
import EspecesForm from '../components/EspecesForm.tsx';
import type { RootState} from '../store/store.ts'

// import ModalRaces from '../components/ModalRaces.tsx';
import { Link } from 'react-router-dom'

function Especes() {
    const token = useSelector((state: RootState) => state.auth.token)
    const [isModalOpen, setIsModalOpen] = useState(false);

    return(
        <div className='container'>
            <div className='hero'>
                <h1>Espèces</h1>
                { token && 
                    <button onClick={() => setIsModalOpen(true)}> Ajouter une espèces </button>}
                    <Modal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        title='Ajouter une espèces'>
                            <EspecesForm/>
                    </Modal>
            </div>
            <div className='especes-list'>
                <article className='espace-list_especes'>
                    <Link to='/horses'>Chevaux</Link>
                </article>
                
                <article className='espace-list_especes'>
                    <Link to='/poneys'>Poneys</Link>
                </article>
                
                <article className='espace-list_especes'>
                    <Link to='/trail-horses'>Chevaux de trait</Link>
                </article>
                
                <article className='espace-list_especes'>
                    <Link to='/donkeys'>Anes</Link>
                </article>
                
                <article className='espace-list_especes'>
                    <Link to='/special-horses'>Chevaux spéciaux et divins</Link>
                </article>
                
            </div>
            
        </div>
    )
}

export default Especes;