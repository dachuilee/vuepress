# ES5
## 变量提升
函数的提升 比变量的提升优先级高
```
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
