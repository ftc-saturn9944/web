import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class Registration extends Component {
    render() {
        return (
            <div className="App">
                <Navbar page="registration" />
                <div className="container-fluid">
                    <h1>Registration</h1>
                    <p>Sign up for the robotics team!;)</p>
                    <div className="form-group">
                        <label for="first-name"><b>Name</b></label><br />
                        <input className="form-control col-md-6" type="text" placeholder="Enter Name" id="first-name" />
                    </div>
                    <div className="form-group">
                        <label for="last-name"><b>Last Name</b></label><br />
                        <input className="form-control col-md-6" type="text" placeholder="Enter last name" id="last-name" />
                    </div>
                    <div className="form-group">
                        <label for="student-phone" ><b>Student Phone</b></label><br />
                        <input className="form-control col-md-6" type="text" placeholder="Enter student phone" id="student-phone" />
                    </div>
                    <div className="form-group">
                        <label for="student-email" ><b>Student Email</b></label><br />
                        <input className="form-control col-md-6" type="text" placeholder="Enter student email" id="student-email" />
                    </div>
                    <div className="form-group">
                        <label for="parent-phone" ><b>Parent's Phone Number</b></label><br />
                        <input className="form-control col-md-6" type="text" placeholder="Enter parent phone number" id="parent-phone" />
                    </div>
                    <div className="form-group">
                        <label className="" htmlFor="parent-email" ><b>Parent's Email</b></label>
                        <input className="form-control col-md-6" type="text" placeholder="Enter parent email" id="parent-email" />
                    </div>
                </div>
            </div>

        );
    }
}

export default Registration;
