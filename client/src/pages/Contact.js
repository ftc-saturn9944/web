import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, animateScroll } from "react-scroll";
import "../scss/Contact.scss";

class Contact extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return <div className="App">
            <Navbar page="contact"></Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-12justify-content-left">
                        <h1 className="display-2 ">Contact Us</h1>
                    </div>
                </div>
                <div className="row my-5">
                <div className="col-lg-6 text-center">
                    <a href="mailto:mandarinrobotics@gmail.com">
                        <div className="mb-5">
                            <button className="btn-circle disabled btn-xl btn-primary mr-4"><i className="fa fa-envelope"></i></button><br />
                            <span className="lead" style={{fontSize: "2em"}}>MandarinRobotics@gmail.com</span>
                        </div>
                    </a>
                    <a href="https://goo.gl/maps/A7BN6nNCR82SKeQZ7">
                        <div>
                            <button className="btn-circle disabled btn-xl btn-primary mr-4"><i className="fa fa-map"></i></button><br />
                            <span className="lead" style={{fontSize: "2em"}}>Mandarin High School<br />4831 Greenland Rd, Jacksonville, FL 32258</span><br />
                        </div>
                    </a>
                </div>
                <div className="col-lg-6 text-center">
                <iframe className="mt-5 mt-lg-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.248260101135!2d-81.58521995686343!3d30.16233650707228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9994256c4b31852c!2sMandarin%20High%20School!5e0!3m2!1sen!2sus!4v1596484294446!5m2!1sen!2sus" width="100%" height="450" frameborder="0" style={{border:"5px", borderRadius:"15px", backgroundColor: "#111"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    
                </div>
                </div>
                <div className="row">
                    <div className="col-12 justify-content-left">
                        <h3 className="display-5">Ask Away!</h3>
                        <p className="lead">If you have any questions or concerns about the team, feel free to email us. We'll try to get back as soon as we can.</p>
                    </div>

                </div>
            </div>

            <Footer withSaturn={false}></Footer>
        </div>;
    }
}

export default Contact;