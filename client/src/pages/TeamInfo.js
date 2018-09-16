import React, { Component } from 'react';
import Navbar from '../Navbar';

class TeamInfo extends Component {
    render() {
        const images = ["meet1.jpg", "meet1.jpg", "meet1.jpg", "meet1.jpg", "meet1.jpg"];

        const carouselIndicators = [];
        const imageComponents = [];
        images.forEach((name, index) => {
            carouselIndicators.push(<li data-target="#carouselComponent" data-slide-to={index} key={index} className={index == 0 ? "active" : "other"}></li>);
            imageComponents.push(
                <div className={`carousel-item${index == 0 ? " active" : ""}`}>
                    <img className="d-block mx-auto" src={`/images/${name}`} max-width="100%" max-height="100%" />
                </div>
            );
        });

        return (
            <div className="App">
                <Navbar />
                <div id="carouselComponent" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        {carouselIndicators}
                    </ol>
                    <div className="carousel-inner">
                        {imageComponents}
                    </div>
                    <a className="carousel-control-prev" href="#carouselComponent" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselComponent" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </div>
        );
    }
}

export default TeamInfo;
