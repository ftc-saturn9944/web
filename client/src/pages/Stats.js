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

    addRows() {
        for(var datum in this.state.data) {
            document.getElementById("status").innerHTML = "asdasdasd";
            document.getElementById("stats-table").appendChild(<tr><th>{this.state.data.keys(datum)[0]}</th><td>{datum}</td></tr>)
        }
    }


    render() {
        const rows = [];
        for (var element in this.state.data){
                rows.push(<tr><th><em>{element}</em></th><td>{this.state.data[element]}</td></tr>)
        }
        return (
            <div className="App">
                <Navbar page="stats" />
               
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Stat</th>
                            <th scope="col">Value</th>
                        </tr>
                    </thead>
                    <tbody id="stats-table">
                        {rows}
                    </tbody>

                </table>
            </div>
        );
    }
}

export default Stats;
