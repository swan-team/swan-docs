---
title: swan.getStorage
header: develop
nav: api
sidebar: save_swan-getStorage
---



**解释**：从本地缓存中异步获取指定 key 对应的内容。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_getStorage.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|key |String | 是 | |  本地缓存中的指定的 key|
|success |Function   | 否  | | 接口调用成功的回调函数。|
|fail  |  Function  |  否  | |  接口调用失败的回调函数|
|complete  |  Function   | 否  | | 接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明**：

|参数 | 类型 |说明|
|---- | ---- | ---- |
|data   | Object/String/Number/Array | key 对应的内容|

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

<a href="swanide://fragment/84384a223a90d8a24ee7754217b4130d1573632783248" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


> 建议先setStorage, 再getStorage

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
            <button  bindtap="setStorage" type="primary" hover-stop-propagation="true">存储数据</button>
            <button  bindtap="getStorage" type="primary" hover-stop-propagation="true" disabled="{{disabled}}">读取数据</button>
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
    valueInput(e) {
        this.setData('value', e.detail.value);
    },
    valueFocus() {
        this.setData('value', '');
    },
    keyFocus() {
        this.setData('key', '');
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
                this.toast('存储成功', 'none');
                this.setData('disabled', false);
            },
            fail: err => {
                this.toast('存储数据失败');
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
                const data = res.data;
                if (data) {
                    swan.showModal({
                        title: '数据信息',
                        content: `${key}: ${data}`,
                        showCancel: false
                    });
                } else {
                    this.toast('找不到key对应的值');
                }
            },
            fail: err => {
                this.toast('读取数据失败');
            }
        });
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

**Bugs&Tips**

通过swan.getStorage获取一个为设置的key对应值时， 目前会回调success函数并返回空字符串， 该问题会在后续版本修复，请关注公告及文档说明。
