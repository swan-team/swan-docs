---
title: 背景
header: develop
nav: api
sidebar: show_background
---

## swan.setBackgroundColor

> 基础库 3.10.4 版本开始支持。

**解释**：设置窗口的背景颜色。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|backgroundColor |String | 否|  - | 需设置的背景窗口颜色，支持十六进制颜色值。11.3 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|backgroundColorTop |String | 否| - | 需设置的顶部背景窗口颜色，支持十六进制颜色值，仅ios有效。 11.3 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|backgroundColorBottom |String  |  否| - |需设置的底部背景窗口颜色，支持十六进制颜色值，仅ios有效。11.3 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|success  |  Function |   否  |-| 接口调用成功的回调函数| 
|fail  |  Function |   否  |-| 接口调用失败的回调函数| 
|complete   | Function  |  否 |-|  接口调用结束的回调函数（调用成功、失败都会执行）|  

**示例**：

<a href="swanide://fragment/261c4a5f3e104b0d7120d30651879cf51569476555815" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js

swan.setBackgroundColor({
    backgroundColor: '#000000',
    backgroundColorTop: '#222222',
    backgroundColorBottom: '#333333',
    success: res => {
        console.log('setBackgroundColor success');
    },
    fail: err => {
        console.log('setBackgroundColor fail', err);
    }
});
   
```

## swan.setBackgroundTextStyle

> 基础库 3.10.4 版本开始支持。

**解释**：设置窗口下拉背景loading样式。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|textStyle |String | 是|  - | loading图样式，仅支持light和dark 。11.3 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|success |Function  |  否 | - | 接口调用成功的回调函数 | 
|fail  |  Function |   否  | - | 接口调用失败的回调函数| 
|complete   | Function  |  否 | - |  接口调用结束的回调函数（调用成功、失败都会执行）| 

**示例**：

<a href="swanide://fragment/37955e937e5e221c983f1129861c38ae1569476821334" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js

swan.setBackgroundTextStyle({
    textStyle: 'light',
    success: res => {
        console.log('setBackgroundTextStyle success');
    },
    fail: err => {
        console.log('setBackgroundTextStyle fail', err);
    }
});
  
```
