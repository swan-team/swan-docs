---
title: 存储数据
header: develop
nav: api
sidebar: storage_save
---

## 数据缓存流程

每个百度小程序都可以有自己的本地缓存，可以通过相关 API 对本地缓存进行读写和清理，详细的方法请参见[数据存储](https://smartprogram.baidu.com/docs/develop/api/storage_save/)。

**说明：**
1. 同一个用户，同一个小程序 storage 上限为 10MB。
2. 在未登录状态，若存入了 storage 数据，则在用户登录时，数据将被继承到该账户。
3. 在用户退出登录时，将清理运行中的小程序进程，同时清空 storage 数据。

**注意：**
同一个账户退出登录后重新登录，由于退登清理策略，原账户 storage 数据将会丢失。我们不建议将关键信息全部存在 storage 中，以防出现用户频繁切换账户或用户换设备的情况。

### 基本流程

数据缓存每个 API 提供同步和异步方法，使用的基本流程如下, 以异步存储为例：
1. 添加数据缓存
将数据异步存储在本地缓存指定的 key 中。如果之前存在同名 key ，会覆盖掉原来该 key 对应的内容。
```javascript
const key = 'mockData';
const data = {
    value1: 'getStorageData1',
    value2: 'getStorageData2'
};
swan.setStorage({
    key,
    data,
    success: () => console.log('添加成功'),
    fail: () => console.log('添加失败'),
    complete: () => console.log('添加完成')
});
```
2. 获取数据缓存
从本地缓存中异步获取指定 key 对应的内容。
```javascript
// 接上例
swan.getStorage({
    key,
    success: res => console.log('获取成功', res),
    fail: () => console.log('获取失败'),
    complete: () => console.log('获取完成')
})
```
3. 删除指定数据缓存
从本地缓存中异步移除指定 key。
```javascript
// 接上例
swan.removeStorage({
    key,
    success: res => console.log('删除成功', res),
    fail: () => console.log('删除失败'),
    complete: () => console.log('删除完成')
})
```
4. 清理本地缓存
清理本地数据缓存，会将本地缓存全部删除掉。
```javascript
swan.clearStorage({
    success: res => console.log('清除成功', res),
    fail: () => console.log('清除失败'),
    complete: () => console.log('清除完成')
})
```
5. 获取当前数据缓存的信息
异步获取当前 storage 的相关信息，返回的具体信息参见 [swan.getStorageInfo](https://smartprogram.baidu.com/docs/develop/api/storage_save/#swan-getStorageInfo/)。
```javascript
swan.getStorageInfo({
    success: res => console.log(res.keys),
    fail: err => console.log('获取操作失败')
});
```


## swan.setStorage


**解释**：将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容。主动删除历史小程序，卸载手百，或在系统中清除百度app的缓存即可清除数据。目前单个 key 允许存储的最大数据长度无限制，没有自动清理存储机制。storage 上限 10MB，用户需主动清理，期间数据一直可用。

**方法参数**： Object object 

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|key|String|是||本地缓存中的指定的 key|
|data  |  Object/String/Number/Array  | 是  | | 需要存储的内容|
|success| Function |   否 | |  接口调用成功的回调函数|
|fail  |  Function |   否  | |接口调用失败的回调函数|
|complete   | Function   | 否 | |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：
<a href="swanide://fragment/f5a28a2461c85a3d8147fb9338ae5ed21560166356644" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="container">
    <view class="page-body">
        <input bind:input="keyInput" class="input" type="text" placeholder="请输入key"/>
        <input bind:input="valueInput" class="input" type="text" placeholder="请输入value"/>
        <button bind:tap="setStorage" type="primary" hover-stop-propagation="true">存储数据</button>
        <button bind:tap="getStorage" type="primary" hover-stop-propagation="true">读取数据</button>
        <button bind:tap="clearStorage" hover-stop-propagation="true">清理数据</button>
    </view>
    <view class="page-title">
        <view class="page-title-line"></view>
        <view class="page-title-text">{{title}}</view>
    </view>
</view>
```

* 在 js 文件中
```js
Page({
    data: {
        title: 'get/set/clearStorage',
        key: '',
        value: '',
        keyValue: ''
    },

    keyInput(e) {
        this.setData('key', e.detail.value);
    },

    valueInput(e) {
        this.setData('value', e.detail.value);
    },

    setStorage() {
        let key = this.hasKey();
        if (!key) {
            return;
        }
        swan.setStorage({
            key,
            data: this.getData('value'),
            success: res => {
                swan.showToast({
                    title: '存储数据成功'
                });
            },
            fail: err => {
                swan.showToast({
                    title: '存储数据失败'
                });
            }
        });
    },

    getStorage() {
        let key = this.hasKey();
        if (!key) {
            return;
        }
        swan.getStorage({
            key,
            success: res => {
                swan.showModal({
                    title: '读取数据成功',
                    content: JSON.stringify(res),
                    showCancel: false
                });
            },
            fail: err => {
                swan.showToast({
                    title: '读取数据失败'
                });
            }
        });
    },

    clearStorage() {
        swan.clearStorageSync();
        console.log('why', this.getData('keyValue'));
        this.setData('keyValue', '');
        swan.showToast({
            title: '清除数据成功'
        });
    },

    hasKey() {
        let key = this.getData('key');
        if (key) {
            return key;
        }
        swan.showToast({
            title: 'key不能为空'
        });
    }
});
```
 

## swan.setStorageSync


**解释**：将数据存储在本地缓存中指定的 key 中。如果之前存在同名 key ，会覆盖掉原来该 key 对应的内容。这是一个同步接口。

**方法参数**：String key, Object/String data

**`key`参数说明**：本地缓存中的指定的 key

**`data`参数说明**：需要存储的内容

**示例**：

<a href="swanide://fragment/f07013d420a6a32eab070dccc03e9b641557726296439" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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


**解释**：从本地缓存中异步获取指定 key 对应的内容。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|key |String | 是 | -|  本地缓存中的指定的 key|
|success |Function   | 否  | -| 接口调用成功的回调函数，res = {data: key对应的内容}。|
|fail  |  Function  |  否  |-|  接口调用失败的回调函数|
|complete  |  Function   | 否  | -| 接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明**：

|参数 | 类型 |说明|
|---- | ---- | ---- |
|data   | Object/String/Number/Array | key 对应的内容|

**示例**：
<a href="swanide://fragment/a7b2504b71ca436426b0ae155f622b8a1560166561702" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


> 在 swan/js 文件中的代码示例与[swan.setStorage](https://smartprogram.baidu.com/docs/develop/api/storage_save/#swan-setStorage/)相同


## swan.getStorageSync


**解释**：从本地缓存中同步获取指定 key 对应的内容。

**方法参数**： String key

**`key`参数说明**： 本地缓存中的指定的 key

**示例**：

<a href="swanide://fragment/bd8f752a2c02005a844cd5ad556217421557726472856" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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


**解释**：异步获取当前 storage 的相关信息。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success |Function |   否  | -| 接口调用成功的回调函数，详见返回参数说明。|
|fail  |  Function  |  否  | -| 接口调用失败的回调函数|
|complete |   Function |   否 |-|   接口调用结束的回调函数（调用成功、失败都会执行）|


**success返回参数说明**：

|参数 | 类型 | 说明|
|---- | ---- | ---- |
|keys  |  `Array.<string>` |   当前 storage 中所有的 key。|
|currentSize | Number | 当前占用的空间大小, 单位 kB。|
|limitSize |  Number |  限制的空间大小，单位 kB。|  



**示例**：

<a href="swanide://fragment/dc05ce95db3e8fe09126a85b95ee42d11559043750363" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
                console.log('getStorageInfo fail', err);
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


**解释**：同步获取当前 storage 的相关信息。

**方法参数**： 无

**示例**：

<a href="swanide://fragment/9f944dc011c08e56e5729912272087101557726939078" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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