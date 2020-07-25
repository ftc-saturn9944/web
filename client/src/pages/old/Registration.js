import React, { Component } from 'react';
import Navbar from '../../components/Navbar';

class Registration extends Component {
    state = {
        studentData: {
            firstName: null,
            lastName: null,
            studentPhone: null,
            studentEmail: null,
            parentPhone: null,
            parentEmail: null,
            comments: null
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
    sendInfo() { //Send the info from the form to the backend
        console.log(this.state.studentData);
        document.getElementById("submit").classList.add("disabled");
        document.getElementById("status").classList.remove("alert-danger", "alert-success");
        document.getElementById("status").classList.add("invisible");
        fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(this.state.studentData)
        }).then(res => {
            console.log(res.status);

            if (res.status === 200) {
                document.getElementById("status").innerText = "Success! We will contact you as soon as possible!";
                document.getElementById("status").classList.add("alert-success");
                document.getElementById("status").classList.remove("invisible", "alert-danger", "alert-warning");
            }
            else if (res.status === 500) {
                document.getElementById("status").innerText = "Something on our end went wrong. Sorry!";
                document.getElementById("status").classList.add("alert-danger");
                document.getElementById("status").classList.remove("invisible", "alert-success");
            }
            else if (res.status === 400) {
                res.text().then((text) => {
                    console.log("")
                    if (text == "duplicate") {
                        document.getElementById("status").innerText = "This student is already in the database. Please do not press submit more than once.";
                    }
                    else if (text == "notenoughinfo") {
                        document.getElementById("status").innerText = "Please supply your first and last names, and at least one contact.";
                    }
                    document.getElementById("status").classList.add("alert-warning");
                    document.getElementById("status").classList.remove("invisible", "alert-success");
                });
            }
            document.getElementById("submit").classList.remove("disabled"); //ez spam protection
        })
    };
    render() {
        return (
            <div className="App">
                <Navbar page="registration" />
                <div className="container-fluid">
                    <h1>Registration</h1>
                    <p className="col-md-6">This page is for registering for the robotics team. If you are interested in joining, please fill out the form below and allow us to contact you about when and where you can meet the team. For any questions or concerns, please email <a href="mailto:mandarinrobotics@gmail.com">mandarinrobotics@gmail.com</a>.</p>
                    <div className="form-group">
                        <label for="first-name"><b>Name</b></label>
                        <input className="form-control col-md-6" type="text" placeholder="Enter Name" id="first-name" name="firstName" value={this.state.studentData.firstName} onChange={e => this.change(e)} />
                    </div>
                    <div className="form-group">
                        <label for="last-name"><b>Last Name</b></label>
                        <input className="form-control col-md-6" type="text" placeholder="Enter last name" id="last-name" name="lastName" value={this.state.studentData.lastName} onChange={e => this.change(e)} />
                    </div>
                    <div className="form-group">
                        <label for="student-phone" ><b>Student Phone</b></label>
                        <input className="form-control col-md-6" type="text" placeholder="Enter student phone" id="student-phone" name="studentPhone" value={this.state.studentData.studentPhone} onChange={e => this.change(e)} />
                    </div>
                    <div className="form-group">
                        <label for="student-email" ><b>Student Email</b></label>
                        <input className="form-control col-md-6" type="text" placeholder="Enter student email" id="student-email" name="studentEmail" value={this.state.studentData.studentEmail} onChange={e => this.change(e)} />
                    </div>
                    <div className="form-group">
                        <label for="parent-phone" ><b>Parent's Phone Number</b></label>
                        <input className="form-control col-md-6" type="text" placeholder="Enter parent phone number" id="parent-phone" name="parentPhone" value={this.state.studentData.parentPhone} onChange={e => this.change(e)} />
                    </div>
                    <div className="form-group">
                        <label className="" htmlFor="parent-email" ><b>Parent's Email</b></label>
                        <input className="form-control col-md-6" type="text" placeholder="Enter parent email" id="parent-email" name="parentEmail" value={this.state.studentData.parentEmail} onChange={e => this.change(e)} />
                    </div>
                    <div className="form-group">
                        <label className="" htmlFor="comments" ><b>Comments</b></label>
                        <textarea rows="4" className="form-control col-md-6" type="text" placeholder="Comments? Questions? Concerns? Leave them here!" id="comments" name="comments" value={this.state.studentData.comments} onChange={e => this.change(e)} />
                    </div>
                    <button className="btn" id="submit" onClick={this.sendInfo.bind(this)}>Submit</button>
                    <br />
                    <div className="alert mt-2" id="status"></div>
                </div>
            </div>

        );
    }
}

export default Registration;
