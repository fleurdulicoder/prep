function Person(name, age, city, state) {
	this.name  = name;
	this.age  = age;
	this.state = state;
	this.city  = city;
}

Person.prototype.speak = function(){
	console.log(this.name + " is " + this.age + " years old and they live in " + this.city + " " + this.state);
};

function changeName(name) {
	this.name = name;
}

// works
var girl = new Person('Ella', 16, 'Ladera', 'CA');
changeName.call(girl, 'Cindy');
girl.speak();

//changeName.bind(girl, 'Cindy');
//girl.changeName('Cindy');
//girl.speak();

function Princess() {
	Person.call(this);
	this.name = "Leya";
	this.age = 22;
	this.state = "CA";
	this.city = "San Francisco";
}

Princess.prototype = Object.create(Person.prototype);
Princess.prototype.constructor = Princess;

Princess.prototype.order = function(speech){
	this.speech = speech || "I order to bring me food";
	console.log(this.speech);
};

var specialgirl = new Princess();
specialgirl.order();

