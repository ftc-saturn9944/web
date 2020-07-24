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

    logout() {
        localStorage.clear();
        document.location.reload();
    }

    render() {
        const loggedIn = localStorage.getItem("authKey") !== null;
        const currentuser = localStorage.getItem("firstName");
        return (
            <nav className="navbar fixed-top navbar-expand navbar-dark bg-dark">
                <div className="container-fluid flex-column">
                    <div className="row">
                        <div className="col-12">
                            <a className="navbar-brand mx-auto" href="/"><img src="/images/saturn-logo.png" alt="Logo" /></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item" id="home">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item" id="gallery">
                                    <a className="nav-link" href="/gallery">Gallery</a>
                                </li>
                                <li className="nav-item" id="sponsors">
                                    <a className="nav-link" href="/sponsors">Sponsors</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
