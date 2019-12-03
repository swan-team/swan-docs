---
title: 引用
header: develop
nav: framework
sidebar: view_quote
---
SWAN 可以通过`import`和`include`来引用模板文件。

## import
通过`import`和`template`配合使用，可以将代码分离以及复用。

**代码示例** 
<a href="swanide://fragment/7877d4d677e59f56fc8986baadc1f0151560740060734" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

- 首先，在`person-card.swan`中定义了一个叫`person-card`的`template`：

```xml
<!-- person-card.swan-->
<template name="person-card">
    <view>
        <text>位置: {{pos}}</text>
        <text>姓名: {{name}}</text>
    </view>
</template>
```
- 然后，在`index.swan`里引用文件`person-card.swan`，并使用它的模板：

```xml
<!-- index.swan-->
<import src="./person-card.swan" />
<template is="person-card" data="{{person}}" />
```

```js
// index.js
Page({
    data: {
        person: {
            pos: 'Baidu',
            name: 'SWAN'
        }
    }
});
```

## include
通过`include`可以将目标模板整个(除了 template)引入到当前的位置，相当于`inline`。

**代码示例** 
<a href="swanide://fragment/079d4ff72c324d30cce884f42f06d2e41560741170023" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```xml
<!-- index.swan-->
<include src="header.swan" />
<view class="index">body</view>

```

```xml
<!-- header.swan-->
<view class="header">header</view>

```
<br />
 
include 可以将目标文件除了 `<template/> `外的整个代码引入，相当于是拷贝到 include 位置，如：

**代码示例** 
<a href="swanide://fragment/c90964e07af04a2995b8bef2646795d61560741223711" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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




