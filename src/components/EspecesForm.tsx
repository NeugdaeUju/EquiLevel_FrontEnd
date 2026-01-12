import React, { useState } from 'react';

function EspecesForm() {
    const [especeName, setEspeceName] = useState('')
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Vous avez créer une especes :', especeName)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='especeName'>Nom de l'espèce</label>
            <input type='text'
                   value={especeName}
                   id='especeName'
                   onChange={(e) => setEspeceName(e.target.value)}
                   required
                   placeholder='ex : Akhal Téké'/>
            <button type='submit'>Valider</button>
        </form>
    )
}

export default EspecesForm