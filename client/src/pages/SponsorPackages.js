import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {Link, animateScroll} from "react-scroll";
import '../scss/SponsorPackages.scss';

class SponsorPackages extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return <div className="App">
            <Navbar page="sponsorpacks"></Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex">
                        <h1 className="mx-auto display-2 ">Sponsor Packages</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 justify-content-left">
                        <p className="lead">By sponsoring our team, you'll not only be helping the next generation of programmers and engineers learn the skills
                        they'll need to be successful &mdash; you'll also get some perks of your own, too. Based on your contribution, your brand can be shown to thousands of
                        attendees at <em>FIRST Tech Challenge</em> events throughout the season. It can appear on our website, on business cards, or even on the robot itself.</p>
                        <div className="mb-5">
                            <p className="lead text-bold"><em>If you are interested in sponsoring us, please contact us through our email:</em></p>
                            <a className="email-link" href="mailto:mandarinrobotics@gmail.com?subject=I'm interested in sponsoring the team.&body=I am interested in sponsoring SATURN Robotics.">
                                <div>
                                    <button className="btn-circle disabled btn-xl btn-primary mr-4"><i className="fa fa-envelope"></i></button>
                                    <span className="lead" style={{fontSize: "2em"}}>MandarinRobotics@gmail.com</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 rank-name">
                        <h2 className="display-4">Cassini &mdash; <em>$1 to $99</em></h2>
                    </div>
                </div>
                <div className="row mb-4">
                <div className="col-md-4 order-md-2">
                        <img src="/images/sponsors/rank-cassini.png" width="100%"></img>
                    </div>
                    <div className="col-md-8 order-md-1">
                        <h3 className="display-5">Includes:</h3>
                            <ul>
                                <li>Your company's name and logo <a href="sponsors" target="_blank">displayed on our website.</a></li>
                            </ul>
                        <hr></hr>
                        <blockquote className="blockquote">
                            <p><small><em>Orbiting the ringed planet Saturn and its numerous moons, the Cassini spacecraft had
                                been a keystone of exploration of the Saturnian system and the properties of gaseous 
                                planets in our solar system.</em></small>
                                </p>
                                <p><small><em>
                                A joint endeavor of NASA, the European Space Agency, or ESA, and the Italian Space Agency,
                                Cassini launched in 1997 along with ESA's Huygens probe. The spacecraft contributed to studies
                                of Jupiter for six months in 2000 before reaching its destination, Saturn, in 2004 and starting
                                a string of flybys of Saturn's moons. That same year it released the Huygens probe on Saturn's moon
                                Titan to conduct a study of the moon's atmosphere and surface composition. In its second extended mission,
                                Cassini made the first observations of a complete seasonal period for Saturn and its moons, flew between
                                the rings and descended into the planet's atmosphere.</em></small></p>
                                <footer className="blockquote-footer"><cite title="NASA Jet Propulsion Laboratory"><a href="https://www.jpl.nasa.gov/missions/cassini-huygens/" target="_blank">NASA Jet Propulsion Laboratory</a></cite></footer>
                        </blockquote>
                    </div>    
                </div>
                <div className="row">
                    <div className="col-8 ml-auto rank-name">
                        <h2 className="display-4 mr-auto enceladus-rank">Enceladus &mdash; <em>$100 to $299</em></h2>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-4">
                        <img src="/images/sponsors/rank-enceladus.png" width="100%"></img>
                    </div>
                    <div className="col-md-8">
                         <h3 className="display-5">Includes:</h3>
                            <ul>
                                <li>Your company's name and logo <a href="sponsors" target="_blank">displayed on our website.</a></li>
                                <li>Your company's name and logo on our banner. We bring this banner to competitions, visible to everyone who visits our pit. It's a great way to show off your brand!</li>
                            </ul>
                        <hr></hr>
                        <blockquote className="blockquote">
                            <p><small><em>Few worlds in our solar system are as compelling as Saturn’s icy ocean moon Enceladus.
                                A handful of worlds are thought to have liquid water oceans beneath their frozen shell, but Enceladus 
                                sprays its ocean out into space where a spacecraft can sample it. From these samples, scientists have 
                                determined that Enceladus has most of the chemical ingredients needed for life, and likely has hydrothermal 
                                vents spewing out hot, mineral-rich water into its ocean.</em></small></p>
                                <p><small><em>About as wide as Arizona, Enceladus also has the whitest, most reflective surface in the solar system. 
                                    The moon creates a ring of its own as it orbits Saturn—its spray of icy particles spreads out into the space 
                                    around its orbit, circling the planet to form Saturn’s E ring.</em></small></p>
                                <footer className="blockquote-footer"><cite title="NASA Science: Solar System Exploration"><a href="https://solarsystem.nasa.gov/moons/saturn-moons/enceladus/in-depth/" target="_blank">
                                    NASA Science: Solar System Exploration</a></cite></footer>
                        </blockquote>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 rank-name">
                        <h2 className="display-4 titan-rank">Titan &mdash; <em>$300 to $499</em></h2>
                    </div>
                </div>
                <div className="row mb-4">
                <div className="col-md-4 order-md-2">
                        <img src="/images/sponsors/rank-titan.png" width="100%"></img>
                    </div>
                    <div className="col-md-8 order-md-1">
                         <h3 className="display-5">Includes:</h3>
                            <ul>
                                <li>Your company's name and logo <a href="sponsors" target="_blank">displayed on our website.</a></li>
                                <li>Your company's name and logo on our banner.</li>
                                <li>Your company's name and logo in our engineering documentation.</li>
                            </ul>
                        <hr></hr>
                        <blockquote className="blockquote">
                            <p><small><em>Saturn’s largest moon Titan is an extraordinary and exceptional world. Among 
                                our solar system’s more than 150 known moons, Titan is the only one with a substantial 
                                atmosphere. And of all the places in the solar system, Titan is the only place besides 
                                Earth known to have liquids in the form of rivers, lakes and seas on its surface.</em></small></p>
                                <p><small><em>Titan is larger than the planet Mercury and is the second largest moon 
                                    in our solar system. Jupiter's moon Ganymede is just a little bit larger (by about 2 percent). 
                                    Titan’s atmosphere is made mostly of nitrogen, like Earth’s, but with a surface pressure 50 
                                    percent higher than Earth’s. Titan has clouds, rain, rivers, lakes and seas of liquid hydrocarbons 
                                    like methane and ethane. The largest seas are hundreds of feet deep and hundreds of miles wide. 
                                    Beneath Titan’s thick crust of water ice is more liquid—an ocean primarily of water rather than 
                                    methane. Titan’s subsurface water could be a place to harbor life as we know it, while its surface 
                                    lakes and seas of liquid hydrocarbons could conceivably harbor life that uses different chemistry 
                                    than we’re used to—that is, life as we don’t yet know it.</em></small></p>
                                <footer className="blockquote-footer"><cite title="NASA Science: Solar System Exploration"><a href="https://solarsystem.nasa.gov/moons/saturn-moons/titan/overview/" target="_blank">
                                    NASA Science: Solar System Exploration</a></cite></footer>
                        </blockquote>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-8 ml-auto rank-name">
                        <h2 className="display-4 mr-auto saturn-rank"><b>SATURN</b> &mdash; <em>$500 to $999</em></h2>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-4">
                        <img src="/images/sponsors/rank-saturn.png" width="100%"></img>
                    </div>
                    <div className="col-8">
                         <h3 className="display-5">Includes:</h3>
                            <ul>
                                <li>Your company's name and logo <a href="sponsors" target="_blank">displayed on our website.</a></li>
                                <li>Your company's name and logo on our banner.</li>
                                <li>Your company's name and logo in the engineering documentation.</li>
                                <li>Your company's name and logo on our business cards.</li>
                            </ul>
                        <hr></hr>
                        <blockquote className="blockquote">
                            <p><small><em>Saturn is the sixth planet from the Sun and the second largest planet in our solar system.
                                 Adorned with a dazzling system of icy rings, Saturn is unique among the planets. It is not the only
                                  planet to have rings, but none are as spectacular or as complex as Saturn's. Like fellow gas giant
                                   Jupiter, Saturn is a massive ball made mostly of hydrogen and helium.</em></small></p>
                                <p><small><em>Surrounded by more than 60 known moons, Saturn is home to some of the most fascinating 
                                    landscapes in our solar system. From the jets of water that spray from Enceladus to the methane 
                                    lakes on smoggy Titan, the Saturn system is a rich source of scientific discovery and still holds 
                                    many mysteries.</em></small></p>
                                <footer className="blockquote-footer"><cite title="NASA Science: Solar System Exploration"><a href="https://solarsystem.nasa.gov/planets/saturn/in-depth/" target="_blank">
                                    NASA Science: Solar System Exploration</a></cite></footer>
                        </blockquote>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 rank-name">
                        <h2 className="display-4 sun-rank"><b>Sun</b> &mdash; <em>$1000 to $1499</em></h2>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-8">
                         <h3 className="display-5">Includes:</h3>
                            <ul>
                                <li>Your company's name and logo <a href="sponsors" target="_blank">displayed on our website.</a></li>
                                <li>Your company's name and logo on our banner.</li>
                                <li>Your company's name and logo in the engineering documentation.</li>
                                <li>Your company's name and logo on our business cards.</li>
                                <li>Your company's name and logo on the robot itself!</li>
                            </ul>
                        <hr></hr>
                        <blockquote className="blockquote">
                            <p><small><em>The sun is mass of incandescent gas, a gigantic nuclear furnace</em></small></p>
                                <p><small><em>Where hydrogen is built into helium at a temperature of millions of degrees!</em></small></p>
                                <footer className="blockquote-footer"><cite title="They Might Be Giants"><a href="https://www.youtube.com/watch?v=Zbgul1NpEA8">
                                    They Might Be Giants</a></cite></footer>
                        </blockquote>
                    </div>
                    <div className="col-4">
                        <img src="/images/sponsors/rank-sun.png" width="100%"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 rank-name">
                        <h2 className="display-4 alpha-rank-ooh"><b>Alpha Centauri</b> &mdash; <em>$1500+</em></h2>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-8">
                         <h3 className="display-5">Includes:</h3>
                            <ul>
                                <li>Your company's name and logo <a href="sponsors" target="_blank">displayed on our website.</a></li>
                                <li>Your company's name and logo on our banner.</li>
                                <li>Your company's name and logo in the engineering documentation.</li>
                                <li>Your company's name and logo on our business cards.</li>
                                <li>Your company's name and logo on the robot itself!</li>
                                <li>Your company's name and logo added to our uniforms!</li>
                            </ul>
                        <hr></hr>
                        <blockquote className="blockquote">
                            <p><small><em>From the orbit of Saturn, light (as well as Cassini's radio signal) takes a little more 
                                than an hour travel to Earth. The distance to Alpha Centauri is so great that light from these stars 
                                takes more than four years to reach our Solar System. Thus, although Saturn seems a distant frontier, 
                                the nearest star is almost 30,000 times farther away</em></small></p>
                                <footer className="blockquote-footer"><cite title="NASA Science: Stellar Horizon"><a href="https://solarsystem.nasa.gov/resources/14116/stellar-horizon/">
                                    NASA Science: Stellar Horizon</a></cite></footer>
                        </blockquote>
                    </div>
                    <div className="col-4">
                        <img src="/images/sponsors/rank-alpha-centauri.jpg" width="100%"></img>
                    </div>
                </div>
                    
            </div>
            <Footer withSaturn={false}></Footer>
        </div>;
    }
}

export default SponsorPackages;