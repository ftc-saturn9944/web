import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class PointCounter extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <form>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                            Landed
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                        <label class="form-check-label" for="defaultCheck2">
                            Sampled
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                        <label class="form-check-label" for="defaultCheck2">
                            Claimed
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                        <label class="form-check-label" for="defaultCheck2">
                            Parked
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option1" />
                        <label class="form-check-label" for="exampleRadios1">
                            None
                         </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" />
                        <label class="form-check-label" for="exampleRadios2">
                            Re-Latched
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option3" />
                        <label class="form-check-label" for="exampleRadios3">
                            Partial Crater Park
                         </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option4" />
                        <label class="form-check-label" for="exampleRadios4">
                            Complete Crater Park
                         </label>
                    </div>
                </form>
            </div>
        );
    }
}

export default PointCounter;
