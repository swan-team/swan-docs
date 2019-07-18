---
title: 视图层
header: develop
nav: framework
sidebar: view
---
介绍
-----
框架的视图层由 模板语法 与 CSS 规范 编写，由组件来进行展示。
将逻辑层的数据渲染到视图层，同时将视图层的事件传递给逻辑层。
视图层 SWAN 用来描述 XML 的结构。
CSS 用来描述样式。
组件是视图的基本单位，是独立的数据、逻辑、视图的封装单元。

SWAN 模板语法
-----


### 起步

SWAN 是框架设计的一套标签语言，由[组件](../../component/view)、[事件处理](#事件处理)系统构成的一套页面结构。
下面一些简单的例子来说明 SWAN 模板 的简单用法。

<div class="notice">[数据绑定](#数据绑定)</div>

```xml
<!-- data-demo.swan-->
<view>Hello, {{name}}</view>
```

```javascript
// data-demo.js
Page({
    data: {
        name: 'SWAN'
    }
});

```

<div class="notice">[循环](#循环)</div>

```xml
<!-- for-demo.swan-->
<view>
    <view s-for="p,index in persons">
        {{index}}: {{p.name}}
    </view>
</view>
```
```javascript
// for-demo.js
Page({
    data: {
        persons: [
            {name: 'Curry'},
            {name: 'Thompson'},
            {name: 'Durant'},
            {name: 'Green'},
            {name: 'Cousins'}
        ]
    }
});
```

<div class="notice">[条件](#条件)</div>

```xml
<!-- if-demo.swan-->
<view s-if="is4G">4G</view>
<view s-elif="isWifi">Wifi</view>
<view s-else>Other</view>
```
```javascript
// if-demo.js
Page({
    data: {
        is4G: true,
        isWifi: false
    }
});
```

<div class="notice">[模板](#模板)</div>

```xml
<!-- template-demo.swan-->
<template name="tag-card">
    <view>
        <text>标签: {{tag}}</text>
        <text>昵称: {{nickname}}</text>
    </view>
</template>

<template name="person-card">
    <view>
        <text>位置: {{pos}}</text>
        <text>姓名: {{name}}</text>
    </view>
</template>

<template name="team-card">
    <view s-for="item, index in teams">
        <text>球队: {{index}} - {{item}}</text>
    </view>
</template>

<template name="age-card">
    <view>
        <text>年龄: {{age}}</text>
    </view>
</template>

<template is="person-card" data="{{person}}" />
<!-- 对象字面量 -->
<template is="team-card" data="{{ {teams} }}" />
<template is="tag-card" data="{{ {tag, nickname: 'king'} }}" />
<template is="age-card" data="{{ {...person} }}" />

```
```javascript
// template-demo.js
Page({
    data: {
        person: {name: 'Lebron James', pos: 'SF', age: 33},
        teams: ['Cleveland Cavaliers', 'Miami Heat', 'Los Angeles Lakers'],
        tag: 'basketball'
    }
});
```

** 说明:  **
本节中“template name”字段后仅支持小写字母与中划线“-”的组合。

<div class="notice">[事件处理](#事件处理)</div>


```xml
<!-- event-demo.swan-->
<view class="view-more" bindtap="loadMore">
    点击加载更多
</view>
```

```javascript
// event-demo.js
Page({
    data: {
        firstScreen: true
    },
    loadMore: function () {
        console.log('加载更多被点击');
    }
});
```
具体更详细的用法请看下面的章节：
<div class="notice">[数据绑定](#数据绑定)</div>、<div class="notice">[循环](#循环)</div>、<div class="notice">[条件](#条件)</div>、<div class="notice">[模板](#模板)</div>、<div class="notice">[事件处理](#事件处理)</div>、<div class="notice">[引用](#引用)</div>

<br />



组件
----
SWAN 框架为开发者提供了一系列组件，可以让开发者基于这些基础组件快速开发。
详情请见[组件文档](../../component/componentlist)
