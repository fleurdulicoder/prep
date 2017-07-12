let x = function() {
	console.log('I am called from inside a function');
};

let y = function(callback) {
	console.log('do something');
	callback();
};

y(x);

/*

let calc = function(num1, num2, calcType) {
	if (calcType === "add") {
		return num1 + num2;
	} else if (calcType === "multiply") {
		return num1*num2;
	}
};

console.log(calc(2,3,'add'));

*/


let add = function(a,b) {
	return a + b;
};

let multiply = function(a,b) {
	return a * b;
};

let dowhatever = function(a,b) {
	console.log(`here are your two numbers ${a} and ${b}`);
};

let calc = function(num1, num2, callback) {
	if (typeof callback === "function") {
		return callback(num1, num2);	
	}
};

console.log(calc(2, 3, add));
console.log(calc(2, 3, multiply));
console.log(calc(2, 3, dowhatever));
console.log(calc(2, 3, function(a,b) { return a - b; }));