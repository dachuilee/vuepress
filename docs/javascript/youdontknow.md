# 小黄书上卷
> javascript 是一门编译语言，
## 编译
> 程序在执行前端都会经历三个过程，统称`编译`，JavaScript的编译过程不是在构建前，而是发生在代码执行前的几微秒内。

* 词法分析（分词）
将字符串分解成有意义的代码块(词法单元)
* 语法分析（解析）
将词法单元流解析成语法结构树
* 代码生成
转换成机器指令

### 引擎
负责从头到尾负责程序的编译和执行
### 编译器
进行编译
# 作用域和闭包
负责收集并维护由所有的声明的标识符（变量）组成的一系列有规则的查询
```javascript
var a = 1;
```
> 变量的赋值操作会执行两个动作，首先编译器会在当前作用域中声明一个变量（如果没有申明），然后在运行时引擎会在作用域中查找该变量，如果能够找到就会对它赋值。

## LHS 查询 和 RHS查询
> `LHS` 和 `RHS` 的含义是“赋值操作的左侧或右侧” 并不一定意味着就是“=
赋值操作符的左侧或右侧”。 赋值操作还有其他几种形式， 因此在概念上最
好将其理解为“赋值操作的目标是谁（`LHS`）” 以及“谁是赋值操作的源头
（`RHS`）”。

`RHS`查询与简单的查询某个变量一样，而LHS查询则是试图找到变量的容器本身，从而可以对其赋值；可以将 `RHS` 理解成 `retrieve his source value`（ 取到它的源值）， 这意味着“得到某某的
值”。

### 作用域嵌套
> 当一个作用域中嵌套另一个作用域时，就形成了作用域嵌套，在当前作用域中无法找到某个变量时，引擎就会在外层的作用域中继续查找，直到找到该变量

## 词法作用域
> 作用域有两种工作模式：1. 词法作用域，2.动态作用域；词法作用域就是定义在词法阶段的作用域，因此，大部分情况下作用域保持不变

### 词法阶段
对源代码中的字符进行检查，如果是有状态的解析过程，还会赋予单词语义

### 欺骗词法
> 欺骗词法作用域会导致性能下降
1. eval
```javascript
function foo(str, a) {
eval( str ); // 欺骗！修改了作用域，只会找到内部的b
console.log( a, b );
}
var b = 2;
foo( "var b = 3;", 1 ); // 1, 3 
```
严格模式下，eval 运行有自己的作用域
```javascript
function foo(str) {
  "use strict";
  eval( str );
  console.log( a ); // ReferenceError: a is not defned
} 
foo( "var a = 2" );
```
### with 
> with 通常被当做重复引用同一对象中多个属性的快捷方式，可以不需要重复引用对象本本身; 严格模式下被禁用
```javascript
var obj = {
  a: 1,
  b: 2,
  c: 3
}
// 单调重复的 引用 obj
obj.a = 2;
obj.b = 3;
obj.c = 4;

// 简单的快捷方式
with (obj) {
  a = 3;
  b = 4;
  c = 5;
}
```
with 可以将一个没有或有多个属性的对象处理为一个完全隔离的词法作用域，因此这个对象的属性也会被定义在这个作用域中的词法标识符
```javascript
function foo(obj) {
  with (obj) {
    a = 2;
  }
}
var o1 = {
  a: 3
};
var o2 = {
  b: 3
};
foo( o1 );
console.log( o1.a ); // 2
foo( o2 );
console.log( o2.a ); // undefined
console.log( a ); // 2——不好， a 被泄漏到全局作用域上了！
```

## 函数作用域和块级作用域
### 函数作用域
> 函数的作用域：这个函数内的全部变量都可以在整个函数的范围内使用及复用，将变量存储在作用域中，
* 保持最小授权或最小暴露原则
* 规避冲突
 1. 全局命名空间
    > 在全局作用域中声明一个名字足够独特的变量， 通常是一个对象。 这个对象
被用作库的命名空间
 2. 模块管理

