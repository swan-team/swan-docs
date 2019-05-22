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
|success |Function  |  是  | -| 接口调用成功的回调函数|
|fail |   Function  |  否  |-|  接口调用失败的回调函数|
|complete  |  Function  |  否  | -| 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/395ad953dca3b94d7ec05b420a48e9571557727036250" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="removeStorage">removeStorage</button>
</view
```

* 在 js 文件中

```js
Page({
    removeStorage() {
        swan.removeStorage({
            key: 'key',
            success: function (res) {
                console.log('removeStorage success', res);
            },
            fail: function (err) {
                console.log('removeStorage fail', err);
            }
        });
    }
});
```

* 在 css 文件中 
 
```css
 .wrap {
    padding: 50rpx 30rpx;
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

## swan.removeStorageSync


**解释**：从本地缓存中同步移除指定 key。

**方法参数**：String key

**`key`参数说明**：本地缓存中的指定的 key。


**示例**：

<a href="swanide://fragment/41efb9f3f2d0e4a34d44790d33f714521557727162319" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="removeStorageSync">removeStorageSync</button>
</view>
```

* 在 js 文件中

```js
Page({
    removeStorageSync() {
        try {
            swan.removeStorageSync('key');
            console.log('removeStorageSync success');
        } catch (err) {
            console.log('removeStorageSync fail', err);
        }
    }
});
```

* 在 css 文件中 
 
```css
 .wrap {
    padding: 50rpx 30rpx;
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


**解释： **清理本地数据缓存。  

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success |Function  |  是  |-|  接口调用成功的回调函数|
|fail |   Function  |  否  | -| 接口调用失败的回调函数|
|complete  |  Function  |  否  |-|  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/cd617d30d8fa35df29173efcddf2a0bc1557727217323" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="clearStorage">clearStorage</button>
</view>
```

* 在 js 文件中

```js
Page({
    clearStorage() {
        swan.clearStorage({
            success: function () {
                console.log('clearStorage success');
            },
            fail: function (err) {
                console.log('clearStorage fail', err);
            }
        });
    }
});
```

* 在 css 文件中 
 
```css
 .wrap {
    padding: 50rpx 30rpx;
}
```

## swan.clearStorageSync

**解释**：同步清理本地数据缓存。

**方法参数**：无

<a href="swanide://fragment/17cdc0c62288d1df2ce8bdc587bcaf211540397011" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

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