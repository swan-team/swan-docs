---
title: 引用
header: develop
nav: framework
sidebar: view_quote
---
SWAN 可以通过`import`和`include`来引用文件。

## import
通过`import`和`template`配合使用，可以将代码分离以及复用。

```xml
<!-- personCard.swan-->
<template name="person-card">
    <view>
        <text>位置: {{pos}}</text>
        <text>姓名: {{name}}</text>
    </view>
</template>

```
在`personCard.swan`里定义了一个模板，在`index.swan`里引用文件，并使用它的模板。
```xml
<!-- index.swan-->
<import src="./person-card.swan" />
<template is="person-card" data="{{person}}" />

```

## include
通过`include`可以将目标模板，整个(除了 template)引入到当前的位置，相当于`inline`。

```xml
<!-- detail.swan-->
<include src="header.swan" />
<view class="detail">body</view>

```

```xml
<!-- header.swan-->
<view class="header">header</view>

```
<br />
 
include 可以将目标文件除了 `<template/> `外的整个代码引入，相当于是拷贝到 include 位置，如：

```xml
<!-- index.swan -->
<include src="header.swan"/>
<view> body </view>
<include src="footer.swan"/>
```
```xml
<!-- header.swan -->
<view> header </view>
```
```xml
<!-- footer.swan -->
<view> footer </view>
```




