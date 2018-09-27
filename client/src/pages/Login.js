import React, { Component } from 'react';
import Navbar from '../components/Navbar';
class Login extends Component {

    submit = e => {
        console.log("hello");
        e.preventDefault()
        let password = document.getElementById("password").value;
        let username = document.getElementById("username").value;
        fetch("http://localhost:5000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({ username: username, password: password })
        }).then((res) => { return res.json() })
            .then((data) => {
                document.getElementById("token").value = data.token;
            });
        //TODO Error handling on this
    }

    render() {
        return (
            <div className="App">
                <Navbar page="login" />
                <div class="container-fluid">
                    <div class="card-holder">
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" className="form-control w-50" placeholder="awesomeuser9944" aria-describedby="username" />
                                <label htmlFor="username">Password</label>
                                <input type="text" id="password" className="form-control w-50" placeholder="awesomeuser9944" aria-describedby="password" />
                                <button type="submit" className="btn btn-dark my-2" onClick={this.submit}>Submit</button>
                                <textarea type="text" className="form-control" id="token" placeholder="Token goes here" readOnly></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
