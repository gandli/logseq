file-path:: ../assets/[图灵程序设计丛书].你不知道的JavaScript（上卷）_1648974316013_0.pdf
file:: [[图灵程序设计丛书].你不知道的JavaScript（上卷）_1648974316013_0.pdf](../assets/[图灵程序设计丛书].你不知道的JavaScript（上卷）_1648974316013_0.pdf)
title:: hls__[图灵程序设计丛书].你不知道的JavaScript（上卷）_1648974316013_0

- 我们想要记录一下函数foo被调用的次数，思考一下下面的代码：function foo(num) {    console.log( "foo: " + num );    // 记录foo被调用的次数this.count++;}foo.count = 0;var i;for (i=0; i<10; i++) {if (i > 5) {        foo( i );    }}// foo: 6// foo: 7// foo: 8// foo: 9// foo被调用了多少次？console.log( foo.count ); // 0 -- WTF?
  ls-type:: annotation
  hl-page:: 91
  id:: 62495ca8-925c-4f7e-9419-1721b1ebf636
- ls-type:: annotation
  hl-page:: 91
  id:: 62495cac-f536-4913-a824-bfc36ffa22d4