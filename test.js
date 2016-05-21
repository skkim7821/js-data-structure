function defineClass(childF) {
	var returnF = function(){

	}
	return returnF;
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
});

var test = function(typeStr){

	this.type = typeStr;
	this.getType = function(){
		console.log("ABC"+this.type);
	}
}

var testF = defineClass(test("test"))

var testObject = new testF();

console.log("T")
console.log(testObject.getType())

var parentInstance = new Parent();
var childInstance = new Child();

console.log(parentInstance);

console.info('Parent', Parent);
console.info('parentInstance is instance of Parent', parentInstance instanceof Parent);

console.log(parentInstance.static.method4());
console.log(parentInstance);
console.log(childInstance);

