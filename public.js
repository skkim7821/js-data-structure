// function defineClass(...args) {

// 	const currIdx = args.length - 1;

// 	return function() {
// 		for (let i = 0; i < args.length; i++) {
// 			for (let v in args[i]) {
// 				if (v !== 'static') {
// 					this[v] = args[i][v];
// 				}
// 				if (v === 'static' && i === currIdx) {
// 					this[v] = args[i][v];	
// 				}
// 			}
// 		}
// 		if (this.init) this.init();
// 	}

// }
// 

function defineClass() {

}

var Parent = defineClass({
	attr: 'hello world', 
	init: function() {
		this.name = 'what the fuck';
	},
	method1: function () {
		return 'this is method1'
	},
	method2: function () {
		return 'this is method2'
	},
	method3: function(cb) {
		
	},
	static: {
		method4: function() {
			return 'this is static method4'
		},
		method5: function() {
			return 'this is static method5'
		}
	}
});

var Child = defineClass(Parent, {
	method4: function() {
		return 'what is method4?';
	},
	method5: function() {
		return 'what is method5?';
	}
})


var parentInstance = new Parent();
var childInstance = new Child();


// var Parent = defineClass(opt);
// var hello = new Parent();

console.log(parentInstance.static.method4());
console.log(parentInstance);
console.log(childInstance);

