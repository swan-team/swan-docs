---
title: 背景
header: develop
nav: api
sidebar: show_background
---

setBackgroundColor
-----

**解释：**设置窗口的背景颜色。

**参数：**Object

**Object 参数说明：**

|参数名 |类型  |必填  |默认值  |说明| 最低版本 |
|---- | ---- | ---- | ----- |---- |
|backgroundColor |String | 否|  - | 需设置的背景窗口颜色，支持十六进制颜色值 |11.3 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/tutorial/compatibility/">兼容性处理</a>|
|backgroundColorTop |String | 否| - | 需设置的顶部背景窗口颜色，支持十六进制颜色值，仅ios有效| 11.3 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/tutorial/compatibility/">兼容性处理</a>|
|backgroundColorBottom |String  |  否| - |需设置的底部背景窗口颜色，支持十六进制颜色值，仅ios有效| 11.3 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/tutorial/compatibility/">兼容性处理</a>|
|success  |  Function |   否  |-| 接口调用成功的回调函数|- |
|fail  |  Function |   否  |-| 接口调用失败的回调函数|- |
|complete   | Function  |  否 |-|  接口调用结束的回调函数（调用成功、失败都会执行）| -|

**示例：**

```js
swan.setBackgroundColor({
    backgroundColor: '#000000',
    backgroundColorTop: '#222222',
    backgroundColorBottom: '#333333'
});
```
#### 错误码

**Andriod**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|1001|执行失败|

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|

setBackgroundTextStyle
-----

**解释：**设置窗口下拉背景loading样式。

**参数：**Object

**Object 参数说明：**

|参数名 |类型  |必填  |默认值  |说明| 最低版本 |
|---- | ---- | ---- | ----- |---- |
|textStyle |String | 否|  - | loading图样式，仅支持light和dark |11.3 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/tutorial/compatibility/">兼容性处理</a>|
|success |Function  |  是 | 接口调用成功的回调函数 |-|-|
|fail  |  Function |   否  | 接口调用失败的回调函数|-|-|
|complete   | Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|-|-|

**示例：**

```js
swan.setBackgroundTextStyle({
    textStyle: 'light'
});
```
#### 错误码

**Andriod**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|1001|执行失败|

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|