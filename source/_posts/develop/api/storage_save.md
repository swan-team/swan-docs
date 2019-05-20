---
title: 存储数据
header: develop
nav: api
sidebar: storage_save
---

## swan.setStorage


**解释：**将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容。主动删除历史小程序，卸载手百，或在系统中清除百度app的缓存即可清除数据。目前单个 key 允许存储的最大数据长度无限制，没有自动清理存储机制。storage 上限 10MB，用户需主动清理，期间数据一直可用。

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|key |String | 是  |-| 本地缓存中的指定的 key|
|data  |  Object/String/Number/Array  | 是  |-| 需要存储的内容|
|success| Function |   否 |-|  接口调用成功的回调函数|
|fail  |  Function |   否  |-|接口调用失败的回调函数|
|complete   | Function   | 否 |-|  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**
<a href="swanide://fragment/17cdc0c62288d1df2ce8bdc587bcaf211540397011" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>
```js
swan.setStorage({
    key: 'key',
    data: 'value'
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
|202|解析失败，请检查参数是否正确。|
|1003|超过最大存储文件大小| -->

## swan.setStorageSync


**解释：**将数据存储在本地缓存中指定的 key 中。如果之前存在同名 key ，会覆盖掉原来该 key 对应的内容。这是一个同步接口。

**方法参数：**String key, Object/String data

**`key`参数说明**：本地缓存中的指定的 key

**`data`参数说明**：需要存储的内容

**示例：**

<a href="swanide://fragment/f07013d420a6a32eab070dccc03e9b641557726296439" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="setStorageSync">setStorageSync</button>
</view>
```

* 在 js 文件中

```js
Page({
    setStorageSync() {
        try {
            swan.setStorageSync('key', 'value');
        } catch (e) {
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
|202|解析失败，请检查参数是否正确。|
|1003|超过最大存储文件大小| -->



## swan.getStorage


**解释：**从本地缓存中异步获取指定 key 对应的内容。

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|key |String | 是 | -|  本地缓存中的指定的 key|
|success |Function   | 是  | -| 接口调用成功的回调函数，res = {data: key对应的内容}。|
|fail  |  Function  |  否  |-|  接口调用失败的回调函数|
|complete  |  Function   | 否  | -| 接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**

|参数 | 类型 |说明|
|---- | ---- | ---- |
|data   | String | key 对应的内容|

**示例：**
<a href="swanide://fragment/17cdc0c62288d1df2ce8bdc587bcaf211540397011" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>
```js
swan.getStorage({
    key: 'key',
    success: function (res) {
        console.log(res.data);
    },
    fail: function (err) {
        console.log('错误码：' + err.errCode);
        console.log('错误信息：' + err.errMsg);
    }
});
```
<!-- #### 错误码
**Andriod**
|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法|
|1001|执行失败|
**iOS**
|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。| -->

## swan.getStorageSync


**解释：**从本地缓存中同步获取指定 key 对应的内容。

**方法参数：** String key

**`key`参数说明：** 本地缓存中的指定的 key

**示例：**

<a href="swanide://fragment/bd8f752a2c02005a844cd5ad556217421557726472856" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="setStorageSync">setStorageSync</button>
</view>
```

* 在 js 文件中

```js
Page({
    getStorageSync() {
        try {
            const result = swan.getStorageSync('key');
            console.log('getStorageSync result:', result);
        } catch (e) {
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
## swan.getStorageInfo


**解释：**异步获取当前 storage 的相关信息。

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success |Function |   是  | -| 接口调用成功的回调函数，详见返回参数说明。|
|fail  |  Function  |  否  | -| 接口调用失败的回调函数|
|complete |   Function |   否 |-|   接口调用结束的回调函数（调用成功、失败都会执行）|


**success返回参数说明：**

|参数 | 类型 | 说明|
|---- | ---- | ---- |
|keys  |  Array.<string> |   当前 storage 中所有的 key。|
|currentSize | Number | 当前占用的空间大小, 单位 kB。|
|limitSize |  Number |  限制的空间大小，单位 kB。|  



**示例：**

<a href="swanide://fragment/3f94d727d054c79abf5d7ea2abeb7b761557726868852" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="getStorageInfo">getStorageInfo</button>
</view>
```

* 在 js 文件中

```js
Page({
    getStorageInfo() {
        swan.getStorageInfo({
            success: function (res) {
                console.log('getStorageInfo success', res);
            },
            fail: function (err) {
                console.log('getStorageInfo fail' + err);
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
|1001|执行失败| -->

## swan.getStorageInfoSync


**解释：**同步获取当前 storage 的相关信息。

**方法参数：** 无

**示例：**

<a href="swanide://fragment/9f944dc011c08e56e5729912272087101557726939078" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="getStorageInfoSync">getStorageInfoSync</button>
</view>
```

* 在 js 文件中

```js
Page({
    getStorageInfoSync() {
        try {
            const result = swan.getStorageInfoSync();
            console.log('getStorageInfoSync success', result);
        } catch (err) {
            console.log('getStorageInfoSync fail', err);
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