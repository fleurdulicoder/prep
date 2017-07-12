/**
	The main purpose of call() and apply() method is to set the context of 
	"this" inside the function irrespective whether that function is being
	called in the gloabl scope pf as an objects method.

	We can pass an object as a first paratmer in call() and apply() method
	to which a calling function should point to.
*/

// global window object variables
var numbers = 100;

// function with "this" context
function Demo() { console.log(this.numbers); }

// object literals
var Project1  = { numbers: 200, sample: Demo };
var Project2  = { numbers: 300, sample: Demo };

// simply calling Demo() function, points 
// to the window object
Demo();
Demo.call();
Demo.apply();

// the context of "this" is assigned to:
Demo.call(Project1);
Project1.sample.call(Project2);

/**
	"this" - applies to a particular object, 
	which object is referred to, there are
	4 rules to identify:
		1. global scope
		2. objects method
		3. call() or apply() method
		4. bind() method

	"bind" sets "this" to a particular object
	when function is invoked, it is also helpful
	in setting up the context of "this" for a 
	callback function  
*/

var counter = 100;

function Demo2(callback) {
	var counter = 200;
	callback(); 
}

var Project3 = {
	counter: 300,
	display: function(){
		console.log('this points to ' + this + ', counter = ' + this.counter);
	}
}

Demo2(Project3.display);
// -- this points to [object Window], counter = 100
Demo2(Project3.display.bind(Project3));
// -- this points to [object Object], counter = 300

