require('./lib/import-ramda')();

// es5
// es6
// mixin
// inheritance 1

var a = { b: 'b is b', c: 'c is c' };
var b = Object.assign({}, a);

console.log('b', b);
