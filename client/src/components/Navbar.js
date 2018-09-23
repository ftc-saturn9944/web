import React, { Component } from 'react';

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#/">
                    <img src="/images/saturn-logo.png" alt="Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#/">Team Info <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/media">Media Kit</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/sponsors">Sponsors</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/pointcounter">Points counter</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/">Registration</a>
                        </li>


                    </ul>

                </div>
            </nav>
        );
    }
}

export default Navbar;
