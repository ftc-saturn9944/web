import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class Stats extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: { status: "Loading stuff!" }
        };
    }

    componentDidMount() {
        fetch("/api/stats", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authKey')}`
            }
        }).then(res => {
            if (res.status === 200 || res.status === 404) return res.json();
            else {
                console.log(res.status);
                throw new Error('Fool');
            }
        }).then(json => {
            this.setState({ data: json[0] });

        }).catch(err => {
            this.setState({ data: err });
        });
    }

    addRows() {
        for (var datum in this.state.data) {
            document.getElementById("stats-table").appendChild(<tr><th>{this.state.data.keys(datum)[0]}</th><td>{datum}</td></tr>)
        }
    }


    render() {
        console.log(this.state.data);
        const rows = [];
        for (var element in this.state.data) {
            console.log(element, this.state.data[element]);
            rows.push(<tr><th><em>{element}</em></th><td>{this.state.data[element].toString()}</td></tr>)
        }
        return (
            <div className="App">
                <Navbar page="stats" />
                <div className="container-fluid">


                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Stat</th>
                                <th scope="col text-left">Value</th>
                            </tr>
                        </thead>
                        <tbody id="stats-table">
                            {rows}
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}

export default Stats;
