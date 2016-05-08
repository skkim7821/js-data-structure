import daggy from 'daggy';
require('../lib/import-ramda')();

const Stack = daggy.tagged();
Stack.of = () => new Stack();

Stack.prototype = {
	dataStore: [],
	top: 0,
	push(el) {
		this.dataStore.push(el);
	},
	pop() {
		return this.dataStore.pop();
	},
	peek() {
		const length = this.length();
		return this.dataStore[length - 1];
	},
	length() {
		return this.dataStore.length
	},
	clear() {
		this.setStore([]);
	},
	setStore(newDatastore) {
		this.dataStore = newDatastore;
	}
};

// let s = Stack.of();
// s.push('David');
// s.push('Raymond');
// s.push('Bryan');
// console.log('length: ', s.length());
// console.log(s.peek());
// let popped = s.pop();
// console.log('The popped el is: ', popped);
// console.log(s.peek());
// s.push('Cynthia');
// console.log(s.peek());
// s.clear();
// console.log('length: ', s.length());
// console.log(s.peek());
// s.push('Clayton');
// console.log(s.peek());

function mulBase(num, base) {

	let s = Stack.of();
	while(num > 0) {
		s.push(num % base);
		num = Math.floor(num /= base);
	}

	let converted = '';
	while (s.length() > 0) {
		converted += s.pop();
	}

	return converted;
}



let num = 32;
let base = 2;
let newNum = mulBase(num, base);

console.log(num, ' converted to base ', base, ' is ', newNum);

num = 125;
base = 8;
newNum = mulBase(num, base);

console.log(num, ' converted to base ', base, ' is ', newNum);
