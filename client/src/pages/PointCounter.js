import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class PointCounter extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                Point Counter
            </div>
        );
    }
}

export default PointCounter;