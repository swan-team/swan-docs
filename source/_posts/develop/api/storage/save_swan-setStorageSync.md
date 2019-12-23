---
title: swan.setStorageSync
header: develop
nav: api
sidebar: save_swan-setStorageSync
---


 
**解释**：将数据存储在本地缓存中指定的 key 中。如果之前存在同名 key，会覆盖掉原来该 key 对应的内容。这是一个同步接口。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_setStorage.png"  class="demo-qrcode-image" />

**方法参数**：String key, Object/String data

**`key`参数说明**：本地缓存中的指定的 key

**`data`参数说明**：需要存储的内容

**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/storage.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**

<a href="swanide://fragment/5146563edbf8593329266a8976c0b6931577107860591" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="container">
    <view class="card-area">
        <view class="list-area border-bottom">
            <label class="list-item-key-4">key</label>
            <input class="list-item-value" bindfocus="keyFocus" bindinput="keyInput" type="text" value="{{key}}" placeholder="请输入key"/>
        </view>
        <view class="list-area border-bottom">
            <label class="list-item-key-4">value</label>
            <input class="list-item-value" bindfocus="valueFocus" bindinput="valueInput" type="text" value="{{value}}" placeholder="请输入value"/>
        </view>
        <view>
            <button  bindtap="setStorageSync" type="primary" hover-stop-propagation="true">存储数据</button>
            <button  bindtap="getStorageSync" type="primary" hover-stop-propagation="true" disabled="{{disabled}}">读取数据</button>
        </view>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        key: '示例Key',
        value: '示例Value',
        disabled: true
    },
    keyInput(e) {
        this.setData('key', e.detail.value);
    },
    valueFocus() {
        this.setData('value', '');
    },
    keyFocus() {
        this.setData('key', '');
    },
    valueInput(e) {
        this.setData('value', e.detail.value);
    },
    setStorageSync() {
        let key = this.hasKey();
        if (!key) {
            return;
        }
        let res = swan.setStorageSync(key, this.getData('value'));

        // 基础库 3.140.1 之前，无法判断接口是否调用失败
        // 基础库 3.140.1 及以后，通过 instanceof 来判断接口是否调用失败
        if (!res.errCode || !res.errMsg && !(res instanceof Error)) {
            this.toast('存储成功', 'none');
            this.setData('disabled', false);
        }
        else {
            swan.showModal({
                title: '存储失败',
                content: res.message
            });
        }
    },
    getStorageSync() {
        let key = this.hasKey();
        if (!key) {
            return;
        }
        let res = swan.getStorageSync(key);

        // 基础库 3.140.1 之前，无法判断接口是否调用失败
        // 基础库 3.140.1 及以后，通过 instanceof 来判断接口是否调用失败
        if (!(res instanceof Error)) {
            console.log('getStorageSync success:', res);
            swan.showModal({
                title: '数据信息',
                content: res,
                showCancel: false
            });
        }
        else {
            this.toast('找不到key对应的值');
        }
    },
    hasKey() {
        let key = this.getData('key');
        if (key) {
            return key;
        }
        this.toast('key不能为空');
    },
    toast(title, icon = 'none') {
        swan.showToast({title, icon});
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
|202|解析失败，请检查参数是否正确|
|1003|超过最大存储文件大小|

**Bug & Tip**

* 基础库 3.140.1 之前，无法判断接口是否调用失败。
* 基础库 3.140.1 及以后，接口调用失败时会返回一个标准的`Error`对象，可通过`instanceof`来判断接口是否调用失败。
