function CArray(numEls) {
	this.dataStore = [];
	this.pos = 0;
	this.numEls = numEls;

	for (var i=0; i < numEls; i++) {
		this.dataStore[i] = i;
	}
}

CArray.of = function(numEls) {
	return new CArray(numEls);
}

CArray.prototype = {
	setData: function() {
		for (var i = 0; i < this.numEls; i++) {
			this.dataStore[i] = Math.floor(Math.random() * (this.numEls + 1));
		}
	},
	clear: function() {
		for (var i = 0; i < this.dataStore.length; i++) {
			this.dataStore[i] = 0;
		}
	},
	insert: function(el) {
		this.dataStore[this.pos++] = element;
	},
	toString: function() {
		var retstr = '';
		for (var i = 0; i < this.dataStore.length; i++) {
			retstr += this.dataStore[i] + ' ';
			if (i > 0 && i % 10 == 0) retstr += '\n'
		}
		return retstr;
	},
	swap: function(arr, index1, index2) {
		var temp = arr[index1];
		arr[index1] = arr[index2];
		arr[index2] = temp;
	},
	bubbleSort: function() {
		var len = this.dataStore.length;
		for (var outer = len; outer >= 2; outer--) {
			for (var inner = 0; inner <= outer - 1; inner++) {
				if (this.dataStore[inner] > this.dataStore[inner+1]) {
					this.swap(this.dataStore, inner, inner + 1);
				}
			}
			console.log(this.toString());
		}

	},
	selectionSort: function() {		
		var min, temp;
		for (var outer = 0; outer <= this.dataStore.length - 2; outer++) {
			min = outer;
			for (var inner = outer + 1; inner <= this.dataStore.length -1; inner++) {
				if (this.dataStore[inner] < this.dataStore[min]) {
					min = inner;
				}
			}
			this.swap(this.dataStore, outer, min);
			console.log(this.toString());
		}
	},
	insertionSort: function() {
		var temp, inner;
		for (var outer = 1; outer <= this.dataStore.length -1; outer++) {
			temp = this.dataStore[outer];
			inner = outer;
			while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
				this.dataStore[inner] = this.dataStore[inner -1];
				inner--;
			}
			this.dataStore[inner] = temp;
			console.log(this.toString());
		}
	},
	shellSort: function() {

	},
	mergeSort: function() {

	},
	qSort: function() {

	}
};

var numEls = 10;
var myNums = CArray.of(numEls);
myNums.setData();
// console.log(myNums.toString());
myNums.insertionSort();
console.log();
console.log(myNums.toString());
