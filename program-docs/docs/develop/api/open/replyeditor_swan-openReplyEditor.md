---
title: swan.openReplyEditor
header: develop
nav: api
sidebar: replyeditor_swan-openReplyEditor
# webUrl: https://qft12m.smartapps.cn/swan-api/openReplyEditor/openReplyEditor
---

 

> 基础库 3.100.4 版本开始支持，以下版本请使用小程序发布器组件。

**解释**： 调起半屏内容发布器，并支持开发者配置发布器展示模块。此api版本为单框架，不接入百度服务，即发布的内容无法进入百度app个人主页、无法接入百度互动消息推送。若想自动接入百度服务，请使用[半屏内容发布器带服务版](/develop/extended/component-content/commentpublish/) 。

 
## 方法参数 

Object object

### `object`参数说明 

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|sendBackgroundColor   | String  |  否  | #3388ff |发布按钮填充颜色，支持#333 和#333333 两种写法|
|sendTextColor  |  String  | 否 | #FFFFFF |发表按钮颜色，支持#333 和#333333 两种写法|
|sendText  |  Object  | 否 | 发表 | 发表的显示文案|
|contentPlaceholder  |  String  | 否 | 请输入内容|内容提示占位文案|
|moduleList  |  Array  | 否 | |显示模块list|
|emojiPath  |  String  | 否 | |设置自定义表情配置路径|
|success  |  Function  | 否 | |发布内容的回调函数|
|fail  |  Function  | 否 | |调起失败的回调函数|
|complete  |  Function  | 否 | |接口调用结束的回调函数（调用成功、失败都会执行）|



### success返回参数说明  

|参数名 |类型 | 说明|
|---- | ---- | ---- |
| status  | String |当前发布器状态  reply: 点击发表按钮；draft: 草稿状态，发布器当前为隐藏状态。|
| tempFile  | Array.&lt;object&gt; |图片的本地文件列表，每一项是一个 File 对象。|
| content | String | 正文 |


###  moduleList 列表  
若moduleList传空数组或不传，则默认展示正文、图片模块、表情模块。若传值，则只展示所传 list 中配置的模块。 
如：`moduleList: ['image']` 则只展示图片模块。

|moduleList| 类型 |描述|
|---|---|---|
|image|String|图片模块|
|emoji|String|表情模块|


###  emojiPath 参数说明  

开发者在配置 emoji 模块后，可以选择是否使用自定义表情表。若使用自定义表情功能，则将自定义表情的资源文件夹路径传入 emojiPath 字段。若不传 emojiPath 字段则使用默认表情包。

###  自定义表情资源文件夹格式 
文件夹中包括：`emoji.json` 和所有表情图片资源。外层文件夹名字可以由开发者自由定义，路径配置在 emojiPath 中即可，`emoji.json` 为固定文件名，请开发者按格式创建。表情没有数量和大小限制，但是表情资源会占用包体大小。

![图片](../../../../img/api/community_editor/emoji_path.jpg)

`emoji.json` 格式：

![图片](../../../../img/api/community_editor/emoji_json.jpg)
## 示例

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_openReplyEditor.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
 
 
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/openReplyEditor1.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div> 

###  代码示例1 moduleList传emoji并配置自定义图标 ：

<a href="swanide://fragment/eaa301106c159bbb2ac89a39422b9bd91575198845899" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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

###  代码示例2 moduleList传image ：

<a href="swanide://fragment/0592737eb5c241eb4a4bb104f99c22e21575198390943" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
swan.openReplyEditor({
    sendBackgroundColor: '#3388ff',
    sendTextColor: '#FFFFFF',
    sendText: '发送',
    contentPlaceholder: '请输入评论内容',
    moduleList: ['image'],
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

## Bug & Tip 

- 工具返回的 status 是0，与预期不符，正在修复中
