---
title: 数据绑定
header: develop
nav: framework
sidebar: view_data
---

SWAN 模板中的动态数据，都从逻辑层 Page 中 data 对象来。

### 基础数据绑定
数据绑定和许多模板引擎一样，数据包裹在双大括号里面。
双向绑定的数据需包裹在`{=  =}`中。

**例如**：
组件 <a href="/develop/component/view_scroll-view//">scroll-view</a> 中，scroll-top 和 scroll-left的使用方法分别为：
* `scroll-top="{= scrollTop =}"`
* `scroll-left="{= scrollLeft =}"`

### 渲染内容

**示例代码**

```xml
<!-- data-demo.swan -->
<view>
    Hello My {{ name }}
</view>

<!-- 被渲染成: Hello My SWAN App -->
```

```javascript
// data-demo.js
Page({
    data: {
        name: 'SWAN App'
    }
});
```

### 属性绑定

**示例代码**

```xml
<!-- attr-demo.swan -->
<view class="c-{{className}}">属性绑定</view>
```

```javascript
// attr-demo.js
Page({
    data: {
        className: 'blue'
    }
});
```

### 控制属性

**注:** 属性不需要被双大括号包裹

**示例代码**

```xml
<!-- condition-demo.swan -->
<view s-if="flag">如果为flag为true，你看得到我。</view>
```

```javascript
// condition-demo.js
Page({
    data: {
        flag: true
    }
});
```

### 运算
SWAN 模板 提供了丰富的表达式类型支持，让使用者在编写视图模板时更方便。
- 数据访问(普通变量、属性访问)
- 一元否定
- 二元运算
- 二元关系
- 三元条件
- 括号
- 字符串
- 数值
- 布尔

通过下面例子列举支持的表达式类型。
```xml
<!-- operation-demo.swan -->

<!-- 普通变量 -->
<text>{{name}}</text>

<!-- 属性访问 -->
<text>{{person.name}}</text>
<text>{{persons[1]}}</text>

<!-- 一元否定 -->
<text>{{!isOK}}</text>
<text>{{!!isOK}}</text>

<!-- 二元运算 -->
<text>{{num1 + num2}}</text>
<text>{{num1 - num2}}</text>
<text>{{num1 * num2}}</text>
<text>{{num1 / num2}}</text>
<text>{{num1 + num2 * num3}}</text>

<!-- 二元关系 -->
<text>{{num1 > num2}}</text>
<text>{{num1 !== num2}}</text>

<!-- 三元条件 -->
<text>{{num1 > num2 ? num1 : num2}}</text>

<!-- 括号 -->
<text>{{a * (b + c)}}</text>

<!-- 数值 -->
<text>{{num1 + 200}}</text>

<!-- 字符串 + 三元条件 -->
<text>{{item ? ',' + item : ''}}</text>

<!-- 三元运算 -->
<checkbox checked="{{flag ? true : false}}"></checkbox>

<!-- 数组字面量 -->
<text>{{ ['john', 'tony', 'lbj'] }}</text>

```
<br />

#### 对象字面量(对象字面量是三个大括号包裹)

**注:** 对象字面量支持了在模板里重组对象以及使用扩展运算符 ... 来展开对象。

**示例代码**

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
