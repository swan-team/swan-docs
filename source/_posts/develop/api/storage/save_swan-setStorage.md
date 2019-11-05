---
title: swan.setStorage
header: develop
nav: api
sidebar:  save_swan-setStorage
---



**解释**：将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容。主动删除历史小程序，卸载手百，或在系统中清除百度app的缓存即可清除数据。目前单个 key 允许存储的最大数据长度无限制，没有自动清理存储机制。storage 上限 10MB，用户需主动清理，期间数据一直可用。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/storage.png"  class="demo-qrcode-image" />

**方法参数**： Object object 

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|key|String|是||本地缓存中的指定的 key|
|data  |  Object/String/Number/Array  | 是  | | 需要存储的内容|
|success| Function |   否 | |  接口调用成功的回调函数|
|fail  |  Function |   否  | |接口调用失败的回调函数|
|complete   | Function   | 否 | |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：
<a href="swanide://fragment/b030af90ec924e5ee3934fa2aeccb8e91569427287486" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中
```js
swan.setStorage({
    key: 'xxx',
    data: 'xxx',
    success: res => {
        console.log('setStorage success', res);
    },
    fail: err => {
        console.log('setStorage err', err);
    }
});
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
|202|解析失败，请检查参数是否正确      |
|1003|超过最大存储文件大小| 

