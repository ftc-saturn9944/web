import React, { Component } from 'react';
import Navbar from '../../components/Navbar';

class Scouting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: { status: "Loading stuff!" },
            /*
                "search" means it is in the search-box area, it does not necessarily mean it is used for searching (it might be used to enter data)
            */
            searchMode: true, //search through the entries or enter new data
            searchTeamName: "",
            searchTeamNumber: null,
            searchAutoClaimed: false,
            searchAutoLanded: false,
            searchAutoParked: false,
            searchAutoSampled: false,
            searchCargoMinerals: 0,
            searchDepotMinerals: 0,
            searchMineralsRangeMin: 0,
            searchMineralsRangeMax: 20,
            searchMineralsWhere: 'cargo', //Either 'cargo' or 'depot'
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

    change = e => { //Changes the state whenever an element changes. Set the "onChange" attribute of the element to this function and the "name" attribute to the state you want to modify.
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    changeCheckbox = e => { //Same as above, except uses the target element's "checked" property.
        this.setState({
            [e.target.name]: e.target.checked
        });
        console.log(this.state);
    }

    resetCheckbox(classname) {
        const nodeList = document.getElementsByClassName(classname);
        for (let i = 0; i < nodeList.length; i++) {
            nodeList.item(i).checked = false;
        }
    }

    search() {

    }


    render() {
        return (
            <div className="App">
                <Navbar page="scouting" />
                <div className="container-fluid">
                    <div className="card-holder">
                        <h1>Scouting Page</h1>
                        <h3>Entries JSON:</h3>
                        <pre>{JSON.stringify(this.state.entries)}</pre>
                        <div className="card">
                            <div className="card-header">
                                <h2 className="d-inline">{this.state.searchMode ? 'Search' : 'Enter'} Scouting Data</h2>
                            </div>
                            <div className="card-body">
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" name="searchMode" id="searchMode" checked={this.state.searchMode} onChange={e => this.changeCheckbox(e)} />
                                    <label className="custom-control-label" for="searchMode">Search Entries?</label>
                                </div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h2>Team Info</h2>
                                            <div className="form-group">
                                                <label htmlFor="searchTeamName">Team Name</label>
                                                <input type="text" className="form-control" id="searchTeamName" value={this.state.searchTeamName} onChange={e => this.change(e)} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="searchTeamNumber">Team Number</label>
                                                <input type="number" className="form-control" id="searchTeamName" value={this.state.searchTeamName} onChange={e => this.change(e)} min="0" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card">
                                                <div className="card-header"><h3>Autonomous Period</h3></div>
                                                <div className="card-body">
                                                    <div className="custom-control custom-control-checkbox custom-control-inline form-control-lg d-md-block">
                                                        <input className="custom-control-input pc-check" type="checkbox" value={this.state.searchAutoLanded} onChange={e => this.changeCheckbox(e)} name="searchAutoLanded" id="searchAutoLanded" />
                                                        <label className="custom-control-label" htmlFor="searchAutoLanded">
                                                            Landed
                                                            </label>
                                                    </div>
                                                    <div className="custom-control custom-control-checkbox custom-control-inline form-control-lg d-md-block">
                                                        <input className="custom-control-input pc-check" type="checkbox" value={this.state.searchAutoSampled} onChange={e => this.changeCheckbox(e)} name="searchAutoSampled" id="searchAutoSampled" />
                                                        <label className="custom-control-label" htmlFor="searchAutoSampled">
                                                            Sampled
                                                        </label>
                                                    </div>
                                                    <div className="custom-control custom-control-checkbox custom-control-inline form-control-lg d-md-block">
                                                        <input className="custom-control-input pc-check" type="checkbox" value={this.state.searchAutoClaimed} onChange={e => this.changeCheckbox(e)} name="searchAutoClaimed" id="searchAutoClaimed" />
                                                        <label className="custom-control-label" htmlFor="searchAutoClaimed">
                                                            Claimed
                                                        </label>
                                                    </div>
                                                    <div className="custom-control custom-control-checkbox custom-control-inline form-control-lg d-md-block">
                                                        <input className="custom-control-input pc-check" type="checkbox" value={this.state.searchAutoParked} onChange={e => this.changeCheckbox(e)} name="searchAutoParked" id="searchAutoParked" />
                                                        <label className="custom-control-label" htmlFor="searchAutoParked">
                                                            Parked
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card">
                                                <div className="card-header"><h3>Tele-Op Period</h3></div>
                                                <div className="card-body">
                                                    {this.state.searchMode ? (
                                                        <div>
                                                            <div className="form-group">
                                                                <label htmlFor="searchMineralsRangeMin">Minerals in {this.state.searchMineralsWhere == 'cargo' ? "Cargo Hold (Minimum)" : "Depot (Minimum)"}</label>
                                                                <div className="input-group input-group-lg">
                                                                    <div className="input-group-prepend">
                                                                        <button className="btn" type="button" onClick={() => { if (this.state.searchMineralsRangeMin >= 1) this.setState({ searchMineralsRangeMin: this.state.searchMineralsRangeMin - 1 }) }}>-</button>
                                                                    </div>
                                                                    <input type="number" className="form-control" name="searchMineralsRangeMin" value={this.state.searchMineralsRangeMin} onChange={e => this.change(e)} min="0" />
                                                                    <div className="input-group-append">
                                                                        <button className="btn" type="button" onClick={() => { this.setState({ searchMineralsRangeMin: this.state.searchMineralsRangeMin + 1 }) }}>+</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="searchMineralsRangeMax">Minerals in {this.state.searchMineralsWhere == 'cargo' ? "Cargo Hold (Maximum)" : "Depot (Maximum)"}</label>
                                                                <div className="input-group input-group-lg">
                                                                    <div className="input-group-prepend">
                                                                        <button className="btn" type="button" onClick={() => { if (this.state.searchMineralsRangeMax >= 1) this.setState({ searchMineralsRangeMax: this.state.searchMineralsRangeMax - 1 }) }}>-</button>
                                                                    </div>
                                                                    <input type="number" className="form-control" name="searchMineralsRangeMax" value={this.state.searchMineralsRangeMax} onChange={e => this.change(e)} min="0" />
                                                                    <div className="input-group-append">
                                                                        <button className="btn" type="button" onClick={() => { this.setState({ searchMineralsRangeMax: this.state.searchMineralsRangeMax + 1 }) }}>+</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="custom-control custom-radio custom-control-inline form-control-md d-md-block">
                                                                <input className="custom-control-input pc-check" type="radio" name="searchMineralsWhere" id="searchMineralsWhereCargo" value="cargo" onChange={e => this.change(e)} />
                                                                <label className="custom-control-label" htmlFor="searchMineralsWhereCargo">
                                                                    Cargo Hold
                                                            </label>
                                                            </div>
                                                            <div className="custom-control custom-radio custom-control-inline form-control-md d-md-block">
                                                                <input className="custom-control-input pc-check" type="radio" name="searchMineralsWhere" id="searchMineralsWhereDepot" value="depot" onChange={e => this.change(e)} />
                                                                <label className="custom-control-label" htmlFor="searchMineralsWhereDepot">
                                                                    Depot
                                                            </label>
                                                            </div>
                                                        </div>
                                                    ) : (<div>
                                                        <div className="form-group">
                                                            <label htmlFor="searchCargoMinerals">Number of minerals scored in Cargo Hold</label>
                                                            <br></br>
                                                            <div className="input-group input-group-lg">
                                                                <div className="input-group-prepend">
                                                                    <button className="btn" type="button" onClick={() => { if (this.state.searchCargoMinerals >= 1) this.setState({ searchCargoMinerals: this.state.searchCargoMinerals - 1 }) }}>-</button>
                                                                </div>
                                                                <input type="number" className="form-control" name="searchsearchCargoMinerals" value={this.state.searchCargoMinerals} onChange={e => this.change(e)} min="0" />
                                                                <div className="input-group-append">
                                                                    <button className="btn" type="button" onClick={() => { this.setState({ searchCargoMinerals: this.state.searchCargoMinerals + 1 }) }}>+</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="searchDepotMinerals">Number of minerals scored in Depot</label>
                                                            <div className="input-group input-group-lg">
                                                                <div className="input-group-prepend">
                                                                    <button className="btn" type="button" onClick={() => { if (this.state.searchDepotMinerals >= 1) this.setState({ searchDepotMinerals: this.state.searchDepotMinerals - 1 }) }}>-</button>
                                                                </div>
                                                                <input type="number" className="form-control" name="searchDepotMinerals" value={this.state.searchDepotMinerals} onChange={e => this.change(e)} min="0" />
                                                                <div className="input-group-append">
                                                                    <button className="btn" type="button" onClick={() => { this.setState({ searchDepotMinerals: this.state.searchDepotMinerals + 1 }) }}><strong>+</strong></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card">
                                                <div className="card-header"><h3>End-Game Period</h3></div>
                                                <div className="card-body">
                                                    <div className="custom-control custom-radio custom-control-inline form-control-lg d-md-block">
                                                        <input className="custom-control-input pc-check" type="radio" name="searchEndGamePosition" id="endGameNone" value="none" onChange={e => this.change(e)} />
                                                        <label className="custom-control-label" htmlFor="endGameNone">
                                                            None
                                                            </label>
                                                    </div>
                                                    <div className="custom-control custom-radio custom-control-inline form-control-lg d-md-block">
                                                        <input className="custom-control-input pc-check" type="radio" name="searchEndGamePosition" id="endGameRelatch" value="relatch" onChange={e => this.change(e)} />
                                                        <label className="custom-control-label" htmlFor="endGameRelatch">
                                                            Relatched
                                                            </label>
                                                    </div>
                                                    <div className="custom-control custom-radio custom-control-inline form-control-lg d-md-block">
                                                        <input className="custom-control-input pc-check" type="radio" name="searchEndGamePosition" id="endGamePartialPark" value="partial" onChange={e => this.change(e)} />
                                                        <label className="custom-control-label" htmlFor="endGamePartialPark">
                                                            Partial Park
                                                            </label>
                                                    </div>
                                                    <div className="custom-control custom-radio custom-control-inline form-control-lg d-md-block">
                                                        <input className="custom-control-input pc-check" type="radio" name="searchEndGamePosition" id="endGameCompletePark" value="complete" onChange={e => this.change(e)} />
                                                        <label className="custom-control-label" htmlFor="endGameCompletePark">
                                                            Full Park
                                                            </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button className="btn-block btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Scouting;