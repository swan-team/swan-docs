---
title: 配置seo
header: develop
nav: api
sidebar: seo
---
配置页面 meta 相关接口，目前仅支持 Web 化使用。
## setMetaDescription

**解释：** 设置 web 版小程序 description meta 信息。此方法为 web 版小程序专用方法，使用前需判断方法是否存在。

**参数：** Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
| content |  String  |否  | 需要设置的 description 内容|
|success |Function  |  否  | 接口调用成功的回调函数|
|fail  | Function  |  否  | 接口调用失败的回调函数|
|complete   | Function   | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```js
swan.setMetaDescription && swan.setMetaDescription({
    content: '当前小程序页面描述信息',
    success: function (res) {
        console.log('设置成功');
    },
    fail: function (res) {
        console.log('设置失败');
    },
    complete: function (res) {
	    console.log('设置失败');
    }
});
```

## setMetaKeywords

**解释：** 设置 web 版小程序 keywords meta 信息。此方法为 web 版小程序专用方法，使用前需判断方法是否存在。

**参数：** Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
| content |  String  |否  | 需要设置的 keywords 内容|
|success |Function  |  否  | 接口调用成功的回调函数|
|fail  | Function  |  否  | 接口调用失败的回调函数|
|complete   | Function   | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```js
swan.setMetaKeywords && swan.setMetaKeywords({
    content: '小程序, 关键字',
    success: function (res) {
        console.log('设置成功');
    },
    fail: function (res) {
        console.log('设置失败');
    },
    complete: function (res) {
	    console.log('设置失败');
    }
});
```


## setDocumentTitle

**解释：**动态设置当前页面的标题。此方法为 web 版小程序专用方法，使用前需判断方法是否存在。

**参数：** Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|title   |String|  是 | 页面中 title 标签中的内容 |
|success |Function |   否 |  接口调用成功的回调函数|
|fail   | Function|    否 |  接口调用失败的回调函数|
|complete   | Function   | 否|   接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```js
swan.setDocumentTitle && swan.setDocumentTitle({
    title: '我是页面标题'
});
```