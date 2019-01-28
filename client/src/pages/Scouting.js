import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class Scouting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: { status: "Loading stuff!" }
        };
    }

    getEntries(match) {
        fetch("/api/getscoutingdata", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authKey')}`
            }
        }).then(res => {
            if (res.status === 200) return res.json();
            else {
                this.setState({ status: res.status });
                console.log(res.status);
            }
        }).then(json => {
            this.setState({ entries: json });
        }).catch(err => {
            console.log(err);
        });
    }

    componentDidMount() {
        this.getEntries({});
    }

    render() {
        return (
            <div className="App">
                <Navbar page="scouting" />
                <div className="container-fluid">
                    <div className="card-holder">
                        <h1>Scouting Page</h1>
                        <pre>{JSON.stringify(this.state.entries)}</pre>
                    </div>
                </div>
            </div>

        );
    }
}

export default Scouting;