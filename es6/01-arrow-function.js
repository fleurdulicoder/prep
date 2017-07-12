// arrow function

function getMeTwo() {
	return 2;
}

getMeTwo = () => 2;

// parameter for arrow function
function getMeNumber(x) {
	return x * 4;
}

getMeNumber = x => (x * 4);


() => 3 // placeholder
_  => 3 // underscore variable best not to use
x  => 3 // best to use a variable
(...x) => 3 // gather operator 
(x, y) => 3 
x => { try { 3; } catch(e) {} } // return keyword no
x => { return 3; } // return keyword yes
x => ({ y: x }) // to return an object


// => they are syntqactically anonimous functions
// self-reference to itself and for recursion - that's where you need a named function
// anonimous function for debugging is less helpful in stack trace

var foo = x => 3;
foo.name; // "foo" name referencing

foo( x => 3 ) // no name references
