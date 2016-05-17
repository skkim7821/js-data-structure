// 1. 생성자를 반환하는 defineClass 함수를 작성하라.
// 2. 생성자를 반환하는 함수는 자식 오브젝트와 부모 오브젝트를 파라메터로 받는다.
// 3. init 함수가 있을 경우 생성자가 호출 될 때 init 함수가 호출되어야 함.
// 4. static 이라는 이름의 멤버는 상속되지 않는다.

'use strict';

function defineClass( /* parent list */ )
{
	var clazz = function()
	{
		for( var key in clazz.members )
		{
			if( !this[ key ] )
			{
				this[ key ] = clazz.members[ key ];
			}	
		}

		if( this.init ){ this.init(); }
	};

	clazz.isDefineClassObj = true;
	clazz.members = {};

	for( var i = arguments.length; i > -1; i-- )
	{
		var parent = arguments[ i ];

		if( typeof parent === 'function' && parent.members )
		{
			parent = parent.members;
		}

		for( var key in parent )
		{
			if( !clazz.members[ key ] )
			{
				if( typeof arguments[ i ] === 'function' && key === 'static' )
				{
					continue;
				}

				clazz.members[ key ] = parent[ key ];
			}
		}
	}

	// console.log( 'clazz.members', clazz.members );

	return clazz;
};

var Parent = defineClass(
{
	attr: 'hello world', 
	init: function(){ this.name = 'what the fuck'; },
	method1: function (){ return 'this is method1' },
	method2: function (){ return 'this is method2' },
	method3: function(cb){},
	static: 
	{
		method4: function(){ return 'this is static method4' },
		method5: function(){ return 'this is static method5' }
	}
} );

var Child = defineClass( Parent,
{
	method4: function(){ return 'what is method4?'; },
	method5: function(){ return 'what is method5?';	}
} );

var parentInstance = new Parent();
var childInstance = new Child();

console.log( parentInstance.static.method4() );
console.log( parentInstance );
console.log( childInstance );
