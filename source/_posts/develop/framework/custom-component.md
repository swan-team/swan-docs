---
title: 自定义组件
header: develop
nav: framework
sidebar: custom-component
---

开发者可以将页面内的功能模块抽象成自定义组件，在智能小程序的各个页面中进行使用，提升代码复用度，节省开发成本。


<div class="notice">解释： </div>一个自定义组件由4个文件 (.swan .css .js .json) 组成, 例如包含自定义组件 `custom` 的项目结构:

```
// 包含自定义组件custom的项目结构
├── app.js
├── app.json
├── project.swan.json
└── components
    └── custom
        ├── custom.swan
        ├── custom.css
        ├── custom.js
        └── custom.json
```

要编写一个自定义组件，首先需要在 json 文件中进行自定义组件声明（在 json 文件中将 component 字段设为 true 可将这一组文件设为自定义组件）：

```js
// 自定义组件配置 (custom.json)
{
    "component": true
}
```

同时，类似于页面开发。开发自定义组件，可以在 swan 文件中编写组件模板，在 css 文件中引入样式，它们的写法和页面的写法类似。

**代码示例**

```xml
<!-- 自定义组件内部的模板 (custom.swan) -->
<view class="name">
    {{name}}
</view>
```
```css
/* 自定义组件的css，在该自定义组件内部生效 (custom.css) */
.name {
    color: red;
}
```

在自定义组件的 js 文件中，需要使用 Component() 来注册组件，并提供组件的属性定义、内部数据和自定义方法。

组件的属性值和内部数据将被用于组件 swan 模板的渲染，其中，属性是可以由组件外部传入的。

**代码示例**
<a href="swanide://fragment/c851a80326f0155bc18f1461f0fabdea1545207439099" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


```js
// 自定义组件逻辑 (custom.js)
Component({
    properties: {
        // 定义了name属性，可以在使用组件时，由外部传入。此变量可以直接在组件模板中使用
        name: {
            type: String,
            value: 'swan',
        }
    },
    data: {
        // 这里是一些组件内部数据
        age: 1
    },
    methods: {
        // 这里是一个自定义方法
        tap: function(){}
    }
})
```

```xml
<!-- 自定义组件内部的模板 (custom.swan) -->
<view class="name" bindtap="tap">
    {{name}}{{age}}
</view>
```

## 使用自定义组件

使用已注册的自定义组件前，首先要在页面的 json 文件中进行引用声明。除了在页面使用自定义组件，你还可以在自定义组件引用自定义组件，类似于页面引用自定义组件。
以下举例页面级（pages/home/home）的使用场景:

```
// 项目目录结构
├── app.js
├── app.json
├── project.config.json
└──  pages
    └── home
        ├── home.swan
        ├── home.css
        ├── home.js
        └── home.json
└── components
    └── custom
        ├── custom.swan
        ├── custom.css
        ├── custom.js
        └── custom.json
```

首先需要提供每个自定义组件的标签名与其对应的自定义组件文件路径。

**提示:**
1.自定义组件文件路径: 自定义组件swan、css、js、json文件所在路径 + 该类文件的basename, 例如以上项目目录结构，该路径即是`/components/custom/custom`；
2.创建自定义组件，推荐内层的文件(swan、css、js、json)与其自定义组件目录保持同名。

**代码示例**
```js
// 页面json配置 home.json
{
    "usingComponents": {
        "custom": "/components/custom/custom"
    }
}
```
这样，在页面的 swan 文件中，就可以像使用基础组件一样使用自定义组件。节点名即自定义组件的标签名，节点属性即传递给组件的属性值。

**代码示例**
```xml
<!-- 页面模板 (home.swan) -->
<view>
    <!-- 在页面中对自定义组件进行引用 -->
    <custom name="swanapp"></custom>
</view>
```
自定义组件的 swan 节点结构在与数据结合之后，将被插入到引用位置内。

**说明**:
* 自定义组件只能在`1.10.13`以上的 swan.js 中使用；
* 同一页面引用的自定义组件，不同路径的自定义组件暂时不能使用相同的自定义组件名字；
* 在页面级的配置（json文件）中不能添加 `"component": true`，因为将page当做自定义组件使用是不允许的；
* 对于自定义组件中的资源引用路径，使用相对路径目前针对的是自定义组件SWAN文件所对应的目录层级，故暂时推荐使用绝对路径。
