import firebase from 'firebase'
import { EventBus } from '../../Events/events_bus';

export default {
  name: 'login-registro',
  components: {

  },
  props: [],
  data () {
    return {

      blLoginVisible: true,
      sUser:'',
      sEmail:'',
      sPass:'',
      sRePass:'',
      lEmail:'',
      lPass:''
          }
        },
created: function() {
  firebase.auth().onAuthStateChanged((user) => {
    if(user){
      this.props_blIsLoggedIn = true
    }
    else{
      this.props_blIsLoggedIn = false
    }
    EventBus.$emit('loginregister_userstatechanged', this.props_blIsLoggedIn)
  });
},
computed: {

        },
mounted () {

        },
methods: {

  LoginGoogle: function (event){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  },
  LoginTwitter: function (event){
    var provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    var token = result.credential.accessToken;
    var secret = result.credential.secret;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
},


  LoginFacebook: function (event){
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
},


    btnRegistrar1: function (event){
      this.blLoginVisible = false;
    },

    btnCancelar: function (event){
      this.blLoginVisible = true;
    },

    clickDeBotonAceptarRegistro: function(event){
      firebase.auth().createUserWithEmailAndPassword(this.sEmail, this.sPass).then(function(user){
      alert("Tu cuenta fue creada!!! " +user.name);
    },
    function(err){
    alert("Error en la creacion de la cuenta "+err );
    }
      );
    },

    clickDeBotonLogin: function(event){
      firebase.auth().signInWithEmailAndPassword(this.lEmail, this.lPass).then(function(user){
      alert("Te has logeado!!! " +user.name);
    },

      );
    },

    logout: function(event){
      firebase.auth().signOut()
    }

}

  }
