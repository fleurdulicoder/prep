/**

Class Creation Patterns
	* Constructor Pattern
	* Factory Pattern
	* Prototype Pattern
	* Dynamic Prototype Pattern

	no formal support of classes

*/

// FACTORY PATTERN
var peopleFactory = function(name, age, state){

	var temp = {};
	//var temp = new Object();

	temp.age = age;
	temp.name = name;
	temp.state = state;

	temp.printPerson = function(){
		console.log(this.name + ', ' + this.age + ', ' + this.state);
	};

	return temp;
};

var person1 = peopleFactory('john', 23, 'CA');
var person2 = peopleFactory('kim', 27, 'SC');

person1.printPerson();
person2.printPerson();

// CONSTRUCTOR PATTERN
// problem: has all of the properties and methods, and creates redundancy
var peopleConstructor = function(name, age, state) {
	this.name = name;
	this.age = age;
	this.state = state;

	this.printPerson = function(){
		console.log(this.name + ", " + this.age + ", " + this.state);
	};
};

var person3 = new peopleConstructor('ella', 41, 'CA');
var person4 = new peopleConstructor('artur', 33, 'CA');

person3.printPerson();
person4.printPerson();

// PROTOTYPE PATTERN
var peopleProto = function(){};

// shared object is called prototype
peopleProto.prototype.age = 0;
peopleProto.prototype.name = "no name";
peopleProto.prototype.city = "no city";
peopleProto.prototype.state = "no state";

peopleProto.prototype.print = function(){
	console.log(this.name + ", " + this.age + ", " + this.city + ", " + this.state);
};

var person5 = new peopleProto();
//person5.name = "helen";
person5.age = 24;
person5.city = "SF",
person5.state = "CA";

person5.print();
console.log('name' in person5);
console.log(person5.hasOwnProperty('name'));

// DYNAMIC PROTOTYPE PATTERN
var peopleDynamicProto = function(name, age, state){
	this.name = name;
	this.age = age;
	this.state = state;

	if (typeof this.print !== 'function') { // if undefined, create a function
		peopleDynamicProto.prototype.print = function(){
			console.log(this.name + ", " + this.age + ", " + this.state);
		};
	}
};

var person6 = new peopleDynamicProto("ella", 41, "CA");
var person7 = new peopleDynamicProto("artur", 33, "CA");

person6.print();
person7.print();





