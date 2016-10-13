var main = function(){
  $('.cart').click(function(){
    $('.dropdown-menu').hide();
    $('.cart .dropdown-menu').toggle();
  });
  $('.account').click(function(){
    $('.dropdown-menu').hide();
    $('.account .dropdown-menu').toggle();
  });
  $('.help').click(function(){
    $('.dropdown-menu').hide();
    $('.help .dropdown-menu').toggle();
  });
};
$(document).ready(main);
