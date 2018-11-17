import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class PointCounter extends Component {

    state = {
        autoLanded: false,
        autoSampled: false,
        autoClaimed: false,
        autoParked: false,
        autoLanded2: false,
        autoSampled2: false,
        autoClaimed2: false,
        autoParked2: false,
        depotMinerals: 0,
        cargoMinerals: 0,
        endGamePosition: "none",
        endGamePosition2: "none",
        score: 0
    };

    change = e => { //Changes the state whenever an element changes. Set the "onChange" attribute of the element to this function and the "name" attribute to the state you want to modify.
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    changeCheckbox = e => { //Same as above, except uses the target element's "checked" property.
        this.setState({
            [e.target.name]: e.target.checked
        });
    }

    calculatePoints() {
        var depotPoints;
        var cargoPoints;
        if (!this.state.depotMinerals) depotPoints = 0;
        else depotPoints = parseInt(this.state.depotMinerals) * 2;
        if (!this.state.cargoMinerals) cargoPoints = 0;
        else cargoPoints = parseInt(this.state.cargoMinerals) * 5;

        var scoreAccumulator = 0;
        scoreAccumulator += depotPoints;
        scoreAccumulator += cargoPoints;
        if (this.state.autoLanded) scoreAccumulator += 30;
        if (this.state.autoSampled) scoreAccumulator += 25;
        if (this.state.autoClaimed) scoreAccumulator += 15;
        if (this.state.autoParked) scoreAccumulator += 10;
        if (this.state.autoLanded2) scoreAccumulator += 30;
        if (this.state.autoSampled2) scoreAccumulator += 25;
        if (this.state.autoClaimed2) scoreAccumulator += 15;
        if (this.state.autoParked2) scoreAccumulator += 10;

        switch (this.state.endGamePosition) {
            case "none":
                scoreAccumulator += 0;
                break;
            case "relatch":
                scoreAccumulator += 50;
                break;
            case "partial":
                scoreAccumulator += 15;
                break;
            case "complete":
                scoreAccumulator += 25;
                break;
            default:
                scoreAccumulator += 0;
                break;
        }

        switch (this.state.endGamePosition2) {
            case "none":
                scoreAccumulator += 0;
                break;
            case "relatch":
                scoreAccumulator += 50;
                break;
            case "partial":
                scoreAccumulator += 15;
                break;
            case "complete":
                scoreAccumulator += 25;
                break;
            default:
                scoreAccumulator += 0;
                break;
        }

        this.setState({ score: scoreAccumulator });
    };

    reset() {

        try {
            document.getElementById("autoLanded").checked = false;
            document.getElementById("autoSampled").checked = false;
            document.getElementById("autoClaimed").checked = false;
            document.getElementById("autoParked").checked = false;
            document.getElementById("autoLanded2").checked = false;
            document.getElementById("autoSampled2").checked = false;
            document.getElementById("autoClaimed2").checked = false;
            document.getElementById("autoParked2").checked = false;
            document.getElementById("endGameNone").checked = false;
            document.getElementById("endGameRelatch").checked = false;
            document.getElementById("endGamePartialPark").checked = false;
            document.getElementById("endGameCompletePark").checked = false;
            document.getElementById("endGameNone2").checked = false;
            document.getElementById("endGameRelatch2").checked = false;
            document.getElementById("endGamePartialPark2").checked = false;
            document.getElementById("endGameCompletePark2").checked = false;
        } catch (e) {
            console.error("Unexpected error:", e);
        }
        this.setState({
            autoLanded: false,
            autoSampled: false,
            autoClaimed: false,
            autoParked: false,
            depotMinerals: 0,
            cargoMinerals: 0,
            endGamePosition: "none",
            endGamePosition2: "none",
            score: 0
        });
    }
    render() {
        return (
            <div className="App">
                <Navbar page="point-counter" />
                <div className="container-fluid">
                    <div className="card-holder">
                        <h1>Rover Ruckus Points Counter</h1>
                        <form>
                            <div className="row">
                                <div className="col-md-4 mb-4">
                                    <div className="card h-100">
                                        <div className="card-header">
                                            <legend>Autonomous Period</legend>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-6 sb-1">
                                                    <div className="custom-control custom-control-checkbox custom-control-inline form-control-lg">
                                                        <input className="custom-control-input" type="checkbox" value={this.state.autoLanded} onChange={e => this.changeCheckbox(e)} name="autoLanded" id="autoLanded" />
                                                        <label className="custom-control-label" htmlFor="autoLanded">
                                                            Landed
                                            </label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 sb-1">
                                                    <div className="custom-control custom-control-checkbox custom-control-inline form-control-lg">
                                                        <input className="custom-control-input" type="checkbox" value={this.state.autoLanded2} onChange={e => this.changeCheckbox(e)} name="autoLanded2" id="autoLanded2" />
                                                        <label className="custom-control-label" htmlFor="autoLanded2">
                                                            Landed
                                            </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 sb-1">
                                                    <div className="custom-control custom-control-checkbox custom-control-inline form-control-lg">
                                                        <input className="custom-control-input" type="checkbox" value={this.state.autoSampled} onChange={e => this.changeCheckbox(e)} name="autoSampled" id="autoSampled" />
                                                        <label className="custom-control-label" htmlFor="autoSampled">
                                                            Sampled
                                                </label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 sb-1">
                                                    <div className="custom-control custom-control-checkbox custom-control-inline form-control-lg">
                                                        <input className="custom-control-input" type="checkbox" value={this.state.autoSampled2} onChange={e => this.changeCheckbox(e)} name="autoSampled2" id="autoSampled2" />
                                                        <label className="custom-control-label" htmlFor="autoSampled2">
                                                            Sampled
                                                </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 sb-1">
                                                    <div className="custom-control custom-control-checkbox custom-control-inline form-control-lg">
                                                        <input className="custom-control-input" type="checkbox" value={this.state.autoClaimed} onChange={e => this.changeCheckbox(e)} name="autoClaimed" id="autoClaimed" />
                                                        <label className="custom-control-label" htmlFor="autoClaimed">
                                                            Claimed
                                                </label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 sb-1">
                                                    <div className="custom-control custom-control-checkbox custom-control-inline form-control-lg">
                                                        <input className="custom-control-input" type="checkbox" value={this.state.autoClaimed2} onChange={e => this.changeCheckbox(e)} name="autoClaimed2" id="autoClaimed2" />
                                                        <label className="custom-control-label" htmlFor="autoClaimed2">
                                                            Claimed
                                                </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 sb-1">
                                                    <div className="custom-control custom-control-checkbox custom-control-inline form-control-lg">
                                                        <input className="custom-control-input" type="checkbox" value={this.state.autoParked} onChange={e => this.changeCheckbox(e)} name="autoParked" id="autoParked" />
                                                        <label className="custom-control-label" htmlFor="autoParked">
                                                            Parked
                                                </label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 sb-1">
                                                    <div className="custom-control custom-control-checkbox custom-control-inline form-control-lg">
                                                        <input className="custom-control-input" type="checkbox" value={this.state.autoParked2} onChange={e => this.changeCheckbox(e)} name="autoParked2" id="autoParked2" />
                                                        <label className="custom-control-label" htmlFor="autoParked2">
                                                            Parked
                                                </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="card h-100">
                                        <div className="card-header">
                                            <legend>Tele-Op Period</legend>
                                        </div>
                                        <div className="card-body">
                                            {/*TODO the increment/decrement buttons on desktop are TINY and on my phone they dont even show up.
                                        It would be nice to have big shiny buttons for incrementing/decrementing.
                                        Also, these fields take up too much horizontal space.*/}
                                            <div className="form-group">
                                                <label htmlFor="cargoMinerals">Number of minerals scored in Cargo Hold</label>
                                                <br></br>
                                                <div className="input-group input-group-lg">
                                                    <div className="input-group-prepend">
                                                        <button className="btn" type="button" onClick={() => { if (this.state.cargoMinerals >= 1) this.setState({ cargoMinerals: this.state.cargoMinerals - 1 }) }}>-</button>
                                                    </div>
                                                    <input type="number" className="form-control" name="cargoMinerals" value={this.state.cargoMinerals} onChange={e => this.change(e)} min="0" />
                                                    <div className="input-group-append">
                                                        <button className="btn" type="button" onClick={() => { this.setState({ cargoMinerals: this.state.cargoMinerals + 1 }) }}>+</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="depotMinerals">Number of minerals scored in Depot</label>
                                                <div className="input-group input-group-lg">
                                                    <div className="input-group-prepend">
                                                        <button className="btn" type="button" onClick={() => { if (this.state.depotMinerals >= 1) this.setState({ depotMinerals: this.state.depotMinerals - 1 }) }}>-</button>
                                                    </div>
                                                    <input type="number" className="form-control" name="depotMinerals" value={this.state.depotMinerals} onChange={e => this.change(e)} min="0" />
                                                    <div className="input-group-append">
                                                        <button className="btn" type="button" onClick={() => { this.setState({ depotMinerals: this.state.depotMinerals + 1 }) }}><strong>+</strong></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-4">
                                <div className="card h-100">
                                    <div className="card-header">
                                        <legend>End-Game Period</legend>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-6 mb-1">
                                                <div className="custom-control custom-radio custom-control-inline form-control-lg">
                                                    <input className="custom-control-input" type="radio" name="endGamePosition" id="endGameNone" value="none" onChange={e => this.change(e)} />
                                                    <label className="custom-control-label" htmlFor="endGameNone">
                                                        None
                                                </label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-1">
                                                <div className="custom-control custom-radio custom-control-inline form-control-lg">
                                                    <input className="custom-control-input" type="radio" name="endGamePosition2" id="endGameNone2" value="none" onChange={e => this.change(e)} />
                                                    <label className="custom-control-label" htmlFor="endGameNone2">
                                                        None
                                                </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-2">
                                                <div className="custom-control custom-radio custom-control-inline form-control-lg">
                                                    <input className="custom-control-input" type="radio" name="endGamePosition" id="endGameRelatch" value="relatch" onChange={e => this.change(e)} />
                                                    <label className="custom-control-label" htmlFor="endGameRelatch">
                                                        Re-Latched
                                                </label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <div className="custom-control custom-radio custom-control-inline form-control-lg">
                                                    <input className="custom-control-input" type="radio" name="endGamePosition2" id="endGameRelatch2" value="relatch" onChange={e => this.change(e)} />
                                                    <label className="custom-control-label" htmlFor="endGameRelatch2">
                                                        Re-Latched
                                                </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-2">
                                                <div className="custom-control custom-radio custom-control-inline form-control-lg">
                                                    <input className="custom-control-input" type="radio" name="endGamePosition" id="endGamePartialPark" value="partial" onChange={e => this.change(e)} />
                                                    <label className="custom-control-label" htmlFor="endGamePartialPark">
                                                        Partial Park
                                                </label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <div className="custom-control custom-radio custom-control-inline form-control-lg">
                                                    <input className="custom-control-input" type="radio" name="endGamePosition2" id="endGamePartialPark2" value="partial" onChange={e => this.change(e)} />
                                                    <label className="custom-control-label" htmlFor="endGamePartialPark2">
                                                        Partial Park
                                                </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-1">
                                                <div className="custom-control custom-radio custom-control-inline form-control-lg">
                                                    <input className="custom-control-input" type="radio" name="endGamePosition" id="endGameCompletePark" value="complete" onChange={e => this.change(e)} />
                                                    <label className="custom-control-label" htmlFor="endGameCompletePark">
                                                        Full Park
                                                </label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-1">
                                                <div className="custom-control custom-radio custom-control-inline form-control-lg">
                                                    <input className="custom-control-input" type="radio" name="endGamePosition2" id="endGameCompletePark2" value="complete" onChange={e => this.change(e)} />
                                                    <label className="custom-control-label" htmlFor="endGameCompletePark2">
                                                        Full Park
                                                </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button type="button" className="btn btn-primary mr-1" onClick={this.calculatePoints.bind(this)}>Tally score</button>
                            <button type="button" className="btn btn-dark mr-1" onClick={this.reset.bind(this)}>Reset</button>
                        </form>
                        <h1>Score: {this.state.score}</h1>
                    </div>
                </div >
            </div >
        );
    }
}



export default PointCounter;
