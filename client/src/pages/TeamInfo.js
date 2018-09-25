import React, { Component } from 'react';
import Navbar from '../components/Navbar';

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
                <Navbar page="team-info" />
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
                    <div className="card-holder">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card">
                                    <h5 className="card-header">Why compete in robot leagues?</h5>
                                    <div className="card-body">
                                        <div className="card-text">
                                            <p>
                                                SATURN is the robotics team of Mandarin High School, located in Jacksonville, Florida. SATURN consists of students in their freshman year all the way up to their senior year.
                                        </p>
                                            <ul>
                                                <li>Combine our skills to create a fully-functioning robot</li>
                                                <li>Take part in FTC competitions for the chance to win awards and scholarships</li>
                                                <li>Learn great skills that will prepare us for future careers</li>
                                                <li>Perfect the art of gracious professionalism</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card">
                                    <h5 className="card-header">Want to contact us?</h5>
                                    <div className="card-body">
                                        <div className="card-text">
                                            <p>
                                                <strong>Email</strong> <br />
                                                <a href="mailto:mandarinrobotics@gmail.com">mandarinrobotics@gmail.com</a>
                                                <address>
                                                    <strong>Mandarin High School</strong><br />
                                                    <a href="https://goo.gl/maps/53foqmBn24q" target="_blank">
                                                        4831 Greenland Rd, Jacksonville, FL 32258, United States
                                                </a>
                                                </address>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card">
                                    <h5 className="card-header">Why sponsor us?</h5>
                                    <div className="card-body">
                                        <div className="card-text">
                                            <p>
                                                Building robots is expensive. By sponsoring us you are helping
                                                the future generation become engineers/programmers.
                                        </p>
                                            <ul>
                                                <li>Your logo will be visible on our website and marketing materials.</li>
                                                <li>Your logo can be put on our robot. </li>
                                            </ul>
                                            <div className="text-left">
                                                <a className="btn btn-outline-dark" href="#/sponsors#sponsor-info">More info</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="row">
                            <div className="col-sm-6">
                                <div className="card">
                                    <h5 className="card-header">We are no joke.</h5>
                                    <div className="card-body">
                                        <div className="card-text">
                                            <p>
                                                One of our most interactive students has made the books. Joesph
                                                Delcastillo has made the news for being the STEM student of the week.
                                            </p>
                                            <div className="text-left">
                                                <a className="btn btn-outline-dark" href="https://www.firstcoastnews.com/video/news/education/stem-student-of-the-week/stem-student-of-the-week-mandarin-hs-senior-big-on-robotics/77-8253943">Learn more here</a>
                                            </div>
                                        </div>
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
