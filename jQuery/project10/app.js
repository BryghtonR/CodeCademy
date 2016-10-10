
var main = function() {
  var cities = [
      "State College",
    	"Pittsburgh",
    	"Ramstein",
    	"Muchin",
    	"San Angelo",
    	"Austin",
    	"Ocean City",
    	""
    ];
    $( "#search" ).autocomplete({
      source: cities
    });
};

$(document).ready(main);
