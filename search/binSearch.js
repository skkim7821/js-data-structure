const readline = require('readline');

function randomArr(num) {
	var nums = [];
	for (var i = 0; i < num; i++) {
		nums[i] = Math.floor(Math.random() * (num + 1));
	}
	return nums;
}

function dispArr(arr) {
	var str = '';
	for (var i = 0; i < arr.length; i++) {
		str += arr[i] + ' ';
		if (i % 10 == 9) str += '\n';
	}
	console.log(str);
}

function binSearch(arr, data) {
	var upperBound = arr.length - 1;
	var lowerBound = 0;
	while (lowerBound <= upperBound) {
		var mid = Math.floor((upperBound + lowerBound) / 2);
		console.log('Current midpoint: ', mid);
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

function count(arr, data) {
	var cnt = 0;
	var pos = binSearch(arr, data);;
	if (pos > -1) {
		++cnt;
		for(var i = pos -1; i > 0; i--) {
			if (arr[i] == data) ++cnt;
			else break;
		}
		for (var i = pos + 1; i < arr.length; i++) {
			if (arr[i] == data) ++cnt;
			else break;
		}
	}
	return cnt;
}

function show() {
	console.log();
	console.log('--------------------');
	console.log();

	var nums = randomArr(100);
	nums.sort((a, b) => a - b);
	dispArr(nums);

	const rl = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout
	});

	rl.question('Enter a value to count: ', (val) => {
		var retVal = count(nums, val);
		console.log('Found',retVal, 'occurrences of ', val );
		rl.close();
		show();
	});	
}

show();



