import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import {Link, animateScroll} from "react-scroll";
import '../scss/Home.scss';
class Home extends Component {

    render() {
        
        const images = [
            'RoR-Scorpion.jpg',
            'SS-AtMHS.jpg',
            'SS-Mason.jpg',
            'SS-RetrievingStone.jpg',
            'SS-SoftwareTeam.jpg',
            'SS-Stacking.jpg',
            'SS-States-AllianceSelection.jpg',
            'SS-StoneGrabbed.jpg'
        ];

        

        return (
            <div className="App">
                <Navbar page="team-info" />
                {console.log("/images/home-background/" + images[Math.floor(Math.random()*images.length)])}
                <div className="container-fluid p-0">
                        <div className="row landing p-0 m-0">
                            <div className="homeimage"  style={{"backgroundImage": `url(\"/images/home-background/${images[Math.floor(Math.random()*images.length)]}\") `}}></div>
                            <div className="gradient"></div>
                            <div className="col-md-8 mx-auto my-auto">
                                <img src="/images/SATURN-Logo-Dark-Transparent.png" className="d-block img-fluid biglogo"></img>
                                <center>
                                    <Link to="join-section" smooth={true} duration={400}>
                                        <button class="p-2 m-2 btn btn-lg btn-outline-primary quick-button">
                                            <i className="fas fa-users fa-lg"></i> Join the Team
                                        </button>
                                    </Link>
                                    <Link to="sponsor-section" smooth={true} duration={400}>
                                        <button class="p-2 m-2 btn btn-lg btn-outline-success quick-button">
                                            <i className="fas fa-dollar-sign fa-lg"></i> Become a Sponsor
                                        </button>
                                    </Link>
                                </center>
                            </div>
                    </div>
                    <div className="row m-0 pb-5">
                        <div className="col-md-8 order-md-12 px-3">
                            <h1 class="display-3 text-center">We are SATURN</h1>
                            <p class="lead text-center">SATURN Robotics is a <em>FIRST Tech Challenge</em> robotics club operating out of
                             Mandarin High School in Jacksonville, Florida.</p>
                        </div>
                        <div className="col-md-4 order-md-1 px-3">
                            <img src="/images/FIRSTTech_IconVert_RGB.png" className="m-auto d-block img-md-fluid firstlogo"></img>
                        </div>
                    </div>
                    <div className="row sponsorimage m-0 sponsor-section">
                            <div className="sponsorgradient"></div>
                            <div className="col-12">
                                <em class="text-white-50 caption">State Championships 2020.</em>    
                            </div>        
                    </div>
                    <div className="row m-0">
                        <div className="col-6 px-3">
                                <h1 class="display-4">Sponsor Us</h1>
                        </div>
                    </div>
                    <div className="row m-0 pb-5">
                            <div className="col-md-6 px-3">
                                <p class="lead text-left">In order to keep SATURN free of registration fees, we rely on sponsors to keep the team running.
                                With your contribution, we can afford to buy parts for the robot, food for our students to eat at competition,
                                fees for competitions, and much more.</p>
                                <p class="lead text-left">By donating or becoming a recurring sponsor, not only will you be helping dozens of high school students
                                gain experience and knowledge in STEM activities — thereby setting them on a path for success — you'll also have your brand advertised to thousands of people at <em>FIRST Tech Challenge </em>
                                events throughout the season. (See above image)</p>    
                            </div>
                            <div className="col-md-6 mx-auto px-3">
                                <center>
                                <button className="p-4 btn btn-lg btn-block btn-outline-primary">View Sponsorship Packages</button>
                                <button className="p-4 btn btn-lg btn-block btn-outline-primary">Current Sponsors</button>
                                </center>
                            </div>
                    </div>
                    <div className="row m-0 pb-5 join-section">
                            <div className="col-md-6 px-3">
                                <h1 class="display-4 text-left">Join Our Team!</h1>
                                <p class="lead text-left">Our team is always looking for new recruits. If you are in or around the Mandarin area and think you or your child would be a good fit for this team, 
                                please contact <a href="mailto:mandarinrobotics@gmail.com">MandarinRobotics@gmail.com</a> and we will get back to you as soon as possible.</p>
                                <p class="lead text-left">The <a href="https://www.firstinspires.org/robotics/ftc/season-timeline"><em>FIRST Tech Challenge</em> season 
                                starts in September and continues until April at the latest</a>, with biweekly meetings at Mandarin High School plus 
                                additional meetings at our mentors' houses as needed. Prior knowlege of robotics and programming are useful, but not required. Students will 
                                learn by doing and collaborating, with help from our experienced mentors.</p>
                                <p class="lead text-left">Thanks to our wonderful sponsors, there are no registration fees, and you do not have to pay to be on the team.</p>    
                            </div>
                            <div className="col-md-6 mx-auto px-3">
                                <center>
                                
                                </center>
                            </div>
                    </div>
                </div>
                <footer class="footer">
                    <div class="container p-2 text-center">
                        <span class="text-muted ">
                            This page was made entirely by students! (Lead by Ricky, one of our lead software students.) Starting in 2018, the team developed
                            this website from scratch using ReactJS, Bootstrap, Node.js, and MongoDB. These are frameworks that are <em>actually used in the real world! </em> 
                            (Like, there are loads of <em>good jobs</em> out there for doing this stuff.) If you want to see more high school students learning these skills, please consider sponsoring us!
                        </span>
                    </div>
                </footer>
                

            </div>
        );
    }
}

export default Home;
