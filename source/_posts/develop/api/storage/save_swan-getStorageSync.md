---
title: swan.getStorageSync
header: develop
nav: api
sidebar: save_swan-getStorageSync
---

 

**解释**：从本地缓存中同步获取指定 key 对应的内容。

**方法参数**： String key

**`key`参数说明**： 本地缓存中的指定的 key

**图片示例**：

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

**代码示例**：

<a href="swanide://fragment/67afe5dddb614eba763185066b2e60ea1573632298467" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
        try {
            swan.setStorageSync(key, this.getData('value'));
            this.toast('存储成功', 'none');
            this.setData('disabled', false);
        } catch (e) {
            swan.showModal({
                title: '存储失败',
                content: JSON.stringify(e)
            });
        }
    },
    getStorageSync() {
        let key = this.hasKey();
        if (!key) {
            return;
        }
        try {
            const result = swan.getStorageSync(key);
            console.log('getStorageSync result:', result);
            swan.showModal({
                title: '数据信息',
                content: result,
                showCancel: false
            });
        } catch (e) {
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
|202|解析失败，请检查参数是否正确      |
