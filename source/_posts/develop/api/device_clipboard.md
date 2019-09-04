---
title: 剪贴板
header: develop
nav: api
sidebar: device_clipboard
---

## swan.setClipboardData

**解释**：设置系统剪贴板的内容

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|data  |  String  |是  |-| 需要设置的内容|
|success |Function  |  否  |-| 接口调用成功的回调函数|
|fail  | Function  |  否  |-| 接口调用失败的回调函数|
|complete   | Function   | 否  |-| 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：
<a href="swanide://fragment/c5247cd3304dad6516034d18954e9e6d1560169209065" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="container">
    <view class="page-body">
        <view class="page-item">
            <view class="info">{{originData}}</view>
            <button id="setClipboardData" class="btn" bind:tap="btnClick" type="primary" hover-stop-propagation="true">复制</button>
        </view>
        <view class="page-item">
            <view class="info">{{clipboardData}}</view>
            <button id="getClipboardData" class="btn" bind:tap="btnClick" type="primary" hover-stop-propagation="true">粘贴</button>
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
        title: 'get/setClipboardData',
        items: [{
            name: '复制',
            id: 'setClipboardData'
        }, {
            name: '粘贴',
            id: 'getClipboardData'
        }],
        originData: 'baidu',
        clipboardData: ''
    },

    btnClick(e) {
        let id = e.currentTarget.id;
        switch (id) {
            case 'setClipboardData':
                swan.setClipboardData({
                    data: this.getData('originData'),
                    success: res => {
                        swan.showToast({
                            title: '复制成功'
                        });
                    },
                    fail: err => {
                        swan.showToast({
                            title: '复制失败'
                        });
                        console.log('setClipboardData fail', err);
                    }
                });
                break;
            case 'getClipboardData':
                swan.getClipboardData({
                    success: res => {
                        this.setData('clipboardData', res.data);
                    },
                    fail: err => {
                        console.log('getClipboardData fail', err);
                    }
                });
                break;
        }
    }
});
```
 
#### 错误码
* Andriod

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |

## swan.getClipboardData

**解释**：获取系统剪贴板内容

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success |Function |   否 |-|  接口调用成功的回调函数|
|fail  |  Function |   否 | -| 接口调用失败的回调函数|
|complete  |  Function |   否  |-| 接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明**：

|参数名 |类型  |说明|
|---- | ---- | ---- |
|data   | String | 剪贴板的内容|

**示例**：
<a href="swanide://fragment/f931552b616c92a0c7f4e3ad721b99131560169348430" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

>在 swan/js 文件中代码示例与[swan.setClipboardData](https://smartprogram.baidu.com/docs/develop/api/device_clipboard/#swan-setClipboardData/)相同。


#### 错误码
* Andriod

|错误码|说明|
|--|--|
|1001|执行失败   |