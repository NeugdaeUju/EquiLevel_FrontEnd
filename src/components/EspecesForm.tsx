// import React, { useState } from 'react';
import '../assets/scss/especesForm.scss'

type FormProps = {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    setEspecesName: React.Dispatch<React.SetStateAction<string>>;
    especesName: string
}

function EspecesForm({ handleSubmit, setEspecesName, especesName} : FormProps) {
    /*const [especeName, setEspeceName] = useState('')
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Vous avez créer une especes :', especeName)
    }*/

    return (
        <form onSubmit={handleSubmit} className='espece-form'>
            <label htmlFor='especeName' className='espece-form__name'>Nom de l'espèce</label>
            <input type='text'
                   value={especesName}
                   id='especeName'
                   onChange={(e) => setEspecesName(e.target.value)}
                   required
                   placeholder='ex : Akhal Téké'
                   className='espece-form__input'/>
            <button type='submit' className='espece-form__btn'>Valider</button>
        </form>
    )
}

export default EspecesForm