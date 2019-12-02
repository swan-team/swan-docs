---
title: switch 开关选择器
header: develop
nav: component
sidebar: formlist_switch
---

 

**解释**： 开关选择器

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/switch.png"  class="demo-qrcode-image" />

属性说明

|属性名 |类型  |默认值  | 必填 |说明|
|---- | ---- | ---- |---- |---- |
|checked| Boolean| false| 否 |是否选中|
|type| String| switch| 否 |样式，有效值：switch,checkbox|
|color| Color| #3388ff| 否 |switch 的颜色，同 CSS 的 color|
|disabled|	Boolean|	false| 否 |	是否禁用|
|bindchange | EventHandle  | | 否 |checked 改变时触发 change 事件，event.detail={ checked:true}|

**type 有效值**:

| 值 | 说明 |
| ---- | ---- |
| switch | 切换样式 |
| checkbox | 复选框样式 |

**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/switch.jpeg">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**

<a href="swanide://fragment/acd75f1f1c4ecb2e83e4af8f7cb6cd661565508713613" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中
```xml
<view class="wrap">
    <view class="title">默认样式</view>
    <view>
        <switch class="init-switch" checked disabled="false"></switch><text class="switch-text">开启</text>
        <switch class="init-switch"></switch><text class="switch-text">关闭</text>
        <switch class="init-switch" color="#FF3333" checked></switch><text class="switch-text">红色</text>
    </view>

    <view class="title">推荐示例</view>
    <view class="item-wrap">
        <view class="item">
            <text>开启选项</text>
            <switch checked class="switch"></switch>
        </view>
        <view class="item">
            <text>关闭选项</text>
            <switch class="switch"></switch>
        </view>
    </view>
</view>
```
**Bug & Tip**:
switch 类型切换时在 IOS 自带振动反馈，可在系统设置 -声音与触感 -系统触感反馈中关闭。
