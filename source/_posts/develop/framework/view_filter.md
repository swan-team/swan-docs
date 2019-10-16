---
title: Filter 过滤器
header: develop
nav: framework
sidebar: view_filter
---

Filter 是小程序的过滤器，结合 SWAN 模版，可以构建出页面的结构。

> 推荐使用 [SJS功能](https://smartprogram.baidu.com/docs/develop/framework/sjs_start/)

### 说明：
* Filter 文件命名方式为:模块名.filter.js;
* Filter 通过 export default 方式对外暴露其内部的私有函数;
* Filter 只能导出function函数;
* Filter 函数不能作为组件的事件回调;
* Filter 可以创建独立得模块，也可以通过内联的形式;
* Filter 不支持全局变量;
* 多个 filter 标签不能出现相同的 src 属性值， module 属性的值也是标识模块的唯一 id 。<br>


### Filter模块

filter代码有两种编写方式:
- 可以编写在 swan 文件中的`<filter></filter>`标签内，直接在该swan文件中通过`module.fn`的形式进行方法调用，例如`示例代码1`；
- 可以编写在以 .filter.js 为后缀名的文件内，在其它swan文件中通过`filter`标签的src进行引入，例如`示例代码2`。

每一个 .filter.js 文件和`<filter></filter>`标签都是一个单独的模块。每个模块都有自己独立的作用域。即在一个模块里面定义的变量与函数，默认为私有的，对其他模块不可见。

### filter标签

标签可以是双闭合 `<filter></filter>` 或者单闭合 `<filter/>`，带有src属性的标签，过滤器代码要写到相应的文件里，不带有src属性的标签，过滤器代码写在标签内。

|属性名|	类型|	说明|
|----|----|----|
|src	|String	|	引用 .filter.js 文件的相对路径。|
|module	|String	|	当前`<filter></filter>`标签的模块名,必填字段。|

### filter逻辑代码

filter逻辑代码使用`export default`的形式导出封装的一系列方法。

**示例代码**
```js
export default {
    Foo: () => {
        return 'swan-foo-filter';
    },
    Bar: () => {
        return 'swan-bar-filter';
    }
}
```

### filter内联渲染

**示例代码1**

```xml
<!-- swan -->
<view> {{swan.message()}} </view>
<filter module="swan">
    export default {
        message: function() {
            return 'Hello world';
        }
    }
</filter>

```

**页面输出：**
```
Hello world
```

### 数据处理示例

**示例代码2**
<a href="swanide://fragment/7c72741b7676220c98761ad11107da481560741101294" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// index.js
Page({
  data: {
    array: [1, 3, 6, 8, 2, 0]
  }
});
```
```js
// index.filter.js
export default {
    maxin: arr => {
        var max = undefined;
        for (var i = 0; i < arr.length; ++i) {
            max = max === undefined ?
            arr[i] :
            (max >= arr[i] ? max : arr[i]);
        }
        return max;
    }
};
```
```xml
<!-- swan模版 -->
<view>{{swan.maxin(array)}}</view>
<filter src="./index.filter.js" module="swan"></filter>

```

**页面输出：**
```
8
```

### 注释

Filter 的注释与swan模版文件的注释方式相同。

**示例代码**

```xml
<!-- <filter module="swan">
    function Foo() {
        return 'programer';
    }

    export default {
        test: Foo
    };
</filter> -->
```

### 运算符&语句&数据类型&基础类库

Filter支持javascript所有运算符、语句、数据类型和基础类库。
