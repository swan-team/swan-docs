---
title: swan.hideLoading
header: develop
nav: api
sidebar:  toast_swan-hideLoading
---

 

**解释**：隐藏 loading 提示框

**方法参数**：Object object

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success	|function	|	否||接口调用成功的回调函数|
|fail|	function	|	否	||接口调用失败的回调函数|
|complete|	function|		否||	接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/5050e3a31e5a3d2ecc1843df6fcb19511569462991855" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js

    showLoading() {
        swan.showLoading({
            title: 'loading'
        });
    },
    hideLoading() {
        swan.hideLoading();
    }

```
#### 错误码

**Andriod**

|错误码|说明|
|--|--|
|1001|执行失败|

 

