import React, { Component } from 'react';
import Navbar from '../components/Navbar';
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
                    
                    document.getElementById("token").innerHTML = data.token;
                }
                else {
                    console.log("You fail")
                }
            });
        //TODO Error handling on this
    }

    render() {
        return (
            <div className="App">
                <Navbar page="login" />
                <div className="container-fluid">
                    <div className="card-holder">
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" className="form-control w-50" placeholder="awesomeuser9944" aria-describedby="username" />
                                <label htmlFor="username">Password</label>
                                <input type="text" id="password" className="form-control w-50" placeholder="awesomeuser9944" aria-describedby="password" />
                                <button type="submit" className="btn btn-dark my-2" onClick={this.submit}>Submit</button>
                                <label type="text" className="form-control" id="token">Token goes here</label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
