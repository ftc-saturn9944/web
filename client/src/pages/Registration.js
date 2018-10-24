import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class Registration extends Component {
    state = {
        studentData: {
            firstName: "",
            lastName: "",
            studentPhone: "",
            studentEmail: "",
            parentPhone: "",
            parentEmail: ""
        }
    };

    change = e => { //Changes the state whenever an element changes. Set the "onChange" attribute of the element to this function and the "name" attribute to the state you want to modify.
        console.log(e.target.name);
        let data = this.state.studentData;
        data[e.target.name] = e.target.value;
        this.setState({
            studentData: data
        });
    };
    sendInfo() {
        console.log(this.state.studentData);
        fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(this.state.studentData)
        }).then(res => {
            console.log(res.status);
        })
    };
    render() {
        return (
            <div className="App">
                <Navbar page="registration" />
                <div className="container-fluid">
                    <h1>Registration</h1>
                    <p>Sign up for the robotics team!;)</p>
                    <div className="form-group">
                        <label for="first-name"><b>Name</b></label><br />
                        <input className="form-control col-md-6" type="text" placeholder="Enter Name" id="first-name" name="firstName" value={this.state.studentData.firstName} onChange={e => this.change(e)} />
                    </div>
                    <div className="form-group">
                        <label for="last-name"><b>Last Name</b></label><br />
                        <input className="form-control col-md-6" type="text" placeholder="Enter last name" id="last-name" name="lastName" value={this.state.studentData.lastName} onChange={e => this.change(e)} />
                    </div>
                    <div className="form-group">
                        <label for="student-phone" ><b>Student Phone</b></label><br />
                        <input className="form-control col-md-6" type="text" placeholder="Enter student phone" id="student-phone" name="studentPhone" value={this.state.studentData.studentPhone} onChange={e => this.change(e)} />
                    </div>
                    <div className="form-group">
                        <label for="student-email" ><b>Student Email</b></label><br />
                        <input className="form-control col-md-6" type="text" placeholder="Enter student email" id="student-email" name="studentEmail" value={this.state.studentData.studentEmail} onChange={e => this.change(e)} />
                    </div>
                    <div className="form-group">
                        <label for="parent-phone" ><b>Parent's Phone Number</b></label><br />
                        <input className="form-control col-md-6" type="text" placeholder="Enter parent phone number" id="parent-phone" name="parentPhone" value={this.state.studentData.parentPhone} onChange={e => this.change(e)} />
                    </div>
                    <div className="form-group">
                        <label className="" htmlFor="parent-email" ><b>Parent's Email</b></label>
                        <input className="form-control col-md-6" type="text" placeholder="Enter parent email" id="parent-email" name="parentEmail" value={this.state.studentData.parentEmail} onChange={e => this.change(e)} />
                    </div>
                    <button className="btn" onClick={this.sendInfo.bind(this)}>Submit</button>
                </div>
            </div>

        );
    }
}

export default Registration;
