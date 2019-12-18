---
title: 半屏内容发布器带服务版
header: develop
nav: extended
sidebar: commentpublish
---


> 基础库 3.100.4 版本及以上调起原生半屏内容发布器，以下版本调起扩展组件半屏内容发布器带服务版。

**解释：** 支持开发者自定义配置选择原生框架发布器中的模块，此组件带服务版带后端服务，开发者接入各自平台的后端服务，同时自动接入百度互动消息推送。

**属性说明：**

|属性名| 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|
|show-publish|Boolean|是|false|NA 和组件版支持，半屏发布器默认是隐藏状态，需要通过设置此属性调起，写法：show-publish="{= showPublish =}"|
|content-placeholder|String|否|NA 和组件版支持，请输入内容|提示占位文案|
|module-list|Array|||仅 NA 版支持，显示模块 list，参见[原生半屏内容发布器文档](https://smartapp.baidu.com/docs/develop/api/open/replyeditor_swan-openReplyEditor/)|
|emoji-path|String|否||仅NA版支持，设置自定义表情配置路径|
|foucs|Boolean|否|false|仅组件版支持，true 代表调起，false 则不调起|
|is-upLoad-image|Boolean|否|false|仅组件版支持，是否展示上传图片按钮|
|request-url|String|is-upLoad-image为true，则必填||仅组件版支持，由于小程序图片预览只能是 http 或 https，所以上传图片需要先上传到服务器|
|comment-param|Object|是|-|NA 和组件版支持，内容评论成功后返回给百度服务测的参数，在点击发表按钮时回传|
|comment-param.openid|String|是|-|NA 和组件版支持，用户身份唯一标识，[获取方法](https://smartapp.baidu.com/docs/develop/api/open/log_Session-Key/)|
|comment-param.snid|String|是|-|NA 和组件版支持，动态id，是动态在开发者侧的唯一标识。不应为空。若此时小程序侧没有对应的标识，则会先创建动态。|
|comment-param.spid|String|是|-|NA 和组件版支持，一级评论id。为空表示对动态评论；不为空表示对评论进行评论。|
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



**代码示例**

安装组件：
```    
npm install @smt-ui/content-component
```
在 页面json 文件中：
```
{
    "usingComponents": {
        "c-comment-publisher": "@smt-ui/content-component/src/comment-publisher"
    }
}
```
在 swan 文件中：
```
<view class="btn-comment" bind:tap="clickComment">点击评论</view>
<c-comment-publisher
    show-publish="{= showPublish =}"
    comment-param="{{commentParam}}"
    is-upLoad-image="true"
    request-url="http:xxx.xxx.com"
    bind:browsemode="browseModeEventHandler"
    bind:relasecomment="relaseCommentEventHandler"
    bind:previewimage="previewImageHandler">
</c-comment-publisher>
```
在 js 文件中：
```
Page({
    relaseCommentEventHandler() {
        let param = {
            snid: '111',
            path: '332222',
            appkey: 'wSfMyKIbrbNg7ogTFTcBuk1P8mgGTlB1',
            spid: 'ddd',
            srid: 'qqqq',
            title: '评论的文章的标题',
            openid: '88989',
            content: 'dasccccc'
        };
        this.setData('showPublish', false);
        this.setData('commentParam', param);
    },
    clickComment() {
        this.setData('showPublish', true);
    }
});
```

**Bug&Tip**
* Tip：对比基础组件中的半屏发布器差异说明
    1. 增加了一个必填属性 comment-param，此属性是百度请求后端时的必传参数，需要在 relasecomment 事件中回传；
    2. 增加了一个 error 事件，点击发表按钮时在用户未登录状态下触发，开发者可在此时处理用户登录相关操作；
    3. 增加了一个 close 事件，仅 NA 版支持，点击空白处关掉发布器的回调，相当于 NA 版 success 成功回调中 status 为 draft 的状态；
    4. npm 地址发生了变化，内容全屏发布器请安装 @smt-ui/content-component，在上文中有介绍；
    5. 修复了调不起 NA 版半屏发布器问题；
    6. 配合 NA 原生半屏发布器，将原组件的默认显示状态修改为默认隐藏状态，需要设置 show-publish 属性显示隐藏。
* Bug：NA 半屏发布器在 IOS 手百版本 11.17 以下发表按钮无法点击。
* Bug：组件半屏发布器使用的是 textarea，textarea 在 IOS 手百版本 11.17 以下，placeholder 和内容在滑动页面时不跟随页面滑动。textarea 在 Android 手百版本 11.18 以下 placeholder 文案过长溢出。


