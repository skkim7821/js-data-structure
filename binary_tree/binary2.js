function Node(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = function() {
		return this.data;
	}
}

Node.of = function(data, left, right) {
	return new Node(data, left, right);
};

function BST() {
	this.root = null;
}

BST.of = function() {
	return new BST();
};

BST.prototype = {
	insert: function(data) {
		var n = Node.of(data, null, null);
		this.root === null ? this.root = n : this.checkAndInsert(n, this.root);
	}, 
	checkAndInsert: function(n, t) {
		var data = n.data;
		if (data < t.data) { // left
			t.left === null ? t.left = n : this.checkAndInsert(n, t.left);
		} else { // right
			t.right === null ? t.right = n : this.checkAndInsert(n, t.right);
		}
	},
	find: function(data) {
		var x = this.root;
		while (x.data !== data) {
			data < x.data ? x = x.left : x = x.right;
			if (x === null) return null;
		}
		return x;
	},
	findParent: function(data) {
		var x = this.root;
		var parent;
		while(x.data !== data) {
			parent = x;
			data < x.data ? x = x.left : x = x.right;
			if (x === null) return null;
		}
		return parent;
	},
	getMin: function() {
		var x = this.root;
		while (x.left !== null) {
			x = x.left;
		}
		return x.data;
	},
	getMax: function() {
		var x = this.root;
		while (x.right !== null) {
			x = x.right;
		}
		return x.data;
	},
	remove: function(data) {
		var parent = this.findParent(data);
		var side = (function() {
			return (parent.left != null) && (parent.left.data === data) ? 
							'left' : 'right'; 
		})();
		var t = parent[side];

		if (t.left === null && t.right === null) parent[side] = null;
		if (t.left === null) parent[side] = t.right;
		if (t.right === null) parent[side] = t.left;

		

	},
	remove2: function(data) {
		var parent = this.findParent(data);
		var side = (function() {
			return (parent.left != null) && (parent.left.data === data) ? 
							'left' : 'right'; 
		})();
		console.log('removeNode: ' + this.removeNode(this.root, data));
		console.log(parent);
	},
	removeNode: function(n, data) {
		if (n == null) {
			return null;
		}

		var ret = null;
		if (data == n.data) {
			if (n.left == null && n.right == null) {
				return null;
			} 
			if (n.left == null) {
				return n.right;
			}
			if (n.right == null) {
				return n.left; 	
			}
		} else if (data < n.data) {
			this.removeNode(n.left, data);
		} else {
			this.removeNode(n.right, data);
		}

		// return ret;
	}
};

function inOrder(node) {
	if (!(node == null)) {
		inOrder(node.left);
		console.log(node.show() + ' ');
		inOrder(node.right);
	}
};

var nums = BST.of();
nums.insert(50); 
nums.insert(48); 
nums.insert(80); 
nums.insert(24);
nums.insert(56); 
nums.insert(21);
nums.insert(28); 
nums.insert(53);
nums.insert(59);
nums.insert(70);
nums.insert(60);
nums.insert(75);
nums.insert(90);
nums.insert(100);
nums.insert(23);
nums.insert(27);
inOrder(nums.root);
// console.log('parent', nums.findParent(21).data);
nums.remove2(28);
var min = nums.getMin();
var max = nums.getMax();
console.log('the minimum value of the BST is: ' + min);
console.log('the maximum value of the BST is: ' + max);

