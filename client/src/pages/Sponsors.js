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
                <div className="col align-items-center mb-5"> 
                    <div className="row">
                        <div className="col-12 d-flex">
                            <h1 className="mx-auto display-4 alpha-rank-ooh"><b>Alpha Centauri Sponsors</b><hr></hr></h1>
                        </div>
                   </div>
                </div>
                <div className="row align-items-center mb-5">    
                    <div className="col-md-6 my-5 mx-auto order-md-1 px-3 p-relative">
                        <img src="/images/sponsors/all-done-appliances-transparent.png" className="d-block img-md-fluid mx-auto sponsorlogo"></img>
                        <h3 className="sponsortext text-center alpha-rank-ooh"><a href="http://www.all-done-appliances.com/" target="_blank">All Done Appliances</a><hr></hr></h3>
                    </div>
                    <div className="col-md-6 my-5 mx-auto order-md-1 px-3 p-relative">
                        <img src="/images/sponsors/majorspot-transparent.png" className="d-block img-md-fluid mx-auto sponsorlogo"></img>
                        <h3 className="sponsortext text-center alpha-rank-ooh"><a href="javascript:void">Majorspot, Inc.</a><hr></hr></h3>
                    </div>
                    <div className="col-md-6 my-5 mx-auto order-md-1 px-3 p-relative">
                        <img src="/images/sponsors/eisman_russo.jpeg" className="d-block img-md-fluid mx-auto sponsorlogo"></img>
                        <h3 className="sponsortext text-center alpha-rank-ooh"><a href="https://www.eismanandrusso.com/">Eisman & Russo.</a><hr></hr></h3>
                    </div>
                </div>
                <div className="col align-items-center mb-5"> 
                    <div className="row">
                        <div className="col-12 d-flex">
                            <h1 className="mx-auto display-4 titan-rank"><b>Titan Sponsors</b><hr></hr></h1>
                        </div>
                   </div>
                </div>
                <div className="row align-items-center mb-5">
                    <div className="col-md-4 my-5 mx-auto order-md-1 px-3 p-relative">
                        <img src="/images/sponsors/bolts-and-bytes-transparent.png" className="d-block img-md-fluid mx-auto sponsorlogo"></img>
                        <h3 className="sponsortext text-center titan-rank"><a href="https://www.boltsandbytes.club/" target="_blank">Bolts & Bytes</a><hr></hr></h3>
                    </div>
                    <div className="col-md-4 my-5 mx-auto order-md-1 px-3 p-relative">
                        <img src="/images/sponsors/first_coast_signs.png" className="d-block img-md-fluid mx-auto sponsorlogo"></img>
                        <h3 className="sponsortext text-center titan-rank"><a href="https://www.jacksonvillesignsandwraps.com/" target="_blank">First Coast Signs Inc.</a><hr></hr></h3>
                    </div>
                </div>
                <div className="col align-items-center mb-5"> 
                    <div className="row">
                        <div className="col-12 d-flex">
                            <h1 className="mx-auto display-4"><b>Sponsors</b><hr></hr></h1>
                        </div>
                   </div>
                </div>
                <div className="row align-items-center mb-5">
                    <div className="col-md-4 my-5 mx-auto order-md-1 px-3 p-relative">
                        <img src="/images/sponsors/renjax.png" className="d-block img-md-fluid mx-auto sponsorlogo"></img>
                        <h3 className="sponsortext text-center"><a href="https://renaissancejax.org/" target="_blank">Renaissance Jax</a><hr></hr></h3>
                    </div>
                </div>
                <div className="col align-items-center mb-5"> 
                    <div className="row">
                        <div className="col-12 d-flex">
                            <h1 className="mx-auto display-3">Donations</h1>
                        </div>
                   </div>
                </div>
                <div className="row">
                <div className="col-12 text-center">
                        <p className="lead">Here are some people who gave to the team but did not have a company to be sponsored</p>
                    <h></h>
                    </div>
                </div>
                <div className="row align-items-center mb-5">
                    <div className="col-md-4 my-5 mx-auto order-md-1 px-3 p-relative">
                        <img src="" className="d-block img-md-fluid mx-auto sponsorlogo"></img>
                        <h4 className="sponsortext text-center"><a href="" target="_blank">Bill & Carol French</a><hr></hr></h4>
                    </div>
                </div>
                <div className="row">
                    
                    <div className="col-12 justify-content-left">
                        <h3 className="disp3ay-7">Sponsor Us!</h3>
                        <p className="lead">By sponsoring our team, you'll not only be helping the next generation of programmers and engineers learn the skills
                        they'll need to be successful &mdash; you'll also get some perks of your own, too. Based on your contribution, your brand will be shown to thousands of
                        attendees at <em>FIRST Tech Challenge</em> events throughout the season. It will appear on our website, on business cards, or even on the robot itself.</p>
                        <a href="/sponsorpacks">
                            <button className="p-2 mx-0 btn btn-lg btn-outline-success w-100 quick-button">
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
