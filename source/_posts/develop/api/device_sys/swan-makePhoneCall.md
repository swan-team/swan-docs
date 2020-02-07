---
title: swan.makePhoneCall
header: develop
nav: api
sidebar: swan-makePhoneCall
---

 

> 在工具和真机中的实现有区别，详见[API 实现差异](https://smartprogram.baidu.com/docs/develop/devtools/diff/)。

**解释**：拨打电话

## 方法参数 

Object object

###  `object` 参数说明  

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|phoneNumber | String | 是  | | 需要拨打的电话号码|
|success| Function  |  否  | | 接口调用成功的回调|
|fail  |  Function  |  否 | | 接口调用失败的回调函数|
|complete  |  Function |   否 | |  接口调用结束的回调函数（调用成功、失败都会执行）|

## 示例

<a href="swanide://fragment/23c19e36b684e173b54a541c4d5903eb1581073398204" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/makePhoneCall.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>


### 图片示例
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/makePhoneCall.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例一 - 模拟拨号盘用法

* 在 swan 文件中

```html
<view class="card-area">
    <input bind:input="phoneNumberInput" class="input border-bottom" type="number" placeholder="请输入电话号码"/>
    <!-- 加区号的号码照如下形式输入均可正常识别拨号，其中()和-建议使用英文符号，因为已知ios系统不识别中文符号：
    0313-xxxx xxxx
    (0313)xxxx xxxx
    0313xxxx xxxx
    0313 xxxx xxxx -->
    <!-- 可输入英文，这里会根据九键键盘自动转换成对应的数字进行拨号，例：TUV/WXYZ/JKL 对应 895 -->
    <button bind:tap="makePhoneCall" type="primary" hover-stop-propagation="true">拨打</button>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        phoneNumber: ''
    },
    phoneNumberInput(e) {
        this.setData('phoneNumber', e.detail.value);
    },
    makePhoneCall() {
        swan.makePhoneCall({
            phoneNumber: this.data.phoneNumber,
            success: res => {
                console.log('makePhoneCall success');
            },
            fail: err => {
                swan.showModal({
                    title: '拨打失败',
                    content: '请检查是否输入了正确的电话号码',
                    showCancel: false
                });
            }
        });
    }
});
```

###  代码示例二 - 常见用法

<a href="swanide://fragment/780c402ea405a77fbd4d120ac6b231c71581074652148" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<button bind:tap="makePhoneCall" type="primary" hover-stop-propagation="true">拨打商家电话</button>
```

* 在 js 文件中

```js
Page({
    makePhoneCall(e) {
        swan.makePhoneCall({
            phoneNumber: '157XXXX8026',
            // phoneNumber: '0313-xxxx xxxx',
            // phoneNumber: '(0313)xxxx xxxx',
            // phoneNumber: '0313xxxx xxxx',
            // phoneNumber: 'txk0bkt', // 8950258
            fail: err => {
                swan.showModal({
                    title: '拨打失败',
                    content: '请稍后再试',
                    showCancel: false
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
|201|解析失败，请检查调起协议是否合法|
|202|解析失败，请检查参数是否正确|
|302|找不到调起协议对应端能力方法|
|1001|执行失败|

###  iOS

|错误码|说明|
|:--|:--|
|202|解析失败，请检查参数是否正确|
