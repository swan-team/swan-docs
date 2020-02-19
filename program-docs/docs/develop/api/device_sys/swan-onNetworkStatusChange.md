---
title: swan.onNetworkStatusChange
header: develop
nav: api
sidebar:  swan-onNetworkStatusChange
# webUrl: https://qft12m.smartapps.cn/subPackages/apiPackage/pages/onNetworkStatusChange/onNetworkStatusChange
---
 

> 工具和真机中的实现有区别，详见[API 实现差异](https://smartprogram.baidu.com/docs/develop/devtools/diff/)

**解释**：监听网络状态变化。

 

## 方法参数 

Function callback

### `callback`参数说明  

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|isConnected |Boolean |是| |当前是否有网络连接|
|networkType| String |是| | 网络类型|

### networkType 有效值 

|值   |说明|
|---- | ---- |
|wifi   | wifi 网络|
|2g  |2g 网络|
|3g | 3g 网络|
|4g | 4g 网络|
|none  |  无网络|
|unknown |Android 下不常见的网络类型|
## 示例

<a href="swanide://fragment/7c0e8595fa15fb27338683115a63df031569478717853" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/onNetworkStatusChange.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/onNetworkStatusChange.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例 




* 在 js 文件中
```js
Page({
    onLoad() {
        let self = this;
        swan.getNetworkType({
            success: res => {
                self.setData('networkType', res.networkType);
            }
        });
        swan.onNetworkStatusChange(function (res) {
            self.setData('networkType', res.networkType);
        });
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