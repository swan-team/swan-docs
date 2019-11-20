---
title: swan.getClipboardData
header: develop
nav: api
sidebar: swan-getClipboardData
---

 

**解释**：获取系统剪贴板内容

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success |Function |   否 | |  接口调用成功的回调函数|
|fail  |  Function |   否 | | 接口调用失败的回调函数|
|complete  |  Function |   否  | | 接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明**：

|参数名 |类型  |说明|
|---- | ---- | ---- |
|data   | String | 剪贴板的内容|

**代码示例**：
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


#### 错误码
* Andriod

|错误码|说明|
|--|--|
|1001|执行失败   |