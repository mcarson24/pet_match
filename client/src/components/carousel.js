import React from "react";
import '../styles/carousel.css'

const Carousel = () => (
    <>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100 slidePics" src="https://placeimg.com/1080/500/animals" alt="First slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Shadow</h5>
                        <p >She can be kind of a jerk, but so can all cats, right?</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 slidePics" src="https://placeimg.com/1080/500/arch" alt="Second slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Rover</h5>
                        <p>A very good dog.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 slidePics" src="https://placeimg.com/1080/500/nature" alt="Third slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Pet Name</h5>
                        <p>Pet Info</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a className="carousel-control-next" href="#" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </div>
    </>
)

export default Carousel;