### 匿名和具名
#### 匿名函数
> 如：回调函数，书写简单
1. 匿名函数，没有函数名，调试困难
2. 如果没有函数名，只能使用`aruguments.callee`引用
3. 没有名称，代码可读性降低
始终给函数表达式命名是一个最佳实践
```javascript
setTimeout( function timeoutHandler() { // <-- 快看， 我有名字了！
  console.log( "I waited 1 second!" );
}, 1000 );
```
### 立即执行函数表达式（IIFE：`Immediately Invoked Function Expression`）
```javascript
undefined = true; // 给其他代码挖了一个大坑！ 绝对不要这样做！

// 保留undefined 标识符
(function IIFE( undefined ) {
  var a;
  if (a === undefined) {
    console.log( "Undefined is safe here!" );
  }
})();

// 使用回调函数
(function IIFE( def ) {
def( window );
})(function def( global ) {
var a = 3;
console.log( a ); // 3
console.log( global.a ); // 2
});
```
### 块级作用域
1. with
2. try/catch, catch 分句会创建一个块级作用域
```javascript
try {
  undefined(); // 执行一个非法操作来强制制造一个异常
}
catch (err) {
  console.log( err ); // 能够正常执行！
}

console.log( err ); // ReferenceError: err not found
```
3. let
4. const 
### 函数或变量提升
1. 函数声明会被提升， 但是函数表达式却不会被提升
```javascript
foo(); // TypeError
bar(); // ReferenceError
var foo = function bar() {
// ...
};
```
2. 函数会首先被提升， 然后才是变量
```javascript
foo(); // 1
var foo;
function foo() {
  console.log( 1 );
} 
foo = function() {
  console.log( 2 );
};
```

## 作用域闭包
> 当函数可以记住并访问所在的词法作用域时，就 产生了闭包; 无论通过何种手段将内部函数传递到所在的词法作用域以外， 它都会持有对原始定义作用
域的引用， 无论在何处执行这个函数都会使用闭包


```javascript
function foo() {
  var a = 2;
  function bar() {
    console.log( a );
  }
  return bar;
}
var baz = foo();// 这个函数在定义时的词法作用域以外的地方被调用
baz(); // 2 —— 朋友， 这就是闭包的效果。
```
无论使用何种方式对函数类型的值进行传递， 当函数在别处被调用时都可以观察到
闭包
```javascript
function foo() {
  var a = 2;
  function baz() {
    console.log( a ); // 2
  }
  bar( baz );
}
function bar(fn) {
  fn(); // 妈妈快看呀， 这就是闭包！
}
```
传递函数当然也可以是间接的。
```javascript
var fn;
function foo() {
var a = 2;
function baz() {
  console.log( a );
}
fn = baz; // 将 baz 分配给全局变量
}
function bar() {
  fn(); // 妈妈快看呀， 这就是闭包！
} 
foo();
bar(); // 2
```
在循环中应用闭包
```javascript
// 使用闭包
for (var i=1; i<=5; i++) {
  (function(j) {
    setTimeout( function timer() {
      console.log( j );
    }, j*1000 );
  })( i );
}
/**
 * 使用let, for 循环头部的 let 声明还会有一个特殊的行为。 
 * 这个行为指出变量在循环过程中不止被声明一次， 每次迭代都会声明。 
 * 随后的每个迭代都会使用上一个迭代结束时的值来初始化这个变量
 * */ 
for (let i=1; i<=5; i++) {
  setTimeout( function timer() {
    console.log( i );
  }, i*1000 );
}
```
>本质上无论何时何地， 如果将函数（访问它们各自的词法作用域） 当作第一
级的值类型并到处传递， 你就会看到闭包在这些函数中的应用。 在定时器、 事件监听器、
Ajax 请求、 跨窗口通信、 Web Workers 或者任何其他的异步（或者同步） 任务中， 只要使
用了回调函数， 实际上就是在使用闭包！

在模块中应用闭包
```javascript
function CoolModule() {
  var something = "cool";
  var another = [1, 2, 3];
  function doSomething() {
    console.log( something );
  }
  function doAnother() {
    console.log( another.join( " ! " ) );
  }
  // 模块暴露
  return {
    doSomething: doSomething,
    doAnother: doAnother
  };
}
var foo = CoolModule();
foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3
```
> 从模块中返回一个实际的对象并不是必须的， 也可以直接返回一个内部函
数。 jQuery 就是一个很好的例子。 jQuery 和 $ 标识符就是 jQuery 模块的公
共 API， 但它们本身都是函数（由于函数也是对象， 它们本身也可以拥有属
性）

