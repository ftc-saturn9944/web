import React, { Component } from 'react';
import Navbar from '../Navbar';

class TeamInfo extends Component {
    render() {
        const images = ["unf.jpg", "meet1.jpg", "meet2.jpg", "scorpion.jpg", "trophy.jpg", "alumn.jpg"];

        const carouselIndicators = [];
        const imageComponents = [];
        images.forEach((name, index) => {
            carouselIndicators.push(<li data-target="#carouselComponent" data-slide-to={index} key={index} className={index === 0 ? "active" : "other"}></li>);
            imageComponents.push(
                <div className={`carousel-item${index === 0 ? " active" : ""}`}>
                    <img className="img-fluid mx-auto d-block" src={`/images/${name}`} max-width="100%" max-height="100%" alt="" />
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
                <div className="container-fluid">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Why compete in robot leagues?</h5>
                                    <p class="card-text">
                                        <p>
                                            SATURN is the robotics team of Mandarin High School, located in Jacksonville, Florida. SATURN consists of students in their freshman year all the way up to their senior year.
                                        </p>
                                        <ul>
                                            <li>Combine our skills to create a fully-functioning robot</li>
                                            <li>Take part in FTC competitions for the chance to win awards and scholarships</li>
                                            <li>Learn great skills that will prepare us for future careers</li>
                                            <li>Perfect the art of gracious professionalism</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TeamInfo;
