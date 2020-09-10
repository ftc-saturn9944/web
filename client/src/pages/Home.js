import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import {Link, animateScroll} from "react-scroll";
import '../scss/Home.scss';
class Home extends Component {
    constructor(props) {
        super(props);
        const images = [
            'RoR-Scorpion.jpg',
            'SS-AtMHS.jpg',
            'SS-Mason.jpg',
            'SS-RetrievingStone.jpg',
            'SS-SoftwareTeam.jpg',
            'SS-Stacking.jpg',
            'SS-States-AllianceSelection.jpg',
            'SS-StoneGrabbed.jpg'
        ]
        this.state = {
            images: images,
            currentImage: Math.floor(Math.random()*images.length)
        }
    }

    fadeImage(e) {
        void e.offSetWidth;
        e.classList.add('fadeout');
        void e.offSetWidth;
        setTimeout(() => {
            this.state.currentImage = this.state.currentImage < this.state.images.length - 1 ? this.state.currentImage+1 : 0;
            e.style.backgroundImage = `url(\"/images/home-background/${this.state.images[this.state.currentImage]}\")`;
            void e.offSetWidth;
            e.classList.remove('fadeout');
            void e.offSetWidth;
            e.classList.add('fadein');
            setTimeout(() => {
                void e.offSetWidth;
                e.classList.remove('fadein');
                void e.offSetWidth; //Dummy expression to retrigger animation
            }, 2000);
        }, 2000);
    }
    componentDidMount() {
        setTimeout((() => {
            this.fadeImage(document.querySelector(".homeimage"));
            setInterval(this.fadeImage.bind(this, document.querySelector(".homeimage")), 10000);
        }).bind(this), 6000);

        this.state.images.forEach((picture) => { //preload images so they don't take time to load after fade-in starts
            const img = new Image();
            img.src = `/images/home-background/${picture}`;
        });
    }

    render() {
        
       

        

        return (
            <div className="App">
                <Navbar page="team-info" />
                <div className="container-fluid p-0">
                        <div className="row landing p-0 m-0">
                            <div className="homeimage"  style={{"backgroundImage": `url(\"/images/home-background/${this.state.images[this.state.currentImage]}\") `}}></div>
                            <div className="gradient"></div>
                            <div className="col-md-8 mx-auto my-auto">
                                <img src="/images/SATURN-Logo-Dark-Transparent.png" className="d-block img-fluid biglogo"></img>
                                <center>
                                    <Link to="join-section" smooth={true} duration={800} offset={-150}>
                                        <button className="p-2 mx-0 mx-md-2 my-2 btn btn-lg btn-outline-primary quick-button">
                                            <i className="fas fa-users fa-lg"></i> Join the Team
                                        </button>
                                    </Link>
                                    <Link to="sponsor-section" smooth={true} duration={800}>
                                        <button className="p-2 mx-0 mx-md-2 my-2 btn btn-lg btn-outline-success quick-button">
                                            <i className="fas fa-dollar-sign fa-lg"></i> Become a Sponsor
                                        </button>
                                    </Link>
                                </center>
                            </div>
                    </div>
                    <section>
                    <div className="row m-0 mx-md-5 pb-5">
                        <div className="col-lg-8 order-lg-12 px-3">
                            <h1 className="display-3 text-center">We are SATURN</h1>
                            <p className="lead">SATURN Robotics is a <em>FIRST Tech Challenge</em> robotics club operating out of
                             Mandarin High School in Jacksonville, Florida. Started in 2016, our team has helped local high-school students engage in STEM
                             by designing, building, and programming robots for competition. </p>
                             <p className="lead">On the team, students get hands-on experience building and programming robots, 
                             and work as a team to accomplish goals. This experience will not only help them learn new things and pursue their interests, but will help their career path
                             by allowing them to develop practical skills and knowledge in STEM fields.
                             </p>
                        </div>
                        <div className="col-lg-4 order-lg-1 p-relative text-center">
                           <div className="pt-5 pb-2">
                                <picture>
                                    <source media="(min-width: 1600px)" srcset="/images/FIRSTTech_IconHorz_RGB.png" className="d-block img-md-fluid firstlogo mx-auto"></source>
                                    <source media="(min-width: 991px)" srcset="/images/FIRSTTech_IconVert_RGB.png" className="d-block img-md-fluid firstlogo mx-auto"></source>
                                    <img src="/images/FIRSTTech_IconHorz_RGB.png" className="d-block img-md-fluid firstlogo mx-auto" ></img>
                                </picture>
                           </div>
                            <h1 className="display-lg-4 display-3">Team #9944</h1>
                        </div>
                    </div>
                    </section>
                    <section>
                    <div className="row sponsorimage m-0 sponsor-section">
                            <div className="sponsorgradient"></div>
                            <div className="col-12">
                                <em className="text-white-50 caption">State Championships 2020.</em>    
                            </div>        
                    </div>
                    
                    <div className="row m-0 mx-md-5">
                        <div className="col-6 px-3">
                                <h1 className="display-4">Sponsor Us</h1>
                        </div>
                    </div>
                    <div className="row m-0 pb-5 mx-md-5">
                            <div className="col-md-6 px-3">
                                <p className="lead text-left">In order to keep SATURN free of registration fees, we rely on sponsors to keep the team running.
                                With your contribution, we can afford to buy parts for the robot, food for our students to eat at competition,
                                fees for competitions, and much more.</p>
                                <p className="lead text-left">By donating or becoming a recurring sponsor, not only will you be helping dozens of high school students
                                gain experience and knowledge in STEM activities — thereby setting them on a path for success — you'll also have your brand advertised to thousands of people at <em>FIRST Tech Challenge </em>
                                events throughout the season. (See above image)</p>    
                            </div>
                            <div className="col-md-6 mx-auto my-auto px-3">
                                <center>
                                <a href="/sponsorpacks" className="p-4 btn btn-lg btn-block btn-outline-primary">View Sponsorship Packages</a>
                                <a href="/sponsors" className="p-4 btn btn-lg btn-block btn-outline-primary">Current Sponsors</a>
                                </center>
                            </div>
                    </div>
                    </section>
                    <section>
                    <div className="row m-0 pb-5 mx-md-5 join-section">
                            <div className="col-md-6 px-3">
                                <h1 className="display-4 text-left">Join Our Team!</h1>
                                <p className="lead text-left">Our team is always looking for new recruits. If you are in or around the Mandarin area and think you or your child would be a good fit for this team, 
                                please contact <a href="mailto:mandarinrobotics@gmail.com">MandarinRobotics@gmail.com</a> and we will get back to you as soon as possible.</p>
                                <p className="lead text-left">The <a href="https://www.firstinspires.org/robotics/ftc/season-timeline"><em>FIRST Tech Challenge</em> season 
                                starts in September and continues until April at the latest</a>, with biweekly meetings at Mandarin High School plus 
                                additional meetings at our mentors' houses as needed. Prior knowlege of robotics and programming are useful, but not required. Students will 
                                learn by doing and collaborating, with help from our experienced mentors.</p>
                                <p className="lead text-left">Thanks to our wonderful sponsors, there are no registration fees, and you do not have to pay to be on the team.</p>    
                            </div>
                            <div className="col-md-6 mx-auto px-3">
                                <center>
                                
                                </center>
                            </div>
                    </div>
                    </section>
                </div>
                
                <Footer withSaturn={true}></Footer>

            </div>
        );
    }
}

export default Home;
