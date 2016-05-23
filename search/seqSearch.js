function swap(arr, index, index1) {
	temp = arr[index];
	arr[index] = arr[index1];
	arr[index1] = temp;
}

function seqSearch(arr, data) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == data) {
			return true;
		}
	}
	return false;
}

function findMin(arr) {
	var temp = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < temp) {
			temp = arr[i];
		}
	}
	return temp;
}

function findMax(arr) {
	var temp = arr[0];
	for (var i = 0; i < arr.length; i++) {		
		if (arr[i] > temp) {
			temp = arr[i];
		}
	}
	return temp;
}

function seqSearch2(arr, data) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == data) {
			return i;
		}
	}
	return -1;
}

function seqSearch3(arr, data) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == data) {
			if (i > 0) swap(arr, i, i - 1);
			return true;
		}
	}
	return false;
}

function seqSearch4(arr, data) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == data && i > (arr.length * .2)) {
			swap(arr, i, 0);
			return true;
		} else if (arr[i] == data){
			return true;
		}
	}
	return false;
}


function dispArr(arr) {
	var str = '';
	for (var i = 0; i < arr.length; i++) {
		str += arr[i] + ' ';
		if (i % 10 == 9) str += '\n';
	}
	console.log(str);
}

var nums = [];
for (var i = 0; i < 100; i++) {
	nums[i] = Math.floor(Math.random() * 101);
}

// dispArr(nums);
// var num = 10;

// console.log('num', num,'is in there ?',seqSearch2(nums, 10));
// console.log('min is ', findMin(nums));
// console.log('max is ', findMax(nums));


var nums = [5, 1, 7 ,4, 2,10, 9, 3, 6, 8];
console.log(nums);
for (var i = 1; i <= 3; i++) {
	seqSearch4(nums, 4);
	console.log(nums);
}
