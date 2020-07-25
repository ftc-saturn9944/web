import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {Link, animateScroll} from "react-scroll";
import "../scss/SponsorPackages.scss"
import "../scss/Sponsors.scss";

class Sponsors extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return <div className="App">
            <Navbar page="sponsors"></Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex">
                        <h1 className="mx-auto display-2 ">Sponsors</h1>
                    </div>
                </div>
                <div className="row">
                <div className="col-12 text-center">
                        <p className="lead">Here are some of our gracious sponsors that are helping us keep the team running.</p>
                    </div>
                </div>
                <div className="row align-items-center mb-5">
                    <div className="col-md-4 order-md-1 px-3 p-relative">
                        <img src="/images/sponsors/all-done-appliances-transparent.png" className="d-block img-md-fluid mx-auto sponsorlogo"></img>
                        <h3 className="sponsortext text-center sun-rank-ooh"><a href="http://www.all-done-appliances.com/">All Done Appliances</a></h3>
                    </div>
                    <div className="col-md-4 order-md-1 px-3 p-relative">
                        <img src="/images/sponsors/majorspot-transparent.png" className="d-block img-md-fluid mx-auto sponsorlogo"></img>
                        <h3 className="sponsortext text-center sun-rank-ooh"><a href="javascript:void">Majorspot, Inc.</a></h3>
                    </div>
                    <div className="col-md-4 order-md-1 px-3 p-relative">
                        <img src="/images/sponsors/renjax.png" className="d-block img-md-fluid mx-auto sponsorlogo"></img>
                        <h3 className="sponsortext text-center"><a href="https://renaissancejax.org/">Renaissance Jax</a></h3>
                    </div>
                </div>
                <div className="row">
                    
                    <div className="col-12 justify-content-left">
                        <h3 className="display-4">Sponsor Us!</h3>
                        <p className="lead">By sponsoring our team, you'll not only be helping the next generation of programmers and engineers learn the skills
                        they'll need to be successful &mdash; you'll also get some perks of your own, too. Based on your contribution, your brand will be shown to thousands of
                        attendees at <em>FIRST Tech Challenge</em> events throughout the season. It will appear on our website, on business cards, or even on the robot itself.</p>
                        <a href="/sponsorpacks">
                            <button className="p-2 m-2 btn btn-lg btn-outline-success w-100 quick-button">
                                View Sponsor Packages
                            </button>
                        </a>
                    </div>
                    
                </div>
            </div>
            
            <Footer withSaturn={false}></Footer>
        </div>;
    }
}

export default Sponsors;
