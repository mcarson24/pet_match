import React from 'react';
import '../styles/home.css'
import { Link } from 'react-router-dom'
import Carousel from '../components/carousel';

function Home() {
    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous" />
            <link rel='stylesheet' href='../styles/home.css' />
            <div>
                <div className="container">
                    <h1 className="homeHeader">Pet Match</h1>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <div className='col-8 slideCol'>
                        <Carousel/>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-4 smallBox'>
                        <h4 className='smallTitle'><Link to="/ourmission" className='links'>Our Mission</Link> </h4>   
                    </div>
                    <div className='col-4 smallBox'>
                    <h4 className='smallTitle'><Link to="/donate" className='links'>Make a difference</Link> </h4>    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;