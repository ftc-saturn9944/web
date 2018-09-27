import React, { Component } from 'react';
/**
 * NAVBAR
 * When making a page that is linked through the navbar, make sure to add a <Navbar page="id" />,
 * where "id" is the id of the nav-item in the navbar.
 */
class Navbar extends Component {

    //Constructor
    //Get the "page" property and put it in state
    constructor(props) {
        super(props);

        this.state = {
            currentPage: this.props.page
        }

    }

    //Once the page loads, find the navbar element with the ID of the "page" property's value, then add an active class to it
    componentDidMount() {
        var activeItem = document.getElementById(this.state.currentPage);
        if (activeItem) {
            activeItem.classList.add("active");
        } else {
            console.log("Navbar: Current page not found, defaulting to no active items.");
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> {/* I removed fixed-top because it was obscuring parts of the page. Though a fixed navbar would be good, until we get that fixed (hehe) we should keep it as is.*/}
                <a className="navbar-brand" href="#/">
                    <img src="/images/saturn-logo.png" alt="Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item" id="team-info">
                            <a className="nav-link" href="#/">Team Info<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item" id="media-kit">
                            <a className="nav-link" href="#/media">Media Kit</a>
                        </li>
                        <li className="nav-item" id="sponsors">
                            <a className="nav-link" href="#/sponsors">Sponsors</a>
                        </li>
                        <li className="nav-item" id="point-counter">
                            <a className="nav-link" href="#/pointcounter">Points counter</a>
                        </li>
                        <li className="nav-item" id="registration">
                            <a className="nav-link disabled" href="javascript:void;">Registration</a>
                        </li>
                        <li className="nav-item" id="login">
                            <a className="nav-link" href="#/login">Login</a>
                        </li>


                    </ul>

                </div>
            </nav>
        );
    }
}

export default Navbar;
