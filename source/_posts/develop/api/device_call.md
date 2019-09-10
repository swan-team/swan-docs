---
title: 拨打电话
header: develop
nav: api
sidebar: device_call
---

## swan.makePhoneCall

> 在工具和真机中的实现有区别，详见[API 实现差异](https://smartprogram.baidu.com/docs/develop/devtools/diff/)。

**解释**：拨打电话

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/makePhoneCall.png"  class="demo-qrcode-image" />



**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|phoneNumber |String | 是  |-| 需要拨打的电话号码|
|success| Function  |  否  |-| 接口调用成功的回调|
|fail  |  Function  |  否 | -| 接口调用失败的回调函数|
|complete  |  Function |   否 |-|  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：
<a href="swanide://fragment/20cc334d3f9433dd7e8cde22d37b5d8c1560169077444" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="container">
    <view class="page-body">
        <view class="phone-call-container">
            <text>请在下方输入电话号码</text>
            <input bind:input="phoneNumberInput" class="input" type="number" placeholder="请输入电话号码"/>
            <button bind:tap="makePhoneCall" type="primary" hover-stop-propagation="true">拨打</button>
        </view>
    </view>
    <view class="page-title">
        <view class="page-title-line"></view>
        <view class="page-title-text">{{title}}</view>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        title: 'makePhoneCall',
        phoneNumber: ''
    },

    phoneNumberInput(e) {
        this.setData('phoneNumber', e.detail.value);
    },

    makePhoneCall(e) {
        let phoneNumber = this.getData('phoneNumber');
        if (!phoneNumber) {
            swan.showToast({
                title: '请输入电话号码'
            });
            return;
        }
        swan.makePhoneCall({
            phoneNumber,
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

* 在 css 文件中

```css
swan-button {
    margin-top: .15rem;
}
.phone-call-container {
    margin: 0 .15rem;
    padding: .3rem 0;
    background-color: #fff;
}
.phone-call-container swan-text{
    margin: .1rem .23rem .3rem;
    color: #666;
}
.phone-call-container swan-input{
    padding-left: 0;
    border-bottom: 1px solid #eee;
    box-sizing: content-box;
}
``` 