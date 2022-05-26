import React from 'react';
import '../styles/pet.css';
import Footer from './footer';


function Pet() {
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
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>

                    </div>
                </div>
            </div>


            <Footer />

        </>
    )
}

export default Pet;