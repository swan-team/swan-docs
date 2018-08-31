---
title: 条件
header: develop
nav: framework
sidebar: view_if
---
### s-if
通过 s-if 指令我们可以实现以下操作：
<p> **·** 为元素指定条件:当条件成立时元素可见，当条件不成立时元素不存在。
<p> **·** 为 s-if 增加一个额外条件分支块。
<p> **·** 为 s-if 增加一个不满足条件的分支块。s-else 指令没有值。
<p> **·** s-if 与 s-for 不可在同一标签下同时使用。
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

#### block s-if
block 虚拟组件，在渲染时不会包含自身，只会渲染其内容。可以用来渲染一组组件或者标签。

```xml
<!-- if-demo.swan-->
<block s-if="flag">
  <view> name </view>
  <view> age </view>
</block>
```
