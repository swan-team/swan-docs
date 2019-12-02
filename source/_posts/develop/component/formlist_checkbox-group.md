---
title: checkbox-group 多项选择器组
header: develop
nav: component
sidebar: formlist_checkbox-group
---


 

**解释**：多项选择器组，内部由多个 checkbox 组成

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/checkbox.png"  class="demo-qrcode-image" />

**属性说明**

|属性名 |类型  |默认值  | 必填 |说明|
|---- | ---- | ---- |---- |---- |
|bindchange | EventHandle  | | 否 |`<checkbox-group/>`中选中项发生改变时触发 change 事件，detail = {value:[选中的checkbox的value的数组]}|

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/checkbox.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/aaacfd95fdcd62bd6cade29e143a74ed1572917879202" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <view class="title">列表选项</view>
    <view class="item-wrap">
        <checkbox-group bindchange="checkboxChange" >
            <view class='check' s-for="item in items">
                <checkbox class="check-box" value="{{item.value}}" checked="{{item.checked}}" id="{{item.id}}">{{item.text}}</checkbox>
            </view>
        </checkbox-group>
    </view>
</view>
```
* 在 js 文件中

```javascript
Page({
    data: {
        items: [
            {
                value: 'China',
                text: '中国',
                id: '1'
            },
            {
                value: 'US',
                text: '美国',
                id: '2'
            },
            {
                value: 'Britain',
                text: '英国',
                checked: true,
                id: '3'
            }
        ],
        result: []
    }
});
```
