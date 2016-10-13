var main = function(){
  $('.dropdown img').click(function(){
    $('.dropdown-menu').toggle();
  });
  $('form').submit(function(){
    var myEmail = $('#email').val();
    var myPass = $('#password').val();
    if(myEmail===""){
      $('.email-error').text("Please enter your email.");
    }
    if(myPass===""){
      $('.password-error').text("Plase enter your password.");
    }
    return false;
  });
};

$(document).ready(main);
