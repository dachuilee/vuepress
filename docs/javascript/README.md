# ES5
## 浏览器支持
[es5阅读参考](https://www.zhangxinxu.com/wordpress/2012/01/introducing-ecmascript-5-1/)

ie 9：支持es5(但不支持严格模式)
safari5.1：不支持bind
在旧的浏览器上兼容es5: 可以使用 `es5-shim`
## 严格模式
1. 变量必须申明
2. 对象字面量不能重复声明相同字段
3. 不能使用 with 等

## 处理json
老的浏览器可以使用：json2.js
* JSON.parse
```javascript
JSON.parse(文本格式json,function(key,value){
  // 可对value进行处理
  return value;
})
```
* JSON.stringify
```javascript
JSON.stringify({a:'对象值'},function(key,value){
  // 处理value,对数据进行过滤
  return value
})
```

## 变量提升
函数的提升 比变量的提升优先级高
```javascript
a();
function a(){  // 函数会被提升最前面
  alert("执行")
}
```

## this
谁调用this 就指向谁
```javascript
let a = 20;
let p = {
  a: 30,
  test:function(){
    alert(this.a);
  }
}
p.test();  // => 30
let s = p.test;
s(); // => 20

q = {
  a: 40,
  function test(){
    function fn(){
      alert(this.a)
    };
    fn();
  }

}
q.test() // fn 没有调用对象 默认为 宿主环境（window）

```

使用箭头函数时
```javascript

```

## 闭包
```javascript
function f1(){
  var n = 0;
  function f2(){
    n += 1;
    console.log(n);
  }
  return f2;
}
var result = f1(); // 不知道 result 什么时候会被调用 所以会把 函数内的局部变量保存起来
result(); // => 1
result(); // => 2
result = null // 清空内存
```

## 面向对象
### Object.creat
创建对象的原型副本
### Object.is
判断两个对象是否相等？