import React, { Component } from 'react';
import Navbar from '../../components/Navbar';

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
                    <div id="sponsor-info" style={{ maxWidth: '1000px' }}>
                        <h2>Why sponsor us?</h2>
                        <p>By sponsoring our team you are investing in a generation of engineers, programmers, and inventors who will go on to work and lead in STEM fields.
                            The money you use to sponsor us will directly contribute to the development of our robot, as well as opportunities for students to learn and make something great.
                            Unlike most teams, our members are not given a fee for joining our team. As such, our team relies mostly on sponsors to provide funding.
                            This keeps our team free and open for any hard-working student to learn and become an expert robot builder.
                        </p>
                        <p>There are also a number of benefits for your company. <strong>Your brand will be seen by thousands of people at FTC events, as well as by visitors to our website. </strong>
                            Last season we made it all the way to the state championship with many hundreds of people in attendance. With your help, we plan on making it there again and even beyond that to the national championship.
                            The more sponsors we have, the farther we can go in competition and the more successful we will be throughout the season.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sponsors;
