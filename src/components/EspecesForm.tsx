import React, { useState } from 'react';
import '../assets/scss/especesForm.scss'

function EspecesForm() {
    const [especeName, setEspeceName] = useState('')
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Vous avez créer une especes :', especeName)
    }

    return (
        <form onSubmit={handleSubmit} className='espece-form'>
            <label htmlFor='especeName' className='espece-form__name'>Nom de l'espèce</label>
            <input type='text'
                   value={especeName}
                   id='especeName'
                   onChange={(e) => setEspeceName(e.target.value)}
                   required
                   placeholder='ex : Akhal Téké'
                   className='espece-form__input'/>
            <button type='submit' className='espece-form__btn'>Valider</button>
        </form>
    )
}

export default EspecesForm