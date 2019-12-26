---
title: swan.showModal
header: develop
nav: api
sidebar: toast_swan-showModal
---
 

**解释**：显示模态弹窗

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/modal.png"  class="demo-qrcode-image" />


**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|title  | String|  否 | | 提示的标题|
|content |String | 否 | |  提示的内容|
|showCancel | Boolean|否  | true| 是否显示取消按钮 。|
|cancelText  |String | 否  |取消|取消按钮的文字，最多 4 个字符。|
|cancelColor |HexColor|    否  |#000000| 取消按钮的文字颜色。|
|confirmText |String | 否 | 确定| 确定按钮的文字，最多 4 个字符。|
|confirmColor |   HexColor  |  否 |#3c76ff|  确定按钮的文字颜色。|
|success| Function|    否  | | 接口调用成功的回调函数|
|fail   | Function  |  否  | |接口调用失败的回调函数|
|complete   | Function  |  否  | | 接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明**：

|参数名 |类型  |说明|
|---- | ---- | ---- |
|confirm |Boolean |为 true 时，表示用户点击了确定按钮 。 |
|cancel | Boolean |为 true 时，表示用户点击了取消。|


**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/modal.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例1**：

<a href="swanide://fragment/5c627d19fa5b2a32d819f3e658edd8d81577331126731" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="container">
    <view>
        <view class="card-area">
            <view class="top-description border-bottom">有标题的modal, 取消显示文字</view>
            <button bindtap="showModal" type="primary" hover-stop-propagation="true">button</button>
        </view>
        <view class="card-area">
            <view class="top-description border-bottom">无标题的modal</view>
            <button bindtap="showModalNotitle" type="primary" hover-stop-propagation="true">button</button>
        </view>
        <view class="card-area">
            <view class="top-description border-bottom">无标题无内容的modal</view>
            <button bindtap="showModalNotitleNocontent" type="primary" hover-stop-propagation="true">button</button>
        </view>
    </view>
</view>
```

* 在 js 文件中

```js
showModal() {
    swan.showModal({
        title: '标题',
        content: '提示内容、告知状态、信息和解决方法，描述尽量控制在两行内',
        showCancel: false,
        success: res => {
            console.log('showModal success', res);
        },
        fail: err => {
            console.log('showModal fail', err);
        }
    });
}

showModalNotitle() {
    swan.showModal({
        content: '提示内容、告知状态、信息和解决方法，描述尽量控制在两行内',
        confirmText: '确定',
        confirmColor: '色值',
        cancelText: '取消',
        cancelColor: '确定',
        success: res => {
            console.log('showModal success', res);
        },
        fail: err => {
            console.log('showModal fail', err);
        }
    });
}
showModalNotitleNocontent() {
     swan.showModal({
         confirmText: '确定',
         cancelText: '取消'
     });
 }
```

**代码示例2 - 开发者可在操作modal后进行业务逻辑**：

<a href="swanide://fragment/f722c61b2e5961678fbce43a0ce91fae1575137772883" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    showModal() {
        swan.showModal({
            title: 'title',
            content: 'content',
            success(res) {
                console.log(res)
                if (res.confirm) {
                    console.log('用户点击了确定');
                }
                else if(res.cancel) {
                    console.log('用户点击了取消');
                }
            }
        });
    }
});
```

**代码示例3 - 开发者可自定义一个showModal**：

<a href="swanide://fragment/61795a5776be2b566d76fca046f33c941575822870950" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="showModal" data-statu="open">点我打开自定义弹窗</button>  
    <!--mask-->  
    <view class="mask" bindtap="showModal" data-statu="close" s-if="{{showModalStatus}}"></view>  
    <!--content-->  
    <view animation="{{animationData}}" class="showModal-box" s-if="{{showModalStatus}}">  
    <view class="showModal-title">标题</view>  
    <view class="showModal-content">  
       <view class="border-bottom">可自定义展示接口请求返回的数据</view>
       <view s-for="item, index in data" class="border-bottom">
           <view>{{index}}</view>
           <view>价钱：{{item.money}}</view>
           <view>途径：{{item.source}}</view>
           <view>类型：{{item.type}}</view>
           <view>满减活动：{{item.upTo}}</view>
        </view>
    </view>  
    <view class="confirm" bindtap="showModal" data-statu="close">确定</view>  
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        showModalStatus: false,
        data: {}
    },
    showModal(e) {
        var currentStatu = e.currentTarget.dataset.statu;
        this.animation(currentStatu);
        this.request();
    },
    animation(currentStatu){
        var animation = swan.createAnimation({
            duration: 1000,  
            timingFunction: "ease",
            delay: 0  
        });
        animation.opacity(0).rotateX(-100).step();
        this.setData({
            animationData: animation.export()
        })
        setTimeout(function () {
            animation.opacity(1).rotateX(0).step();
            this.setData({
                animationData: animation
            }) 
            if (currentStatu == "close") {
                this.setData({showModalStatus: false});
            }
        }.bind(this), 200)
        if (currentStatu == "open") {
            this.setData({showModalStatus: true});
        }
    },
    request() {
        swan.request({
            url: 'https://sfc.baidu.com/shopping/nianhuo/bimai',
            header: {
                'content-type': 'application/json'
            },
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            data: {
                key: 'value'
            },
            success: res => {
                this.setData({
                    data: res.data.data.couponList
                })
            },
            fail: err => {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });
    }
})
```

            


                                      
#### 错误码
* Andriod

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法|
* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |


