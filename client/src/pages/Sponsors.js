import React, { Component } from 'react';
import Navbar from '../Navbar';

class Sponsors extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <div className="container-fluid p-3"> {/*Container for body of page*/}
                    <h2>Current Sponsors</h2>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="sponsor-card card"> {/*Each sponsor card contains a name acting as a link to their website, and a logo for the sponsor.*/}
                                <div className="card-body">
                                    <a className="sponsor-name" href="http://www.all-done-appliances.com/"><h3>All Done Appliances</h3></a>
                                    <img className="sponsor-img shadow-sm m-auto" src="/images/sponsors/all-done-appliances.jpg"></img>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="sponsor-card card">
                                <div className="card-body">
                                    <a className="sponsor-name"><h3>Majorspot Inc.</h3></a>
                                    <img className="sponsor-img shadow-sm text-center" src="/images/sponsors/majorspot.png"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div id="sponsor-info">
                        <h2>Why sponsor us?</h2>
                        <p>By sponsoring our team you are investing in a generation of engineers, programmers, and inventors. Also you can adverstive your company and it will be seen by a few thousand people throughout the season.
                            
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sponsors;
