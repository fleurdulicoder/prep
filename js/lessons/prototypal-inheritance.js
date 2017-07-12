/**

By default every function in JavaScript has a property called prototype
where you can add properties and methods, when you create object from this
function, that define this function:

x -> x1, if i create an object from a function, it will inherit all properties
and methods from prototype...

it is dynamic & does not provide class implementation, es6 has though a class
keyword, but still JS is considered a prototype based language, using 
constructors we can create objects,

Every function expression is a constructor. 

*/

var x = function(j) {
	this.i = 0;
	this.j = j;

	this.getJ = function() { // redundant method
		return this.j;
	};
};


var x1 = new x(1);
var x2 = new x(2);

console.log(x1.getJ());
console.log(x2.getJ());

var y = function(z) { // parent
	this.y = 0;
	this.z = z;
};

y.prototype.getZ = function() { // redundant method
	return this.z;
};

var y1 = new y(1); // smaller objects
var y2 = new y(2);

console.log(y1.getZ()); // looks it up in a prototype chain
console.log(y2.getZ());

/**

Master Object
Every object in JS is created from a master object. 

*/

console.dir(x);

/**

Prototype Chain exists

There is X which is function
Function comes from an Object
that is Master Object.
X has access to all prototypes 
in the prototype chain.

X -> Prototype -> Properties + Methods
Function -> Prototype -> Properties + Methods
Object -> Prototype -> Properties + Methods

_proto_ (function):
	apply(), call(), bind(), toString()

	_proto_ (Object):
		hasOwnPorperty(), isPrototypeOf(), toLocalString(), isValueOf();

*/


console.log(x.toString());

/**
   - Creating SubClass (SubConstructor)
   - Overriding in Prototype Chain
   - Adding prototype to Master Object
*/













