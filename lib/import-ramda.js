var R = require('ramda');

module.exports = function () {
	const _global = {};
	R.forEach(x => _global[x] = global[x], R.keys(R).filter(k => k in global));
	R.forEach(x => global[x] = R[x], R.keys(R));	
};
