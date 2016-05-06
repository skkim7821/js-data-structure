import daggy from 'daggy';
require('../lib/import-ramda')();

const Node = daggy.tagged('data', 'left', 'right');
Node.of = function(data, left, right) {
	return new Node(data, left, right)
};

Node.prototype = {
	count: 1,
	show() {
		return this.data;
	}
};

function BST() {
	this.root = null;
};

BST.prototype = {
	insert(data) {
		const n = Node.of(data, null, null);

		if (this.root == null) {
			this.root = n;
		} else {
			let current = this.root;
			let parent;
			while (true) {
				parent = current;
				if (data < current.data) {
					current = current.left;
					if (current == null) {
						parent.left = n;
						break;
					}
				} else {
					current = current.right;
					if (current == null) {
						parent.right = n;
						break;
					}
				}
			}
		}

	},
	getMin() {
		let current = this.root;
		while (!(current.left == null)) {
			current = current.left;
		}
		return current.data;
	},
	getMax() {
		let current = this.root;
		while(!(current.right == null)) {
			current = current.right;
		}
		return current.data;
	},
	find(data) {
		let current = this.root;
		while (current.data != data) {
			if (data < current.data) {
				current = current.left;
			} else {
				current = current.right;
			}

			if (current == null) return null;
		}
		return current;
	},
	remove(data) {
		root = removeNOde(this.root, data);
	},
	removeNode(node, data) {
		if (node == null) {
			return null;
		}
		if (data == node.data) {

			if (node.left == null && node.right == null) return null;
			if (node.left == null) return node.right;
			if (node.right == null) return node.left;

			let tempNode = getSmallest(node.right);
			node.data = tempNode.data;
			node.right = removeNode(node.right, tempNode.data);
			return node;
		} else if (data < node.data) {
			node.left = removeNode(node.left, data);
			return node;
		} else {
			node.right = removeNode(node.right, data);
			return node;
		}
	},
	update(data) {
		let grade = this.find(data);
		grade.count++;

		return grade;
	}
}

function inOrder(node) {
	if (!(node == null)) {
		inOrder(node.left);
		console.log(node.show() + ' ');
		inOrder(node.right);
	}
};

function preOrder(node) {
	if (!(node == null)) {
		console.log(node.show() + ' ');
		preOrder(node.left);
		preOrder(node.right);
	}
}

function postOrder(node) {
	if (!(node == null)) {
		postOrder(node.left);
		postOrder(node.right);
		console.log(node.show() + ' ');
	}
}

function prArray(arr) {
	console.log(arr[0].toString() + ' ');
	arr.reduce((a, b, i) => {
		console.log(b.toString() + ' ');
		if (i % 10 == 0) console.log('\n');
	});
};

function genArray(length) {
	const rand = () => Math.floor(Math.random() * 101);
	return times(rand, length);
}


// let nums = new BST();
// nums.insert(23); 
// nums.insert(45); 
// nums.insert(16); 
// nums.insert(37); 
// nums.insert(3); 
// nums.insert(99); 
// nums.insert(22);
// inOrder(nums.root);
// let min = nums.getMin();
// console.log("The minimum value of the BST is: ", min);
// let max = nums.getMax();
// console.log("The maximum value of the BST is: ", max);
// 




