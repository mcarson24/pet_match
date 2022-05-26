import React from "react";
import '../styles/footer.css';
import fb from '../images/facebookDark.png';
import twitter from '../images/twitterDark.png';
import youtube from '../images/youtubeDark.png';

function Footer() {
    return (
        <>
            <div className="container-fluid footer">
                <div className="row justify-content-center ">

                    <div className='col-3 logoCol'>
                        <a href='/'><img src={fb} alt='' className='logos' /> </a>
                    </div>

                    <div className='col-3 logoCol'>
                        <a href='/'><img src={twitter} alt='' className='logos' /> </a>
                    </div>

                    <div className='col-3 logoCol'>
                        <a href='/'><img src={youtube} alt='' className='logos' /> </a>

                    </div>
                    <div>
                        <h5 className='petFinder'>Powered by Petfinder API</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;