---
title: swan.getStorageInfo
header: develop
nav: api
sidebar:  save_swan-getStorageInfo
---


 


**解释**：异步获取当前 storage 的相关信息。

 
## 方法参数

Object object

### `object`参数说明 

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |: ---- | :---- |: ----|:----|
|success |Function |   否  | | 接口调用成功的回调函数，详见返回参数说明。|
|fail  |  Function  |  否  | | 接口调用失败的回调函数|
|complete |   Function |   否 | |   接口调用结束的回调函数（调用成功、失败都会执行）|


### success返回参数说明 ：

|参数 | 类型 | 说明|
|---- | ---- | ---- |
|keys  |  Array.&lt;string&gt; |   当前 storage 中所有的 key。|
|currentSize | Number | 当前占用的空间大小, 单位 KB。|
|limitSize |  Number |  限制的空间大小，单位 KB。|  

## 示例

<a href="swanide://fragment/eec686606577d1cd002b300acd3e88681573633461847" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
        swan.getStorageInfo({
            success: res => {
                swan.showModal({
                    title: '',
                    content: JSON.stringify(res) 
                })
                console.log('getStorageInfo success', res);
            },
            fail: err => {
                console.log('getStorageInfo fail', err);
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



## 错误码

### Android

|错误码|说明|
|:--|:--|
|1001|执行失败    |
 

