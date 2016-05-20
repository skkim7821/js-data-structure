var HashTable = {
	init: function(n = 137) {
		this.table = new Array(n);
		this.buildChains();
	},
	simpleHash: function(data) {
		var total = 0;
		for (var i = 0; i < data.length; ++i) {
			total += data.charCodeAt(i);
		}
		console.log('Hash value: ' + data + ' -> ' + total);
		return total % this.table.length;
	},
	betterHash: function(str) {
		const H = 37;
		var total = 0;

		for (var i = 0; i < str.length; ++i) {
			total += H * total + str.charCodeAt(i);
		}

		total = total % this.table.length;
		if (total < 0) total += this.table.length - 1;
		return parseInt(total);
	},
	showDistro: function() {
		var n = 0;
		console.log(this.table);
		for (var i = 0; i < this.table.length; ++i) {
			if (this.table[i][0] != undefined) {
				console.log(i + ': ' + this.table[i]);
			}
		}
	},
	put: function(key, data) {
		var pos = this.betterHash(key);
		var idx = 0;
		var table = this.table[pos];

		if (table[idx] == undefined) {
			table[idx] = key;
			table[idx+1] = data;
		} else {
			while(table[idx] != undefined) {
				++idx;
			} 
			table[idx] = key;
			table[idx+1] = data;
		}
	},
	get: function(key) {
		var pos = this.betterHash(key);
		var idx = 0;
		var table = this.table[pos];
		while(table[idx] != key) {
			++idx;
		}
		return table[idx+1];
	},
	buildChains: function() {
		for (var i = 0; i < this.table.length; ++i) {
			this.table[i] = [];
		}
	}
};

// var hTable = Object.create(HashTable); hTable.init();
// var someNames = ['David', 'Jennifer', 'Donnie', 'Raymond', 'Cynthia', 'Mike', 'Clayton', 'Danny', 'Jonathan'];

// for (var i = 0; i < someNames.length; ++i) {
// 	hTable.put(someNames[i]);
// }

// hTable.showDistro();


function getRandomInt (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genStudentData(arr) {
	for (let i = 0; i < arr.length; ++i) {
		let num = '';
		for (let j = 1; j <= 9; ++j) {
			num += Math.floor(Math.random() * 10);
		}
		num += getRandomInt(50, 100);
		arr[i] = num;
	}
}

// var numStudents = 10;
// var arrSize = 97;
// var idLen = 9;
// var students = new Array(numStudents);
// genStudentData(students);

// console.log('Student data: \n');
// for (var i =0; i < students.length; ++i) {
// 	console.log(students[i].substring(0,8) + ' ' + students[i].substring(9) );
// }

// console.log('\n\nData distribution: \n');
// var hTable = Object.create(HashTable); hTable.init();

// for (var i = 0; i < students.length; ++i) {
// 	hTable.put(students[i]);
// }

// hTable.showDistro();


var hTable = Object.create(HashTable); hTable.init();
var someNames = [{
	key: 'David',
	val: 104
},{
	key: 'Jennifer',
	val: 105
},{
	key: 'Donnie',
	val: 106
},{
	key: 'Raymond',
	val: 107
},{
	key: 'Cynthia',
	val: 108
},{
	key: 'Mike',
	val: 109
},{
	key: 'Clayton',
	val: 110
},{
	key: 'Danny',
	val: 111
},{
	key: 'Jonathan',
	val: 112
}];


for (var i = 0; i < someNames.length; ++i) {
	hTable.put(someNames[i].key, someNames[i].val);
}

hTable.showDistro();
console.log(hTable.get('Jonathan'));
