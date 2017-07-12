function Mammal(name){
	this.name = name;
	this.getInfo = function(){
		return "The mammals name is " + this.name;
	}
}

Mammal.prototype.sound = "Grrr";
Mammal.prototype.makeSound = function(){
	return this.name + " says " + this.sound;
}

var grover = new Mammal("Grover");
console.log(grover.makeSound());

for (var prop in grover) {
	console.log(prop + " : " + grover[prop]); 
}

console.log('Grover has property of name: '+grover.hasOwnProperty('name'));
console.log('Grover has property of sound: '+grover.hasOwnProperty('sound'));
console.log('Mammal has prototype property of sound: '+Mammal.prototype.hasOwnProperty('sound'));

Array.prototype.inArray = function inArray(value){
	for(var i = 0; i < this.length; i++) {
		if (this[i] === value) {
			return true;
		}
	}
	return false;
}

var sampleArray = [1,2,3,4,5];
console.log('3 is in array: '+ sampleArray.inArray(3));