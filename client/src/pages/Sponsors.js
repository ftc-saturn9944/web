import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class Sponsors extends Component {
    render() {
        return (
            <div className="App">
                <Navbar page="sponsors" />
                <div className="container-fluid"> {/*Container for body of page*/}
                    <div className="card-holder">
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
                            <div className="col-md-3">
                                <div className="sponsor-card card">
                                    <div className="card-body">
                                        <a className="sponsor-name" href="http://renaissancejax.org/"><h4>Renaissance Jax</h4></a>
                                        <img className="sponsor-img shadow-sm text-center" src="/images/sponsors/renjax.png">
                                        </img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div id="sponsor-info">
                        <h2>Why sponsor us?</h2>
                        <p>By sponsoring our team you are investing in a generation of engineers, programmers, and inventors who could be working for your company. This website will be viewed by thousands of people who would view your company throughout the season.
                           Unlike most teams our team relies mostly on donations and our members are not given a fee. The more donations we recieve the farther we will go in the competition and will be more succesful throughout the season. Last season we made it all the way to the state championship and we plan on going farther than that this season and going nationals this year.
                           Our team consists of 20 students and 3 mentors  
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sponsors;
