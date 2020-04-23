import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import {Link, animateScroll} from "react-scroll";
import '../scss/Footer.scss';

class Footer extends Component {
    render() {
        return <footer class="footer">
        <div class="container p-2 text-center">
            <hr></hr>
            <span class="text-muted ">
                This page was made entirely by students! (Lead by Ricky, one of our lead software students.) Starting in 2018, the team developed
                this website from scratch using ReactJS, Bootstrap, Node.js, and MongoDB. These are frameworks that are <em>actually used in the real world! </em> 
                (Like, there are loads of <em>good jobs</em> out there for doing this stuff.) If you want to see more high school students learning these skills, please consider <a href="/sponsorpacks">sponsoring us!</a>
            </span>
        </div>
        {this.props.withSaturn &&
        <img class="footersaturn" src="/images/planetsaturn-transparent.png"></img>
        }
        </footer>
    }
}
export default Footer;