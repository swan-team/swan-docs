---
title: 全屏内容发布器带服务版
header: develop
nav: extended
sidebar: publish
---



> 基础库 3.90.1 版本及以上调起原生全屏内容发布器，以下版本调起扩展组件全屏内容发布器带服务版。

**解释：** 支持开发者自定义配置选择原生框架发布器中的模块，此组件带服务版带后端服务，开发者接入各自平台的后端服务，同时自动接入百度互动消息推送。

**属性说明：**NA版文档参见：[原生全屏内容发布器](https://smartapp.baidu.com/docs/develop/api/open/community_swan-openCommunityEditor/)

|属性名 | 类型 | 必填 | 默认值 |说明  |
|---|---|---|---|---|
|show-publish|Boolean|是|false|NA和组件版支持，发布器默认是隐藏状态，需要通过设置此属性调起，写法：show-publish="{= showPublish =}"|
|title-placeholder|String  |否|请输入标题|NA和组件版支持，发布器中的标题placeholder|
|content-placeholder|String|否|请输入正文|NA和组件版支持，发布器中的内容placeholder|
|navigation-bar-title|String||发布|NA和组件版支持，导航栏标题文案|
|module-list|Array|否|['title', 'image']|仅NA版支持，显示模块list|
|image-conf|Object|否|{maxNum:9,ratio:1}|仅NA版支持，图片参数配置，最大上传图片数量和图片压缩比|
|nav-bar-title-text|String|否|发布帖子|仅NA版支持，导航栏标题文案|
|nav-bar-text-style| String | 否  | black  |仅NA版支持，导航栏标题文字颜色，有效值 black / white|
|nav-bar-background-color | String  |  否 |  #ffffff |仅NA版支持，导航栏背景颜色|
|confirm-text| String | 否 |  发布 |仅NA版支持，发布按钮的文字，最多 2 个字符，超出长度会被截断|
|confirm-color| String |   否  | #3388ff |仅NA版支持，发布按钮的文字颜色|
|cancel-text | String | 否 |  取消 |仅NA版支持，取消按钮的文字，最多 2 个字符，超出长度会被截断|
|cancel-color| String |   否 |  #666666|仅NA版支持，取消按钮的文字颜色|
|target-text|  String | 否   | 仅NA版支持，设置发布范围文案，若配置发布范围模块，则必填|
|emoji-path |  String | 否    | 仅NA版支持，设置自定义表情配置路径|
|title|String|||仅组件版支持，发布器进入后，标题栏展示的默认标题|
|title-limit|Number||20|仅组件版支持，标题的最大字数限制|
|title-min-limit|Number||-1|仅组件版支持，标题的最小字数限制|
|content|String|||仅组件版支持，发布器内容编辑部分，初始的内容|
|content-limit|Number   ||120   |仅组件版支持，内容发布的最大字数限制|
|content-min-limit|Number||-1|仅组件版支持，内容发布的最小字数限制|
|picture-list|Array||[]|NA版和组件版支持，展示在用户的图片区的所有图片的列表|
|picture-limit|Number||9|仅组件版支持，展示在内容下方的图片的数量限制|
|picture-select-limit   |Number||9|仅组件版支持，用户从相册选择图片的时候，最多选择图片数量的限制|
|show-picture-tips|Boolean||    false|仅组件版支持，在图片区域下方，是否展示提示|
|picture-size-limit |Number||   1e7|仅组件版支持，当选择多个图片时，其中最大的是否超过了此值，单位B|
|submit-param|Object|是|-|NA和组件版支持，动态发布成功后的返回给百度服务测的参数，在点击发布按钮时回传|
|submit-param.snid|String|是|-|NA和组件版支持，动态id，在开发者侧的唯一标识。当为空，默认开发者将数据托管在宿主，小程序侧创建动态后返回唯一标识给开发者。|
|submit-param.path|String|是|-|NA和组件版支持，用于跳转的schema的path和query的拼接，参考如下：path='/page/a/b?query=q'|
|submit-param.appkey|String|是|-|NA和组件版支持，小程序App Key，在小程序管理中心>设置>开发设置中获取|
|submit-param.openid|String|是|-|NA和组件版支持，用户身份唯一标识，[获取方法](https://smartapp.baidu.com/docs/develop/api/open/log_Session-Key/)|
|bind:error|EventHandle|||仅组件版支持，点击按钮时在用户未登录状态下触发的事件|
|bind:chooseimage|  EventHandle|||组件和NA版支持，点击+号之后，用户选择完成图片的回调（返回临时地址，需要调用组件的人自行上传，再填充pictureList）
|bind:delimage| EventHandle|||仅组件版支持，点击图片右上角的删除按钮后，会直接删除图片，并通知删除的索引|
|bind:publish|  EventHandle|||NA和组件版支持，点击提交按钮后，会回调给使用组件者|


**代码示例**

安装组件
```   
npm install @smt-ui/content-component
```
在 页面json 文件中：
```
{
    "navigationBarTitleText": "标题",
    "usingComponents": {
        "c-publish": "@smt-ui/content-component/src/publish"
    }
}
```
在 页面swan 文件中：
```
<view>
    <view class="btn-open" bind:tap="openPublish">点击打开发布器</view>
    <c-publish
        show-publish="{= showPublish =}"
        navigation-bar-title="发布帖子"
        bind:chooseimage="chooseImage"
        bind:delimage="delImage"
        bind:publish="onPublish"
        submit-param="{{submitParam}}"
        picture-list="{{images}}">
    </c-publish>
    <view>正文内容在这里展示：{{publishCont}}</view>
</view>
```
在 页面js 文件中：
```
Page({
    chooseImage(e) {
        this.setData({
            images: [
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567081084460&di=be6c68f9dbf4f9fd98a62fa8b0f06e9b&imgtype=0&src=http%3A%2F%2Fwx2.sinaimg.cn%2Forj360%2F7dd58bb4gy1g2welv0sthj20u02tftlh.jpg',
                'https://b.bdstatic.com/searchbox/icms/searchbox/img/ripple-voice.gif',
                'https://b.bdstatic.com/searchbox/icms/searchbox/img/ripple-err.gif',
                'https://b.bdstatic.com/searchbox/icms/searchbox/img/ripple-init.gif',
                'https://pics1.baidu.com/feed/622762d0f703918f4991b1ab60f37d9258eec467.jpeg?token=d99ec3deef3d5f241c1bee32c4fa2210&s=F1BAA377327A279AD4A2EA850300B08F'
            ]
        });
    },
    // 发布器图片删除
    delImage(e) {
        this.setData({
            images: this.data.images.filter(function (item, index) {
                if (index !== e.index) {
                    return item;
                }
            })
        });
    },

    onPublish(e) {
        let param = {
            path: '332222',
            snid: '999999999999',
            appkey: 'mkItFCpOGQDyGqitHh0VKrxP2jBGU20V',
            openid: '36GetTsw0nWRMVaYnlswLQ9t7y'
        };
        this.setData('publishCont', e.content);
        this.setData('submitParam', param);
        this.setData('showPublish', false);
    },
    openPublish() {
        this.setData('showPublish', true);
    }
});
```

**Bug&Tip**

Tip：对比基础组件中的全屏发布器差异说明

    1. 增加了一个必填属性submit-param，此属性是百度请求后端时的必传参数，需要在publish事件中回传；
    2. 增加了一个error事件，点击发布按钮时在用户未登录状态下触发，开发者可在此时处理用户登录相关操作；
    3. npm地址发生了变化，内容全屏发布器请安装@smt-ui/content-component，在上文中有介绍；
    4. 将原组件的默认显示状态修改为默认隐藏状态，需要设置show-publish属性显示隐藏；
    5. 修复了之前没有透传NA版全屏发布器的属性bug。