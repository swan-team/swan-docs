---
title: slider 滑动选择器
header: develop
nav: component
sidebar: formlist_slider
---

 

**解释**：滑动选择器

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/slider.png"  class="demo-qrcode-image" />

**属性说明**：

|属性名 |类型  |默认值  | 必填 |说明|
|---- | ---- | ---- |---- |---- |
| min | Number  | 0  | 否 |最小值|
| max | Number  |100  | 否 |最大值|
| step |Number  |1 | 否 |步长，取值必须大于 0，并且可被 (max - min) 整除|
| disabled | Boolean |false  | 否 |是否禁用|
| value | Number  |0 | 否 |当前取值|
| backgroundColor | Color  |#cccccc  | 否 |背景条的颜色|
| block-size | Number  |24 | 否 |滑块的大小，取值范围为 12 - 28|
| block-color | Color  |#ffffff | 否 |滑块的颜色|
| activeColor | Color  |#3c76ff | 否 |已选择的颜色|
|show-value |Boolean  |false | 否 |是否显示当前 value|
|bindchange | EventHandle  | | 否 |完成一次拖动后触发的事件，event.detail = {value: value}|
|bindchanging |EventHandle |  | 否 |拖动过程中触发的事件，event.detail = {value: value}|

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/slider.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/d47270bf31719f0e0ff2dc7975f968861565503527422" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <view class="title">设置step</view>
    <slider min="0" max="1500" value="200" step="30" bind:change="sliderChange" disabled="false"></slider>
    <view class="title">显示当前value</view>
    <slider min="0" max="1500" value="421" show-value bind:change="sliderChange"></slider>
    <view class="title">设置最小最大值</view>
    <slider min="200" max="1500" value="330" show-value bind:change="sliderChange"></slider>
    <view class="title">自定义样式</view>
    <slider min="200" max="1500" value="330" block-size='12' activeColor="#8FB1FF" bindchanging="changing" block-color="#6895FF" backgroundColor="#fff" show-value bind:change="sliderChange"></slider>
</view>

```
* 在 js 文件中

```javascript
Page({
    sliderChange(e) {
        console.log(e);
    },
    changing(e){
        console.log(e);
    }
});
```
