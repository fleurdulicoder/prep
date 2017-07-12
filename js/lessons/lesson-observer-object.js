var Observable = function(){
	this.subscribers = [];
}

Observable.prototype = {
	subscribe: function(subscriber) {
		this.subscribers.push(subscriber);
	},

	unsubscribe: function(unsubscriber) {
		for (var i = 0; i < this.subscribers.length; i++) {
			if(this.subscribers[i] === unsubscriber) {
				this.subscribers.splice(i, 1);
				return unsubscriber.name;
			}
		}
	},

	publish: function(data) {
		for (var i = 0; i < this.subscribers.length; i++) {
			this.subscribers[i].receiveData(data);
		}
	}
};

var OrganFanny = {
	name: "Organ Fanny",
	receiveData: function(data) {
		console.log(this.name + "received your info " + data);
	}
};

var BoldmanYaks = {
	name: "Boldman Yaks",
	receiveData: function(data) {
		console.log(this.name + "received your info " + data);
	}
};

var observable = new Observable();
observable.subscribe(OrganFanny);
observable.subscribe(BoldmanYaks);
observable.publish('IBM at $145.30');
console.log(observable.unsubscribe(OrganFanny) + " unsubscribed");
observable.publish('IBM at $144.22');