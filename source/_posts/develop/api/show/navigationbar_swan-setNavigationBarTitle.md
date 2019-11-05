---
title:  swan.setNavigationBarTitle
header: develop
nav: api
sidebar: navigationbar_swan-setNavigationBarTitle
---
 

**解释**：动态设置当前页面的标题。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/setNavigationBarTitle.png"  class="demo-qrcode-image" />


**方法参数**： Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|title   |String|  是 | |  页面标题|
|success |Function |   否 | |   接口调用成功的回调函数|
|fail   | Function|    否 | |   接口调用失败的回调函数|
|complete   | Function   | 否| |   接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：
<a href="swanide://fragment/66fa0985fb6f44388c9b21f76651cfe51569464933222" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
    swan.setNavigationBarTitle({
        title: 'xxx',
        success: res => {
            console.log('setNavigationBarTitle success', res);
        },
        fail: err => {
            console.log('setNavigationBarTitle fail', err);
        }
    });
```
#### 错误码

* Andriod

|错误码|说明|
|--|--|
|1001|执行失败   |



* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确   |

