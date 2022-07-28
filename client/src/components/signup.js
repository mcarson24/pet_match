import '../styles/signup.css';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../utils/mutations';

const SignUp = props => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        props.signUpUser(formState)
    };

    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="signupHeader">Welcome to Pet Match</h1>
                </div>
            </div>
            <div className="container-fluid signupContainer">
                <div className="row justify-content-center">
                    <div className="col-10 signupCol">
                        <h2 className="signupH2">Sign Up</h2>
                        {props.data ? (
                            <p>
                                Success! You may now head{' '}
                                <Link to="/">back to the homepage.</Link>
                            </p>
                            ) : (
                            <form onSubmit={handleFormSubmit} className="signupForm">

                                <div className="form-group">
                                    <label htmlFor="name">Username</label>
                                    <input type="text" 
                                    name="name" className="form-control" id="user" aria-describedby="emailHelp" placeholder="Enter Username" value={formState.name} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Confirm Email address</label>
                                    <input name='email' type="email" value={formState.email} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password"
                                        name="password"
                                        value={formState.password}
                                        onChange={handleChange}
                                        className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-dark">Submit</button>
                                <br/>
                                <small id="emailHelp" className="form-text text-muted smallText">Already a user? <Link className="nav-item nav-link" to="/login">Login</Link></small>
                            </form>
                        )}
                        {props.error && (
                            <div className="my-3 p-3 bg-danger text-white">
                                {props.error.message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;