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
    }

    render() {
        const loggedIn = localStorage.getItem("authKey") !== null;
        console.log("Logged in:", loggedIn);
        return (
            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item" id="team-info">
                            <a class="nav-link" href="#/">Team Info</a>
                        </li>
                        <li class="nav-item" id="media-kit">
                            <a class="nav-link" href="#/media">Media Kit</a>
                        </li>
                        <li class="nav-item" id="sponsors">
                            <a class="nav-link" href="#/sponsors">Sponsors</a>
                        </li>
                        <li class="nav-item" id="point-counter">
                            <a class="nav-link" href="#/pointcounter">Point Counter</a>
                        </li>
                        <li class="nav-item" id="registration">
                            <a class="nav-link" href="javascript:void;">Registration</a>
                        </li>
                    </ul>
                </div>
                <div class="mx-auto order-0">
                    <img src="/images/saturn-logo.png" alt="Logo" />
                </div>
                <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul class="navbar-nav ml-auto">
                        <li class={"nav-item" + (loggedIn ? "" : " invisible")} id="logoff">
                            <a class="nav-link" href="#" onClick={this.logout.bind(this)}>Log Off</a>
                        </li>
                        <li class={"nav-item" + (loggedIn ? " invisible" : "")} id="login">
                            <a class="nav-link" href="#/login">Log In</a>
                        </li>
                    </ul>
                </div>
            </nav >
        );
    }
}

export default Navbar;
