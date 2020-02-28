---
title: swan.getClipboardData
header: develop
nav: api
sidebar: swan-getClipboardData
# webUrl: https://qft12m.smartapps.cn/api/clipboardData/clipboardData
---



**解释**：获取系统剪贴板内容

 
## 方法参数 

Object object

###  `object` 参数说明  

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|success |Function |   否 | |  接口调用成功的回调函数|
|fail  |  Function |   否 | | 接口调用失败的回调函数|
|complete  |  Function |   否  | | 接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数说明  

|参数名 |类型  |说明|
|---- | ---- | ---- |
|data   | String | 剪贴板的内容|

## 示例
 

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/clipboardData.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>


### 图片示例
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/getClipboardData.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

 

### 代码示例1 ：

<a href="swanide://fragment/4c450f850d7cbc51e124ccb8eeb2e9da1574215012467" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中
```js
Page({
    data: {
        clipboardData: ''
    },
    getClipboardData() {
        swan.getClipboardData({
            success: res => {
                console.log('getClipboardData success');
                this.setData('clipboardData', res.data);
            },
            fail: err => {
                swan.showToast({
                    title: '获取剪贴板内容失败',
                    icon: 'none'
                });
                console.log('getClipboardData fail', err);
            }
        });
    }
});
```

### 代码示例2 ：

<a href="swanide://fragment/de4e9dfd7aebdc2f056b590d607663bd1575143435273" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中
```html
<view class="container">
    <view class="card-area">
        <view class="top-description border-bottom">
            小程序中只有text节点可以进行复制操作，用户在其他非小程序进行了复制操作，也可放到这里～
        </view>
        <view class="content">{{content}}</view>
        <button bind:tap="getClipboardData" type="primary" hover-stop-propagation="true">点击粘贴</button>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        content: '这里是粘贴内容'
    },
    getClipboardData() {  
        swan.getClipboardData({
            success: res => {
                console.log('getClipboardData success');
                this.setData('content', res.data);
            },
            fail: err => {
                swan.showToast({
                    title: '获取剪贴板内容失败',
                    icon: 'none'
                });
                console.log('getClipboardData fail', err);
            }
        });
    }
});
```


##  错误码
###  Android

|错误码|说明|
|:--|:--|
|1001|执行失败   |
