import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class PointCounter extends Component {

    state = {
        depotMinerals: "",
        cargoMinerals: ""
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    calculatePoints() {
        var depotPoints = parseInt(this.state.depotMinerals)
        var cargoPoints = parseInt(this.state.cargoMinerals)
        alert((depotPoints) * 2 + (cargoPoints) * 5)
    };

    render() {
        return (
            <div className="App">
                <Navbar />
                <form>
                    <div class="custom-control custom-control-checkbox">
                        <input class="custom-control-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="custom-control-label" for="defaultCheck1">
                            Landed
                        </label>
                    </div>
                    <div class="custom-control custom-control-checkbox">
                        <input class="custom-control-input" type="checkbox" value="" id="defaultCheck2" />
                        <label class="custom-control-label" for="defaultCheck2">
                            Sampled
                        </label>
                    </div>
                    <div class="custom-control custom-control-checkbox">
                        <input class="custom-control-input" type="checkbox" value="" id="defaultCheck3" />
                        <label class="custom-control-label" for="defaultCheck3">
                            Claimed
                        </label>
                    </div>
                    <div class="custom-control">
                        <input class="custom-control-input" type="checkbox" value="" id="defaultCheck4" />
                        <label class="custom-control-label" for="defaultCheck4">
                            Parked
                        </label>
                    </div>
                    <div class="form-group">
                        <label for="cargoMinerals">Number of minerals scored in Cargo Hold</label>
                        <input type="number" class="form-control" name="cargoMinerals" value={this.state.cargoMinerals} onChange={e => this.change(e)} />
                    </div>
                    <div class="form-group">
                        <label for="depotMinerals">Number of minerals scored in Depot</label>
                        <input type="number" class="form-control" name="depotMinerals" value={this.state.depotMinerals} onChange={e => this.change(e)} />
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input class="custom-control-input" type="radio" name="endGame" id="endGameNone" value="option1" />
                        <label class="custom-control-label" for="endGameNone">
                            None
                         </label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input class="custom-control-input" type="radio" name="endGame" id="reLatch" value="option2" />
                        <label class="custom-control-label" for="reLatch">
                            Re-Latched
                        </label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input class="custom-control-input" type="radio" name="endGame" id="partialCraterPark" value="option3" />
                        <label class="custom-control-label" for="partialCraterPark">
                            Partial Crater Park
                         </label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input class="custom-control-input" type="radio" name="endGame" id="completeCraterPark" value="option4" />
                        <label class="custom-control-label" for="completeCraterPark">
                            Complete Crater Park
                         </label>
                    </div>
                    <button type="button" class="btn btn-primary" onClick={this.calculatePoints.bind(this)}>Tally score</button>
                </form>
            </div>
        );
    }
}



export default PointCounter;
