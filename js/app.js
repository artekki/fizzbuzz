
$(document).ready(function() {

var x = prompt("type number");

function fizzbuzz (number) {
	 
	if (number % 3 == 0 && number % 5 == 0) {
		return "fizzbuzz"
	}	

	else if (number % 5 == 0) {
		return "fizz"
	}

	else if (number % 3 == 0) {
		return "buzz"
	}

	else {
		return number 
	};

}

var returnHTML = '';

for(var i =1; i < x; i++) {

	returnHTML = returnHTML + fizzbuzz(i) + "<br>";
	
}

$("#displayfb").append(returnHTML)
  
})