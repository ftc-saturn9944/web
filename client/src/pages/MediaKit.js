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
                                        <a className="sponsor-name" href="https://www.youtube.com/watch?v=TttTeH3yedw"><h3>Want to watch?</h3></a>
                                        
                                        <div className="card-text">
                                            <p>
                                                One of our most diligent students has made the books. Joesph
                                                Delcastillo has made the news for being the STEM student of the week.
                                            </p>
                                            <div className="text-left">
                                            <a className="sponsor-name" href="http://www.ftcroot.com/teams/9944/SATURN"><h3>Past Team Scores</h3></a>
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
