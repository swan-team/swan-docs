---
title: swan.closeReplyEditor
header: develop
nav: api
sidebar: replyeditor_swan-closeReplyEditor
---
 

 

> 基础库 3.100.4 版本开始支持，以下版本请使用小程序发布器组件。

**解释**： 关闭原生半屏内容发布器

**方法参数**：Object object

**emojiPath 参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success  |  Function  | 否 | |发布内容的回调函数|
|fail  |  Function  | 否 | |调起失败的回调函数|
|complete  |  Function  | 否 | |接口调用结束的回调函数（调用成功、失败都会执行）|

**代码示例**：

<a href="swanide://fragment/60bcc47865b41b72a8e375455c11857b1566889666184" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
swan.openReplyEditor({
    sendBackgroundColor: '#3388ff',
    sendTextColor: '#FFFFFF',
    sendText: '发送',
    contentPlaceholder: '请输入评论内容',
    moduleList: ['emoji'],
    emojiPath: '../../emojidata',
    success: res => {
      console.log('openReplyEditor success', res);
      // 点击了发表按钮
      if (res.status === 'reply') {
	      	// 开发者处理返回内容。
          // 主动关闭评论发布器
          swan.closeReplyEditor({
            success: res => {
              console.log('closeReplyEditor success', res);
            }
          });
	    }
      // 点击发布器外隐藏发布器，编辑的内容将存为草稿
      else if (res.status === 'draft') {
        // 处理草稿内容，如ui处理
      }
    },
    fail: function (res) {
      console.log('openReplyEditor fail', res);
    },
    complete: function (res) {
      console.log('openReplyEditor complete', res);
    }
})
```