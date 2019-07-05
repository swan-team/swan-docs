# 基础组件

组件是小程序的基本组成部分，是独立的视图封装单元。小程序框架为开发者提供了一系列基础组件，方便开发者能够快速搭建出页面结构。详细介绍请参考<a href="https://smartprogram.baidu.com/docs/develop/component/componetlist/" target="_blank">组件文档</a>

一个基础组件通常包括 开始标签 和 闭合标签，属性用来使组件进行不同状态的展示，内容在两个标签之间。

```xml
    <button type="primary" bind:tap="clickBtn">按钮组件</button>
```

### 属性类型

|类型 |描述 |注释 |
|---- |---- |---- |
|String |字符串 |"string" |
|Array |数组 |['value1', 'value2'] |
|Object |对象 |{key: value} |
|Boolean  |布尔值 |true/false |
|Number |数字 |1， 0.5|
|EventHandler |事件处理函数 |Page中对相应交互操作进行响应的函数 |
|Any |任意属性 |任意一种类型都可以  |


### 公共属性

小程序提供的所有组件都具有以下属性：

|属性名 |类型 |描述 |注释 |
|---- |---- |---- |---- |
|id |String |组件的唯一标识 |保证页面唯一 |
|class |String |组件的样式 |在css文件中定义组件的样式 |
|style |String |组件的内联样式 |与HTML元素的内联样式用法一致  |
|hidden |Boolean |组件是否显示 |所有组件默认显示 |
|data-* |Any |自定义属性|组件上触发事件时，会发送给事件处理函数，详见事件系统 |
|bind / catch |EventHandler |组件事件函数 |详见事件系统 |

### 自定义属性

每一个组件基本上都会有各自的自定义属性，可以对组件的样式或者功能进行自定义设置，详细请参考<a href="https://smartprogram.baidu.com/docs/develop/component/componetlist/" target="_blank">组件文档</a>




