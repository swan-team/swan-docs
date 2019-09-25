---
title: button 按钮
header: develop
nav: component
sidebar: formlist_button
---




**解释**： 按钮

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/button.png"  class="demo-qrcode-image" />

**属性说明**：

|属性名 |类型  |默认值  | 必填 |说明|最低支持版本|
|---- | ---- | ---- |---- |---- |---- |
|size|String | default  | 否 |大小|- |
| type | String | default | 否 |类型|- |
| plain | Boolean  |false | 否 |按钮是否镂空，背景色透明。|- |
|form-type |String  | buttonclick | 否 |用于`<form/>`组件，点击分别会触发`<form/>`组件的  submit/reset 事件。|- |
|open-type | String |  | 否 |百度 App开放能力，比如分享、获取用户信息等等。|- |
|hover-class |String  |button-hover | 否 |点击态。指定按钮按下去的样式类。当 ` hover-class="none"`  时，没有点击态效果。 button-hover 默认为{background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}。|- |
| hover-stop-propagation|Boolean|false | 否 |指定是否阻止本节点的祖先节点出现点击态。|- |
|hover-start-time | Number |20  | 否 |按住后多久出现点击态，单位毫秒。|- |
|hover-stay-time|Number | 70  | 否 |手指松开后点击态保留时间，单位毫秒。|- |
|disabled|Boolean|false| 否 |是否禁用|- |
|loading|Boolean|false| 否 |名称前是否带有loading图标|- |
|bindgetphonenumber|Handler| | 否 |获取用户手机号回调。和 open-type 搭配使用， 使用时机：` open-type="getPhoneNumber"`。具体申请方法请见：<a href="http://smartprogram.baidu.com/docs/introduction/getphonenumber/">获取用户手机号权限申请</a>。|1.12.14	|
| bindgetuserinfo |EventHandler |   | 否 |用户点击该按钮时，会返回获取到的用户信息，从返回参数的 detail 中获取到的值，和 swan.getUserInfo 一样的。和 open-type 搭配使用， 使用时机： `open-type="getUserInfo"`。|- |
|bindopensetting|Handler| | 否 |		在打开授权设置页后回调，使用时机：`open-type="openSetting"`。|- |
| bindcontact | Handler | | 否 |		客服消息回调，使用时机：open-type="contact"。如果需要使用该功能，请发送邮件至 smartprogram_support@baidu.com 咨询详细情况。|- |
|contact|Handler||否|打开客服会话，如果用户在会话中点击消息卡片后返回小程序，可以从bindcontact回调中获得具体信息。|- |


**size有效值**：

|值 |说明|
|---- |---- |
| default |默认大小 |
| mini   |小尺寸 |


**type有效值**：

|值 |说明|
|---- |---- |
| primary	|蓝色|
| default |白色|
| warn |红色|

**form-type有效值**：

|值|说明|
| ---- | ---- |
| buttonclick | 普通按钮点击 |
| submit | 提交表单 |
| reset | 重置表单 |

**open-type有效值**：

|值 |说明|
|---- |---- |
|share |触发用户分享，使用前建议先阅读 <a href="https://smartprogram.baidu.com/docs/develop/api/open_share/">swan.onShareAppMessage</a> 用。|
| getUserInfo |获取用户信息，可以从 bindgetuserinfo 回调中获取到用户信息，参考<a href="https://smartprogram.baidu.com/docs/develop/api/open_log/#用户数据的签名验证和加解密/">用户数据的签名验证和加解密</a>对用户数据进行处理。|
| getPhoneNumber |获取用户手机号，可以从 bindgetphonenumber 回调中获取到用户信息：<br>detail.errMsg 值为`"getPhoneNumber:ok"` 时代表用户信息获取成功；<br>detail.errMsg 值为`"getPhoneNumber:fail auth deny"`时代表用户信息获取失败。<br>参考<a href="https://smartprogram.baidu.com/docs/develop/api/open_log/#用户数据的签名验证和加解密/">用户数据的签名验证和加解密</a>对用户数据进行处理获得用户手机号。<br>1. 非个人开发者可申请；<br>2. 审核通过后，进入小程序首页,在左侧导航栏单击“设置>开发设置”。下拉页面，在“获取用户手机号权限申请”中单击“申请开通”。|
|openSetting|	打开授权设置页|
|contact|打开客服会话，如果用户在会话中点击消息卡片后返回小程序，可以从bindcontact回调中获得具体信息。|




**示例**：
<a href="swanide://fragment/c5e9c02cad6b485032a87ee568c3fe4a1565507494356" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <view class="mini-btn-content">
        <view class="title">默认态</view>
        <button type="primary" size="mini" class="mini-btn primary">
            按钮
        </button>
        <button type="default" size="mini" class="mini-btn">按钮</button>
        <button type="warn"    size="mini" class="mini-btn warn">
            按钮
        </button>
    </view>

    <view class="mini-btn-content">
        <view class="title">禁用态</view>
        <button type="primary" size="mini" class="mini-btn primary" disabled>
            按钮
        </button>
        <button type="default" size="mini" class="mini-btn" disabled>
            按钮
        </button>
        <button type="warn" size="mini" class="mini-btn warn" disabled>
            按钮
        </button>
    </view>

    <view class="btn-content">
        <button type="primary" class="btn primary">
            主操作按钮 默认态
        </button>
        <button type="primary" class="btn primary" plain='true'>
            主操作按钮 背景镂空
        </button>
        <button type="primary" hover-class='none' hover-stop-propagation="true" class="btn primary" bind:tap="tap">
            主操作按钮 无点击态
        </button>
        <button type="primary" class="btn primary" hover-start-time="1000" hover-stay-time="2000">
            主操作按钮 延迟点击
        </button>
        <button type="primary" loading="true" class="btn primary">
            主操作按钮 loading
        </button>
        <button type="primary" class="btn primary" disabled>
            主操作按钮 禁用态
        </button>
        <button type="default" class="btn">
            次要操作按钮 默认态
        </button>
        <button type="default" class="btn" disabled>
            次要操作按钮 禁用态
        </button>
        <button type="warn" class="btn warn">
            警告类操作按钮 默认态
        </button>
        <button type="warn" class="btn warn" disabled>
            警告类操作按钮 禁用态
        </button>
    </view>
    <view class="btn-bottom">
        <button type="default" class="middle-btn" open-type="share">分享按钮</button>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    onShareAppMessage() {
        return {
            title: '小程序标题',
            content: '世界很复杂，百度更懂你',
            imageUrl: 'http://imgsrc.baidu.com/forum/pic/item/d9f9d72a6059252daecdfc36309b033b5bb5b92e.jpg',
            path: '/pages/openShare/openShare',
            success(res) {
                // 分享成功
            },
            fail(err) {
                // 分享失败
            }
        };
    },
    getUserInfo(e) {
        console.log('cdsf');
        swan.getUserInfo({
            success: res => {
                swan.showModal({
                    title: '获取成功',
                    content: JSON.stringfy(res)
                });
            },
            fail: err => {
                swan.showToast({
                    title: '获取失败'
                });
            }
        });
    },
    tap() {
        swan.showToast({
            title: '已点击',
            icon: 'none'
        });

    }
});

```


