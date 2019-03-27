import React, {Component} from "react";
import fire from '../config/fire';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: ''
    }

  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error)=> {
      console.log(error);
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  render() {
    return(

  <div className="login-container">
   <h1> Log in to join the fight!</h1>
    <form>
    <div className="login-fields">
      <input id="fieldEmail" value={this.state.email} onChange={this.handleChange} type="email" placeholder="Enter Email"/>

      <input id="fieldPassword" value={this.state.password} onChange={this.handleChange} type="password" placeholder="Password"/>

      <button id="btnLogin" className="btn-Login" type = "submit" onClick={this.Login}>Log in</button>

      <button id="btnSignup" className="btn-Signup" onClick={this.signup}>Sign up</button>

      </div>
    </form>
  </div>
   )
  }
};

export default Login;
