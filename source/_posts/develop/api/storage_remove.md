---
title: 存储清理
header: develop
nav: api
sidebar: storage_remove
---

## swan.removeStorage


**解释**：从本地缓存中异步移除指定 key。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|key |String  |是  | -| 本地缓存中的指定的 key|
|success |Function  |  否  | -| 接口调用成功的回调函数|
|fail |   Function  |  否  |-|  接口调用失败的回调函数|
|complete  |  Function  |  否  | -| 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/b030af90ec924e5ee3934fa2aeccb8e91569427287486" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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

<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法。|
|1001|执行失败|

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。| -->

## swan.removeStorageSync


**解释**：从本地缓存中同步移除指定 key。

**方法参数**：String key

**`key`参数说明**：本地缓存中的指定的 key。


**示例**：

* 在 js 文件中

```js
removeStorageSync() {
    try {
        swan.removeStorageSync('xxx');
        console.log('removeStorageSync success');
    } catch (err) {
        console.log('removeStorageSync fail', err);
    }
}

```

<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法。|
|1001|执行失败|

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。| -->

## swan.clearStorage


**解释**:清理本地数据缓存。  

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success |Function  |  否  |-|  接口调用成功的回调函数|
|fail |   Function  |  否  | -| 接口调用失败的回调函数|
|complete  |  Function  |  否  |-|  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

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

## swan.clearStorageSync

**解释**：同步清理本地数据缓存。

**方法参数**：无

**示例**：

```js
try {
    swan.clearStorageSync();
} catch(e) {
}
```
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|1001|执行失败 |

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。| -->