import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class PointCounter extends Component {

    state = {
        autoLanded: false,
        autoSampled: false,
        autoClaimed: false,
        autoParked: false,
        depotMinerals: 0,
        cargoMinerals: 0,
        endGamePosition: "none",
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
        var depotPoints = parseInt(this.state.depotMinerals) * 2;
        var cargoPoints = parseInt(this.state.cargoMinerals) * 5;
        var scoreAccumulator = 0;
        scoreAccumulator += depotPoints;
        scoreAccumulator += cargoPoints;
        console.log(this.state.autoLanded);
        if (this.state.autoLanded) scoreAccumulator += 30;
        if (this.state.autoSampled) scoreAccumulator += 25;
        if (this.state.autoClaimed) scoreAccumulator += 15;
        if (this.state.autoParked) scoreAccumulator += 10;

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

        this.setState({ score: scoreAccumulator });
    };

    render() {
        return (
            <div className="App">
                <Navbar />
                <div className="container-fluid">
                    <div className="card-holder">
                        <form>
                            <div className="row">
                                <div className="col-md-4 mb-4">
                                    <div className="card h-100">
                                        <div className="card-header">
                                            <legend>Autonomous Period</legend>
                                        </div>
                                        <div className="card-body">
                                            <div className="custom-control custom-control-checkbox">
                                                <input className="custom-control-input" type="checkbox" value={this.state.autoLanded} onChange={e => this.changeCheckbox(e)} name="autoLanded" id="autoLanded" />
                                                <label className="custom-control-label" for="autoLanded">
                                                    Landed
                                            </label>
                                            </div>

                                            <div className="custom-control custom-control-checkbox">
                                                <input className="custom-control-input" type="checkbox" value={this.state.autoSampled} onChange={e => this.changeCheckbox(e)} name="autoSampled" id="autoSampled" />
                                                <label className="custom-control-label" for="autoSampled">
                                                    Sampled
                                                </label>
                                            </div>
                                            <div className="custom-control custom-control-checkbox">
                                                <input className="custom-control-input" type="checkbox" value={this.state.autoClaimed} onChange={e => this.changeCheckbox(e)} name="autoClaimed" id="autoClaimed" />
                                                <label className="custom-control-label" for="autoClaimed">
                                                    Claimed
                                                </label>
                                            </div>
                                            <div className="custom-control">
                                                <input className="custom-control-input" type="checkbox" value={this.state.autoParked} onChange={e => this.changeCheckbox(e)} name="autoParked" id="autoParked" />
                                                <label className="custom-control-label" for="autoParked">
                                                    Parked
                                                </label>
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
                                                <label for="cargoMinerals">Number of minerals scored in Cargo Hold</label>
                                                <input type="number" className="form-control" name="cargoMinerals" value={this.state.cargoMinerals} onChange={e => this.change(e)} />
                                            </div>
                                            <div className="form-group">
                                                <label for="depotMinerals">Number of minerals scored in Depot</label>
                                                <input type="number" className="form-control" name="depotMinerals" value={this.state.depotMinerals} onChange={e => this.change(e)} />
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
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <input className="custom-control-input" type="radio" name="endGamePosition" id="endGameNone" value="none" onChange={e => this.change(e)} />
                                                <label className="custom-control-label" for="endGameNone">
                                                    None
                                                </label>
                                            </div>
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <input className="custom-control-input" type="radio" name="endGamePosition" id="endGameRelatch" value="relatch" onChange={e => this.change(e)} />
                                                <label className="custom-control-label" for="endGameRelatch">
                                                    Re-Latched
                                                </label>
                                            </div>
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <input className="custom-control-input" type="radio" name="endGamePosition" id="endGamePartialPark" value="partial" onChange={e => this.change(e)} />
                                                <label className="custom-control-label" for="endGamePartialPark">
                                                    Partial Crater Park
                                                </label>
                                            </div>
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <input className="custom-control-input" type="radio" name="endGamePosition" id="endGameCompletePark" value="complete" onChange={e => this.change(e)} />
                                                <label className="custom-control-label" for="endGameCompletePark">
                                                    Complete Crater Park
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn btn-primary" onClick={this.calculatePoints.bind(this)}>Tally score</button>
                        </form>
                        <h1>Score: {this.state.score}</h1>
                    </div>
                </div>
            </div>
        );
    }
}



export default PointCounter;
