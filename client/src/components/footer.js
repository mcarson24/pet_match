import React from "react";
import '../styles/footer.css';
import fb from '../images/facebookDark.png';
import twitter from '../images/twitterDark.png';
import youtube from '../images/youtubeDark.png';

function Footer() {
    const classes = {
        footer: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '1em'
        }
    }
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
                        <h5 className='petFinder' style={classes.footer}>
                            Powered by <a href="https://www.petfinder.com/developers/">Petfinder API</a>
                        </h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;