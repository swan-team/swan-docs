---
title: swan.clearStorage
header: develop
nav: api
sidebar: remove_swan-clearStorage
---



**解释**:清理本地数据缓存。  

 
## 方法参数

Object object

### `object`参数说明 

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|success |Function  |  否  | |  接口调用成功的回调函数|
|fail |   Function  |  否  | | 接口调用失败的回调函数|
|complete  |  Function  |  否  | |  接口调用结束的回调函数（调用成功、失败都会执行）|

## 示例

<a href="swanide://fragment/88f608adafa373cc2e4d379a95fc140e1573634432911" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a> 

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_clearStorage.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 

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

### 代码示例 



* 在 js 文件中

```js
Page({
    clearStorage() {
        swan.clearStorage({
            success: res => {
                console.log('clearStorage success', res);
            },
            fail: err => {
                console.log('clearStorage fail', err);
            }
        })
    }
});
```
## 错误码
### Android

|错误码|说明|
|:--|:--|
|1001|执行失败   |

### iOS

|错误码|说明|
|:--|:--|
|401|安全校验失败   |
