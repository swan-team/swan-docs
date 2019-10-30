---
title: swan.checkSession
header: develop
nav: api
sidebar: log_swan-checkSession
---

 

**解释**：通过上述接口获得的用户登录态拥有一定的时效性，用户越久未使用智能小程序，用户登录态越有可能失效；反之如果用户一直在使用智能小程序，则用户登录态一直保持有效。具体时效逻辑由宿主维护，对开发者透明。开发者可以调用 swan.checkSession 接口 **检测当前用户登录态是否有效**，登录态过期后开发者可以再调用 swan.login 获取新的用户登录态。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success |Function  |  否 |  |  用户登录态的回调函数，百度APP版本11.16（不包括11.16）之前会以result的值标识Session Key是否失效|
|fail  |  Function |   否 |  |  用户非登录态的回调函数，百度APP版本11.16（包括11.16）之后Session Key失效/百度APP未登录会直接走fail回调|
|complete |   Function |   否  |   |接口调用结束的回调函数（调用成功、失败都会执行）|

**示例一**：在百度APP版本11.16（不包括11.16）之前建议按照如下示例使用

<a href="swanide://fragment/2a052b4283fb1e23d02a69dae170f1331572274389729" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
swan.checkSession({
    success: function (res) {
        swan.showModal({
            title: '',
            content: '用户在小程序中登陆态有效'
        });
        if(!res.result){
            swan.showModal({
                title: '',
                content: '用户在小程序中登陆态无效,调用swan.login可获取有效Session Key',
            });
            swan.login({
                success: res => {
                    console.log('login success', res);
                },
                fail: err => {
                    console.log('login fail', err);
                }
            });
        }
    },
    fail: function (err) {
        swan.showModal({
            title: '',
            content: '用户在小程序中登陆态无效,请先登陆百度APP',
        });
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
```

**示例二**：在百度APP版本11.16（包括11.16）之后建议按照如下示例使用

<a href="swanide://fragment/3bf18e6a967cec2a94c8ae9ee93d78cd1572274602042" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    swan.checkSession({
        success: function (res) {
            swan.showModal({
                title: '',
                content: '用户在小程序中登陆态有效'
            });
        },
        fail: function (err) {
            swan.showModal({
                title: '',
                content: '用户在小程序中登陆态无效,调用swan.login可获取有效登陆态',
            });
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
});

```
**Bug & Tip**
bug: 和其他API套用会破坏swan.login在页面onShow中的调用频次限制，建议在onShow中单独使用swan.login或在onLoad中套用
#### 错误码
* Andriod

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法|
|1001|执行失败|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确|
|10001|内部错误  |
|10002|网络请求失败|
|10004|用户拒绝(user not login)|



