---
title: switch 开关选择器
header: develop
nav: component
sidebar: formlist_switch
---

 

**解释**：开关选择器


## 代码示例

<a href="swanide://fragment/bb061f7f3c2efda2156fd9854c6ccb261576119789648" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/switch.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>



###  图片示例 

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

###  代码示例1 - 默认样式 

<a href="swanide://fragment/acd75f1f1c4ecb2e83e4af8f7cb6cd661565508713613" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中
```xml
<view class="card-area">
    <view class="top-description border-bottom">默认样式</view>
    <switch class="init-switch" checked disabled="false"></switch>
    <text class="switch-text">已开启</text>
    <switch class="init-switch-after"></switch>
    <text class="switch-text">已关闭</text>
</view>
```

###  代码示例2 - 列表展示 

* 在 swan 文件中
```xml
<view class="card-area">
    <view class="top-description border-bottom">列表展示</view>
    <view class="item-scroll border-bottom">
        <text class="switch-text switch-text-before">已开启</text>
        <switch class="init-switch" checked disabled="false"></switch>
    </view>
    <view class="item-scroll">
        <text class="switch-text switch-text-before">已关闭</text>
        <switch class="init-switch"></switch>     
    </view>
</view>
```

###  代码示例3 - 包含禁用选项 

* 在 swan 文件中
```xml
<view class="card-area">
    <view class="top-description border-bottom">
        <view>包含禁用选项</view>
        <view>disabled</view>
    </view>
    <view class="item-scroll border-bottom">
        <text class="switch-text switch-text-before">已开启</text>
        <switch class="init-switch" checked color="#C3D1FF" disabled></switch>
    </view>
    <view class="item-scroll">
        <text class="switch-text switch-text-before">已关闭</text>
        <switch class="init-switch" disabled></switch>     
    </view>
</view>
```

###  代码示例4 - 自定义颜色 

* 在 swan 文件中
```xml
<view class="card-area">
    <view class="top-description border-bottom">
        <view>自定义颜色</view>
        <view>color="#00BC89"</view>
    </view>
        <view class="item-scroll border-bottom">
        <text class="switch-text switch-text-before">已开启</text>
        <switch class="init-switch" checked color="#00BC89"></switch>
    </view>
    <view class="item-scroll">
        <text class="switch-text switch-text-before">已关闭</text>
        <switch class="init-switch" color="#00BC89"></switch>     
    </view>
</view>
```

###  代码示例5 type='switch'/ type='checkbox'的对比 

<a href="swanide://fragment/f80fd7e081b4ba5e200cd5837705a5af1575544028129" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中
```xml
<view class="wrap">
    <switch class="init-switch" type="switch" checked disabled="false"></switch>
    <switch class="init-switch" type="checkbox"></switch>
</view>
```
## 属性说明

|属性名 |类型  |默认值  | 必填 |说明|
|:---- |: ---- |: ---- |:---- |:---- |
|checked| Boolean| false| 否 |是否选中|
|type| String| switch| 否 |样式，有效值：switch,checkbox|
|color| Color| #3388ff| 否 |switch 的颜色，同 CSS 的 color|
|disabled|	Boolean|	false| 否 |	是否禁用|
|bindchange | EventHandle  | | 否 |checked 改变时触发 change 事件，event.detail={ checked:true}|

###  type 有效值 

| 值 | 说明 |
| :---- | :---- |
| switch | 切换样式 |
| checkbox | 复选框样式 |

##  Bug & Tip 
Tip：switch 类型切换时在 IOS 自带振动反馈，可在系统设置 -声音与触感 -系统触感反馈中关闭。
