/**

Create Job as a Base Class
Create TechJob as a SubClass
Inherit Methods and Properties

*/

var Job = function() {
	this.pays = true;
};

Job.prototype.print = function() {
	console.log( this.pays ? "please hire me" : "no, thank you");
};

var TechJob = function(title, pays) {
	Job.call(this); // set up properties

	this.title = title;
	this.pays = pays;
};

// define prototype via inheritance
TechJob.prototype = Object.create(Job.prototype);
TechJob.prototype.constructor = TechJob;
// override
TechJob.prototype.print = function() { // override
	console.log( this.pays ? "job is great, please hire me" : "I would rather learn javascript");
};

Object.prototype.print = function(){
	console.log('i am executing from a Master object');
}


var position1 = new TechJob('JavaScript Programmer', true);
var position2 = new TechJob('Vb Programmer', false);

console.log(position1.print());
console.log(position2.print());


