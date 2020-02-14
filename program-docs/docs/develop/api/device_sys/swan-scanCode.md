---
title: swan.scanCode
header: develop
nav: api
sidebar: swan-scanCode
---


 

> 在工具和真机中的实现有区别，详见[API 实现差异](https://smartprogram.baidu.com/docs/develop/devtools/diff/)。

**解释**：调起客户端扫码界面，扫码成功后返回对应的结果。

 
## 方法参数 

Object object

###  `object` 参数说明  

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|success| Function  |  否  | |接口调用成功的回调|
|fail  |  Function  |  否 | | 接口调用失败的回调函数|
|complete  |  Function |   否 | |  接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数说明  

|参数名 |说明|
|---- | ---- |
|result| 所扫码的内容 |
|scanType| 所扫码的类型 |
|charSet|所扫码的字符集，仅支持 Android 系统。|
## 示例

<a href="swanide://fragment/6b89b351f564a598584be659212af1bd1581515588286" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/scanCode.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>


### 图片示例
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/searchbox/icms/searchbox/images/scanCode.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例 

* 在 swan 文件中

```html
<view class="container">
    <view class="card-area">
        <view class="list-area border-bottom" s-for="item in infoList">
            <text class="list-item-key-4">{{item.chinaName}}</text>
            <text class="list-item-value">{{item.value}}</text>
        </view>
        <view class="button-group">
            <button class="btn" type="primary" bindtap="scanCode">扫一扫</button>
        </view>
    </view>
</view>
```


* 在 js 文件中

```js
Page({
    /* eslint-enable */
    data: {
        result: true,
        infoList: [{
            engName: 'result',
            chinaName: '内容',
            value: ''
        }, {
            engName: 'scanType',
            chinaName: '类型',
            value: ''
        },
        {
            engName: 'charSet',
            chinaName: '字符集',
            value: ''
        }
        ]
    },
    scanCode() {
        swan.scanCode({
            success: res => {
                this.setData('result', false);
                console.log('scanCode success', res);
                this.updateInfoList(res);
            },
            fail: err => {
                console.log('scanCode fail', err);
            }
        });
    },
    updateInfoList(res) {
        let infoList = this.getData('infoList');
        for (let i = 0; i < infoList.length; ++i) {
            if (res[infoList[i].engName] === '') {
                infoList[i].value = '暂无';
            } else {
                infoList[i].value = res[infoList[i].engName];
            }
        }
        // 兼容ios逻辑
        if(swan.getSystemInfoSync().platform === 'ios'){
            infoList[2].value = '暂无';
        }
        this.setData('infoList', infoList);
    }
});
```

 
##  错误码
###  Android

|错误码|说明|
|:--|:--|
|201|解析失败，请检查调起协议是否合法|
|202|解析失败，请检查参数是否正确|
|1001|执行失败|

###  iOS

|错误码|说明|
|:--|:--|
|202|解析失败，请检查参数是否正确      |
|203|处理失败，无返回结果|
