---
title: button 按钮
header: develop
nav: component
sidebar: formlist_button
webUrl: https://qft12m.smartapps.cn/component/button/button
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
| bindchooseAddress |EventHandler |   | 否 |用户点击该按钮时，调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址，从返回参数的 detail 中获取，和 swan.chooseAddress 一样的。和 open-type 搭配使用， 使用时机： `open-type="chooseAddress"`。|3.160.3	<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
| bindchooseInvoiceTitle |EventHandler |   | 否 |用户点击该按钮时，选择用户的发票抬头，和 swan.chooseInvoiceTitle 一样的。和 open-type 搭配使用， 使用时机： `open-type="chooseInvoiceTitle"`。|3.160.3	<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
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
| chooseAddress |获取用户信息，可以从 bindchooseAddress 回调中获取到用户选择的地址信息|
| chooseInvoiceTitle |获取用户信息，可以从 bindchooseInvoiceTitle 回调中获取到用户选择发票抬头信息|
|contact|打开客服会话，如果用户在会话中点击消息卡片后返回小程序，可以从bindcontact回调中获得具体信息。|




## 示例

<a href="swanide://fragment/21f220e97105882eb064c2e318a1b07e1583136075647" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/button.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>


 

###  代码示例 1 ：主要按钮
 

:::codeTab
```swan
<view class="wrap">
    <view class="card-area">
        <view class="top-description border-bottom">
            <view>主要按钮</view>
            <view>primary</view>
        </view>
        <button type="primary" plain="false">
            主按钮 normal
        </button>
        <button type="primary" loading>
            主按钮 loading
        </button>
        <button type="primary" disabled>
            主按钮 disabled
        </button>
    </view>
</view>
```
:::

### 代码示例 2 ： 次要按钮

:::codeTab
```swan
<view class="wrap">
    <view class="card-area">
        <view class="top-description border-bottom">
            <view>次要按钮</view>
            <view>default</view>
        </view>
        <button type="default" plain="false">
            次按钮 normal
        </button>
        <button type="default" loading>
            次按钮 loading
        </button>
        <button type="default" disabled>
            次按钮 disabled
        </button>
    </view>
</view>
```
:::
### 代码示例 3： 警示按钮
 
:::codeTab
```swan
<view class="wrap">
    <view class="card-area">
        <view class="top-description border-bottom">
            <view>警示按钮</view>
            <view>warn</view>
        </view>
        <button type="warn">
            警示按钮 normal
        </button>
        <button type="warn" loading>
            警示按钮 loading
        </button>
        <button type="warn" disabled>
            警示按钮 disabled
        </button>
    </view>
</view>
```
:::

### 代码示例 4： 小尺寸按钮
 
:::codeTab
```swan
<view class="wrap">
    <view class="card-area">
        <view class="top-description border-bottom">
            <view>小尺寸按钮</view>
            <view>size='mini'</view>
        </view>
        <button type="primary" size="mini">
            按钮 
        </button>
        <button type="default" size="mini">
            按钮 
        </button>
        <button type="warn" size="mini">
            按钮 
        </button>
    </view>
</view>
```
:::

### 代码示例 5： 自定义点击态
 
:::codeTab
```swan
<view class="wrap">
    <view class="card-area">
        <view class="top-description border-bottom">
            自定义点击态
        </view>
        <button type="primary" hover-class="none" bind:tap="tap">
            无点击态
        </button>
        <button type="primary" hover-start-time="1000">
            点击态延迟出现
        </button>
        <button type="primary" hover-stay-time="2000">
            点击态延迟消失
        </button>
    </view>
</view>
```
```js
Page({
    tap() {
        swan.showToast({
            title: '已点击',
            icon: 'none'
        });
    }
});
```

:::


### 代码示例 6：绑定开放能力

:::codeTab
```swan
<view class="wrap">
    <view class="card-area" s-if="{{!isWeb}}">
        <view class="top-description border-bottom">
            绑定开放能力
        </view>
       <view>
            <button type="primary" class="middle-btn" open-type="share">触发用户分享</button>
            <button type="primary" class="middle-btn" open-type="getUserInfo" bindgetuserinfo="getUserInfo">获取用户信息</button>
            <button type="primary" class="middle-btn" open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber">获取用户手机号</button>
            <button type="primary" class="middle-btn" open-type="openSetting" bindopensetting="openSetting">打开授权设置页</button>
            <button type="primary" class="middle-btn" contact open-type="contact" bindopensetting="contact">打开客服对话</button>
            <button type="primary" class="middle-btn" open-type="chooseInvoiceTitle" bindchooseInvoiceTitle="chooseInvoiceTitle">选择用户发票抬头</button>
            <button type="primary" class="middle-btn" open-type="chooseAddress" bindchooseAddress="chooseAddress">选择用户收货地址</button>
       </view>
    </view>
</view>
```
```js
Page({
    getUserInfo(e) {
        console.log('用户信息:', e);
    },
    openSetting(e) {
        console.log('用户设置:', e);
    },
    getPhoneNumber(e) {
        console.log('用户手机号:', e);
    },
    contact(e) {
        console.log('用户面板:', e);
    },
    chooseInvoiceTitle(e) {
        console.log('发票抬头:', e);
    },
    chooseAddress(e) {
        console.log('收货地址:', e);
    }
});
```
:::

### 代码示例 7： 不同类型按钮
 
:::codeTab
```swan
<view class="wrap">
    <view class="card-area">
        <view class="top-description border-bottom">
            form-type="submit/reset"
        </view>
        <form bindsubmit="submit" bindreset="reset">
            <button form-type="submit" type="primary">
                提交
            </button>
            <button form-type="reset">
                重置
            </button>
        </form>
    </view>
    <view class="card-area">
        <view class="top-description border-bottom">
            form-type="buttonclick"
        </view>
        <form>
            <button form-type="buttonclick" bindtap="buttonclick" type="primary" size="default">
                普通点击
            </button>
        </form>
    </view>
</view>
```
:::

### 代码示例 8：hover-stop-propagation属性
<a href="swanide://fragment/cfafb425898e7b2e95bca2b6e98a18371581516515058" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

 
:::codeTab
```swan
<view class="wrap">
    <view class="card-area" hover-class="hover">
        <button type="primary" hover-stop-propagation='true'>
            按钮
        </button>
    </view>
</view>
```
 
```css
.hover {
    opacity: .2;
}
.card-area {
    background-color: #5B9FFF;
}
```
:::