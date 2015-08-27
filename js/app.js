$(document).ready(function() {

var x = prompt("type number");

function fizzbuzz (number) {
	var returnHTML = '';
	for(var i =1; i < number; i++) {
    console.log(number);

    
		
		if (number % 3 == 0 && number % 5 == 0) {
			returnHTML += "fizzbuzz";
		}	

		else if (number % 5 == 0) {
			returnHTML += "fizz";
		}

		else if (number % 3 == 0) {
			returnHTML += "buzz";
		}

		else {
			returnHTML += number; 
			console.log(number);
		};
	}
	return returnHTML;
}

var fizz = fizzbuzz(x);
//var returnHTML = '';

//for(var i =1; i < x; i++) {

//	returnHTML = returnHTML + fizzbuzz(i) + "<br>";
	
//}

$("#displayfb").append(fizz);
  	
});



