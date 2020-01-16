---
title: Animation.rotate
header: develop
nav: api
sidebar: createanimation_Animation-rotate
---
 
 
**解释**：从原点顺时针旋转一个角度

 
## 方法参数 

Number deg,deg的范围-180~180，从原点顺时针旋转一个 deg 角度。
## 示例

 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/rotate.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/rotate.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例1 


<a href="swanide://fragment/bca91eb49e9480552201776e3b25090b1574215871646" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <view class="animation-element-wrapper">
        <view class="animation-element" animation="{{animation}}"></view>
    </view>
    <view class="card-area">
        <view class="top-description border-bottom">展示动画</view>
        <button type="primary" bindtap="rotate">rotate</button>
    </view>
</view>
```
* 在 js 文件中

```js
Page({
    data:{ },
    onReady() {
      this.animation = swan.createAnimation({
        transformOrigin: "50% 50%",
        duration: 1000,
        timingFunction: "ease",
        delay: 0})
    },
    rotate() {
      this.animation.rotate(Math.random() * 720 - 360).step()
      this.setData({animation: this.animation.export()})
    }
});
```


###  代码示例2 - 开发者自定义showModal时可用于增加动画效果 ：

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
