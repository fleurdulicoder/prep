/**
	Promises Definition:
	An actual promise that some job will be done,
	Promises can depend on other promises.
*/

let promiseToCleanTheRoom = new Promise(function(resolve, reject){
	// cleaning the room
	let isClean = true;
	if (isClean) {
		resolve('Clean');
	} else {
		reject('Not Clean');
	}
});

promiseToCleanTheRoom.then(function(fromResolve){
	console.log('the room is ' + fromResolve);
}).catch(function(fromReject){
	console.log('the room is ' + fromReject);
});