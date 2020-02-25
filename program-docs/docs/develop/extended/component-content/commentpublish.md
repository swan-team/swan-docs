---
title: 半屏内容发布器带服务版
header: develop
nav: extended
sidebar: commentpublish
# webUrl: https://qft12m.smartapps.cn/subPackages/extensionsPackage/component/pages/comment-publisher/comment-publisher
---


> 基础库 3.100.4 版本及以上调起原生半屏内容发布器，以下版本调起扩展组件半屏内容发布器带服务版。

**解释：** 支持开发者自定义配置选择原生框架发布器中的模块，此组件带服务版带后端服务，开发者接入各自平台的后端服务，同时自动接入百度互动消息推送。

## 属性说明 

|属性名| 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|
|show-publish|Boolean|是|false|NA 和组件版支持，半屏发布器默认是隐藏状态，需要通过设置此属性调起，写法：show-publish="{= showPublish =}"|
|content-placeholder|String|否|请输入内容|NA 和组件版支持，提示占位文案|
|module-list|Array|否||仅 NA 版支持，显示模块 list|
|emoji-path|String|否||仅NA版支持，设置自定义表情配置路径|
|foucs|Boolean|否|false|仅组件版支持，true 代表调起，false 则不调起|
|is-upLoad-image|Boolean|否|false|仅组件版支持，是否展示上传图片按钮|
|request-url|String|is-upLoad-image为true，则必填||仅组件版支持，由于小程序图片预览只能是 http 或 https，所以上传图片需要先上传到服务器|
|comment-param|Object|是|-|NA 和组件版支持，内容评论成功后返回给百度服务测的参数，在点击发表按钮时回传|
|comment-param.openid|String|是|-|NA 和组件版支持，用户身份唯一标识，[获取方法](https://smartprogram.baidu.com/docs/develop/api/open/log_Session-Key/)|
|comment-param.snid|String|是|-|NA 和组件版支持，动态id，是动态在开发者侧的唯一标识。不应为空。若此时小程序侧没有对应的标识，则会先创建动态。|
|comment-param.spid|String|是/否|-|NA 和组件版支持，一级评论id。当对评论进行评论时为必填项，不传表示对动态评论。|
|comment-param.srid|String|是|-|NA 和组件版支持，此条评论id|
|comment-param.title|String|是|-|NA 和组件版支持，动态标题|
|comment-aram.content|String|是|-|NA 和组件版支持，动态内容|
|comment-param.images|Array|否|-|NA 和组件版支持，动态图集, json 数组, 格式 ["a.jpg","b.jpg"]|
|comment-param.appkey|String|是||NA 和组件版支持，小程序 App Key，在小程序管理中心>设置>开发设置中获取|
|comment-param.path|String|是||NA 和组件版支持，用于跳转的 schema 的 path 和 query 的拼接，参考如下：path='/page/a/b?query=q'|
|bind:fail|EventHandle|||NA版和组件版支持，调用百度服务失败的回调|
|bind:error|EventHandle|||仅组件版支持，点击按钮时在用户未登录状态下触发的事件|
|bind:browsemode|EventHandle|||仅组件版支持，当输入框失焦后会触发事件(NA版不支持，降级版支持)|
|bind:relasecomment|EventHandle|||NA和组件版支持，点击发表按钮时触发的事件。在NA版中相当于success成功回调中status为reply状态|
|bind:close|EventHandle|||仅NA版支持，点击空白处关掉发布器的回调，相当于NA版success成功回调中status为draft的状态|
|bind:previewimage|EventHandle|||仅组件版支持，点击输入框中已经上传的图片时触发的事件(NA版不支持，降级版支持)|

*由于此组件对原生NA半屏发布器进行了包装，所以需要透传NA发布器的一些参数，同时会返回一些原生发布器的状态，但部分会有一些差异，本文档中都有描述，如还有疑问也可以参考[原生半屏内容发布器文档](https://smartapp.baidu.com/docs/develop/api/open/replyeditor_swan-openReplyEditor/)

### relasecomment/browsemode/error返回草稿内容说明 

|参数名 |类型 | 说明|
|---- | ---- | ---- |
| inputValue  | String |正文输入框中的内容|
| uploadImgUrl  | Array.&lt;object&gt; |图片的本地文件列表，每一项是一个 File 对象。|


### module-list 列表 
若module-list传空数组或不传，则默认展示正文、图片模块、表情模块。若传值，则只展示所传 list 中配置的模块。 
如：`module-list: ['image']` 则只展示图片模块。

|module-list| 类型 |描述|
|---|---|---|
|image|String|图片模块|
|emoji|String|表情模块|


### emoji-path 参数说明 

开发者在配置 emoji 模块后，可以选择是否使用自定义表情表。若使用自定义表情功能，则将自定义表情的资源文件夹路径传入 emojiPath 字段。若不传 emojiPath 字段则使用默认表情包。

自定义表情资源文件夹格式：
文件夹中包括：`emoji.json` 和所有表情图片资源。外层文件夹名字可以由开发者自由定义，路径配置在 emojiPath 中即可，`emoji.json` 为固定文件名，请开发者按格式创建。表情没有数量和大小限制，但是表情资源会占用包体大小。

![图片](../../../../img/api/community_editor/emoji_path.jpg)

`emoji.json` 格式：

![图片](../../../../img/api/community_editor/emoji_json.jpg)


## 示例
<a href="swanide://fragment/b41acfd314e6ff14805ed581f4decafa1579074454687" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验
<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/subPackages_extensionsPackage_comment-publisher_comment-publisher.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/comment-publisher-demo.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div> 



###  代码示例
安装组件：
```    
npm install @smt-ui/content-component
```
在 页面json 文件中：
:::codeTab
```json
{
    "usingComponents": {
        "c-comment-publisher": "@smt-ui/content-component/src/comment-publisher"
    }
}
```
:::
:::codeTab
```swan
<view class="btn-comment" bind:tap="clickComment">点击评论</view>
<c-comment-publisher
    show-publish="{= showPublish =}"
    comment-param="{{commentParam}}"
    is-upLoad-image="true"
    request-url="https:xxx.xxx.com"
    bind:browsemode="browseModeEventHandler"
    bind:relasecomment="relaseCommentEventHandler"
    bind:error="error"
    bind:previewimage="previewImageHandler">
</c-comment-publisher>
```
 
```js
// 测试用例
const getSrid = () => {
    let openid = '';
    for (let i = 0; i < 12; i++) {
        openid += Math.floor(Math.random() * 10);
    }
    return openid + 'dd';
};
Page({
    relaseCommentEventHandler() {
        let param = {
            snid: '999999999999',
            path: '332222',
            appkey: 'mkItFCpOGQDyGqitHh0VKrxP2jBGU20V',
            srid: getSrid(),
            title: '评论的文章的标题',
            openid: '36GetTsw0nWRMVaYnlswLQ9t7y',
            content: 'cascsahclsahcslchdls'
        };
        this.setData('showPublish', false);
        this.setData('commentParam', param);
    },
    clickComment() {
        this.setData('showPublish', true);
    },
    error() {
        // 这里处理未登录
        swan.login({
            success: res => {
                console.log('login success', res);
            },
            fail: err => {
                console.log('login fail', err);
            }
        });
    }
});
```
:::
## Bug&Tip 
* Tip：对比基础组件中的半屏发布器差异说明
    1. 增加了一个必填属性 comment-param，此属性是百度请求后端时的必传参数，需要在 relasecomment 事件中回传；
    2. 增加了一个 error 事件，点击发表按钮时在用户未登录状态下触发，开发者可在此时处理用户登录相关操作；
    3. 增加了一个 close 事件，仅 NA 版支持，点击空白处关掉发布器的回调，相当于 NA 版 success 成功回调中 status 为 draft 的状态；
    4. npm 地址发生了变化，内容全屏发布器请安装 @smt-ui/content-component，在上文中有介绍；
    5. 修复了调不起 NA 版半屏发布器问题；
    6. 配合 NA 原生半屏发布器，将原组件的默认显示状态修改为默认隐藏状态，需要设置 show-publish 属性显示隐藏。
* Bug：组件半屏发布器使用的是 textarea，textarea 在 IOS  百度 App版本 11.17 以下，placeholder 和内容在滑动页面时不跟随页面滑动。textarea 在 Android  百度 App版本 11.18 以下 placeholder 文案过长溢出。


