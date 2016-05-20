function Node(element) {
	this.element = element;
	this.next = null;
	this.prev = null;
}

Node.of = function(element) {
	return new Node(element);
};

var LinkedList = {
	init: function(element) {
		this.head = Node.of('head');
		this.count = 0;
	},
	insert: function(newElement, prevElement) {
		var newNode = Node.of(newElement);
		var prevNode = this.find(prevElement);
		newNode.prev = prevNode;
		newNode.next = prevNode.next;
		prevNode.next = newNode;
		this.count++;
	},
	find: function(element) {
		var curNode = this.head;
		while(curNode.element != element) {
			curNode = curNode.next;
		};
		return curNode;
	},
	remove: function(element) {
		var curNode = this.find(element);
		var prevNode = curNode.prev;
		prevNode.next = curNode.next;
		curNode.next.prev = prevNode;
		this.count--;
	},
	display: function() {
		var curNode = this.head;
		while(curNode.next != null) {
			curNode = curNode.next;
			console.log(curNode.element);
		}
	},
	findLast: function() {
		var curNode = this.head;
		while(curNode.next != null) {
			curNode = curNode.next;
		}
		return curNode;
	},
	displayReverse: function() {
		var curNode = this.findLast();
		while(curNode.prev != null) {
			console.log(curNode.element);
			curNode = curNode.prev;
		}
	},
	toArray: function() {
		var arr = [];
		var curNode = this.head;
		while(curNode.next != null) {
			curNode = curNode.next;
			arr.push(curNode.element);
		}
		return arr;
	},
	length: function() {
		return this.count;
	}
};

var cities = Object.create(LinkedList); cities.init();
cities.insert('Conway', 'head');
cities.insert('Russellville', 'Conway');
cities.insert('Carlisle', 'Russellville');
cities.insert('Alma', 'Carlisle');
cities.insert('Seoul','Alma');
cities.insert('Sidney','Seoul');
cities.insert('Paris','Sidney');
cities.display();
console.log('length: ', cities.length());
console.log('-----display-----');
cities.remove('Russellville');
cities.display();
console.log('length: ', cities.length());
console.log('-----reverse-----');
cities.displayReverse();
console.log(cities.toArray());
console.log('length: ', cities.length());

