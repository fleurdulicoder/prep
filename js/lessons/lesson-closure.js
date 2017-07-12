var addTo = function(passed) {

	var add = function(inner) {
		return passed + inner;
	};

	return add;
};

var addThree = new addTo(3);
var addFour = new addTo(4);

console.log(addThree(1));
console.log(addFour(1));

/** Closures - are functions with preserved data */