import React, { useState } from "react";
import '../styles/login.css'

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
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
    console.log(props)
    props.logInUser(formState)
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
              <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
                  <input name='email' type="email" value={formState.email} onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password"
                    name="password"
                    value={formState.password}
                    onChange={handleChange}
                    class="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <button type="submit" class="btn btn-dark">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;