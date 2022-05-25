import React from 'react';
import axios from 'axios';

import '../styles/pet.css';


function Pet() {
    const [pets, setPets] = useState([])

    const getPets = () => {
        axios.get('http://localhost:3001/api/token')
             .then(res => {
                 setPets(res.data.animals)
             })
    }

    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="petHeader">Search</h1>
                </div>
            </div>

            <div className='container-fluid'>

                <div className='row justify-content-center'>
                    <div className='col-10 searchCol'>

                        <form className="form-inline searchBar">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search Pets" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit"
                                    onClick={() => getPets()}
                                    >
                                    Search
                            </button>
                        </form>

                    </div>
                </div>
                <div>
                    {pets.map(pet => (
                        <div key={pet.id}>
                            <h2>{ pet.name }</h2>
                            <h4>{ pet.age } | { pet.gender } | { pet.size }</h4>
                            <img src={pet.photos[0].large} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Pet