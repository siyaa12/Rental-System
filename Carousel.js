import React from 'react'
import './Signup.css'
import { useHistory } from "react-router-dom";
import cycle from './cycle.jpg'
import riksha from './e-riksha.jpg'

export default function Carousel() {
    const history = useHistory();

    const routeChangeCYCLE = () => {
        let path = `/Cyclebook`;
        history.push(path);
    }
    const routeChangeRikshaw = () => {
        let path = `/Rikshawbook`;
        history.push(path);
    }
    return (
        <div style = {{ backgroundImage: `url(${Image})`,height:'100vh' }}>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={cycle} className="d-block w-100 height" alt="..." />

                        <div className="carousel-caption d-none d-md-block">
                            <h5 style = {{color:'Window',fontSize:'40px',fontWeight:'bold'}}>Pick Up  Cycle</h5>
                            <p style = {{color:'Window',fontSize:'40px',fontWeight:'bold'}}>Ride as long as you want  </p>
                            <button class="btn btn-outline-success buttonforbooking" onClick={routeChangeCYCLE} href="/Cyclebook" >
                                Book your cycle
                            </button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={riksha} className="d-block w-100 height" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 style = {{color:'Window',fontSize:'40px',fontWeight:'bold'}}>Book E-rickshaw</h5>
                            <p style = {{color:'Window',fontSize:'40px',fontWeight:'bold'}}>Travel with Safety and save your precious time </p>

                            <button class="btn btn-outline-success buttonforbooking" onClick={routeChangeRikshaw} href="/Rikshawbook" >
                                Book your e-rikshaw
                            </button>
                        </div>
                    </div>
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
        </div>
    )
}
