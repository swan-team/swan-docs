---
title:  esnext
header: develop
nav: framework
sidebar: sjs_esnext
---


SJS 支持部分 ES6 语法。

## let & const

**示例代码：**
<a href="swanide://fragment/8e6dcb8d117f38f972352293c3eed5921571224893177" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// demo.sjs
function foo(){
    let str = 'hello sjs';
    if (true) {
        let count = 2;
    }
    console.log(str); // hello sjs
    console.log(count); // 引用错误：count 未定义
}
```

## 箭头函数

**示例代码：**
<a href="swanide://fragment/9a6a2cf7b615ee479a836561c75072781571225314434" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// demo.sjs
const arr = [1, 2, 3];
const double = x => x * 2;
console.log(arr.map(double)); // output: [2, 4, 6]

var obj = {
    birth: 1970,
    getAge() {
        const b = this.birth;
        const fn = () => new Date().getFullYear() - this.birth;
        return fn();
    }
};
obj.getAge();
```

## 更简洁的对象字面量（enhanced object literal）

**示例代码：**
<a href="swanide://fragment/884fffdf5524cc52bee2932baf3ba1141571225508817" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
var num = 1;
var obj = {
    num, // 对象属性
    printNum() { // 对象方法
	console.log(num);
    }
};
obj.printNum(); // 1
```

**注：** 不支持`super`关键字，不能在对象方法中使用`super`

## 模板字符串（template string）

```js
const NAME = 'sjs';
const msg = `hello ${NAME}`; // hello sjs
```

## 解构赋值（Destructuring）

**示例代码：**
<a href="swanide://fragment/2837f75b9ce8e6833ec85067d19f48181571225677949" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// array 解构赋值
var [a, ,b] = [1, 2, 3];
a === 1; // true
b === 3; // true

// 对象解构赋值
let { foo , bar } = { foo: 'aaa', bar: 'bbb' };
// foo = 'aaa'
// bar = 'bbb'

// 函数参数解构赋值
// 1.参数是一组有次序的值
function f1([x, y, z]) {
    console.log(x); // 1
    console.log(y); // 2
    console.log(z); // 3
}
f1([1, 2, 3]);

// 2.参数是一组无次序的值
function f2({x, y, z}) {
    console.log(x); // 1
    console.log(y); // 2
    console.log(z); // 3
}
f2({z: 3, y: 2, x: 1});

// 解构赋值默认值
var [a = 1] = [];
a === 1; // true

// 函数参数：解构赋值 + 默认值
function r({a, b, c = 3, d = 4}) {
    return a + b + c + d;
}
r({a: 1, b: 2}) === 10; // true
```

## Default + Rest + Spread

**示例代码：**
<a href="swanide://fragment/fa852e72c0cea30c95ec1fadd55732e81571225929605" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// 1. Default
function f1(x, y = 2) {
    // 如果不给y传值，或者传值为undefied，则y的值为12
    return x + y;
}
f1(1) === 3; // true

// 2. Rest
function f2(x, ...arr) {
    return x * arr.length;
}
f2(3, 'hello', 'sjs') === 6; // true

// 3. Spread
function f3(x, y, z) {
    return x + y + z;
}
f3(...[1,2,3]) == 6; // 数组解构

// 4. Rest + Spread
const [a, ...b] = [1, 2, 3]; // 数组解构赋值, b = [2, 3]
const {c, ...other} = {c: 1, d: 2, e: 3}; // 对象解构赋值, other = {d: 2, e: 3}
const f = {...other}; // 对象解构 f = {d: 2, e: 3}
```
