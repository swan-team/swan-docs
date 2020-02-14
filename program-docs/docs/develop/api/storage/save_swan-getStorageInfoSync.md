---
title: swan.getStorageInfoSync
header: develop
nav: api
sidebar: save_swan-getStorageInfoSync
---


 
 

**解释**：同步获取当前 storage 的相关信息。

 

## 方法参数 

 无

## 示例

<a href="swanide://fragment/442cea61078f7f6be45b83f18adbd1011577107794182" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_getStorageInfo.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>


### 图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/getStorageInfo.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 



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
             <button  bindtap="getStorageInfo" type="primary" disabled="{{disabled}}">获取存储数据信息</button>
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
 getStorageInfo() {
        let res = swan.getStorageInfoSync();
        // 基础库 3.140.1 之前，无法判断接口是否调用失败
        // 基础库 3.140.1 及以后，通过 instanceof 来判断接口是否调用失败
        if (!(res instanceof Error)) {
            console.log('getStorageInfoSync success', res);
        }
        else {
            console.log('getStorageInfoSync fail', res.message);
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


## 错误码

### Android

|错误码|说明|
|:--|:--|
|1001|执行失败  |

## Bug & Tip 
* 基础库 3.140.1 之前，无法判断接口是否调用失败。
* 基础库 3.140.1 及以后，接口调用失败时会返回一个标准的`Error`对象，可通过`instanceof`来判断接口是否调用失败。