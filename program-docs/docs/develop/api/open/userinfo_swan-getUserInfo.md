---
title: swan.getUserInfo
header: develop
nav: api
sidebar: userinfo_swan-getUserInfo
# webUrl: https://qft12m.smartapps.cn/subPackages/apiPackage/pages/getUserInfo/getUserInfo
---

 
**解释**：获取用户信息，首次使用的用户会弹出授权提示窗，若用户同意，则会返回用户的真实数据；若用户未登录或者拒绝授权，会返回默认用户“百度网友”及默认的头像地址。使用该 API 需通过[获取用户权限设置](https://smartprogram.baidu.com/docs/develop/api/open/authorize_set/)申请授权后方可对用户发起授权申请，可在[需授权接口列表](https://smartprogram.baidu.com/docs/develop/api/open/authorize_list/)中查看相关错误码信息。

 
## 方法参数 

Object object

### `object`参数说明 

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|success |Function  |  否 || 接口调用成功的回调函数|
|fail  |  Function |   否 | |  接口调用失败的回调函数|
|complete |   Function |   否 || 接口调用结束的回调函数（调用成功、失败都会执行）|


### success返回参数说明  

|参数  |类型|说明 |
|---- | ---- |---- |
|userInfo  | Object  |用户信息对象|
|data  | String  |包括敏感数据在内的完整用户信息的加密数据，加解密逻辑参考[用户数据的签名验证和加解密](https://smartprogram.baidu.com/docs/develop/api/open/log_userdata/)。|
|iv | String | 加密算法的初始向量|


### userInfo参数说明  

|参数  |类型|说明 |
|---- | ---- |---- |
|nickName  | String  |用户昵称，用户未设置用户昵称时，将获取用户名。|
|avatarUrl  | String  |用户头像|
|gender | Number | 性别:值为0时是未知，为1时是男性，为2时是女性。|

### 用户数据解密后字段说明  

|参数  |类型|说明 |
|---- | ---- |---- |
|nickname  | String  |用户昵称，用户未设置用户昵称时，将获取用户名。|
|headimgurl  | String  |用户头像|
|sex | String | 性别:值为0时是未知，为1时是男性，为2时是女性。|
|openid | String | 用户openid|
## 示例

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/getUserInfo.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

 

###   代码示例1 - API获取用户信息（授权后拿到的信息可提交到服务器保存） ：

<a href="swanide://fragment/3be63537f1edd6d143ee0333f16f346f1575201970930" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="container">
    <view class="user-content">
        <view class="user-info">
            <image class="avator" src="{{imageSrc}}"></image>
            <view class="nickname {{nameColor}}">{{nickname}}</view>
        </view>
        <view class="button-content">
            <button bind:tap="getUserInfo" class="get-info" type="primary" hover-stop-propagation="true">获取用户信息</button>
            <button bind:tap="clearUserInfo" class="clear-info" type="default" hover-stop-propagation="true">清空</button>
        </view>
    </view>
</view>
```
* 在 js 文件中

```js
Page({
    data: {
        nickname: '百度网友',
        imageSrc: '../images/avator.png',
        nameColor: 'default'
    },
    getUserInfo(e) {
        swan.getUserInfo({
            success: res => {
                // 用户在首次使用小程序时拒绝授权，可使用此api在合适的业务时机提醒用户再次授权
                // swan.openSetting({});
                let userInfo = res.userInfo;
                this.setData({
                    nickname: userInfo.nickName,
                    imageSrc: userInfo.avatarUrl,
                    nameColor: 'active'
                });
            },
            fail: err => {
                console.log(err);
                swan.showToast({
                    title: '请先授权'
                });
            }
        });
    },
    clearUserInfo(e) {
        this.setData({
            nickname: '百度网友',
            imageSrc: '../images/avator.png',
            nameColor: 'default'
        });
    }
});
```

###   代码示例2 - open-data组件获取用户信息(与API的区别是用户不需要授权，只能在页面中展示) ：

<a href="swanide://fragment/d84c7124420f7d8767bced690acec10c1575202052676" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="open-data">
    <view class="avatar">
        <open-data class="avatar-img" type="userAvatarUrl"></open-data>
    </view>
    <view class="section">
        <view class="sec">
            <view class="sec_left">昵称</view>
            <view class="sec_right">
                <open-data class="sec_left" type="userNickName"></open-data>
            </view>
        </view>
        <view class="sec">
            <view class="sec_left">性别</view>
            <view class="sec_right">
                <open-data class="sec_left" type="userGender"></open-data>
            </view>
        </view>
    </view>
</view>
```

###   代码示例3 - button组件获取用户信息 ：

<a href="swanide://fragment/8f079b427dd985c2988f2a3b85da73431575205539816" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <button type="primary" class="middle-btn" open-type="getUserInfo" bindgetuserinfo="getUserInfo">获取用户信息按钮</button>
</view>
```

* 在 js 文件中

```js
Page({
    getUserInfo(e) {
        console.log(e.detail.userInfo.nickName)
        console.log(e.detail.userInfo.avatarUrl)
        console.log(e.detail.userInfo.gender)
    }
});
```
