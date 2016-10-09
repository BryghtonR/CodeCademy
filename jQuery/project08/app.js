var main = function() {
  $('.notification').click(function(){
    $('.notification-menu').toggle();
  });
  $('.post .btn').click(function(){
    $(this).toggleClass('btn-like');
  });
};

$(document).ready(main);
