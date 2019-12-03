---
title: swan.setNavigationBarColor
header: develop
nav: api
sidebar: navigationbar_swan-setNavigationBarColor
---

 
**解释**：动态设置当前页面导航条的颜色。

**百度APP中扫码体验：**

<img src=" https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_setNavigationBarColor.png"  class="demo-qrcode-image" />

**方法参数**： Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|frontColor | String|  是  | | 前景颜色值，包括按钮、标题、状态栏的颜色，有效值 #ffffff 和 #000000。|
|backgroundColor| String | 是  | | 背景颜色值，有效值为十六进制颜色。|
|animation  | Object  |否  | | 动画效果|
|success |Function  |  否 | |  接口调用成功的回调函数|
|fail|    Function |   否  | | 接口调用失败的回调函数|
|complete|    Function |   否   | |接口调用结束的回调函数（调用成功、失败都会执行）|

**animation**

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
| duration|Number | 否  |0|动画变化时间，单位：毫秒。|
|timingFunc|String | 否  |linear| 动画变化方式  |

**animation.timingFunc 有效值**：

|值  | 说明|
| ---- |---- |
|linear|  动画从头到尾的速度是相同的。|
|easeIn | 动画以低速开始|
|easeOut |动画以低速结束。|
|easeInOut  | 动画以低速开始和结束。|

<!-- **success返回参数说明**：

|参数名 |类型  |说明|
|---- | ---- |---- |
|errMsg | String  |调用结果| -->


**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/setNavigationBarColor.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例1**：

<a href="swanide://fragment/dace5658a19b604ff4d62d0c760fb7351574136817988" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="container">
    <view class="card-area">
        <view class="top-description border-bottom">
            <view>设置当前页面导航条颜色</view>
            <view>色值为: #ff0000</view>
        </view>
        <button bind:tap="setNavigationBarColor" type="primary" hover-stop-propagation="true">点击设置</button>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    setNavigationBarColor() {
        swan.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: '#3C76FF',
            animation: {
                duration: 500,
                timingFunc: 'linear'
            },
            success: res => {
                console.log('setNavigationBarColor success');
            },
            fail: err => {
                console.log('setNavigationBarColor fail', err);
            }
        });
    }
});
```

**代码示例2**：

<a href="swanide://fragment/47a5315cec46d13b001064d0d919933d1575225061501" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    setNavigationBarColor() {
        swan.setNavigationBarColor({
            frontColor: '#000000',
            backgroundColor: '#3C76FF',
            animation: {
                duration: 500,
                timingFunc: 'linear'
            },
            success: res => {
                console.log('setNavigationBarColor success');
            },
            fail: err => {
                console.log('setNavigationBarColor fail', err);
            }
        });
    }
});
```

#### 错误码

* Andriod

|错误码|说明|
|--|--|
|1001|执行失败     |

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确   |
