import React, {Component} from "react";
import "./login.css";
import fire, {db} from '../config/fire';
import * as firebase from 'firebase';



class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.changeViewableElements = this.changeViewableElements.bind(this);
    this.signup = this.signup.bind(this);
    this.showSignup = this.signup.bind(this);
    this.state = {
      email: '',
      password: '',
      regEmail: '',
      regPassword: '',
      displayName: '',
      leagueId: '',
      uid: ''
    }

  }

  componentDidMount(){
    var register = document.querySelector(".register-fields").style.display='flex'; // change to none

    var login = document.querySelector(".login-fields").style.display='flex';

    document.body.className="login-body"

  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error)=> {
      console.log(error);
      alert("User name or password not recognised - please try again or 'Sign up'." )//TODO add custom alert/popup box https://www.google.com/search?safe=strict&rlz=1C1ASUM_enGB534GB534&ei=_fubXO3SL-yr1fAP_ZC1wAo&q=how+to+make+a+nicer+alert+in+javascript&oq=how+to+make+a+nicer+alert+&gs_l=psy-ab.1.1.33i22i29i30l10.6089.10708..12676...0.0..0.128.2094.22j4....2..0....1..gws-wiz.......0i71j35i39j0i273j0i131j0j0i10i67j0i67j0i22i30.KA2FCR80s3s#kpvalbx=1
    });
  }

  showSignup(e){
    e.preventDefault();
    console.log("showSignup called");
    var heading = document.getElementById("log-in-fight").innerHTML = "Register and join the fight!";
    var login = document.querySelector(".login-fields").style.display='none';
    var register = document.querySelector(".register-fields").style.display='block';

    // var change = this.changeViewableElements();
  // var login = document.querySelector(".login-fields");
  //     login.classList.remove(".seen")
  //     login.classList.add(".hidden")
  // var register = document.querySelector(".register-fields");
  //     register.classList.remove(".hidden")
  //     register.classList.add(".seen")
  }

  signup(e){
    e.preventDefault();
console.log("Signup called");
    fire.auth().createUserWithEmailAndPassword(this.state.regEmail, this.state.regPassword)
      .then(() => {
         var user = firebase.auth().currentUser;
         user.updateProfile({ displayName: this.state.displayName})
        console.log("displayName:", this.state.displayName);
      }).then(() => {
        var uid = firebase.auth().currentUser.uid
        console.log("uid:", uid);
        db.collection('leagues').doc(this.state.leagueId).update(
        {"users": firebase.firestore.FieldValue.arrayUnion(uid)})
      }).then(() => {
        var uid = firebase.auth().currentUser.uid
        db.collection('teams').add({
          league_id: this.state.leagueId,
          name: 'Team X',
          owner: this.state.displayName,
          total_score: 0,
          user_id: uid
        })
        console.log("leagueId:", this.state.leagueId);
    }).catch((error)=> {
      console.log(error);
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  // changeViewableElements() {
  //   console.log("changeViewableElements called");
  //   var reg = document.querySelector(".register-fields");
  //       if (reg.style.display === "none") {
  //           reg.style.display = "block";
  //       } else {
  //         reg.style.display = "none";
  //       }
  //   var login = document.querySelector(".login-fields");
  //       if (login.style.display === "block") {
  //           login.style.display = "none";
  //       } else {
  //         login.style.display = "none";
  //       }
  // }

  render() {
    return(
<div className="login-wall">
  <div className="login-container">
   <h1 id="log-in-fight"> Log in to join the fight!</h1>

<form>
    <div className="login-fields">

      <input value={this.state.email} onChange={this.handleChange} type="email" name="email" id="loginEmail" placeholder="Enter Email"/>

      <input value={this.state.password} onChange={this.handleChange} type="password" name="password" id="loginPassword" placeholder="Password"/>

      <button id="btnLogin" className="btn-Login glass" type = "submit" onClick={this.login}>Log in</button>

    </div>
</form>

<form>
      <button id="btnShowSignup" className="btn-ShowSignup bob" onClick={this.showSignup}>Want to sign up?</button>
</form>


<form>
    <div className="register-fields">

      <input value={this.state.regEmail} onChange={this.handleChange} type="email" name="regEmail" id="regEmail" placeholder="Enter Email"/>

      <input value={this.state.regPassword} onChange={this.handleChange} type="password" name="regPassword" id="regPassword" placeholder="Password"/>

      <input value={this.state.displayName} onChange={this.handleChange} type="text" name="displayName" id="fieldDisplayName" placeholder="Display Name"/>

      <input value={this.state.leagueId} onChange={this.handleChange} type="text" name="leagueId" id="fieldLeagueId" placeholder="League code"/>

      <button id="btnSignup" className="btn-Signup glass" onClick={this.signup}>Sign up</button>

    </div>
</form>
  </div>
</div>
   )
  }
};

export default Login;
// <button id="btnSignup" className="btn-Signup" onClick={this.signup}>Sign up</button>

// <form action="/register" method="get">
//   <input type="submit" value="Sign up"/>
// </form>
