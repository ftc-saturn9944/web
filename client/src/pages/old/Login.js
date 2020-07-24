import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import jwt from 'jsonwebtoken';
class Login extends Component {
    submit = e => {
        console.log("hello");
        e.preventDefault()
        let password = document.getElementById("password").value;
        let username = document.getElementById("username").value;
        fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({ username, password })
        }).then(res => {
            if (res.status === 200) return res.json()
            else return { error: 'bye' }
        })
            .then(data => {
                if (data.token) {
                    let user = jwt.decode(data.token);
                    localStorage.setItem('authKey', data.token);
                    localStorage.setItem('firstName', user.firstname);
                    localStorage.setItem('lastName', user.lastname);
                    localStorage.setItem('userName', user.username);


                    if (document.getElementById("redirect").checked) //If the redirect box is checked, redirect them to the main page.
                        window.location = "/";
                    document.location.reload(); //Otherwise reload so we can see our token
                }
                else {
                    console.log("You fail")
                }
            });
        //TODO Error handling on this
    }

    render() {
        var currentToken = localStorage.getItem("authKey"); //The token field will display the current auth token regardless of when it was generated.
        return (
            <div className="App">
                <Navbar page="login" />
                <div className="container-fluid">
                    <div className="card-holder">
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" className="form-control w-50" placeholder="awesomeuser9944" aria-describedby="username" />
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" className="form-control w-50" placeholder="awesomeuser9944" aria-describedby="password" />
                                <button type="submit" className="btn btn-dark my-2" onClick={this.submit.bind(this)}>Submit</button>
                                <div className="checkbox">
                                    <label><input type="checkbox" id="redirect" defaultChecked="true" />Redirect to homepage?</label>
                                </div>
                                <br />
                                <label htmlFor="token">JWT Token Goes Here:</label>
                                <textarea className="form-control" rows="3" id="token" value={currentToken} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
