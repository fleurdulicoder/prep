/**

By default every function has a prototype, you can add properties and methods to it,
when you create objects from this function, it would inherit properties and methods
inherited from the prototype.

ECMS 6 - Check it out, Class keyword is used

Every function is essentially a contructor.
https://www.youtube.com/watch?v=uIlj6_z_wL8

*/

// What is Constructor
var x = function(j){
	// default values
	this.i = 0;
	this.j = j;

	// own method within each object, which is redundant
	//this.getJ = function(){
	//	return this.j;
	//};
};

// shared method, looked up method
x.prototype.getJ = function(){
	return this.j;
};

var x1 = new x(1);
var x2 = new x(2);

// Master Object
var y = function(){

};

console.dir(y);
console.log(y.toString());




