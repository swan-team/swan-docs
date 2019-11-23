---
title: CanvasContext.measureText
header: develop
nav: api
sidebar: canvas_CanvasContext-measureText
---

 


**解释**：测量文本尺寸信息，目前仅返回文本宽度，同步接口。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_measureText.png"  class="demo-qrcode-image" />

**方法参数**：String text

**`text`参数说明**：要测量的文本  

**返回**：

返回 TextMetrics 对象，结构如下：

| 参数名 | 类型 | 说明 |
|---- | ---- | ---- |
| width | Number | 文本的宽度 |

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/measureText.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/15efae9ad9cf32fc8ba7991ca3a877f51574271401532" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <view>在此输入文本信息</view>
    <input class="ipt" bindinput="keyInput"></input>
    <button type="primary" bindtap="measureText">点击获取文本信息的长度</button>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        key: ''
    },
    keyInput(e) {
        this.data.key = e.detail.value;
    },
    measureText() {
        let data = this.data.key;
        const canvasContext = swan.createCanvasContext('myCanvas');
        canvasContext.font = 'italic bold 20px cursive'
        const metrics = canvasContext.measureText(data);
        console.log(metrics.width);
        swan.showModal({
            title: '文本信息长度为',
            content: JSON.stringify(metrics.width)
        }); 
    }
});
```
#### 错误码
* Andriod

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |
 


