---
title: swan.removeStorage
header: develop
nav: api
sidebar: remove_swan-removeStorage
---

 


**解释**：从本地缓存中异步移除指定 key。

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|key |String  |是  | | 本地缓存中的指定的 key|
|success |Function  |  否  | | 接口调用成功的回调函数|
|fail |   Function  |  否  | |  接口调用失败的回调函数|
|complete  |  Function  |  否  | | 接口调用结束的回调函数（调用成功、失败都会执行）|

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/removekey.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：


<a href="swanide://fragment/f207f3e068fe5be65a44064b8e62038f1573635193397" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
    swan.removeStorage({
        key: 'xxx',
        success: res => {
            console.log('removeStorage success', res);
        },
        fail: err => {
            console.log('removeStorage fail', err);
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
|202|解析失败，请检查参数是否正确  |

