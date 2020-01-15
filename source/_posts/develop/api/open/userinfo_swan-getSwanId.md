---
title: swan.getSwanId
header: develop
nav: api
sidebar: userinfo_swan-getSwanId
---

 
**解释**：获取 swanid，swanid 长度不超过 100 个字符。

## 方法参数 

Object object

### `object`参数说明 

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success |Function  |  否 | |  接口调用成功的回调函数|
|fail  |  Function |   否 | |  接口调用失败的回调函数|
|complete |   Function |   否  | | 接口调用结束的回调函数（调用成功、失败都会执行）|

###  success返回参数说明  

|参数  |类型|说明 |
|---- | ---- |---- |
|errno  | String  |errno|
|data  | Object  |{swanid}|

<!--  data 返回参数说明 

|参数  |类型|说明 |
|---- | ---- |---- |
|swanid|string|由 cuid 生成|
|swanid_signature|string|对 swanid 进行校验| -->
<!-- |swanid_old|string
|swanid_old_signature |string        -->
## 示例

<a href="swanide://fragment/c1dd6988ce7a3e6d91cede5362701c931574144622515" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_getSwanId.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  


<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/getSwanId.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例 


* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="getSwanId">getSwanId</button>
</view>
<view class="container">
    <view>获取到的swanId为：</view>
    <view>{{swanId}}</view>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        swanId: ''
    },
    getSwanId() {
        swan.getSwanId({
            success: res => {
                console.log('getSwanId success', res);
                this.setData({
                    swanId: res.data.swanid
                })
                
            },
            fail: function (err) {
                console.log('getSwanId fail', err);
            }
        });
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
.container {
    word-break: break-all;
    line-height: 60rpx;
}
```
 

##  错误码
###  Android

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法|
|1001|执行失败|
|10001|内部错误|
|10002|网络无连接|

###  iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |
|10001|内部错误    |
|10002|网络无连接|
|10004|用户拒绝(user not login)|
|10005|系统拒绝|


