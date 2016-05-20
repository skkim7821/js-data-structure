function Node(element) {
	this.element = element;
	this.next = null;
}

Node.of = function(element) {
	return new Node(element);
};

var LinkedList = {
	init: function(element) {
		this.head = Node.of('head');
		this.tail = 
	},
	insert: function(element, prevElement) {
		var newNode = Node.of(element);
		var prevNode = this.find(prevElement);
		newNode.next = prevNode.next;
		prevNode.next = newNode;
	},
	find: function(element) {
		var curNode = this.head;
		while(curNode.element != element) {
			curNode = curNode.next;
		};
		return curNode;
	},
	remove: function(element) {
		var prevNode = this.findPrev(element);
		if (prevNode.next != null) {
			prevNode.next = prevNode.next.next;
		}
	},
	findPrev: function(element) {
		var curNode = this.head;
		while( (curNode.next != null) && (curNode.next.element != element) ) {
			curNode = curNode.next;
		}
		return curNode;
	},
	display: function() {
		var curNode = this.head;
		while( (curNode.next != null) && (curNode.next.element != 'head') ) {
			console.log(curNode.element);
			curNode = curNode.next;
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
	}
};

var cities = Object.create(LinkedList); cities.init();
cities.insert('Conway', 'head');
cities.insert('Russellville', 'Conway');
cities.insert('Carlisle', 'Russellville');
cities.insert('Alma', 'Carlisle');
cities.display();
console.log('----------');
cities.remove('Alma');
cities.display();
console.log(cities.toArray());

