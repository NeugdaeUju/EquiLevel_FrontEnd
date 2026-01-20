import '../assets/scss/racesForm.scss'
import { useSelector } from 'react-redux'
// import { useState } from 'react'
import type { RootState } from '../store/store.ts'


type FormProps = {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    setRacesName: React.Dispatch<React.SetStateAction<string>>;
    racesName: string;
    setEspeceId: React.Dispatch<React.SetStateAction<string>>;
    especeId: string;
}

function RacesForm({ handleSubmit, setRacesName, racesName, setEspeceId, especeId } : FormProps) {
    const especes = useSelector((state: RootState) => state.especesGet.especes)

    const handleEspeceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setEspeceId(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit} className='race-form'>
            <label htmlFor='raceName' className='race-form__name'>Nom de la race</label>
            <input type='text'
                   value={racesName}
                   id='raceName'
                   onChange={(e) => setRacesName(e.target.value)}
                   required
                   placeholder='ex : Akhal Téké'
                   className='race-form__input'/>
            <label htmlFor='especeName' className='race-form__name'>Choisissez l'espèce</label>
            <select className='race-form__input' required value={especeId} onChange={handleEspeceChange}>
                <option className='race-form__option' value='' disabled>Choisissez une espèce</option>
                {especes.map(espece => (
                    <option key={espece._id} value={espece._id}>{espece.name}</option>
                ))}
            </select>
            <button type='submit' className='race-form__btn'>Valider</button>
        </form>
    )
}

export default RacesForm