
// import React from 'react'
// import {Link} from 'react-router-dom'

// export default function Login() {
//   return  <div>Admin Login</div>
// }

import './Login.css';
import React, {Component, useEffect, useState} from 'react'
import Sidebar from '../component/Sidebar';
import RoomList from '../components/RoomList';
import Navbar from '../components/Navbar';
class Login extends Component{
    constructor() {
        super();
        this.state = {
            Username: '',
            Password: ''
        }
        this.Password = this.Password.bind(this);
        this.Username = this.Username.bind(this);
        this.login = this.login.bind(this);
    }
    Username(event) {
        this.setState({ Username: event.target.value })
    }
    Password(event) {
        this.setState({ Password: event.target.value })
    }
    login(event) {        
        fetch('https://localhost:44310/api/values', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Username: this.state.Username,
                Password: this.state.Password
            })
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if (result.Status == "Invalid")
                    alert('Invalid User');
                else                  
                    this.props.history.push("/HouseList");
            })
    }    
    render(){
        return(        
            <div>                 
                <div className="login-wrap">
                    <div className="login-html">
                        <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Sign In</label>
                        <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab" />
                        <div className="login-form">
                            <div className="sign-in-htm">
                                <div className="group">
                                <label htmlFor="user" className="label">Username</label>
                                <input id="user" type="text" className="input" onChange={this.Username} required/>
                                </div>
                                <div className="group">
                                <label htmlFor="pass" className="label">Password</label>
                                <input id="pass" type="password" className="input" data-type="password" onChange={this.Password} required/>
                                </div>
                                <div className="group">
                                <input id="check" type="checkbox" className="check" defaultChecked />
                                <label htmlFor="check"><span className="icon" /> Keep me Signed in</label>
                                </div>
                                <div className="group">
                                <input type="submit" className="button" defaultValue="Sign In" onClick={this.login}/>
                                </div>
                                <div className="hr" />
                                <div className="foot-lnk">
                                <a href="/ForgotPassword">Forgot Password?</a>
                                </div>
                            </div>                
                        </div>
                    </div>
                </div>
           </div>
       )
    }
    
}
export default Login