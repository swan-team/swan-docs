---
title: swan.clearStorage
header: develop
nav: api
sidebar: remove_swan-clearStorage
---



**解释**:清理本地数据缓存。  

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success |Function  |  否  | |  接口调用成功的回调函数|
|fail |   Function  |  否  | | 接口调用失败的回调函数|
|complete  |  Function  |  否  | |  接口调用结束的回调函数（调用成功、失败都会执行）|

**代码示例**：

<a href="swanide://fragment/b030af90ec924e5ee3934fa2aeccb8e91569427287486" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
swan.clearStorage({
    success: res => {
        console.log('clearStorage success');
    },
    fail: err => {
        console.log('clearStorage fail', err);
    }
})
```
#### 错误码
* Andriod

|错误码|说明|
|--|--|
|1001|执行失败   |

* iOS

|错误码|说明|
|--|--|
|401|安全校验失败   |
