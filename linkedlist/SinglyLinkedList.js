function Node(element) {
	this.element = element;
	this.next = null;
	this.nextVal = function() {
		return this.next.element;
	};
	this.show = function() {
		return this.element;
	};
}

Node.of = function(element) {
	return new Node(element);
};

var LinkedList = {
	init: function(arr) {
		this.head = Node.of('head');
		this.count = 0;

		if ((arr instanceof Array) && arr.length > 0 ) {
			this.insertArray(arr);
		}
	},
	insert: function(element, prevElement) {
		var newNode = Node.of(element);
		var prevNode = this.find(prevElement);
		newNode.next = prevNode.next;
		prevNode.next = newNode;
		this.count++;
	},
	append: function(element) {
		var last = this.findLast().element;
		this.insert(element, last);
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
			this.count--;
		}
	},
	findPrev: function(element) {
		var curNode = this.head;
		while( (curNode.next != null) && (curNode.next.element != element)) {
			curNode = curNode.next;
		}
		return curNode;
	},
	findLast: function() {
		var curNode = this.head;
		while (curNode.next != null) {
			curNode = curNode.next;
		}
		return curNode;
	},
	advanced: function(n) {
		return this.cursor(n).element;
	},
	cursor: function(n) {
		var len = this.length();
		if (len < n ) {
			throw Error('beyond range');
		};
		var cnt = 0;
		var curNode = this.head;
		while(curNode.next != null && cnt != n) {
			curNode = curNode.next;
			cnt++;
		}	
		return curNode;
	},
	display: function() {
		var curNode = this.head;
		while(curNode.next != null) {
			curNode = curNode.next;
			console.log(curNode.element);
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
	},
	insertArray: function(arr) {
		for(var i = 0; i < arr.length; i++) {
			i == 0 ? this.insert(arr[i], 'head') : this.insert(arr[i], arr[i - 1]);			
		}
	}
};

var cities = Object.create(LinkedList); 
cities.init(['Conway', 'Russellville', 'Carlisle', 'Alma', 'Seoul', 'Sydney', 'Paris']);
cities.display();
cities.append('London');
var node = cities.cursor(1);
console.log('node value', node.nextVal());
console.log('advanced', cities.advanced(4));
console.log(cities.toArray());
console.log('----------');
cities.remove('Alma');
cities.display();
console.log(cities.toArray());

