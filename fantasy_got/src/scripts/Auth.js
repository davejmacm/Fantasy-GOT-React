//Get elements
const fieldEmail = document.getElementById('fieldEmail');
const fieldPassword = document.getElementById('fieldPassword')
const btnLogin = document.getElementById('btnLogin')
const btnSignup = document.getElementById('btnSignup')

//Add login event
btnLogin.addEventListener('click', e =>{
  //Get email and Password
  const email = fieldEmail.value;
  const pass = fieldPassword.value;
  const auth = firebase.auth();
  //Sign in
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
});

//Add signup addEventListener
btnSignup.addEventListener('click', e => {
  //Get email and Password
  //TODO check for real email
  const email = fieldEmail.value;
  const pass = fieldPassword.value;
  const auth = firebase.auth();
  //Sign in
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
});

//Add realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser) {
    console.log(firebaseUser);
  } else {
    console.log('not logged in');
  }
});
