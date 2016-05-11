require('./lib/import-ramda')();


// inheritance 1

var a = { b: 'b is b', c: 'c is c' };
var b = Object.assign({}, a);

console.log('b', b);
