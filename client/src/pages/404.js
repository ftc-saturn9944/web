import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class Page404 extends Component {
    render() {
        return (
            <div className="App">
                <Navbar page="404" />
                
                <h1 className="jumbo text-center">404 Not Found</h1>

            </div>
        );
    }
}

export default Page404;