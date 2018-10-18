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
        const currentuser = localStorage.getItem("userName");
        console.log("Logged in:", loggedIn);
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item" id="team-info">
                            <a className="nav-link" href="#/">Team Info</a>
                        </li>
                        <li className="nav-item" id="media-kit">
                            <a className="nav-link" href="#/media">Media Kit</a>
                        </li>
                        <li className="nav-item" id="sponsors">
                            <a className="nav-link" href="#/sponsors">Sponsors</a>
                        </li>
                        <li className="nav-item" id="point-counter">
                            <a className="nav-link" href="#/pointcounter">Point Counter</a>
                        </li>
                        <li className="nav-item" id="registration">
                            <a className="nav-link" href="#/registration">Registration</a>
                        </li>
                    </ul>
                </div>
                <div className="mx-auto order-0 order-md-1">
                    <img src="/images/saturn-logo.png" alt="Logo" />
                </div>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        
                        <li className={"nav-item order-md-1" + (loggedIn ? "" : " invisible")} id="logoff">
                            <a className="nav-link" href="javascript:void;" onClick={this.logout.bind(this)}>Log Off</a>
                        </li>
                        <li className={"nav-item order-md-0" + (loggedIn ? "" : " invisible")} id="logged-in-as">
                            <span className="navbar-text"><em>Logged in as user <strong>{currentuser}</strong>.</em></span>
                        </li>
                        <li className={"nav-item dropdown" + (loggedIn ? "" : " invisible")} id="secure-pages">
                            <a class="nav-link dropdown-toggle" href="javascript:void;" role="button" data-toggle="dropdown">
                                Secure Pages
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#/secure/stats">
                                    Game Stats
                                </a>
                            </div>
                        </li>
                        <li className={"nav-item" + (loggedIn ? " invisible" : "")} id="login">
                            <a className="nav-link" href="#/login">Log In</a>
                        </li>

                    </ul>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        );
    }
}

export default Navbar;
