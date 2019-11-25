---
title: swan.canIUse
header: develop
nav: api
sidebar: swan-canIUse
---


**解释**： 判断智能小程序的API，回调，参数，组件等是否在当前版本可用。暂无法校验宿主扩展的API。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_canIuse.png"  class="demo-qrcode-image" />

**方法参数**： String schema

使用 `${API}.${method}.${param}.${options} `或者 `${component}.${attribute}.${option}` 方式来调用。

**`schema`参数说明**：

|参数  |说明 |
|---- | ---- |
|${API}  | API 名字 |
|${method} |  调用方式，有效值为return, success, object, callback   |
|${param} | 参数或者返回值  |
|${options} |参数的有效值   |
|${component} |   组件名字 |
|${attribute} | 组件属性 |
|${option}  |  组件属性的有效值 |


**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/canIUse.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/799d9f8fdf9d0303e24c486a48f52eb91574252240282" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="container">
    <view class="card-area">
        <view class="top-description border-bottom">view.hover-class</view>
        <button data-name="view.hover-class" type="primary" bindtap="bindCanIUse">canIUse</button>           
        <view style="height: .001rem"></view>
    </view>
    <view class="card-area">
        <view class="top-description border-bottom">scroll-view.scroll-x</view>
        <button data-name="scroll-view.scroll-x" type="primary" bindtap="bindCanIUse">canIUse</button>         
        <view style="height: .001rem"></view>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    bindCanIUse(e) {
        let canIuseResult = swan.canIUse(e.currentTarget.dataset.name);
        swan.showToast({
            title: JSON.stringify(canIuseResult),
            icon: 'none'
        });
    }
});
```
