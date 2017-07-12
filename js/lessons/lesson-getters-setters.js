// deprecated way of getters and setters

function Coordinates(){
	this.latitude = 0;
	this.longitude = 0;
}

Object.__defineGetter__.call(Coordinates.prototype, "getCoords", function(){
	return "Lat: " + this.latitude + " Long: " + this.longitude;
});

Object.__defineSetter__.call(Coordinates.prototype, "setCoords", function(coords){
	var parts = coords.toString().split(", ");
	this.latitude = parts[0] || "";
	this.longitude = parts[1] || "";
});

testCoords = new Coordinates();
testCoords.setCoords = "40.71, 74.00";

console.log("Coordinates are " + testCoords.getCoords);

// "define property" getters and setters

function Point() {
	this.xPos = 0;
	this.yPos = 0;
}

Object.defineProperty(Point.prototype, "pointPos", {
	get: function(){
		return "X : " + this.xPos + " Y : " + this.yPos;
	},
	set: function(thePoint){
		this.parts = thePoint.toString().split(", ");
		this.xPos = this.parts[0] || "";
		this.yPos = this.parts[1] || "";
	}
});

var aPoint = new Point();
aPoint.pointPos = "100, 200";
console.log(aPoint.pointPos);

// new way of getters and setters
var address = {
	street: "No street",
	city: "No City",
	state: "No State",

	get getAddress() {
		return this.street + ", " + this.city + ", " + this.state;
	},

	set setAddress(theAddress) {
		var parts = theAddress.toString().split(", ");
		this.street = parts[0] || "";
		this.city = parts[1] || "";
		this.state = parts[2] || "";
	}
}

address.setAddress = "6009 E Smokehouse Trail, Scottsdale, Arizona";
console.log(address.getAddress);

// ES5 version
var Circle = function(radius){
	this._radius = radius;
};

Circle.prototype = {
	set radius(radius) { this._radius = radius; },
	get radius() { return this._radius; },
	get area() { return Math.PI * (this._radius * this._radius); }
};

var circ = new Circle(10);
circ.radius = 15;
console.log("A circle with radius " + circ.radius + " has an area of " + circ.area.toFixed(2));




