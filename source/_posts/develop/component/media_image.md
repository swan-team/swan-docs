---
title: image 图片
header: develop
nav: component
sidebar: media_image
---



**解释**：图片，image 组件默认宽度 300px、高度 225px。


## 代码示例

<a href="swanide://fragment/61511a67d0649a8d6b0633ae108638d41576147407161" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/image.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>


###  图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/image1.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/image3.png">
    </div>              
</div>
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/image4.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/image5.png">
    </div>   
</div>
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/image2.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div> 
    </div>    
</div>

###  代码示例1 - 缩放模式  

  <a href="swanide://fragment/21139032b621d4c88d848f290fadd0bd1575135550850" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <view class="card-area">
        <view class="top-description border-bottom">
            <view>缩放模式</view>
            <view data-type="scaleToFill" bindtap="onTap">点击恢复原图</view>
        </view>
        <view class="page-section-demo">
        <image class="image" mode="{{type}}" src='https://b.bdstatic.com/miniapp/image.png' binderror="imageError" bindload="imageLoad" />
        </view> 
     </view>
        <scroll-view scroll-y='true'>
            <view class="card-area" s-for="item in array">
                <view class="top-description border-bottom">{{item.text}}</view>
                <button type="primary" class="page-section-title" data-type="{{item.mode}}" bindtap="onTap">{{item.mode}}</button>
            </view>
        </scroll-view>
</view>
```
* 在 js 文件中

```js
Page({
    data: {
      array: [{
            mode: 'scaleToFill',
            text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应',
        }, {
            mode: 'aspectFit',
            text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来',
        }, {
            mode: 'aspectFill',
            text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来',
        }, {
            mode: 'widthFix',
            text: 'widthFix：宽度不变，高度自动变化，保持原图宽高比不变',
        }],
      type: ''
    },
    imageError(e) {
      console.log('image 发生 error 事件，携带值为', e.detail.errMsg);
    },
    onTap(e) {
        console.log('image 发生 error 事件，携带值为', e.currentTarget.dataset.type);
        this.setData({'type': e.currentTarget.dataset.type})
    },
    imageLoad(e) {
      console.log('image 加载成功', e);
    },
});
```

###  代码示例2 - 裁剪模式  

  <a href="swanide://fragment/7aa0d436bf859e57db61d570b21878141575135402549" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <view class="card-area">
        <view class="top-description border-bottom">
            <view>裁剪模式</view>
            <view data-type="scaleToFill" bindtap="onTap">点击恢复原图</view>
        </view>
        <view class="page-section-demo">
        <image class="image" mode="{{type}}" src='https://b.bdstatic.com/miniapp/image.png' binderror="imageError" bindload="imageLoad" />
        </view> 
     </view>
        <scroll-view scroll-y='true'>
            <view class="card-area" s-for="item in array">
                <view class="top-description border-bottom">{{item.text}}</view>
                <button type="primary" class="page-section-title" data-type="{{item.mode}}" bindtap="onTap">{{item.mode}}</button>
            </view>
        </scroll-view>
</view>
```
* 在 js 文件中

```js
Page({
    data: {
      array: [{
            mode: 'top',
            text: 'top：不缩放图片，只显示图片的顶部区域'
        }, {
            mode: 'bottom',
            text: 'bottom：不缩放图片，只显示图片的底部区域'
        }, {
            mode: 'center',
            text: 'center：不缩放图片，只显示图片的中间区域'
        }, {
            mode: 'left',
            text: 'left：不缩放图片，只显示图片的左边区域'
        }, {
            mode: 'right',
            text: 'right：不缩放图片，只显示图片的右边边区域'
        }, {
            mode: 'top left',
            text: 'top left：不缩放图片，只显示图片的左上边区域'
        }, {
            mode: 'top right',
            text: 'top right：不缩放图片，只显示图片的右上边区域'
        }, {
            mode: 'bottom left',
            text: 'bottom left：不缩放图片，只显示图片的左下边区域'
        }, {
            mode: 'bottom right',
            text: 'bottom right：不缩放图片，只显示图片的右下边区域'
        }],
      type: ''
    },
    imageError(e) {
      console.log('image 发生 error 事件，携带值为', e.detail.errMsg);
    },
    onTap(e) {
        console.log('image 发生 error 事件，携带值为', e.currentTarget.dataset.type);
        this.setData({'type': e.currentTarget.dataset.type})
    },
    imageLoad(e) {
      console.log('image 加载成功', e);
    },
  });
```
###  代码示例3 - 可放动图  

  <a href="swanide://fragment/a1ee4d3565a01e332c54460933b1c8ca1575135782389" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<image src='https://b.bdstatic.com/miniapp/images/radio.gif'/>
```

##  属性说明 

|属性名 |类型  |默认值  | 必填 |说明|
|:---- |: ---- |: ---- |:---- |:---- |
| src | String  |  | 否 |图片资源地址|
| mode | String  | scaleToFill | 否 |图片裁剪、缩放的模式|
|lazy-load | Boolean  |false | 否 |图片懒加载，在图片即将进入一定范围（距离当前屏50px）时才开始进行加载。|
| binderror |HandleEvent | | 否 |当错误发生时，发布到 AppService 的事件名，事件对象 event.detail = {errMsg: 'something wrong'}|
| bindload | HandleEvent  | | 否 |当图片载入完毕时，发布到 AppService 的事件名，事件对象 event.detail = {height:'图片高度px', width:'图片宽度px'}|


###  mode 有效值  

有 13 种模式，其中 4 种是缩放模式，9 种是裁剪模式。

|模式 |值  |说明|
|:--- | :---- |:---- |
| 缩放 | scaleToFill  |不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素|
| 缩放 |aspectFit  |保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。|
| 缩放 | aspectFill  |保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。|
| 缩放 | widthFix |宽度不变，高度自动变化，保持原图宽高比不变|
| 裁剪 | top |不缩放图片，只显示图片的顶部区域|
| 裁剪 | bottom |不缩放图片，只显示图片的底部区域|
| 裁剪 | center |不缩放图片，只显示图片的中间区域|
| 裁剪 | left |不缩放图片，只显示图片的左边区域|
| 裁剪 | right |不缩放图片，只显示图片的右边区域|
| 裁剪 | top left |不缩放图片，只显示图片的左上区域|
| 裁剪 | top right |不缩放图片，只显示图片的右上区域|
| 裁剪 | bottom left |不缩放图片，只显示图片的左下区域|
| 裁剪 | bottom right |不缩放图片，只显示图片的右下区域|

##  Bug & Tip 

* Tip：支持设置 CSS background-position 属性，但是不推荐使用，会影响对应 mode 类型的展示。
* Tip：image 组件默认宽度 300px、高度 225px。
