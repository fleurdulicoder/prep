// Anonymous, named, immediately invoked 


// Regular Functions
function multiply(a,b) {
	var result = a * b;
	console.log(a + " * " + b + " = " + result);
}

multiply(2,3);

// Anonymous function stored in variable
// Invoked by calling the variable as a function:

var divided = function(a, b) {
	var result = a / b;
	console.log(a + " / " + b + " = " + result);
}

divided(25,2);

// self-executing function
(function(){
	var result = 200 / 100;
	console.log("200 / 100 = " + result);
})();


// define variables before function call for closures
//var a = 3/4;
//var b = 5/7;

function compareTheTwo(a, b) {
	var result;
	a > b ? result = ["fraction a", a] : ["fraction b", b];
	return result;
}

var fractionResult = compareTheTwo(3/4, 5/7);

