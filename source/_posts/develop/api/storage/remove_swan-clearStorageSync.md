---
title: swan.clearStorageSync
header: develop
nav: api
sidebar: remove_swan-clearStorageSync
---

 
**解释**：同步清理本地数据缓存。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/storage.png"  class="demo-qrcode-image" />

**方法参数**：无

**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/clearStorage.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**
<a href="swanide://fragment/8d3202850ec637cd1e9c7b49c28043f21576040605606" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
let res = swan.clearStorageSync();

// 基础库 3.130.1 之前，通过返回的原生对象中是否有 errCode 和 errMsg 来判断接口是否调用失败
// 基础库 3.130.1 及以后，通过 instanceof 来判断接口是否调用失败
if (!res.errCode || !res.errMsg && !(res instanceof Error)) {
    console.log('clearStorageSync success', res);
}
else {
    console.log('clearStorageSync fail', res.errMsg || res.message);
}
```

#### 错误码
* Andriod

|错误码|说明|
|--|--|
|1001|执行失败|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确|

**Bug & Tip**

* 基础库 3.130.1 之前，接口调用失败时会返回一个包含`errCode`和`errMsg`的原生对象，可通过判断`errCode`和`errMsg`来判断接口是否调用失败，详见上述错误码。
* 基础库 3.130.1 及以后，接口调用失败时会返回一个标准的`Error`对象，可通过`instanceof`来判断接口是否调用失败。