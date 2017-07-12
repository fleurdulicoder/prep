/**
	Define promises independently,
	and call them into dependency 
	via dot notation
*/

// 1st to clean
let cleanRoom = function() {
	return new Promise(function(resolve, reject){
		resolve('Cleaned Room, ');
	});
};

// 2d to remove garbage
let removeGarbage = function(message) {
	return new Promise(function(resolve, reject){
		resolve(message + ' Removed Garbage, ');
	});
};

// icecream after
let winIcecream = function(message) {
	return new Promise(function(resolve, reject){
		resolve(message + ' Won Icecream');
	});
};

// Resolving dependency
cleanRoom().then(function(result){
	return removeGarbage(result);
}).then(function(result){
	return winIcecream(result);
}).then(function(result){
	console.log('finished: ' + result);	
});

// finish all of them
Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function(){
	console.log('all finished');
});

// finish at least one of them
Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(function(){
	console.log('one of them is finished');
});

// 