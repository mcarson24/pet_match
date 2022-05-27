import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import auth from '../utils/auth';

function Nav(props) {
    const logout = async () => {
        await auth.logout()
    }

    const classes = {
        logout: {
            background: 'none',
            border: 'none'
        },
        nav: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '0 2em'
        },
        navSection: {
            display: 'flex',
            flexDirection: 'row'
        }
    }

    return(
        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
                integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
                crossOrigin="anonymous"
            />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <nav className="navbar  navbar-expand-lg navbar-light">
                <button className="navbar-toggler navBtn" type="button" data-toggle="collapse" data-target="#mobileNav" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mainNav" id="mobileNav">
                    <div className="navbar-nav" style={classes.nav}>
                        <div style={classes.navSection}>
                            <Link className="nav-item nav-link links" to="/">Home</Link> 
                            {props.user && <Link className="nav-item nav-link links" to="/profile">Profile</Link> }
                            <Link className="nav-item nav-link links" to="/pets">Pets</Link>
                            <Link className="nav-item nav-link links" to="/ourmission">Our Mission</Link>
                            <Link className="nav-item nav-link links" to="/donate">Donate</Link>
                        </div>
                        <div style={classes.navSection}>
                            {!props.user && (
                                <>
                                    <Link className="nav-item nav-link links" to="/signup">Sign Up</Link>
                                    <Link className="nav-item nav-link links" to="/login">Log In</Link>
                                </>
                            )}
                            {props.user && <button onClick={() => logout()} className="nav-item nav-link links" style={classes.logout}>Logout</button>}
                        </div>
                    </div>
                </div>
            </nav>

            
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossOrigin="anonymous"></script>           
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous"></link>
           

        </>
    )
}

export default Nav;