#### 现代的模块机制
example:
```javascript
// 模块对象
var MyModules = (function Manager() {
  var modules = {};
  /**
   * @params{ name, deps, impl }
   * name 模块名
   * deps 依赖的模块
   * impl 实现回调
   * 
  */
  function define(name, deps, impl) {
    for (var i=0; i<deps.length; i++) {
      // 对依赖的子模块进行赋值
      deps[i] = modules[deps[i]];
    }
    // 传入 deps 子模块对象，在 接口函数中可以直接使用 
    modules[name] = impl.apply( impl, deps );
  }
  function get(name) {
    return modules[name];
  }
  return {
    define: define,
    get: get
  };
})();

// 先定义一个子模块
MyModules.define( "bar", [], function() {
  function hello(who) {
    return "Let me introduce: " + who;
  }
  return {
    hello: hello
  };
} );

// 定义的同时会依赖 一些子模块
MyModules.define( "foo", ["bar"], function(bar) {
  var hungry = "hippo";
  function awesome() {
    console.log( bar.hello( hungry ).toUpperCase() );
  }
  return {
    awesome: awesome
  };
} );
var bar = MyModules.get( "bar" );
var foo = MyModules.get( "foo" );
console.log(
bar.hello( "hippo" )
); // Let me introduce: hippo
foo.awesome(); // LET ME INTRODUCE: HIPPO
```
#### 未来的模块机制
> ES6 会将文件当作独立
的模块来处理。 每个模块都可以导入其他模块或特定的 API 成员， 同样也可以导出自己的
API 成员
bar.js
```javascript
function hello(who) {
  return "Let me introduce: " + who;
}
export hello;
```
foo.js
```javascript
// 仅从 "bar" 模块导入 hello()
import hello from "bar";
var hungry = "hippo";
function awesome() {
  console.log( hello( hungry ).toUpperCase() );
}
export awesome;
```
baz.js
```javascript
module foo from "foo";
module bar from "bar";
console.log(bar.hello( "rhino" )); // Let me introduce: rhino
foo.awesome(); // LET ME INTRODUCE: HIPPO
```

## 动态作用域
1. eval
2. with(已废弃)
3. this

# this和对象原型
## this
> 简单来说就是运行时的上下文环境
### 调用位置
> 函数在代码中被调用的位置
#### 默认绑定
> `this`指向全局对象，严格模式下`this` 会绑定都 `undefinded`
#### 隐式绑定
> 另一条需要考虑的规则是调用位置是否有上下文对象， 或者说是否被某个对象拥有或者包
含
```javascript
function foo() {
console.log( this.a );
}
var obj = {
  a: 2,
  foo: foo
};
obj.foo(); // 2
```
对象属性引用链中只有最顶层或者说最后一层会影响调用位置
```javascript
function foo() {
console.log( this.a );
}
var obj2 = {
  a: 42,
  foo: foo
};
var obj1 = {
  a: 2,
  obj2: obj2
};
obj1.obj2.foo(); // 42
```
* 隐式丢失
应用 默认绑定时 在严格模式下 会绑定到undefined，因而丢失绑定对象
#### 显式绑定
1. call(...)
2. apply(...)
>它们的第一个参数是一个对象， 它们会把这个对象绑定到 this， 接着在调用函数时指定这个 this。 因为你可以直接指定 this 的绑定对象， 因此我
们称之为显式绑定。
* 硬绑定
```javascript
function foo() {
  console.log( this.a );
}
var obj = {
  a:2
};
var bar = function() {
  foo.call( obj );
};
bar(); // 2
setTimeout( bar, 100 ); // 2
// 硬绑定的 bar 不可能再修改它的 this
bar.call( window ); // 2
```
> 由于硬绑定是一种非常常用的模式， 所以在 ES5 中提供了内置的方法 Function.prototype.
bind
3. bind
> bind(..) 会返回一个硬编码的新函数， 它会把参数设置为 this 的上下文并调用原始函数
```javascript
function foo(something) {
  console.log( this.a, something );
  return this.a + something;
}
var obj = {
  a:2
};
var bar = foo.bind( obj );
var b = bar( 3 ); // 2 3
console.log( b ); // 5
```
4. new绑定
```javascript
function foo(a) {
  this.a = a;
}
var bar = new foo(2);
console.log( bar.a ); // 2
```








