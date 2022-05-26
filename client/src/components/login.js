import React, { useState } from "react";
import '../styles/login.css'

import Footer from "./footer";

import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };


    return (
        <>

            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="loginHeader">Welcome to Pet Match</h1>
                </div>
            </div>

            <div className="container-fluid loginContainer">

                <div className="row justify-content-center">
                    <div className="col-10 loginCol">

                        <h2 className="loginH2">Login</h2>

                        <form onSubmit={handleFormSubmit} className="loginForm">

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
                        </form>




                    </div>
                </div>

            </div>

            <Footer />

        </>
    )
}

export default Login;