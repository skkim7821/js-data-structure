function Node(el) {
	this.element = el;
	this.next = null;
}

Node.of = (el) => new Node(el);

function LList() {
	this.head = Node.of('head');
}

LList.of = () => new LList();

LList.prototype = {
	insert(newEl, prevEl) {
		var curr = this.find(prevEl);
		var newNode = Node.of(newEl);
		curr.next = newNode;
	},
	find(el) {
		var curr = this.head;
		while (curr.element != el) {
			curr = curr.next;
		}

		return curr;
	},
	display() {
		var curr = this.head;

		while(curr.next != null) {
			console.log(curr.element);
			curr = curr.next;
		}

	}
}

var list = LList.of();
list.insert('sk', 'head');
list.insert('hello', 'sk');
list.insert('hello2','hello');
list.insert('hello3', 'hello2');
list.display();
