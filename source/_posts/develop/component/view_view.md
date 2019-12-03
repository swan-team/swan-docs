---
title: view 视图容器
header: develop
nav: component
sidebar: view_view
---


**解释**：视图容器，相当于 html 中的 div ，可将页面分割为独立的、不同的部分。如果需要使用滚动视图，请使用 [scroll-view](/develop/component/view_scroll-view/)。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/view.png"  class="demo-qrcode-image" />


## 属性说明


|属性名 |类型  |默认值  |必填|说明| 
|---- | ---- | ---- |---- |---- | 
|hover-class | String  |  none  | 否|指定按下去的样式类。当  hover-class="none"  时，没有点击态效果|
|hover-stop-propagation| Boolean  | false |否 |指定是否阻止本节点的祖先节点出现点击态|
|hover-start-time| Number | 50 |否 |按住后出现点击态的时间长度，单位毫秒|
|hover-stay-time| Number |400 | 否|手指松开后点击态保留的时间长度，单位毫秒|


## 示例

### **图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/view.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### **代码示例**

<a href="swanide://fragment/0ec2ff19098945ea7ea26197454e741f1565503534116" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>



```html
// 在 swan 文件中
<view>
    <view class="title">横向布局</view>
    <view class="rowlike">
        <view class="color-a" hover-class="hover" hover-start-time="100" hover-stay-time="200" hover-stop-propagation="false">
            <text>A</text>
        </view>
        <view class="color-b">
            <text>B</text>
        </view>
        <view class="color-c">
            <text>C</text>
        </view>
    </view>
</view>

<view class="bottom-block">
    <view class="title">纵向布局</view>
    <view class="collike">
        <view class="color-a">
            <text>A</text>
        </view>
        <view class="color-b">
            <text>B</text>
        </view>
        <view class="color-c">
            <text>C</text>
        </view>
    </view>
</view>
```

## **Bug&Tip** 

* Tip：如果需要使用滚动视图，请使用 scroll-view。
* Tip：从基础库版本1.12.0开始支持事件捕获、冒泡。
