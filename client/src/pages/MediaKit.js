import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class MediaKit extends Component {
    render() {
        return (
                <div className="App">
                <Navbar page="media-kit" />'
                    <div className="container-fluid">
                        <div className="card-holder">
                        <h2>Look What we have done!</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="sponsor-card card">
                                        <div className="card-body">
                                        <a className="btn btn-outline-dark" href="https://www.youtube.com/watch?v=TttTeH3yedw"><p>Want to watch?</p></a>
                                        <div className="card-text">
                                            <p>
                                                
                                            </p>
                                            <div className="text-left">
                                            <a className="btn btn-outline-dark" href="http://www.ftcroot.com/teams/9944/SATURN"><p>Past Team Scores</p></a>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="sponsor-card card">
                                        <div className="card-body">
                                        <a className="btn btn-outline-dark" href="https://www.youtube.com/watch?v=TttTeH3yedw"><h1>Want to watch?</h1></a>
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

export default MediaKit;
