---
title: swan.removeStorageSync
header: develop
nav: api
sidebar: remove_swan-removeStorageSync
---


 

**解释**：从本地缓存中同步移除指定 key。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_removeStorage.png"  class="demo-qrcode-image" />

**方法参数**：String key

**`key`参数说明**：本地缓存中的指定的 key。


**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/removekey.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**


<a href="swanide://fragment/fdb596bbf3dc4eb3aef72230ab6b9bfc1573635261030" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
removeStorageSync() {
    try {
        swan.removeStorageSync('xxx');
        console.log('removeStorageSync success');
    } catch (err) {
        console.log('removeStorageSync fail', err);
    }
}

```


#### 错误码

* Andriod

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法|
|1001|执行失败|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确|

**Bug & Tip**

* 基础库 3.130.1 之前，入参错误时会返回一个`Error`对象，接口调用失败时会返回一个对象，对象中包含`errCode`和`errMsg`，详见上述错误码。
* 基础库 3.130.1 及以后，入参错误和接口调用失败时都会返回一个`Error`对象。