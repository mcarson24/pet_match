import React, { useState } from 'react';
import axios from 'axios';

function Pet() {
    const [pets, setPets] = useState([])
    const getPets = () => {
        axios.get('http://localhost:3001/api/token')
             .then(res => {
                 setPets(res.data.animals)
             })
    }
    return(
        <>
            <button onClick={() => getPets()}>Get Pets</button>
            <div>
                {pets.map(pet => (
                    <div key={pet.id}>
                        <h2>{ pet.name }</h2>
                        <h4>{ pet.age } | { pet.gender } | { pet.size }</h4>
                        <img src={pet.photos[0].large} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Pet