---
title: swan.loadSubPackage
header: develop
nav: api
sidebar: swan-loadSubPackage
---

 

**解释**：提前下载好子包的资源，目录结构配置参考[分包加载](https://smartprogram.baidu.com/docs/develop/framework/subpackages/)。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_loadSubPackage.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|root | String | 是 | | 要下载的子包的root |
|success | Function |  否  | | 接口调用成功的回调函数|
|fail   | Function  |  否  | | 接口调用失败的回调函数|
|complete  |  Function  |  否 | |  接口调用结束的回调函数（调用成功、失败都会执行）|

**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/loadSubPackage.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**

<a href="swanide://fragment/0708301e164b80b42155a0313ad9bb3e1573614983911" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="loadSubPackage">loadSubPackage</button>
</view>
```

* 在 js 文件中

```js
Page({
    loadSubPackage() {
        swan.loadSubPackage({
            root: 'packageA/pages',
            success: res => {
                console.log('loadSubPackage success', res);
            },
            fail: err => {
                console.log('loadSubPackage fail', err);
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
```

#### 错误码

* Android

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |
|1001|执行失败|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |
|1001|预加载子包失败|