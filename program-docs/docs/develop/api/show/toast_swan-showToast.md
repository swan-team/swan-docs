---
title: swan.showToast
header: develop
nav: api
sidebar:  toast_swan-showToast
# webUrl: https://qft12m.smartapps.cn/subPackages/apiPackage/pages/toast/toast
---
 

**解释**：显示消息提示框

 
## 方法参数 

Object object

###  `object`参数说明  

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|title  | String | 是  | | 提示的内容 |
|icon | String | 否  | success|图标，有效值` "success"、"loading"、"none"`。 |
|image  |  String | 否 | | 自定义图标的本地路径，image 的优先级高于 icon |
|duration  |  Number | 否 |  2000| 提示的延迟时间，单位毫秒。 |
|success| Function |   否 | | 接口调用成功的回调函数 |
|fail  |  Function |   否  | | 接口调用失败的回调函数 |
|complete   | Function |   否| |  接口调用结束的回调函数（调用成功、失败都会执行）|
|mask|Boolean|否|false|是否显示透明蒙层，防止触摸穿透。|

###  icon有效值 

|有效值 |说明  |
|:-|:-|
|success | 显示成功图标，此时 title 文本最多显示 7 个汉字长度。默认值 |
|loading |显示加载图标，此时 title 文本最多显示 7 个汉字长度。|
|none |不显示图标，此时 title 文本最多可显示两行。  |
## 示例

<a href="swanide://fragment/6ab6a7ea0d57b42271c6d6817f0707c01574132977216" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>
 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_Toast.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

 

### 代码示例 



* 在 swan 文件中

```html
<view class="container">
    <view>
        <view class="card-area"> 
            <button data-title="success" data-icon="success" bindtap="tapHandle" type="primary" hover-stop-propagation="true">点击弹出成功toast</button>   
        </view>
        <view class="card-area">   
            <button data-title="loading" data-icon="loading" bindtap="tapHandle" type="primary" hover-stop-propagation="true">点击弹出loading toast</button>   
        </view>
        <view class="card-area">      
            <button data-title="none" data-icon="none" bindtap="tapHandle" type="primary" hover-stop-propagation="true">点击弹出无图标toast</button>   
        </view>
        <view class="card-area">
            <button bindtap="tapHandleDuration" type="primary" hover-stop-propagation="true">点击弹出延时toast  {{num}}</button>   
        </view>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        num: 5
    },
    tapHandle(e) {
        this.toast(e.currentTarget.dataset.title, e.currentTarget.dataset.icon);
    },
    toast(title, icon) {
        swan.showToast({
            title, 
            icon,
            mask: false, // 此属性设置为true不能打断toast
            success: res => {
                console.log('showToast success', res);
            },
            fail: err => {
                console.log('showToast fail', err);
            }
        })
    },
    tapHandleDuration() {
        let that = this;
        swan.showToast({
            title: '延时5s', 
            icon: 'none',
            mask: false,
            duration: 5000,
            success: res => {
                console.log('showToast success', res);
                let num = 5;
                let interval = setInterval(function() {
                    num = num - 1;
                    that.setData({num: num});
                    if(num === 0) {
                        clearInterval(interval);
                    }
                }, 1000);
                console.log('num', num);
            },
            fail: err => {
                console.log('showToast fail', err);
            }
        })
    }
});
```

### 代码示例2 - 开发者可自定义showToast样式 

<a href="swanide://fragment/392bbc1fb46cce63621c37aac706635e1575824847831" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="clickbtn"> 点击 </button>
    <view animation="{{animationData}}" class="toast-view" s-if="{{showModalStatus}}">要显示的内容
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        animationData: "",
        showModalStatus: false
    },
    showModal() {
        var animation = swan.createAnimation({ 
            duration: 200,  
            timingFunction: "linear",  
            delay: 0  
        })  
        animation.translateY(200).step()
        this.setData({
            animationData: animation.export(),
            showModalStatus: true
        })
        let that = this;
        setTimeout(function () { 
            animation.translateY(0).step()  
            that.setData({
                animationData: animation.export()  
            })  
        }, 200)  
        setTimeout(function () {
            if(that.data.showModalStatus){ 
                that.hideModal();
            }  
        }, 5000)  
    },  
    clickbtn() {  
        if(this.data.showModalStatus){  
            this.hideModal();  
        }
        else {  
            this.showModal();  
        }  
    },  
    hideModal() {  
        this.setData({
            showModalStatus: false
        })
    },  
})
```

### 代码示例3 - showModal和showToast是否可共存 

<a href="swanide://fragment/2a833f9c7f164efca05ade83ff9869de1576559710455" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="container">
    <view>
        <view class="card-area"> 
            <view class="top-description border-bottom">showModal和showToast可共存</view>
            <button data-title="success" data-icon="success" bindtap="showToast" type="primary" hover-stop-propagation="true">点击弹出toast</button>   
            <button data-title="loading" data-icon="loading" bindtap="showModal" type="primary" hover-stop-propagation="true">点击弹出modal</button>   
        </view>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    data: { },
    showToast(e) {
        this.toast(e.currentTarget.dataset.title, e.currentTarget.dataset.icon);
    },
    toast(title, icon) {
        swan.showToast({
            title, 
            icon,
            mask: false, // 此属性设置为true不能打断toast
            success: res => {
                console.log('showToast success', res);
            },
            fail: err => {
                console.log('showToast fail', err);
            }
        })
    },
    showModal(){
       swan.showModal({
           title: 'title',
           content: 'content'
       });
    }
});
```



##   错误码
### Android

|错误码|说明|
|:--|:--|
|202|解析失败，请检查参数是否正确      |
|302|找不到调起协议对应端能力方法|

### iOS

|错误码|说明|
|:--|:--|
|202|解析失败，请检查参数是否正确      |


## Bug&Tip  

* Tip：[swan.showLoading](https://smartprogram.baidu.com/docs/develop/api/show/toast_swan-showLoading/) 和 swan.showToast 同时只能显示一个。
* Tip：swan.showToast 应与 [swan.hideToast](https://smartprogram.baidu.com/docs/develop/api/show/toast_swan-hideToast/) 配对使用。

