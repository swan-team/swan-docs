---
title: 打开智能小程序
header: develop
nav: api
sidebar: open_smartprogram
---

## swan.navigateToSmartProgram

**解释：** 打开另一个小程序。

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|appKey | String | 是 | -| 要打开的小程序App Key 。|
|path | String | 否 | -| 打开的页面路径，如果为空则打开首页 。|
|extraData | Object | 否 | -| 需要传递给目标小程序的数据，目标小程序可在 App.onLaunch()，App.onShow() 中获取到这份数据。|
|success | Function |  否  | -| 接口调用成功的回调函数|
|fail   | Function  |  否  | -| 接口调用失败的回调函数|
|complete  |  Function  |  否 | -|  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```js
swan.navigateToSmartProgram({
    appKey: '4fecoAqgCIUtzIyA4FAPgoyrc4oUc25c', // 要打开的小程序 App Key
    path: '', // 打开的页面路径，如果为空则打开首页
    extraData: {
        foo: 'baidu'
    },
    success: function (res) {
        // 打开成功
    }
});
```
<!-- #### 错误码
**Andriod**
|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法。|
|202|解析失败，请检查参数是否正确。|
|402|安全性检查：访问控制校验失败。|
|501|网络错误|
|1001|执行失败|
**iOS**
|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|402|访问控制校验失败| -->

## swan.navigateBackSmartProgram

**解释：** 返回到上一个小程序。

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|extraData | Object | 否 | -| 需要返回给上一个小程序的数据，上一个小程序可在 App.onLaunch()，App.onShow() 中获取到这份数据。|
|success | Function |  否  | -| 接口调用成功的回调函数|
|fail   | Function  |  否  | -| 接口调用失败的回调函数|
|complete  |  Function  |  否 | -|  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**
```js
swan.navigateBackSmartProgram({
    extraData: {
        foo: 'baidu'
    },
    success: function (res) {
        // 返回成功
    }
});
```
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法。|
|1001|执行失败| -->

## H5页面打开小程序

> 在百度 APP 中打开 H5 页面时，如需调起指定小程序，可在引入官方提供的 jssdk 后调用 Boxjs.init 进行鉴权，同时在success回调函数中使用该 API 接口调起小程序。


**解释**：H5 页面调起百度智能小程序。

**方法参数**：String appkey

**`appkey`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|appkey|	String|是 |-|要打开的小程序App Key|
|path|	String|	否	| -|要打开的具体页面|

**示例**：
```js
<script type="text/javascript" src="https://b.bdstatic.com/searchbox/icms/searchbox/js/boxjs-1.0.2.js"></script>
<script type="text/javascript">
        Boxjs.openSwan({
            appKey: '4fecoAqgCIUtzIy7774FAPg6yrc4o325c', 
            path: 'pages/login/login',
            success: function(res){
                console.log(JSON.stringify(res));
            },
            fail: function(err){
                console.log(JSON.stringify(err));
            }
        });
</script>
```
 