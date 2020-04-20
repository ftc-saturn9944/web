import React, { Component } from 'react';
import Navbar from '../components/Navbar';
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
                        <div className="row homeimage m-0"  style={{"backgroundImage": `url(\"/images/home-background/${images[Math.floor(Math.random()*images.length)]}\") `}}>
                            <div className="gradient"></div>
                            <div className="col-8 mx-auto my-auto">
                                <img src="/images/SATURN-Logo-Dark-Transparent.png" className="d-block img-fluid biglogo"></img>
                                <center>
                                    <button class="m-2 btn btn-success quick-button">Join the Team</button>
                                    <button class="m-2 btn btn-warning quick-button">Sponsor Us</button>
                                </center>
                            </div>
                    </div>
                    <div className="row m-0 pb-5">
                        <div className="col-4 px-5">
                            <img src="/images/FIRSTTech_IconVert_RGB.png" className="m-auto d-block img-fluid firstlogo"></img>
                        </div>
                        <div className="col-8">
                            <h1 class="display-4 text-center"> We are S.A.T.U.R.N.</h1>
                            <p class="lead">SATURN Robotics is a <em>FIRST Tech Challenge</em> robotics club operating out of Mandarin High School, Jacksonville, Florida.</p>
                        </div>
                    </div>
                </div>
                

            </div>
        );
    }
}

export default Home;
