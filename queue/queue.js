import daggy from 'daggy';
require('../lib/import-ramda')();

const Queue = daggy.tagged();
Queue.of = () => new Queue();

Queue.prototype = {
	dataStore: [],
	enqueue(el) {
		this.dataStore.push(el);
	},
	dequeue() {
		this.dataStore.shift();
	},
	front() {
		return this.dataStore[0];
	},
	back() {
		const length = this.dataStore.length;
		return this.dataStore[length - 1];
	},
	toString() {
		return this.dataStore.reduce((acc, a) => {
			acc += a + '\n';
			return acc;
		},'');
	},
	empty() {
		return this.dataStore.length === 0 ? true : false;
	}
};

let q = Queue.of();
q.enqueue('Meredith');
q.enqueue('Cynthia');
q.enqueue('Jennifer');
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log('front of queue: ' + q.front());
console.log('back of queue: ' + q.back());

