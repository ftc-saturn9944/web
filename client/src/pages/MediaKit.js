import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class MediaKit extends Component {
    render() {
        return (
                <div className="App">
                <Navbar page="media-kit" />'
                    <div className="container-fluid">
                        <div className="card-holder">
                        <h2>Media Kit</h2>
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="sponsor-card card">
                                        <div className="card-body">
                                        Media Kit
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
