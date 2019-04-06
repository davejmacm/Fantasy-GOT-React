import React, {Component} from "react";
import fire from '../config/fire';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.signup = this.signup.bind(this);
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
      alert("User name or password not recognised - please try again or 'Sign up'." )//TODO add custom alert/popup box https://www.google.com/search?safe=strict&rlz=1C1ASUM_enGB534GB534&ei=_fubXO3SL-yr1fAP_ZC1wAo&q=how+to+make+a+nicer+alert+in+javascript&oq=how+to+make+a+nicer+alert+&gs_l=psy-ab.1.1.33i22i29i30l10.6089.10708..12676...0.0..0.128.2094.22j4....2..0....1..gws-wiz.......0i71j35i39j0i273j0i131j0j0i10i67j0i67j0i22i30.KA2FCR80s3s#kpvalbx=1
    });
  }

  // signup(e){
  //   e.preventDefault();
  //   fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error)=> {
  //     console.log(error);
  //   });
  // }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  render() {
    return(

  <div className="login-container">
   <h1> Log in to join the fight!</h1>
    <form>
    <div className="login-fields">
      <input value={this.state.email} onChange={this.handleChange} type="email" name="email" id="fieldEmail" placeholder="Enter Email"/>

      <input value={this.state.password} onChange={this.handleChange} type="password" name="password" id="fieldPassword" placeholder="Password"/>

      <button id="btnLogin" className="btn-Login" type = "submit" onClick={this.login}>Log in</button>


      <form action="/register" method="get">
        <input type="submit" value="Sign up"/>
      </form>

      </div>
    </form>
  </div>
   )
  }
};

export default Login;
// <button id="btnSignup" className="btn-Signup" onClick={this.signup}>Sign up</button>
