---
title: swan.closeReplyEditor
header: develop
nav: api
sidebar: replyeditor_swan-closeReplyEditor
---
 

 

> 基础库 3.100.4 版本开始支持，以下版本请使用小程序发布器组件。

**解释**： 关闭原生半屏回复内容发布器。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_openReplyEditor.png"  class="demo-qrcode-image" />


**方法参数**：Object object

**emojiPath 参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success  |  Function  | 否 | |发布内容的回调函数|
|fail  |  Function  | 否 | |调起失败的回调函数|
|complete  |  Function  | 否 | |接口调用结束的回调函数（调用成功、失败都会执行）|

**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/closeReplyEditor.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**

<a href="swanide://fragment/0b076d14a84fe9292fa361e76a8016c51573803793833" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 .js 文件中
```js
Page({
    data: {
        res: ''
    },
    openReplyEditor() {
        const that = this;
        swan.openReplyEditor({
            sendBackgroundColor: '#3388ff',
            sendTextColor: '#FFFFFF',
            sendText: '发送',
            contentPlaceholder: '请输入评论内容',
            moduleList: ['emoji'],
            emojiPath: '../../emojidata',
            success: function (res) {
                that.setData({
                    res: 'openReplyEditor success' + JSON.stringify(res)
                })
                console.log('openReplyEditor success', res);
            },
            fail: function (res) {
                console.log('openReplyEditor fail', res);
                that.setData({
                    res: 'openReplyEditor fail' + JSON.stringify(res)
                })
            },
            complete: function (res) {
                console.log('openReplyEditor complete', res);
            }
        });
        // 3s后自动关闭评论发布器
        setTimeout(() => {
            swan.closeReplyEditor({
                success: function () {
                    console.log('closeReplyEditor success');
                }
            });
        }, 3000);
    }
});
```

* 在 .swan 文件中
```html
<view class="intro">
    <button type="primary" bindtap="openReplyEditor">openReplyEditor</button>
    <view class="res">{{res}}</view>
</view>
```
