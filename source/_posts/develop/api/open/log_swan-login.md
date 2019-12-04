---
title: swan.login
header: develop
nav: api
sidebar: log_swan-login
---
  

**解释**： 调用接口 swan.login 获取 **Authorization Code**，智能小程序可以使用`swan.login()`接口获取Authorization Code。


**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/login.png"  class="demo-qrcode-image" />



**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|timeout|	number|		否| |	超时时间，单位ms|
|success |Function  |  否 || 接口调用成功的回调函数|
|fail  |  Function |   否 | |  接口调用失败的回调函数|
|complete |   Function |   否  | | 接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**：

|参数  |类型|说明 |
|---- | ---- |---- |
|code|String|用户登录凭证（有效期十分钟）,开发者需要在开发者服务器后台调用 api，使用 code 换取 session_key 等信息。|

**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/login.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例1 获取code**

<a href="swanide://fragment/feb6bbe10081695f109a108abe6313561575445076337" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>
> 详细示例请在开发者工具中查看。

* 在 js 文件中

```js
Page({
    data: { },
    login() {
        swan.login({
            success: res => {
                console.log('login success', res) // {code: "e4a13af4e6d8c491b701a86682a5bc76NW"}
            },
            fail: err => {
                console.log('login fail', err);
            }
        });
    }
});
```

**代码示例2: 详细示例**

<a href="swanide://fragment/f8ba538b4fd2ca1ab1f3ecb326d3981c1560169713308" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>
> 详细示例请在开发者工具中查看。

* 在 js 文件中

```js
swan.login({
    success: res => {
        swan.request({
            url: 'https://xxx/xxx', // 开发者服务器地址
            data: {
                code: res.code
            }
        });
    },
    fail: err => {
        console.log('login fail', err);
    }
});
```

#### 错误码
* Andriod

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法|
|1001|执行失败|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |
|10001|内部错误   |
|10002|网络请求失败|
|10004|用户拒绝(user not login)|
|10007|请求超时|
