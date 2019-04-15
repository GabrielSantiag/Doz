
var config{
    
}

function cadastrar(email,senha){
    firebase.auth().createUserWithEmailAndPassword(email, senha).catch(function(error) {
  // Handle Errors here.
  console.log(error.code);
  console.log(error.message);
  // ...
});
}