/* 

  Singlton Pattern:
- Only one instance shall exist

*/

function Hero(name) {
	if (typeof Hero.instance === 'object') {
		return Hero.instance;
	}

	this.name = name;
	Hero.instance = this;
	return this;
}

var mamaHero = Hero("Zina");
console.log('Here is ' + mamaHero.name + '!');

var paulHero = Hero("Paul");
console.log('Here is ' + paulHero.name + '!');

/* 

OUTPUT >>>

> Here is Zina!
> Here is Zina!

*/