---
title: swan.pageScrollTo
header: develop
nav: api
sidebar: pagescrollto_swan-pageScrollTo
---

 

**解释**：将页面滚动到目标位置（可以设置滚动动画时长）。

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|scrollTop |Number | 是| | 滚动到页面的目标位置（单位 px） |
|duration |Number | 否| 300 | 滚动动画的时长，（单位 ms） |
|success |Function  |  否 | | 接口调用成功的回调函数 | 
|fail  |  Function |   否  | | 接口调用失败的回调函数|  
|complete   | Function  |  否 | |  接口调用结束的回调函数（调用成功、失败都会执行）| 

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/pageScrollTo.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/1da0995c33ce55aaee91c780b076e1991569491978009" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <image class="image" src="https://b.bdstatic.com/miniapp/images/longImage.png"></image>
    <button type="primary" bindtap="scrollToTop">返回图片顶部</button>
</view>

```

* 在 js 文件中

```js
Page({
    scrollToTop() {
        swan.pageScrollTo({
            scrollTop: 0,
            duration: 300,
            success: res => {
                console.log('pageScrollTo success', res);
            },
            fail: err => {
                console.log('pageScrollTo fail', err);
            }
        });
    }
});
```
#### 错误码

* Andriod

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |
|1001|执行失败|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |
                                    
