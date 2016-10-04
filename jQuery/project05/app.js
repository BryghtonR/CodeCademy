var main = function() {
  $('.nav li').click(function() {
    var category = $(this).attr('class');

    $('.nav li').removeClass('active');
    $(this).addClass('active');

    $('.thumbnail').removeClass('selected');
    if(category === 'nav-consumer'){
      $('.consumer').addClass('selected');
    }else if(category === 'nav-mobile'){
      $('.mobile').addClass('selected');
    }else if(category === 'nav-commerce'){
      $('.commerce').addClass('selected');
    }else if(category === 'nav-enterprise'){
      $('.enterprise').addClass('selected');
    }
  });
};

$(document).ready(main);
