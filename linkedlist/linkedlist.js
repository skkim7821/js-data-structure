import daggy from 'daggy';
require('../lib/import-ramda')();

function Node(el) {
	this.element = el;
	this.next = null;
	this.prev = null;
}
Node.of = el => new Node(el);


function LList() {
	this.head = Node.of('head');
}
LList.of = () => new LList();

LList.prototype = {
	find(item) {
		let currNode = this.head;
		while(currNode.element != item) {
			currNode = currNode.next;
		}
		return currNode;
	},
	insert(newEl, item) {
		let newNode = Node.of(newEl);
		let current = this.find(item);
		newNode.next = current.next;
		newNode.prev = current;
		current.next = newNode;
	},
	remove(item) {
		let currNode = this.findPrev(item);
		if (!(currNode.next == null)) {
			currNode.prev.next = currNode.next;
			currNode.next.prev = currNode.prev;
			currNode.next = null;
			currNode.prev = null;
		}
	},
	findLast() {
		var currNode = this.head;
		while (!(currNode.next == null)) {
			currNode = currNode.next;
		}
		return currNode;
	},
	dispReverse() {
		var currNode = this.head;
		currNode = this.findLast();
		while (!(currNode.prev == null)) {
			console.log(currNode.element);
			currNode = currNode.prev;
		}
	},
	findPrev(item) {
		let currNode = this.head;
		while ( !(currNode.next == null) && (currNode.next.element != item)) {
			currNode = currNode.next;
		}
		return currNode;
	},
	display() {
		let currNode = this.head;
		while(!(currNode.next == null)) {
			console.log(currNode.next.element);
			currNode = currNode.next;
		}
	}
};

let cities = LList.of();
cities.insert('Conway', 'head');
cities.insert('Russellville', 'Conway');
cities.insert('Carlisle', 'Russellville');
cities.insert('Alma', 'Carlisle');
cities.display();
console.log();
cities.remove('Carlisle');
cities.display();
