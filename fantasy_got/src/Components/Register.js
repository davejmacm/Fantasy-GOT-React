import React, {Component} from "react";
import fire from '../config/fire';

class Register extends Component {
  constructor(props) {
    super(props);
    // this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: '',
      displayName: '',
      leagueId: ''
    }

  }


  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error)=> {
      console.log(error);
    }).then(() => {
      // user.updateProfile({ displayName: this.state.displayName})
      console.log("displayName:", this.state.displayName);
    }).then(() => {
      // db.collection('leagues').doc(this.state.leagueId).update({users:FieldValue.arrayUnion(this.state.uid)})
      console.log("leagueId:", this.state.leagueId);
    })
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  render() {
    return(

  <div className="register-container">
   <h1> Register to join the fight!</h1>
    <form>
    <div className="register-fields">
      <input value={this.state.email} onChange={this.handleChange} type="email" name="email" id="fieldEmail" placeholder="Enter Email"/>

      <input value={this.state.password} onChange={this.handleChange} type="password" name="password" id="fieldPassword" placeholder="Password"/>

      <input value={this.state.displayName} onChange={this.handleChange} type="displayName" name="displayName" id="fieldDisplayName" placeholder="displayName"/>

      <input value={this.state.leagueId} onChange={this.handleChange} type="leagueId" name="leagueId" id="fieldLeagueId" placeholder="League code"/>


      <button id="btnSignup" className="btn-Signup" onClick={this.signup}>Sign up</button>

      </div>
    </form>
  </div>
   )
  }
};

export default Register;

// .then(() => {
//   db.collection('teams').add({
//     league_id: this.state.leagueId,
//     owner: this.state.displayName,
//     total_score: 0,
//     user_id: uid
//   })
// });
// }
