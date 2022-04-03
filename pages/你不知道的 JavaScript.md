- ![[图灵程序设计丛书].你不知道的JavaScript（上卷）.pdf](../assets/[图灵程序设计丛书].你不知道的JavaScript（上卷）_1648974316013_0.pdf)
- ![[图灵程序设计丛书].你不知道的JavaScript（中卷）.pdf](../assets/[图灵程序设计丛书].你不知道的JavaScript（中卷）_1648974832888_0.pdf)
- ![[图灵程序设计丛书].你不知道的JavaScript（下卷）.pdf](../assets/[图灵程序设计丛书].你不知道的JavaScript（下卷）_1648974843248_0.pdf)
- this
	- 指向本身？
		- ((62495cdd-f5bf-4ea9-a051-460f0af53bd3))
		  ```js
		  function foo(num) {    
		    console.log( "foo: " + num );    // 记录foo被调用的次数
		  this.count++;
		  }
		  foo.count = 0;
		  var i;
		  for (i=0; i<10; i++) {
		  if (i > 5) { 
		         foo( i );   
		   }
		  }// foo: 6// foo: 7// foo: 8// foo: 9// foo被调用了多少次？console.log( foo.count ); // 0 -- WTF?
		  ```
		-
	-
	-
-