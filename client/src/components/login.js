import React from "react";
import '../styles/login.css'
import Footer from "./footer";

function Login() {
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

                        <form className="loginForm">

                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>

                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>

                            <button type="submit" class="btn btn-dark">Submit</button>
                        </form>




                    </div>
                </div>

            </div>

            <Footer />

        </>
    )
}

export default Login;