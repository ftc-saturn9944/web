import React, { Component } from 'react';
import Navbar from '../../components/Navbar';

class MediaKit extends Component {
    render() {
        return (
                <div className="App">
                <Navbar page="media-kit" />'
                    <div className="container-fluid">
                        <div className="card-holder">
                        Look what we have done!
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="sponsor-card card">
                                        <div className="card-body">
                                        <div className="card-text"></div>
                                            <p>
                                                Here is one of our best matches from a previous year.
                                            </p>
                                            <div className="text-left">
                                        <a className="btn btn-outline-dark" href="https://www.youtube.com/watch?v=TttTeH3yedw">Want to watch?</a>
                                        
                                        <div className="card-text">
                                            <p>
                                                If you want to check out some statistics from the past few years of SATURN. 
                                                You can click the button.
                                            </p>
                                            <div className="text-left">
                                            <a className="btn btn-outline-dark" href="http://www.ftcroot.com/teams/9944/SATURN">Past Team Scores</a>
                                            </div>
                                        </div>
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

export default MediaKit;
