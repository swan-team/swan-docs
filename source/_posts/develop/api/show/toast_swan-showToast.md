---
title: swan.showToast
header: develop
nav: api
sidebar:  toast_swan-showToast
---
 

**解释**：显示消息提示框

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/toast.png"  class="demo-qrcode-image" />


**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|title  | String | 是  | | 提示的内容 |
|icon | String | 否  | success|图标，有效值` "success"、"loading"、"none"`。 |
|image  |  String | 否 | | 自定义图标的本地路径，image 的优先级高于 icon |
|duration  |  Number | 否 |  2000| 提示的延迟时间，单位毫秒。 |
|success| Function |   否 | | 接口调用成功的回调函数 |
|fail  |  Function |   否  | | 接口调用失败的回调函数 |
|complete   | Function |   否| |  接口调用结束的回调函数（调用成功、失败都会执行）|
|mask|Boolean|否|false|是否显示透明蒙层，防止触摸穿透。|

**icon有效值**：

|有效值 |说明  |
|---- | ---- |
|success | 显示成功图标，此时 title 文本最多显示 7 个汉字长度。默认值 |
|loading |显示加载图标，此时 title 文本最多显示 7 个汉字长度。|
|none |不显示图标，此时 title 文本最多可显示两行。  |

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/showToast.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/6ab6a7ea0d57b42271c6d6817f0707c01574132977216" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="container">
    <view>
        <view class="card-area"> 
            <button data-title="success" data-icon="success" bindtap="tapHandle" type="primary" hover-stop-propagation="true">点击弹出成功toast</button>   
        </view>
        <view class="card-area">   
            <button data-title="loading" data-icon="loading" bindtap="tapHandle" type="primary" hover-stop-propagation="true">点击弹出loading toast</button>   
        </view>
        <view class="card-area">      
            <button data-title="none" data-icon="none" bindtap="tapHandle" type="primary" hover-stop-propagation="true">点击弹出无图标toast</button>   
        </view>
        <view class="card-area">
            <button bindtap="tapHandleDuration" type="primary" hover-stop-propagation="true">点击弹出延时toast  {{num}}</button>   
        </view>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        num: 5
    },
    tapHandle(e) {
        this.toast(e.currentTarget.dataset.title, e.currentTarget.dataset.icon);
    },
    toast(title, icon) {
        swan.showToast({
            title, 
            icon,
            mask: false, // 此属性设置为true不能打断toast
            success: res => {
                console.log('showToast success', res);
            },
            fail: err => {
                console.log('showToast fail', err);
            }
        })
    },
    tapHandleDuration() {
        let that = this;
        swan.showToast({
            title: '延时5s', 
            icon: 'none',
            mask: false,
            duration: 5000,
            success: res => {
                console.log('showToast success', res);
                let num = 5;
                let interval = setInterval(function() {
                    num = num - 1;
                    that.setData({num: num});
                    if(num === 0) {
                        clearInterval(interval);
                    }
                }, 1000);
                console.log('num', num);
            },
            fail: err => {
                console.log('showToast fail', err);
            }
        })
    }
});
```

**Bug&Tip**：

* [swan.showLoading](https://smartprogram.baidu.com/docs/develop/api/show/toast_swan-showLoading/) 和 swan.showToast 同时只能显示一个
* swan.showToast 应与 [swan.hideToast](https://smartprogram.baidu.com/docs/develop/api/show/toast_swan-hideToast/) 配对使用


#### 错误码
* Andriod

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |
|302|找不到调起协议对应端能力方法|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |


   
