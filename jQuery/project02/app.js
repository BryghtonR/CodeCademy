var main = function() {
  $('form').submit(function() {
    //First Name
    var firstName = $('#first').val();
    if(firstName === "") {
      $('.first-name-error').text("Please enter your first name.");
    }
    
    //Last Name
		var lastName = $('#last').val();
    if(lastName === "") {
      $('.last-name-error').text("Please enter you last name.");
    }

    //Email Address
    var email = $('#email').val();
    if(email === "") {
      $('.email-error').text("Please enter your email address.");
    }else if (email === "BryghtonR@gmail.com") {
      $('.email-error').text("This email is already taken.");
    }

    //Password
    var password = $('#password').val();
    if(password === "") {
      $('.password-error').text("Plase enter a password.");
    }else if(password.length <8){
      $('.password-error').text("Short passwords are easy to guess. Try one with at least 8 characters.");
    }
    return false;
  });
};

$(document).ready(main);
