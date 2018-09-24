import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class PointCounter extends Component {

    state = {
        depotMinerals: "",
        cargoMinerals: "",
        score: 0
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    calculatePoints() {
        var depotPoints = parseInt(this.state.depotMinerals)
        var cargoPoints = parseInt(this.state.cargoMinerals)
        this.setState({ score: (depotPoints) * 2 + (cargoPoints) * 5 })
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
                                                <input className="custom-control-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="custom-control-label" for="defaultCheck1">
                                                    Landed
                                            </label>
                                            </div>

                                            <div className="custom-control custom-control-checkbox">
                                                <input className="custom-control-input" type="checkbox" value="" id="defaultCheck2" />
                                                <label className="custom-control-label" for="defaultCheck2">
                                                    Sampled
                                                </label>
                                            </div>
                                            <div className="custom-control custom-control-checkbox">
                                                <input className="custom-control-input" type="checkbox" value="" id="defaultCheck3" />
                                                <label className="custom-control-label" for="defaultCheck3">
                                                    Claimed
                                                </label>
                                            </div>
                                            <div className="custom-control">
                                                <input className="custom-control-input" type="checkbox" value="" id="defaultCheck4" />
                                                <label className="custom-control-label" for="defaultCheck4">
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
                                                <input className="custom-control-input" type="radio" name="endGame" id="endGameNone" value="option1" />
                                                <label className="custom-control-label" for="endGameNone">
                                                    None
                                                </label>
                                            </div>
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <input className="custom-control-input" type="radio" name="endGame" id="reLatch" value="option2" />
                                                <label className="custom-control-label" for="reLatch">
                                                    Re-Latched
                                                </label>
                                            </div>
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <input className="custom-control-input" type="radio" name="endGame" id="partialCraterPark" value="option3" />
                                                <label className="custom-control-label" for="partialCraterPark">
                                                    Partial Crater Park
                                                </label>
                                            </div>
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <input className="custom-control-input" type="radio" name="endGame" id="completeCraterPark" value="option4" />
                                                <label className="custom-control-label" for="completeCraterPark">
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
