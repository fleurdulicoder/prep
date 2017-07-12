// Inheritance
function Vehicle(name) {
	this.name = "Vehicle";
}

Vehicle.prototype = {
	drive: function(){
		return this.name + " drives forward";
	},
	stop: function(){
		return this.name + " stops";
	}
};

function Truck(name) {
	this.name = name;
}

Truck.prototype = new Vehicle();
Truck.prototype.constructor = Truck;

// Overriding Parent Functions
Truck.prototype.drive = function(){
	var driveMessage = Vehicle.prototype.drive.apply(this);
	return driveMessage += " through a field";
}

var jeep = new Truck("Jeep");
console.log(jeep.drive());
console.log(jeep.stop());