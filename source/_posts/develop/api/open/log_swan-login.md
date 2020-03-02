---
title: swan.login
header: develop
nav: api
sidebar: log_swan-login
---
  

**解释**： 调用接口 swan.login 获取 **Authorization Code**，智能小程序可以使用`swan.login()`接口获取Authorization Code。

**Web 态说明:**
**初次登录：**Web 态在小程序未登录状态下登录的需要跳转到百度提供的授权登录页，在授权登录页面授权登录成功后会跳回调用登录的原小程序页面，由于登录的跳转问题导致无法还原小程序页面跳转登录页面前的运行时环境，所以配置登录成功失败回调（success、fail、complete）无法执行，为了回调无法执行 code 无法给到开发者的问题，Web 态在 app 上增加了独有的 onLogin 生命周期([详见生命周期](https://smartprogram.baidu.com/docs/develop/framework/app_service_register/))，小程序初次登录成功后框架执行开发者配置的 onLogin 钩子函数并注入 code 参数。

**登录态下再登录：**和端内一致会调用开发者配置的相应回调并注入相应的参数。


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

#

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

**代码示例3: 开发者工具中右上角的登陆态与模拟器中用户的手百登陆态不同步，对于某些接口的登陆报错，开发者需要自行调用swan.login**

<a href="swanide://fragment/f6b852fcc216ecaf9c2fb8b3e45c65971575543444468" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

> 组件模版为report-type="default"，需要用此兼容逻辑，详细示例请在开发者工具中查看。


**代码示例4: 联合登陆**

<a href="swanide://fragment/4ea2c9fd20e7a802eb3ed0fcc3f96f081576052720396" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    data: { },
    onLoad() {
        // 用户首次登陆小程序同步手百登陆态
        swan.login({
            success: res => {
                console.log('login success', res);
            },
            fail: err => {
                console.log('login fail', err);
            }
        });
    },
    onShow() {
        let that = this;
        // 用户进入小程序检测小程序在手百的登陆态是否有效
        swan.checkSession({
            success: function (res) {
                // 有效，获取用户信息
                swan.getUserInfo({
                    success: res => {
                        console.log(res)
                        let userInfo = res.userInfo;
                    },
                    fail: err => {
                        console.log(err);
                        swan.showToast({
                            title: '请先授权'
                        });
                    }
                });
            },
            fail: function (err) {
                // 无效，同步手百登陆态
                swan.login({
                    success: res => {
                        console.log('login success', res);
                    },
                    fail: err => {
                        console.log('login fail', err);
                    }
                });
            }
        });
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
