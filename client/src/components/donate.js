import React from "react";
import '../styles/donate.css'
import Footer from "./footer";

function Donate() {
    return (
        <>

            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="donateHeader">Our Favorite Non Profits</h1>
                </div>
            </div>

            <h2 className="donateH2">Here are some great causes doing amazing things for their communties</h2>

            <div className="row justify-content-center">
                

                <div className="col-4 donateBox">
                    <h3>Box</h3>
                </div>

                <div className="col-4 donateBox">
                    <h3>Box</h3>
                </div>

                <div className="col-4 donateBox">
                    <h3>Box</h3>
                </div>

                <div className="col-4 donateBox">
                    <h3>Box</h3>
                </div>

                <div className="col-4 donateBox">
                    <h3>Box</h3>
                </div>

                <div className="col-4 donateBox">
                    <h3>Box</h3>
                </div>

                <div className="col-4 donateBox">
                    <h3>Box</h3>
                </div>

                <div className="col-4 donateBox">
                    <h3>Box</h3>
                </div>

            </div>

            <Footer />

        </>
    )
}

export default Donate;