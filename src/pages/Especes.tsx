import { useSelector } from 'react-redux';
import { useState} from 'react';
import Modal from '../components/Modal.tsx';
import EspecesForm from '../components/EspecesForm.tsx';
import type { RootState} from '../store/store.ts'
import '../assets/scss/especes.scss';
import { Link } from 'react-router-dom'
import { FaPenToSquare } from "react-icons/fa6";

function Especes() {
    const token = useSelector((state: RootState) => state.auth.token)
    const [isModalOpen, setIsModalOpen] = useState(false);

    return(
        <div className='especes-container'>
            <div className='especes-container__hero'>
                <h1 className='especes-container__hero--title'>Espèces</h1>
                { token && 
                    <button onClick={() => setIsModalOpen(true)} className='especes-container__hero--button'> <FaPenToSquare/> Ajouter une espèces </button>}
                    <Modal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        title='Ajouter une espèces'>
                            <EspecesForm/>
                    </Modal>
            </div>
            <div className='especes-container__list'>
                <figure className='especes-container__list--especes'>
                    <Link to='/horses'>
                        <div className='especes-container__list--especes__image'></div> {/* Cette div deviendra une image */}
                        <figcaption className='especes-container__list--especes__name'>Chevaux</figcaption>
                    </Link>
                </figure> 
                
                <figure className='especes-container__list--especes'>
                    <Link to='/poneys'>
                        <div className='especes-container__list--especes__image'></div> {/* Cette div deviendra une image */}
                        <figcaption className='especes-container__list--especes__name'>Poneys</figcaption>
                    </Link>
                </figure>
                
                <figure className='especes-container__list--especes'>
                    <Link to='/trail-horses'>
                        <div className='especes-container__list--especes__image'></div> {/* Cette div deviendra une image */}
                        <figcaption className='especes-container__list--especes__name'>Chevaux de trait</figcaption>
                    </Link>
                </figure>
                
                <figure className='especes-container__list--especes'>
                    <Link to='/donkeys'>
                        <div className='especes-container__list--especes__image'></div> {/* Cette div deviendra une image */}
                        <figcaption className='especes-container__list--especes__name'>Anes</figcaption>
                    </Link>
                </figure>
                
                <figure className='especes-container__list--especes'>
                    <Link to='/special-horses'>
                        <div className='especes-container__list--especes__image'></div> {/* Cette div deviendra une image */}
                        <figcaption className='especes-container__list--especes__name'>Chevaux spéciaux et divins</figcaption></Link>
                </figure>
                
            </div>
            
        </div>
    )
}

export default Especes;