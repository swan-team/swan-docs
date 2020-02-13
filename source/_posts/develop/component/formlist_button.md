---
title: button 按钮
header: develop
nav: component
sidebar: formlist_button
---




**解释**： 按钮

##  属性说明 

|属性名 |类型  |默认值  | 必填 |说明|最低支持版本|
|:---- |:---- |: ---- |:---- |:---- |:---- |
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
|bindgetphonenumber|Handler| | 否 |获取用户手机号回调。和 open-type 搭配使用， 使用时机：` open-type="getPhoneNumber"`。具体申请方法请见：<a href="https://smartprogram.baidu.com/docs/introduction/getphonenumber/">获取用户手机号权限申请</a>。|1.12.14	<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
| bindgetuserinfo |EventHandler |   | 否 |用户点击该按钮时，会返回获取到的用户信息，从返回参数的 detail 中获取到的值，和 swan.getUserInfo 一样的。和 open-type 搭配使用， 使用时机： `open-type="getUserInfo"`。|- |
|bindopensetting|Handler| | 否 |		在打开授权设置页后回调，使用时机：`open-type="openSetting"`。|- |
| bindcontact | Handler | | 否 |		客服消息回调，使用时机：open-type="contact"。如果需要使用该功能，请发送邮件至 smartprogram_support@baidu.com 咨询详细情况。|- |
|contact|Handler||否|打开客服会话，如果用户在会话中点击消息卡片后返回小程序，可以从bindcontact回调中获得具体信息。|- |


###  size有效值 

|值 |说明|
|:---- |:---- |
| default |默认大小 |
| mini   |小尺寸 |


###  type有效值 

|值 |说明|
|:---- |:---- |
| primary	|蓝色|
| default |白色|
| warn |红色|

###  form-type有效值 

|值|说明|
|:---- |:---- |
| buttonclick | 普通按钮点击 |
| submit | 提交表单 |
| reset | 重置表单 |

###  open-type有效值 

|值 |说明|
|:---- |:---- |
|share |触发用户分享，使用前建议先阅读 <a href="https://smartprogram.baidu.com/docs/develop/api/open/share_onShareAppMessage/">swan.onShareAppMessage</a> 用。|
| getUserInfo |获取用户信息，可以从 bindgetuserinfo 回调中获取到用户信息，参考<a href="https://smartprogram.baidu.com/docs/develop/api/open/log_userdata/">用户数据的签名验证和加解密</a>对用户数据进行处理。|
| getPhoneNumber |获取用户手机号，可以从 bindgetphonenumber 回调中获取到用户信息：<br>detail.errMsg 值为`"getPhoneNumber:ok"` 时代表用户信息获取成功；<br>detail.errMsg 值为`"getPhoneNumber:fail auth deny"`时代表用户信息获取失败。<br>参考<a href="https://smartprogram.baidu.com/docs/develop/api/open/log_userdata/">用户数据的签名验证和加解密</a>对用户数据进行处理获得用户手机号。<br>用户手机号信息解密后数据示例：{"mobile":"15000000000"}<br>1. 非个人开发者可申请；<br>2. 审核通过后，进入小程序首页,在左侧导航栏单击“设置>开发设置”。下拉页面，在“获取用户手机号权限申请”中单击“申请开通”。|
|openSetting|	打开授权设置页|
|contact|打开客服会话，如果用户在会话中点击消息卡片后返回小程序，可以从bindcontact回调中获得具体信息。|




## 示例

<a href="swanide://fragment/672fb16f1f7d00c4c6f7d0342122c9f51577362329156" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/button.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>


###  图片示例 
 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/searchbox/icms/searchbox/images/button.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/searchbox/icms/searchbox/images/button-contact.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例 1 ：不同大小按钮

<a href="swanide://fragment/d6a8f368b9c384ecaf68843d8b1ee8b31575284322744" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <view class="card-area">
        <view class="top-description border-bottom">
            size='mini'
        </view>
        <button type="primary" size="mini">
            按钮
        </button>
    </view>

    <view class="card-area">
        <view class="top-description border-bottom">
            size='default'
        </view>
        <button type="primary" size='default'>
            按钮
        </button>
    </view>
</view>
```

### 代码示例 2 ： 不同颜色按钮

<a href="swanide://fragment/97707988b4d68082a98a0c625afe81c41575284526768" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <view class="card-area">
        <view class="top-description border-bottom">
            type='primary'
        </view>
        <button type="primary">
            非禁用态
        </button>
        <button type="primary" disabled>
            禁用态
        </button>
    </view>
    <view class="card-area">
        <view class="top-description border-bottom">
            type='default'
        </view>
        <button type="default">
            非禁用态
        </button>
        <button type="default"  disabled>
            禁用态
        </button>
    </view>
    <view class="card-area">
        <view class="top-description border-bottom">
            type='warn'
        </view>
        <button type="warn">
            非禁用态
        </button>
        <button type="warn"  disabled>
            禁用态
        </button>
    </view>
</view>
```

### 代码示例 3： 不同类型按钮

<a href="swanide://fragment/405701fd348d68f9b8362718c38bff841575285086623" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <view class="card-area">
        <view class="top-description border-bottom">
            form-type='submit/reset'
        </view>
        <form bindsubmit="submit" bindreset="reset">
            <button form-type="submit" type="primary" size='mini'>
                提交
            </button>
            <button form-type="reset" size='mini'>
                重置
            </button>
        </form>
    </view>
    <view class="card-area">
        <view class="top-description border-bottom">
            form-type='buttonclick'
        </view>
        <form>
            <button form-type="buttonclick" bindtap="buttonclick" type="primary" size='default'>
                普通点击
            </button>
        </form>
    </view>
</view>
```

### 代码示例 4：不同功能按钮

<a href="swanide://fragment/614656b7ead0489475b392a03a06f2471575285746664" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <view class="card-area">
        <view class="top-description border-bottom">
            open-type='share'
        </view>
        <button open-type='share' type="primary">
            share
        </button>
    </view>
    <view class="card-area">
         <view class="top-description border-bottom">
            open-type='getUserInfo'
        </view>
        <button open-type='getUserInfo' type="primary" bindgetuserinfo="getUserInfo">
            getUserInfo
        </button>
    </view>
    <view class="card-area">
         <view class="top-description border-bottom">
            open-type='getPhoneNumber'
        </view>
        <button open-type='getPhoneNumber' type="primary" bindgetphonenumber="getphonenumber">
            getPhoneNumber
        </button>
    </view>
    <view class="card-area">
         <view class="top-description border-bottom">
            open-type='openSetting'
        </view>
        <button open-type='openSetting' type="primary" bindopensetting="openSetting">
            openSetting
        </button>
    </view>
    <view class="card-area">
         <view class="top-description border-bottom">
            open-type='contact'
        </view>
        <button open-type='contact' type="primary" bindcontact="contact">
            contact
        </button>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    getphonenumber(e) {
        console.log(e)
    },
    getUserInfo(e){
        console.log(e)
    },
    opensetting(e) {
        console.log(e)
    },
    contact(e) {
        console.log(e)
    }
});
```

### 代码示例 5：hover-stop-propagation属性

<a href="swanide://fragment/cfafb425898e7b2e95bca2b6e98a18371581516515058" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <view class="card-area" hover-class="hover">
        <button type="primary" hover-stop-propagation='true'>
            按钮
        </button>
    </view>
</view>
```

* 在 css 文件中

```css
.hover {
    opacity: .2;
}

.card-area {
    background-color: #5B9FFF;
}
```

