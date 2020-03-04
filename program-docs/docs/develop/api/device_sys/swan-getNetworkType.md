---
title: swan.getNetworkType
header: develop
nav: api
sidebar: swan-getNetworkType
# webUrl: https://qft12m.smartapps.cn/swan-api/getNetworkType/getNetworkType
---



**解释**：获取网络类型
 

## 方法参数 

Object object

###  `object` 参数说明  

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|success |Function  |  否  | | 接口调用成功，返回网络类型 networkType|
|fail | Function  |  否  | | 接口调用失败的回调函数|
|complete  |  Function  |  否 | | 接口调用结束的回调函数（调用成功、失败都会执行）|

 success返回参数说明 ：

| 参数  | 类型 | 说明 |
|---- | ---- |---|
|networkType |String|网络类型|

 networkType有效值说明 ：

| 值 | 说明 | Web 态说明|
|----|----|----|
|wifi|wifi 网络| |
|2g|2g 网络| |
|3g|3g 网络| |
|4g|4g 网络| |
|unknown|Android 和 Web 态下不常见的网络类型|由于浏览器对于 W3C 规范的实现差异，在 Web 态中可能返回 unknown（如 iOS Web 态），并非代表网络异常，请勿在返回值为 unknown 时当作网络异常处理。建议提示用户确认网络状态后按正常网络情况处理|
|none|无网络||

## 示例

<a href="swanide://fragment/6fb983a430aa1864af5650c5b9b54f9d1569478503845" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/getNetworkType.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/getNetworkType.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

 

### 代码示例 



* 在 js 中

```js
Page({
    getNetworkType() {
        swan.getNetworkType({
            success: res => {
                this.setData('networkType', res.networkType);
                if (res.networkType === 'unknown') {
                    // 建议提示用户确认网络状态
                }
                // 网络正常的业务逻辑
            },
            fail: err => {
                swan.showToast({
                    title: '获取网络状态失败'
                });
            }
        });
    }
});
```


##  错误码
###  Android

|错误码|说明|
|:--|:--|
|202|解析失败，请检查参数是否正确      |

