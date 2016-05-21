Array.prototype.shuffle = function() {
	var a = this;
  var j, x, i;
  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
};

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

function BST(arr) {
	this.root = null;

	if ((arr instanceof Array) && arr.length > 0 ) {
		this.build(arr);
	}
}

BST.of = function(arr) {
	return new BST(arr);
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
	build: function(arr) {
		arr = arr.sort(function(a, b) { 
			return a - b;
		});
		var median = this.getMedian(arr),
				idx = arr.indexOf(median),
				lefts = arr.slice(0, idx),
				rights = arr.slice(idx+1);

		this.insert(median);
		lefts.reverse().forEach((item) => {
			this.insert(item);
		});
		rights.reverse().forEach((item) =>{
			this.insert(item);
		});
	},
	find: function(data) {
		var x = this.root;
		while (x.data !== data) {
			data < x.data ? x = x.left : x = x.right;
			if (x === null) return null;
		}
		return x;
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
	getMedian: function(arr) {
		var len = arr.length;
		if (len % 2 == 0) return arr[len / 2];
		return arr[(len - 1) / 2];
	},
	remove: function(data) {
		this.root = this.removeNode(this.root, data);
	},
	removeNode: function(node, data) {

		if (node == null) return null;

		if (data == node.data) {
			
			if (node.left == null && node.right == null) return null;	
			if (node.left == null) return node.right;
			if (node.right == null) return node.left;

			// 둘다 있는 경우
			var tempNode = this.getSmallestNode(node.right);
			node.data = tempNode.data;
			node.right = this.removeNode(node.right, tempNode.data);
			return node;

		} else if (data < node.data) {
			node.left = this.removeNode(node.left, data); // 이해하기 어려운 파트
			return node;
		} else {
			node.right = this.removeNode(node.right, data);
			return node;
		}
	},
	getSmallestNode: function(node) {
		while(node.left !== null) {
			node = node.left;
		}
		return node;
	},
	findInOrder: function(node, cb) {
		if ( node !== null ) {
			this.findInOrder(node.left, cb);
			cb(node);
			this.findInOrder(node.right, cb);
		}
	},
	toArray: function() {
		var arr = [];
		this.findInOrder(this.root, function(node) {
			arr.push(node.data);
		});
		return arr;
	}
};

function inOrder(node) {
	if ( node !== null ) {
		inOrder(node.left);
		console.log(node.show() + ' ');
		inOrder(node.right);
	}
};

var makeArray = function(num) {
	var arr = [];
	for (var i = 1; i < num + 1; i++) {
		arr.push(i);
	}
	arr.shuffle();
	console.log('shuffled: ', arr);
	return arr;
};

var dummyArray = makeArray(20000);

console.time('makeBST');
var nums = BST.of(dummyArray);
console.log('root', nums.root.data);
console.timeEnd('makeBST');

console.time('getMin');
nums.getMin();
console.timeEnd('getMin');



