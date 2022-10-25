//Funcion que carga en variables los valores introducidos por teclado al momento de hacer click en log in
function log_in(){
    console.log("Log in")
    var contact = document.getElementById("contact_input").value
    var password = document.getElementById("password_input").value
    console.log(contact)
    console.log(password)

}

//Funcion que carga en variables los valores introducidos por teclado al momento de hacer click en sign up
function sign_up(){
    console.log("Sign up")
    var username = document.getElementById("username_input").value
    var contact = document.getElementById("contact_input").value
    var password = document.getElementById("password_input").value
    //var profile_picture = document.getElementById().value
    console.log(username)
    console.log(contact)
    console.log(password)
}


function validateEmail(email) {
    //function to validate an email
          var re = /\S+@\S+\.\S+/;
          return re.test(email);
    }
   
  function validatePassword(password) {
    //function to validate a password
          var re =  /^[a-zA-Z0-9]{1,8}$/
          return re.test(password);
    }
