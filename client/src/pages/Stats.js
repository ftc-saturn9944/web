import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class Stats extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {stuff: "Loading stuff"}
        };
    }
    
    componentDidMount() {
        fetch("/api/stats", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authKey')}`
            }
        }).then(res => {
            if(res.status == 200) return res.json();
            else throw new Error('Fool');
        }).then(json => {
            this.setState({data: json});
        }).catch(err => {
            this.setState({data: err});
        })
    }

    render() {
        return (
            <div className="App">
                <Navbar page="stats" />
                <pre>
                    {JSON.stringify(this.state.data, null, 2)}
                </pre>
            </div>
        );
    }
}

export default Stats;
