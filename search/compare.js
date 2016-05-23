const fs = require('fs');


function binSearch(arr, data) {
	var upperBound = arr.length - 1;
	var lowerBound = 0;
	while (lowerBound <= upperBound) {
		var mid = Math.floor((upperBound + lowerBound) / 2);
		if (arr[mid] < data) {
			lowerBound = mid + 1;
		}else if (arr[mid] > data) {
			upperBound = mid - 1;
		} 
		else {
			return mid;	
		}
	}
	return - 1;
}

function seqSearch(arr, data) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == data) {
			return i;
		}
	}
	return -1;
}

const words = fs.readFileSync('./words.txt', 'utf8').split(' ');
const word = 'rhetoric';

function seqTest() {
	console.time('seqTest');
	var pos = seqSearch(words, word);
	console.timeEnd('seqTest');

	if (pos >= 0) console.log('Found',word,'at position',pos);
	else console.log(word,'is not in the file');
}

function binTest() {	
	words.sort();
	console.time('binTest');
	var pos = binSearch(words, word);
	console.timeEnd('binTest');

	if (pos >= 0) console.log('Found',word,'at position',pos);
	else console.log(word,'is not in the file');
}

seqTest();
binTest();

