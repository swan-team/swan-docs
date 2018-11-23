---
title: 自定义组件
header: develop
nav: framework
sidebar: custom-component
---

开发者可以将页面内的功能模块抽象成自定义组件，在智能小程序的各个页面中进行使用，提升代码复用度，节省开发成本。


<div class="notice">解释： </div>一个自定义组件由 json swan css js 4个文件组成。要编写一个自定义组件，首先需要在 json 文件中进行自定义组件声明（在 json 文件中将 component 字段设为 true 可将这一组文件设为自定义组件）：

```js
{
  "component": true
}
```

同时，类似于页面开发。开发自定义组件，可以在 swan 文件中编写组件模板，在 css 文件中引入样式，它们的写法和页面的写法类似。

**<div class="notice">示例： </div>**

```xml
<!-- 自定义组件内部的模板 -->
<view class="name">
    {{name}}
</view>
```
```css
/* 自定义组件的css，样式只作用于该自定义组件 */
.name {
    color: red;
}
```

在自定义组件的 js 文件中，需要使用 Component() 来注册组件，并提供组件的属性定义、内部数据和自定义方法。

组件的属性值和内部数据将被用于组件 swan 模板的渲染，其中，属性是可以由组件外部传入的。

**<div class="notice">示例： </div>**

```js
Component({
    properties: {
        // 定义了name属性，可以在使用组件时，由外部传入。此变量可以直接在组件模板中使用
        name: {
            type: String,
            value: 'swan',
        }
    },
    data: {
        age: 1
    },
    methods: {
        tap: function(){}
    }
})
```

```xml
<!-- 自定义组件内部的模板 -->
<view class="name" bindtap="tap">
    {{name}}{{age}}
</view>
```

## 使用自定义组件

使用已注册的自定义组件前，首先要在页面的 json 文件中进行引用声明。此时需要提供每个自定义组件的标签名和对应的自定义组件文件路径：

**<div class="notice">示例： </div>**
```js
{
    "usingComponents": {
        "custom-component": "path/to/the/custom/component"
    }
}
```
这样，在页面的 swan 文件中，就可以像使用基础组件一样使用自定义组件。节点名即自定义组件的标签名，节点属性即传递给组件的属性值。

**<div class="notice">示例： </div>**
```xml
<view>
    <!-- 在页面中对自定义组件进行引用 -->
    <custom-component name="swanapp"></custom-component>
</view>
```
自定义组件的 swan 节点结构在与数据结合之后，将被插入到引用位置内。

**说明**:
* 自定义组件只能在`1.10.13`以上的 swan.js 中使用
