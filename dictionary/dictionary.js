var Dictionary = {
	init: function() {
		this.dataStore = [];
	},
	add: function(key, value) {
		this.dataStore[key] = value;
	},
	find: function(key) {
		return this.dataStore[key];
	},
	remove: function(key) {
		delete this.dataStore[key];
	},
	showAll: function() {
		for (var key of Object.keys(this.dataStore).sort()) {
			console.log(key + ': ' + this.dataStore[key]);
		}
	},
	count: function() {
		var n = 0;
		for (var key of Object.keys(this.dataStore)) {
			++n
		}
		return n;
	},
	clear: function() {
		for (var key of Object.keys(this.dataStore)) {
			delete this.dataStore[key];
		}
	}
};

// var pbook = Object.create(Dictionary);
// pbook.init();

// pbook.add('Mike', '123');
// pbook.add('David', '324');
// pbook.add('Cynthia', '456');
// console.log("David's extension: " + pbook.find('David'));
// pbook.remove('David');
// pbook.showAll();

var dic = Object.create(Dictionary); dic.init();
var input = 'the brown fox jumped over the blue fox';

var arr = input.split(' ');

arr.forEach(function(x) {
	if (dic.find(x) != undefined) {
		dic.add(x, dic.find(x) + 1);
	} else {
		dic.add(x, 1);
	} 
});

dic.showAll();


