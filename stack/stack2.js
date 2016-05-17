var Stack = {
	init: function() {
		this.dataStore = [];
	},
	push: function(item) {
		this.dataStore.push(item);
	},
	pop: function() {
		return this.dataStore.pop();
	},
	peek: function() {
		var len = this.length();
		return this.dataStore[len - 1];
	},
	length: function() {
		return this.dataStore.length;
	},
	max: function() {
		return Math.max.apply(null, this.dataStore);
	},
	toArray: function() {
		return this.dataStore;
	},
	clear: function() {		
		this.dataStore = [];
	},
	of: function() {
		return Object.create(this);
	}
};

var s = Stack.of();
s.init();
s.push();
s.push('Raymond');
s.push('Bryan');
console.log('length: ' + s.length());
console.log(s.peek());
var popped = s.pop();
console.log('The popped el is: ' + popped);
console.log(s.peek());
s.push('Cynthia');
console.log(s.peek());
s.clear();
console.log('length: ' + s.length());
console.log(s.peek());
s.push('Clayton');
console.log(s.peek());

// var ex_word = 'racecar';

// function isPalindrome(word) {
// 	var s = Stack.of();
// 	s.init();

// 	for(var i = 0; i < word.length; i ++) {
// 		s.push(word[i]);
// 	};

// 	var newStr = '';
// 	while(s.length() !== 0) {
// 		newStr += s.pop();
// 	};

// 	return word == newStr ? true : false;
// };

// var isPal = isPalindrome(ex_word);
// console.log('회문인가요?', isPal);


// var sentence = "2.3 + 23 / 12 + (3.14159 * .24";

// function findClosedTagTester(str) {	
// 	var s = Stack.of();
// 	s.init();

// 	var isOpened = false;
// 	var idx = null;
// 	for (var i = 0; i < str.length; i++) {
// 		if (str[i] == '(') {
// 			s.push(i);
// 			isOpened = true;
// 		} else if (str[i] == ')') {
// 			s.pop();
// 			isOpened = false;
// 		} else if (isOpened && str[i] == ' ') {
// 			idx = i;
// 		}
// 	};

// 	return idx;
	
// };

// findClosedTagTester(sentence);
