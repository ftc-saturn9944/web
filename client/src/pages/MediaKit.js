import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class MediaKit extends Component {
    render() {
        return (
            <div className="App">
                <Navbar page="media-kit" />
                Media Kit
            </div>
        );
    }
}

export default MediaKit;
