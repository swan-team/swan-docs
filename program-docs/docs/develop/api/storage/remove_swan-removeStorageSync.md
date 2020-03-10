---
title: swan.removeStorageSync
header: develop
nav: api
sidebar: remove_swan-removeStorageSync
# webUrl: https://qft12m.smartapps.cn/swan-api/storage/storage
---


 

**解释**：从本地缓存中同步移除指定 key。

 
## 方法参数

String key

 `key`参数说明 ：本地缓存中的指定的 key。

## 示例

<a href="swanide://fragment/457e9f6aa1354c2a1a313c52a9f2b9fc1577107724856" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_removeStorage.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 
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
 

### 代码示例 





* 在 js 文件中

```js
let res = swan.removeStorageSync('key');
// 基础库 3.140.1 之前，无法判断接口是否调用失败
// 基础库 3.140.1 及以后，通过 instanceof 来判断接口是否调用失败
if (!(res instanceof Error)) {
    console.log('removeStorageSync success');
}
else {
    console.log('removeStorageSync fail', res.message);
}
```


## 错误码

### Android

|错误码|说明|
|:--|:--|
|201|解析失败，请检查调起协议是否合法|
|1001|执行失败|

### iOS

|错误码|说明|
|:--|:--|
|202|解析失败，请检查参数是否正确|

## Bug & Tip 

* 基础库 3.140.1 之前，无法判断接口是否调用失败。
* 基础库 3.140.1 及以后，接口调用失败时会返回一个标准的`Error`对象，可通过`instanceof`来判断接口是否调用失败。
