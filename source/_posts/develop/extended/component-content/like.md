---
title: 点赞服务版
header: develop
nav: component-content
sidebar: like
---


**解释：** 支持将用户对文章/评论的点赞行为同步给百度后端，实现对点赞对象(若此对象的文章/评论是在小程序内用评论组件生产)的消息通知。需要将点赞对象的文章/评论内容一起提交。

**属性说明：**

|属性名 | 类型 | 必填 | 默认值 |说明 |
|---|---|---|---|---|
|is-liked|Boolean|是|false|赞的状态|
|mode|String|否|icon|按钮模式，有两种选择icon: 仅有图标; mixture: 图标文字结合|
|icon-type|String|否|hand|图标类型，提供两种，包括hand(默认)和heart|
|style|String|否|none|仅在mode为mixture时可配置, none:无边框; border:有边框|
|like-text|String|否|赞|点赞按钮上的文案，默认为赞|
|like-num|Number|否|0|点赞数|
|like-type|Number|否|0|点赞的对象类型，0:代表动态; 1:代表评论|
|like-param|Object|是||点赞服务需要的必要参数|
|like-param.openid|String|是||用户身份唯一标识，[获取方法](https://smartapp.baidu.com/docs/develop/api/open/log_Session-Key/)|
|like-param.snid|String|是||动态id,在开发者侧的唯一标识。当为空，默认开发者将数据托管在宿主，小程序侧创建动态后返回唯一标识给开发者。|
|like-param.srid|String|是||评论id。不为空，表示对评论进行点赞。若小程序侧没有 srid 对应的标识，则认为此时对主题进行点赞。|
|like-param.appkey|String|是||小程序App Key，在小程序管理中心>设置>开发设置中获取|
|animation-type|Number|否|1|点赞动效形式，0:无动效；1:轻动效；2:强动效|
|is-show-toast|Boolean|否|false|点赞后的结果反馈是否弹出toast提示|
|toast-text|Array|否|['已点赞', '已取消']|toast文案，默认为已点赞、已取消|
|bind:error|EventHandle|||点击按钮时在用户未登录状态下触发的事件|
|bind:success|EventHandle|||点击点赞按钮，在百度服务成功后将状态返回给使用组件者|
|bind:fail|EventHandle|||点击点赞按钮，在百度服务失败后将状态返回给使用组件者|


**代码示例**

安装组件：
```    
npm install @smt-ui/content-component
```
在 页面json 文件中：
```
{
    "navigationBarTitleText": "标题",
    "usingComponents": {
        "c-like": "@smt-ui/content-component/src/like"
    }
}
```
在 swan 文件中：
```
<view>点赞：仅图标</view>
<view class="like-demo">
    <c-like like-param="{{likeParam}}"></c-like>
    <c-like icon-type="heart" like-param="{{likeParam}}"></c-like>
    <c-like animation-type="{{animationType}}" like-param="{{likeParam}}"></c-like>
    <c-like icon-type="heart" animation-type="{{animationType}}" like-param="{{likeParam}}"></c-like>
    <c-like animation-type="{{animationType2}}" is-show-toast="{{false}}" like-param="{{likeParam}}"></c-like>
    <c-like
        icon-type="heart"
        is-show-toast="{{false}}"
        animation-type="{{animationType2}}">
    </c-like>
</view>
<view>点赞：带文字</view>
<view class="like-demo"> 
    <c-like
        class="custom-class"
        mode="mixture"
        icon-type="heart"
        like-param="{{likeParam}}"
        like-text="{{likeText}}">
    </c-like>
    <c-like
        class="custom-class"
        mode="mixture"
        like-param="{{likeParam}}"
        like-text="{{likeText}}">
    </c-like>
    <c-like
        class="custom-class"
        mode="mixture"
        icon-type="heart"
        like-param="{{likeParam}}"
        animation-type="{{animationType}}"
        like-text="{{likeText}}">
    </c-like>
    <c-like
        class="custom-class"
        mode="mixture"
        like-param="{{likeParam}}"
        animation-type="{{animationType}}"
        like-text="{{likeText}}">
    </c-like>
    <c-like
        class="custom-class"
        mode="mixture"
        icon-type="heart"
        like-param="{{likeParam}}"
        animation-type="{{animationType2}}"
        like-text="{{likeText}}">
    </c-like>
    <c-like
        class="custom-class"
        mode="mixture"
        like-param="{{likeParam}}"
        animation-type="{{animationType2}}"
        like-text="{{likeText}}">
    </c-like>
</view>
```
在 js 文件中：
```
Page({
    data: {
        animationType: 2,
        animationType2: 0,
        likeParam: {
            srid: 'fsds',
            snid: '111',
            appkey: 'wSfMyKIbrbNg7ogTFTcBuk1P8mgGTlB1',
            openid: 'dasa'
        }
    }
});
```
在 css 文件中：
```
.like-demo{
    display: flex;
    height: 80px;
    align-items: center;
    justify-content: space-around;
}
.like-demo .custom-class {
    margin: 0 10px; 
}
```
