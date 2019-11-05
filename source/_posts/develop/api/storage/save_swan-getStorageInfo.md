---
title: swan.getStorageInfo
header: develop
nav: api
sidebar:  save_swan-getStorageInfo
---


 


**解释**：异步获取当前 storage 的相关信息。

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success |Function |   否  | | 接口调用成功的回调函数，详见返回参数说明。|
|fail  |  Function  |  否  | | 接口调用失败的回调函数|
|complete |   Function |   否 | |   接口调用结束的回调函数（调用成功、失败都会执行）|


**success返回参数说明**：

|参数 | 类型 | 说明|
|---- | ---- | ---- |
|keys  |  `Array.<string>` |   当前 storage 中所有的 key。|
|currentSize | Number | 当前占用的空间大小, 单位 KB。|
|limitSize |  Number |  限制的空间大小，单位 KB。|  



**示例**：

<a href="swanide://fragment/b030af90ec924e5ee3934fa2aeccb8e91569427287486" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
swan.getStorageInfo({
    success: res => {
        console.log('getStorageInfo success', res);
    },
    fail: err => {
        console.log('getStorageInfo fail', err);
    }
});
```



#### 错误码
* Andriod

|错误码|说明|
|--|--|
|1001|执行失败    |
 

