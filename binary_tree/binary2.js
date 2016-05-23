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
	this.count = 1;
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
		this.root === null ? this.root = n : this.insertHelper(n, this.root);
	}, 
	insertHelper: function(n, t) {
		var data = n.data;
		if (data < t.data) { // left
			t.left === null ? t.left = n : this.insertHelper(n, t.left);
		} else { // right
			t.right === null ? t.right = n : this.insertHelper(n, t.right);
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
		if (this.root == undefined) return null; 

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
	incCount: function(data) {
		var item = this.find(data);
		item.count++;
		return item;
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
	},
	length: function() {
		return this.toArray().length;
	},
	update: function(data) {
		var node = this.find(data);
		node.count++;
		return node;
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
	// console.log('shuffled: ', arr);
	return arr;
};

var prArray = function(arr) {
	var str = '';
	str += arr[0].toString() + ' ';
	for (var i = 1; i < arr.length; i++) {
		str += arr[i].toString() + ' ';
		if (1 % 10 == 0) {
			str += '\n';
		}
	}
	console.log(str);
};

var genArray = function(length) {
	var arr = [];
	for (var i = 0; i < length; i++) {
		arr[i] = Math.floor(Math.random() * 101);
	}
	return arr;
};

var makeBST = function(arr) {
	var bst = BST.of();
	for (var i =0; i < arr.length; i++) {
		var g = arr[i];
		var found = bst.find(g);
		found == null ? bst.insert(g) : bst.update(g);
	}

	return bst;
};


var grades = genArray(100);
prArray( grades );
var gradesBST = makeBST(grades);

console.log('getMax',gradesBST.getMax());
console.log('getMin',gradesBST.getMin());

// console.time('makeBST');
// var nums = BST.of(dummyArray);
// console.log('root', nums.root.data);
// console.timeEnd('makeBST');

// console.time('getMin');
// nums.getMin();
// console.timeEnd('getMin');



