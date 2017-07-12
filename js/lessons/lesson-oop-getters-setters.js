// Inheritance A

// Two Ways of Doing Things
// Inheritance 1:
/*function Animal() {
	this.name = "Animal";
	this.toString = function(){
		return "My name is "+this.name;
	}
}

function Canine() {
	Animal.call(this);
	this.name = "Canine";
}

function Wolf() {
	Canine.call(this);
	this.name = "Wolf";
}

Canine.prototype = Object.create(Animal.prototype);
Wolf.prototype = Object.create(Canine.prototype);

Canine.prototype.constructor = Canine;
Wolf.prototype.constructor = Wolf;


var arcticWolf = new Wolf();
console.log(arcticWolf.toString());
*/


// Two Ways of Doing Things
// Inheritance B:
function Animal() {
	this.name = "Animal";
	this.toString = function(){
		return "My name is "+this.name;
	}
}

Animal.prototype.sound = "Grrrrr";
Animal.prototype.getSound = function(){
	return this.name + " says " + this.sound;
}

function Canine() {
	this.name = "Canine";
}

function Wolf() {
	this.name = "Wolf";
}

Canine.prototype = new Animal(); 
Wolf.prototype = new Canine(); 

Canine.prototype.constructor = Canine;
Wolf.prototype.constructor = Wolf;


Canine.prototype.sound = "Woof";
Wolf.prototype.sound = "Grrrrr Woof";

var arcticWolf = new Wolf();
console.log(arcticWolf.toString());
console.log("Is Arctic Wolf an Animal: "+ (arcticWolf instanceof Animal));
console.log(arcticWolf.getSound());


//

function Rodent() {
	this.name = "Rodent";
}

function Rat() {
	this.name = "Rat";
}

Rodent.prototype = new Animal();
Rat.prototype = Rodent.prototype;
Rodent.prototype.constructor = Rodent;
Rat.prototype.constructor = Rat;

var caneRat = new Rat();
console.log(caneRat.toString());

// Let's cleanup
function extend(Child, Parent){
	var Temp = function() {};
	Temp.prototype = Parent.prototype;
	Child.prototype = new Temp();
	Child.prototype.constructor = Child;
}

function Deer() {
	this.name = "Deer";
	this.sound = "Snort";
}

var elk = new Deer();

extend(Deer, Animal);
console.log(elk.getSound());













