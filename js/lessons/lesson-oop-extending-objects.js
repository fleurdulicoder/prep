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

extend(Deer, Animal);
var elk = new Deer();


console.log(elk.getSound());
