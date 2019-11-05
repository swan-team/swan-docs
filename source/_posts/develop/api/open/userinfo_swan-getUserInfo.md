---
title: swan.getUserInfo
header: develop
nav: api
sidebar: userinfo_swan-getUserInfo
---

 
**解释**：获取用户信息，首次使用的用户会弹出授权提示窗，若用户同意，则会返回用户的真实数据；若用户未登录或者拒绝授权，会返回默认用户“百度网友”及默认的头像地址。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/getUserInfo.png"  class="demo-qrcode-image" />


**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success |Function  |  否 || 接口调用成功的回调函数|
|fail  |  Function |   否 | |  接口调用失败的回调函数|
|complete |   Function |   否 || 接口调用结束的回调函数（调用成功、失败都会执行）|


**success返回参数说明**：

|参数  |类型|说明 |
|---- | ---- |---- |
|userInfo  | Object  |用户信息对象|
|data  | String  |包括敏感数据在内的完整用户信息的加密数据，加解密逻辑参考[用户数据的签名验证和加解密](https://smartprogram.baidu.com/docs/develop/api/open_log/#%E7%94%A8%E6%88%B7%E6%95%B0%E6%8D%AE%E7%9A%84%E7%AD%BE%E5%90%8D%E9%AA%8C%E8%AF%81%E5%92%8C%E5%8A%A0%E8%A7%A3%E5%AF%86)。|
|iv | String | 加密算法的初始向量|


**userInfo参数说明**：

|参数  |类型|说明 |
|---- | ---- |---- |
|nickName  | String  |用户昵称，用户未设置用户昵称时，将获取用户名。|
|avatarUrl  | String  |用户头像|
|gender | Number | 性别:值为0时是未知，为1时是男性，为2时是女性。|

**用户数据解密后字段说明**：

|参数  |类型|说明 |
|---- | ---- |---- |
|nickname  | String  |用户昵称，用户未设置用户昵称时，将获取用户名。|
|headimgurl  | String  |用户头像|
|sex | String | 性别:值为0时是未知，为1时是男性，为2时是女性。|

**示例**：
<a href="swanide://fragment/6de8312d15371a1d3d686a4cd92b637f1560170029351" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
    <view class="page-title">
        <view class="page-title-line"></view>
        <view class="page-title-text">{{title}}</view>
    </view>
</view>
```
* 在 js 文件中

```js
Page({
    data: {
        nickname: '百度网友',
        imageSrc: '../images/avator.png',
        nameColor: 'default',
        title: 'getUserInfo'
    },
    getUserInfo(e) {
        swan.getUserInfo({
            success: res => {
                let userInfo = res.userInfo;
                this.setData({
                    nickname: userInfo.nickName || '百度网友',
                    imageSrc: userInfo.avatarUrl || '../../images/avator.png',
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
            imageSrc: '../../images/avator.png',
            nameColor: 'default'
        });
    }
});
```

* 在 css 文件中

```css
.user-info {
    padding-top: 1rem;
}
.avator {
    width: .95rem;
    height: .95rem;
    margin: 0 auto;
    display: block;
    border-radius: 50%;
}
.nickname {
    font-size: .18rem;
    text-align: center;
    height: .58rem;
    line-height: .58rem;
    padding: 0 .15rem;
}
.nickname.default {
    color: #999;
}
.nickname.active {
    color: #333;
}
.button-content {
    position: relative;
    top: 0;
}
.button-content button {
    margin-top: .15rem;
    border-radius: .04rem;
}
.get-info {
    margin-top: .39rem!important;
}
.get-info::after {
    border: none;
}
.clear-info::after {
    border-color: #999;
}
```

