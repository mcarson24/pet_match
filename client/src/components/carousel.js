import React from "react";


function Carousel() {
    return (

        <>

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous" />

            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">

                    <div className="carousel-item">
                        <img src="https://icatcare.org/app/uploads/2018/06/Layer-1704-1920x840.jpg" alt="test" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Pet Name</h5>
                            <p>Pet Desc</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="https://icatcare.org/app/uploads/2018/06/Layer-1704-1920x840.jpg" alt="test" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Pet Name</h5>
                            <p>Pet Desc</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="https://icatcare.org/app/uploads/2018/06/Layer-1704-1920x840.jpg" alt="test" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Pet Name</h5>
                            <p>Pet Desc</p>
                        </div>
                    </div>

                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </>

    )
}

export default Carousel;
