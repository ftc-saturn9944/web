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

        autoLanded3: false,
        autoSampled3: false,
        autoClaimed3: false,
        autoParked3: false,

        autoLanded4: false,
        autoSampled4: false,
        autoClaimed4: false,
        autoParked4: false,

        depotMinerals: 0,
        cargoMinerals: 0,
        depotMinerals2: 0,
        cargoMinerals2: 0,
        endGamePosition: "none",
        endGamePosition2: "none",
        endGamePosition3: "none",
        endGamePosition4: "none",
        score: 0,
        score2: 0,
        displayMode: 1
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
    changeDisplayMode(num) {
        this.setState({ displayMode: num });
    }
    calculatePoints() {
        var depotPoints;
        var cargoPoints;
        var depotPoints2;
        var cargoPoints2;
        if (!this.state.depotMinerals) depotPoints = 0;
        else depotPoints = parseInt(this.state.depotMinerals) * 2;
        if (!this.state.cargoMinerals) cargoPoints = 0;
        else cargoPoints = parseInt(this.state.cargoMinerals) * 5;

        if (!this.state.depotMinerals2) depotPoints2 = 0;
        else depotPoints2 = parseInt(this.state.depotMinerals2) * 2;
        if (!this.state.cargoMinerals2) cargoPoints2 = 0;
        else cargoPoints2 = parseInt(this.state.cargoMinerals2) * 5;

        var scoreAccumulator = 0;
        var scoreAccumulator2 = 0; //For alliance #2 (red)
        scoreAccumulator += depotPoints;
        scoreAccumulator += cargoPoints;
        scoreAccumulator2 += depotPoints2;
        scoreAccumulator2 += cargoPoints2;

        if (this.state.autoLanded) scoreAccumulator += 30;
        if (this.state.autoSampled) scoreAccumulator += 25;
        if (this.state.autoClaimed) scoreAccumulator += 15;
        if (this.state.autoParked) scoreAccumulator += 10;
        if (this.state.autoLanded2 && this.state.displayMode >= 2) scoreAccumulator += 30;
        if (this.state.autoSampled2 && this.state.displayMode >= 2) scoreAccumulator += 25;
        if (this.state.autoClaimed2 && this.state.displayMode >= 2) scoreAccumulator += 15;
        if (this.state.autoParked2 && this.state.displayMode >= 2) scoreAccumulator += 10;

        if (this.state.autoLanded3 && this.state.displayMode >= 4) scoreAccumulator2 += 30;
        if (this.state.autoSampled3 && this.state.displayMode >= 4) scoreAccumulator2 += 25;
        if (this.state.autoClaimed3 && this.state.displayMode >= 4) scoreAccumulator2 += 15;
        if (this.state.autoParked3 && this.state.displayMode >= 4) scoreAccumulator2 += 10;

        if (this.state.autoLanded4 && this.state.displayMode >= 4) scoreAccumulator2 += 30;
        if (this.state.autoSampled4 && this.state.displayMode >= 4) scoreAccumulator2 += 25;
        if (this.state.autoClaimed4 && this.state.displayMode >= 4) scoreAccumulator2 += 15;
        if (this.state.autoParked4 && this.state.displayMode >= 4) scoreAccumulator2 += 10;

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
        if (this.state.displayMode >= 2)
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
        if (this.state.displayMode >= 3) {
            switch (this.state.endGamePosition3) {
                case "none":
                    scoreAccumulator2 += 0;
                    break;
                case "relatch":
                    scoreAccumulator2 += 50;
                    break;
                case "partial":
                    scoreAccumulator2 += 15;
                    break;
                case "complete":
                    scoreAccumulator2 += 25;
                    break;
                default:
                    scoreAccumulator2 += 0;
                    break;
            }

            switch (this.state.endGamePosition4) {
                case "none":
                    scoreAccumulator2 += 0;
                    break;
                case "relatch":
                    scoreAccumulator2 += 50;
                    break;
                case "partial":
                    scoreAccumulator2 += 15;
                    break;
                case "complete":
                    scoreAccumulator2 += 25;
                    break;
                default:
                    scoreAccumulator2 += 0;
                    break;
            }
        }

        console.log(this.state);
        this.setState({ score: scoreAccumulator });
        this.setState({ score2: scoreAccumulator2 });
    };
    resetCheckbox(classname) {
        const nodeList = document.getElementsByClassName(classname);
        for (let i = 0; i < nodeList.length; i++) {
            nodeList.item(i).checked = false;
        }
    }
    reset() {

        try {
            this.resetCheckbox("pc-check");
        } catch (e) {
            console.error("Unexpected error:", e);
        }
        this.setState({
            autoLanded: false,
            autoSampled: false,
            autoClaimed: false,
            autoParked: false,

            autoLanded2: false,
            autoSampled2: false,
            autoClaimed2: false,
            autoParked2: false,

            autoLanded3: false,
            autoSampled3: false,
            autoClaimed3: false,
            autoParked3: false,

            autoLanded4: false,
            autoSampled4: false,
            autoClaimed4: false,
            autoParked4: false,

            depotMinerals: 0,
            cargoMinerals: 0,
            depotMinerals2: 0,
            cargoMinerals2: 0,
            endGamePosition: "none",
            endGamePosition2: "none",
            endGamePosition3: "none",
            endGamePosition4: "none",
            score: 0,
            score2: 0
        });
    }
    render() {
        console.log(this.state.renderMode < 2 ? "col-6 mb-1 invisible" : "col-6 mb-1");
        return (
            <div className="App">
                <Navbar page="point-counter" />
                <div className="container-fluid">
                    <div className="card-holder">
                        <h1>Rover Ruckus Points Counter</h1>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Number of Teams
                                </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="javascript:void" onClick={this.changeDisplayMode.bind(this, 1)}>1 Team</a>
                                <a className="dropdown-item" href="javscript:void" onClick={this.changeDisplayMode.bind(this, 2)}>2 Teams (One Alliance)</a>
                                <a className="dropdown-item" href="javascript:void" onClick={this.changeDisplayMode.bind(this, 4)}>4 Teams (Both Alliances)</a>
                            </div>
                        </div>
                        <br />
                        <form>
                            <div className="row">
                                <div className="col-md-4 mb-4">
                                    <div className="card h-100">
                                        <div className="card-header">
                                            <legend>Autonomous Period</legend>
                                        </div>
                                        <div className="card-body">

                                            <div className="container">
                                                <div className="row">
                                                    <div className={this.state.displayMode < 2 ? "col-md-6 mb-1" : this.state.displayMode < 4 ? "col-md-6 mb-1" : "col-md-3 mb-1"}>
                                                        {this.state.displayMode < 2 ? <span></span> : this.state.displayMode < 4 ? <h2>Team 1</h2> : <h2 style={{ "color": "blue" }}>Blue 1</h2>}
                                                        <div className="custom-control custom-control-checkbox custom-control-inline form-control-lg d-md-block">
                                                            <input className="custom-control-input pc-check" type="checkbox" value={this.state.autoLanded} onChange={e => this.changeCheckbox(e)} name="autoLanded" id="autoLanded" />
                                                            <label className="custom-control-label" htmlFor="autoLanded">
                                                                Landed
                                                            </label>
                                                        </div>
                                                        <div className="custom-control custom-control-checkbox custom-control-inline form-control-lg d-md-block">
                                                            <input className="custom-control-input pc-check" type="checkbox" value={this.state.autoSampled} onChange={e => this.changeCheckbox(e)} name="autoSampled" id="autoSampled" />
                                                            <label className="custom-control-label" htmlFor="autoSampled">
                                                                Sampled
                                                        </label>
                                                        </div>
                                                        <div className="custom-control custom-control-checkbox custom-control-inline form-control-lg d-md-block">
                                                            <input className="custom-control-input pc-check" type="checkbox" value={this.state.autoClaimed} onChange={e => this.changeCheckbox(e)} name="autoClaimed" id="autoClaimed" />
                                                            <label className="custom-control-label" htmlFor="autoClaimed">
                                                                Claimed
                                                        </label>
                                                        </div>
                                                        <div className="custom-control custom-control-checkbox custom-control-inline form-control-lg d-md-block">
                                                            <input className="custom-control-input pc-check" type="checkbox" value={this.state.autoParked} onChange={e => this.changeCheckbox(e)} name="autoParked" id="autoParked" />
                                                            <label className="custom-control-label" htmlFor="autoParked">
                                                                Parked
                                                        </label>
                                                        </div>
                                                    </div>

                                                    {this.state.displayMode >= 2
                                                        ? <div className={this.state.displayMode < 2 ? "col-md-6 mb-1 invisible" : this.state.displayMode < 4 ? "col-md-6 mb-1" : "col-md-3 mb-1"}>
                                                            {this.state.displayMode < 2 ? <span></span> : this.state.displayMode < 4 ? <h2>Team 2</h2> : <h2 style={{ "color": "blue" }}>Blue 2</h2>}
                                                            <div className="custom-control custom-control-checkbox custom-control-inline form-control-lg d-md-block">
                                                                <input className="custom-control-input pc-check" type="checkbox" value={this.state.autoLanded2} onChange={e => this.changeCheckbox(e)} name="autoLanded2" id="autoLanded2" />
                                                                <label className="custom-control-label" htmlFor="autoLanded2">
                                                                    Landed
                                                            </label>
                                                            </div>
                                                            <div className="custom-control custom-control-checkbox custom-control-inline form-control-lg d-md-block">
                                                                <input className="custom-control-input pc-check" type="checkbox" value={this.state.autoSampled2} onChange={e => this.changeCheckbox(e)} name="autoSampled2" id="autoSampled2" />
                                                                <label className="custom-control-label" htmlFor="autoSampled2">
                                                                    Sampled
                                                        </label>
                                                            </div>
                                                            <div className="custom-control custom-control-checkbox custom-control-inline form-control-lg d-md-block">
                                                                <input className="custom-control-input pc-check" type="checkbox" value={this.state.autoClaimed2} onChange={e => this.changeCheckbox(e)} name="autoClaimed2" id="autoClaimed2" />
                                                                <label className="custom-control-label" htmlFor="autoClaimed2">
                                                                    Claimed
                                                        </label>
                                                            </div>
                                                            <div className="custom-control custom-control-checkbox custom-control-inline form-control-lg d-md-block">
                                                                <input className="custom-control-input pc-check" type="checkbox" value={this.state.autoParked2} onChange={e => this.changeCheckbox(e)} name="autoParked2" id="autoParked2" />
                                                                <label className="custom-control-label" htmlFor="autoParked2">
                                                                    Parked
                                                        </label>
                                                            </div>
                                                        </div>
                                                        : <span></span>
                                                    }
                                                    {this.state.displayMode >= 4
                                                        ? <div className={this.state.displayMode < 2 ? "col-md-6 mb-1 invisible" : this.state.displayMode < 4 ? "col-md-6 mb-1 invisible" : "col-md-3 mb-1"}>
                                                            <h2 style={{ "color": "red" }}>Red 1</h2>
                                                            <div className="custom-control custom-control-checkbox custom-control-inline form-control-lg d-md-block">
                                                                <input className="custom-control-input pc-check" type="checkbox" value={this.state.autoLanded3} onChange={e => this.changeCheckbox(e)} name="autoLanded3" id="autoLanded3" />
                                                                <label className="custom-control-label" htmlFor="autoLanded3">
                                                                    Landed
                                                            </label>
                                                            </div>
                                                            <div className="custom-control custom-control-checkbox custom-control-inline form-control-lg d-md-block">
                                                                <input className="custom-control-input pc-check" type="checkbox" value={this.state.autoSampled3} onChange={e => this.changeCheckbox(e)} name="autoSampled3" id="autoSampled3" />
                                                                <label className="custom-control-label" htmlFor="autoSampled3">
                                                                    Sampled
                                                        </label>
                                                            </div>
                                                            <div className="custom-control custom-control-checkbox custom-control-inline form-control-lg d-md-block">
                                                                <input className="custom-control-input pc-check" type="checkbox" value={this.state.autoClaimed3} onChange={e => this.changeCheckbox(e)} name="autoClaimed3" id="autoClaimed3" />
                                                                <label className="custom-control-label" htmlFor="autoClaimed3">
                                                                    Claimed
                                                        </label>
                                                            </div>
                                                            <div className="custom-control custom-control-checkbox custom-control-inline form-control-lg d-md-block">
                                                                <input className="custom-control-input pc-check" type="checkbox" value={this.state.autoParked3} onChange={e => this.changeCheckbox(e)} name="autoParked3" id="autoParked3" />
                                                                <label className="custom-control-label" htmlFor="autoParked3">
                                                                    Parked
                                                        </label>
                                                            </div>
                                                        </div>
                                                        : <span></span>
                                                    }
                                                    {this.state.displayMode >= 4
                                                        ? <div className={this.state.displayMode < 2 ? "col-md-6 mb-1 invisible" : this.state.displayMode < 4 ? "col-md-6 mb-1 invisible" : "col-md-3 mb-1"}>
                                                            <h2 style={{ "color": "red" }}>Red 2</h2>
                                                            <div className="custom-control custom-control-checkbox custom-control-inline form-control-lg d-md-block">
                                                                <input className="custom-control-input pc-check" type="checkbox" value={this.state.autoLanded4} onChange={e => this.changeCheckbox(e)} name="autoLanded4" id="autoLanded4" />
                                                                <label className="custom-control-label" htmlFor="autoLanded4">
                                                                    Landed
                                                            </label>
                                                            </div>
                                                            <div className="custom-control custom-control-checkbox custom-control-inline form-control-lg d-md-block">
                                                                <input className="custom-control-input pc-check" type="checkbox" value={this.state.autoSampled4} onChange={e => this.changeCheckbox(e)} name="autoSampled4" id="autoSampled4" />
                                                                <label className="custom-control-label" htmlFor="autoSampled4">
                                                                    Sampled
                                                        </label>
                                                            </div>
                                                            <div className="custom-control custom-control-checkbox custom-control-inline form-control-lg d-md-block">
                                                                <input className="custom-control-input pc-check" type="checkbox" value={this.state.autoClaimed4} onChange={e => this.changeCheckbox(e)} name="autoClaimed4" id="autoClaimed4" />
                                                                <label className="custom-control-label" htmlFor="autoClaimed4">
                                                                    Claimed
                                                        </label>
                                                            </div>
                                                            <div className="custom-control custom-control-checkbox custom-control-inline form-control-lg d-md-block">
                                                                <input className="custom-control-input pc-check" type="checkbox" value={this.state.autoParked4} onChange={e => this.changeCheckbox(e)} name="autoParked4" id="autoParked4" />
                                                                <label className="custom-control-label" htmlFor="autoParked4">
                                                                    Parked
                                                        </label>
                                                            </div>
                                                        </div>
                                                        : <span></span>
                                                    }
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
                                            <div>
                                                {this.state.displayMode >= 4 ? <h2 style={{ "color": "blue" }}>Blue Alliance</h2> : <span></span>}
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
                                            {
                                                this.state.displayMode >= 4
                                                    ? <div>
                                                        <h2 style={{ "color": "red" }}>Red Alliance</h2>
                                                        <div className="form-group">
                                                            <label htmlFor="cargoMinerals2">Number of minerals scored in Cargo Hold</label>
                                                            <br></br>
                                                            <div className="input-group input-group-lg">
                                                                <div className="input-group-prepend">
                                                                    <button className="btn" type="button" onClick={() => { if (this.state.cargoMinerals2 >= 1) this.setState({ cargoMinerals2: this.state.cargoMinerals2 - 1 }) }}>-</button>
                                                                </div>
                                                                <input type="number" className="form-control" name="cargoMinerals2" value={this.state.cargoMinerals2} onChange={e => this.change(e)} min="0" />
                                                                <div className="input-group-append">
                                                                    <button className="btn" type="button" onClick={() => { this.setState({ cargoMinerals2: this.state.cargoMinerals2 + 1 }) }}>+</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="depotMinerals2">Number of minerals scored in Depot</label>
                                                            <div className="input-group input-group-lg">
                                                                <div className="input-group-prepend">
                                                                    <button className="btn" type="button" onClick={() => { if (this.state.depotMinerals2 >= 1) this.setState({ depotMinerals2: this.state.depotMinerals2 - 1 }) }}>-</button>
                                                                </div>
                                                                <input type="number" className="form-control" name="depotMinerals2" value={this.state.depotMinerals2} onChange={e => this.change(e)} min="0" />
                                                                <div className="input-group-append">
                                                                    <button className="btn" type="button" onClick={() => { this.setState({ depotMinerals2: this.state.depotMinerals2 + 1 }) }}><strong>+</strong></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> : <span></span>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="card h-100">
                                        <div className="card-header">
                                            <legend>End-Game Period</legend>
                                        </div>
                                        <div className="card-body">
                                            <div className="container">
                                                <div className="row">
                                                    <div className={this.state.displayMode < 2 ? "col-md-6 mb-1" : this.state.displayMode < 4 ? "col-md-6 mb-1" : "col-md-3 mb-1"}>
                                                        {this.state.displayMode < 2 ? <span></span> : this.state.displayMode < 4 ? <h2>Team 1</h2> : <h2 style={{ "color": "blue" }}>Blue 1</h2>}
                                                        <div className="custom-control custom-radio custom-control-inline form-control-lg d-md-block">
                                                            <input className="custom-control-input pc-check" type="radio" name="endGamePosition" id="endGameNone" value="none" onChange={e => this.change(e)} />
                                                            <label className="custom-control-label" htmlFor="endGameNone">
                                                                None
                                                            </label>
                                                        </div>
                                                        <div className="custom-control custom-radio custom-control-inline form-control-lg d-md-block">
                                                            <input className="custom-control-input pc-check" type="radio" name="endGamePosition" id="endGameRelatch" value="relatch" onChange={e => this.change(e)} />
                                                            <label className="custom-control-label" htmlFor="endGameRelatch">
                                                                Relatched
                                                            </label>
                                                        </div>
                                                        <div className="custom-control custom-radio custom-control-inline form-control-lg d-md-block">
                                                            <input className="custom-control-input pc-check" type="radio" name="endGamePosition" id="endGamePartialPark" value="partial" onChange={e => this.change(e)} />
                                                            <label className="custom-control-label" htmlFor="endGamePartialPark">
                                                                Partial Park
                                                            </label>
                                                        </div>
                                                        <div className="custom-control custom-radio custom-control-inline form-control-lg d-md-block">
                                                            <input className="custom-control-input pc-check" type="radio" name="endGamePosition" id="endGameCompletePark" value="complete" onChange={e => this.change(e)} />
                                                            <label className="custom-control-label" htmlFor="endGameCompletePark">
                                                                Full Park
                                                            </label>
                                                        </div>
                                                    </div>

                                                    {this.state.displayMode >= 2
                                                        ? <div className={this.state.displayMode < 2 ? "col-md-6 mb-1 invisible" : this.state.displayMode < 4 ? "col-md-6 mb-1" : "col-md-3 mb-1"}>
                                                            {this.state.displayMode < 2 ? <span></span> : this.state.displayMode < 4 ? <h2>Team 2</h2> : <h2 style={{ "color": "blue" }}>Blue 2</h2>}
                                                            <div className="custom-control custom-radio custom-control-inline form-control-lg d-md-block">
                                                                <input className="custom-control-input pc-check" type="radio" name="endGamePosition2" id="endGameNone2" value="none" onChange={e => this.change(e)} />
                                                                <label className="custom-control-label" htmlFor="endGameNone2">
                                                                    None
                                                            </label>
                                                            </div>
                                                            <div className="custom-control custom-radio custom-control-inline form-control-lg d-md-block">
                                                                <input className="custom-control-input pc-check" type="radio" name="endGamePosition2" id="endGameRelatch2" value="relatch" onChange={e => this.change(e)} />
                                                                <label className="custom-control-label" htmlFor="endGameRelatch2">
                                                                    Relatched
                                                            </label>
                                                            </div>
                                                            <div className="custom-control custom-radio custom-control-inline form-control-lg d-md-block">
                                                                <input className="custom-control-input pc-check" type="radio" name="endGamePosition2" id="endGamePartialPark2" value="partial" onChange={e => this.change(e)} />
                                                                <label className="custom-control-label" htmlFor="endGamePartialPark2">
                                                                    Partial Park
                                                            </label>
                                                            </div>
                                                            <div className="custom-control custom-radio custom-control-inline form-control-lg d-md-block">
                                                                <input className="custom-control-input pc-check" type="radio" name="endGamePosition2" id="endGameCompletePark2" value="complete" onChange={e => this.change(e)} />
                                                                <label className="custom-control-label" htmlFor="endGameCompletePark2">
                                                                    Full Park
                                                            </label>
                                                            </div>
                                                        </div>
                                                        : <span></span>
                                                    }
                                                    {this.state.displayMode >= 4
                                                        ? <div className={this.state.displayMode < 2 ? "col-md-6 mb-1 invisible" : this.state.displayMode < 4 ? "col-md-6 mb-1 invisible" : "col-md-3 mb-1"}>
                                                            <h2 style={{ "color": "red" }}>Red 1</h2>
                                                            <div className="custom-control custom-radio custom-control-inline form-control-lg d-md-block">
                                                                <input className="custom-control-input pc-check" type="radio" name="endGamePosition3" id="endGameNone3" value="none" onChange={e => this.change(e)} />
                                                                <label className="custom-control-label" htmlFor="endGameNone3">
                                                                    None
                                                            </label>
                                                            </div>
                                                            <div className="custom-control custom-radio custom-control-inline form-control-lg d-md-block">
                                                                <input className="custom-control-input pc-check" type="radio" name="endGamePosition3" id="endGameRelatch3" value="relatch" onChange={e => this.change(e)} />
                                                                <label className="custom-control-label" htmlFor="endGameRelatch3">
                                                                    Relatched
                                                            </label>
                                                            </div>
                                                            <div className="custom-control custom-radio custom-control-inline form-control-lg d-md-block">
                                                                <input className="custom-control-input pc-check" type="radio" name="endGamePosition3" id="endGamePartialPark3" value="partial" onChange={e => this.change(e)} />
                                                                <label className="custom-control-label" htmlFor="endGamePartialPark3">
                                                                    Partial Park
                                                            </label>
                                                            </div>
                                                            <div className="custom-control custom-radio custom-control-inline form-control-lg d-md-block">
                                                                <input className="custom-control-input pc-check" type="radio" name="endGamePosition3" id="endGameCompletePark3" value="complete" onChange={e => this.change(e)} />
                                                                <label className="custom-control-label" htmlFor="endGameCompletePark3">
                                                                    Full Park
                                                            </label>
                                                            </div>
                                                        </div>
                                                        : <span></span>
                                                    }
                                                    {this.state.displayMode >= 4
                                                        ? <div className={this.state.displayMode < 2 ? "col-md-6 mb-1 invisible" : this.state.displayMode < 4 ? "col-md-6 mb-1 invisible" : "col-md-3 mb-1"}>
                                                            <h2 style={{ "color": "red" }}>Red 2</h2>
                                                            <div className="custom-control custom-radio custom-control-inline form-control-lg d-md-block">
                                                                <input className="custom-control-input pc-check" type="radio" name="endGamePosition4" id="endGameNone4" value="none" onChange={e => this.change(e)} />
                                                                <label className="custom-control-label" htmlFor="endGameNone4">
                                                                    None
                                                            </label>
                                                            </div>
                                                            <div className="custom-control custom-radio custom-control-inline form-control-lg d-md-block">
                                                                <input className="custom-control-input pc-check" type="radio" name="endGamePosition4" id="endGameRelatch4" value="relatch" onChange={e => this.change(e)} />
                                                                <label className="custom-control-label" htmlFor="endGameRelatch4">
                                                                    Relatched
                                                            </label>
                                                            </div>
                                                            <div className="custom-control custom-radio custom-control-inline form-control-lg d-md-block">
                                                                <input className="custom-control-input pc-check" type="radio" name="endGamePosition4" id="endGamePartialPark4" value="partial" onChange={e => this.change(e)} />
                                                                <label className="custom-control-label" htmlFor="endGamePartialPark4">
                                                                    Partial Park
                                                            </label>
                                                            </div>
                                                            <div className="custom-control custom-radio custom-control-inline form-control-lg d-md-block">
                                                                <input className="custom-control-input pc-check" type="radio" name="endGamePosition4" id="endGameCompletePark4" value="complete" onChange={e => this.change(e)} />
                                                                <label className="custom-control-label" htmlFor="endGameCompletePark4">
                                                                    Full Park
                                                            </label>
                                                            </div>
                                                        </div>
                                                        : <span></span>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <button type="button" className="btn btn-primary mr-1" onClick={this.calculatePoints.bind(this)}>Tally score</button>
                            <button type="button" className="btn btn-dark mr-1" onClick={this.reset.bind(this)}>Reset</button>
                        </form>
                        {this.state.displayMode < 4 ? <h1>Score: {this.state.score}</h1> : <h1 style={{ "color": "blue" }}>Blue Score: {this.state.score}</h1>}
                        {this.state.displayMode >= 4 ? <h1 style={{ "color": "red" }}>Red Score: {this.state.score2}</h1> : <span></span>}
                    </div>
                </div >
            </div >
        );
    }
}



export default PointCounter;
