---
title: swan.pageScrollTo
header: develop
nav: api
sidebar: pagescrollto_swan-pageScrollTo
# webUrl: https://qft12m.smartapps.cn/subPackages/apiPackage/pages/pageScrollTo/pageScrollTo
---

 

**解释**：将页面滚动到目标位置（可以设置滚动动画时长）。
 
## 方法参数 

Object object

###  `object`参数说明 

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|scrollTop |Number | 是| | 滚动到页面的目标位置（单位 px） |
|duration |Number | 否| 300 | 滚动动画的时长，（单位 ms） |
|success |Function  |  否 | | 接口调用成功的回调函数 | 
|fail  |  Function |   否  | | 接口调用失败的回调函数|  
|complete   | Function  |  否 | |  接口调用结束的回调函数（调用成功、失败都会执行）| 
## 示例

 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_PageScrollTo.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

 
###  代码示例1 - 页面滚动到顶部  

<a href="swanide://fragment/25ef2f9fbdaaa9271329c02d7dafe8cc1575223153548" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="container">
  <image class="image" src="https://b.bdstatic.com/miniapp/images/longImage.png"></image>
   <view class="swan-security-padding-bottom flex-button">
        <button type="primary" bindtap="scrollToTop">返回顶部</button>
    </view>
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

###  代码示例2 - 页面滚动到底部  

<a href="swanide://fragment/0e4af77bf4d678bb744766e5faca641b1575223056610" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="container">
  <image class="image" src="https://b.bdstatic.com/miniapp/images/longImage.png"></image>
   <view class="swan-security-padding-bottom flex-button">
        <button type="primary" bindtap="scrollToBottom">滚动到页面底部</button>
    </view>
</view>
```

* 在 js 文件中

```js

Page({
    scrollToBottom(){
        swan.createSelectorQuery()
        .select(".image")
        .boundingClientRect(function(rect) {
            swan.pageScrollTo({
                scrollTop: rect.bottom,
                duration: 300,
                success: res => {
                    console.log('pageScrollTo success', res);
                },
                fail: err => {
                    console.log('pageScrollTo fail', err);
                }
            });
        })
        .exec();
    }
});

```
##  错误码

###  Android

|错误码|说明|
|:--|:--|
|202|解析失败，请检查参数是否正确      |
|1001|执行失败|

###  iOS

|错误码|说明|
|:--|:--|
|202|解析失败，请检查参数是否正确      |
                                    
