// private properties

function SecretCode(){
	var secretNumber = 78; // private property
	this.guessNumber = function(num){
		if (num > secretNumber) {
			return "Lower";
		} else if (num == secretNumber) {
			return "You guessed";
		} else {
			return "Higher";
		}
	}
}

var secret = new SecretCode();
console.log("Value of secret number is "+secret.secretNumber);
console.log(secret.guessNumber(78));