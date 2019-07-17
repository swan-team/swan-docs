---
title: 位置
header: develop
nav: api
sidebar: show_pagescrollto
---

## swan.pageScrollTo


**解释**：将页面滚动到目标位置（可以设置滚动动画时长）。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|scrollTop |Number | 是|  - | 滚动到页面的目标位置（单位 px） |
|duration |Number | 否| 300 | 滚动动画的时长，（单位 ms） |
|success |Function  |  否 |-| 接口调用成功的回调函数 | 
|fail  |  Function |   否  |-| 接口调用失败的回调函数|  
|complete   | Function  |  否 |-|  接口调用结束的回调函数（调用成功、失败都会执行）| 

**示例**：

<a href="swanide://fragment/84173982a61ebfce398d8958f4961b711557729973205" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <view>往下滑动</view>
    <button type="primary" bindtap="pageScrollTo">pageScrollTo</button>
</view>
```

* 在 js 文件中

```js
Page({
    pageScrollTo() {
        swan.pageScrollTo({
            scrollTop: 0,
            duration: 300,
            success: function (res) {
                console.log('pageScrollTo success', res);
            },
            fail: function (err) {
                console.log('pageScrollTo fail', err);
            }
        });
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}

.wrap button {
    margin-top: 1200rpx;
}
```