---
title: slider 滑动选择器
header: develop
nav: component
sidebar: formlist_slider
---

 

**解释**：滑动选择器

## 代码示例

<a href="swanide://fragment/e1489d2e2e3d72ba1233556495c382c11577360671451" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/slider.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>


###  图片示例 

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

###  代码示例1 - 默认样式 

<a href="swanide://fragment/588aacb801bd077789e11c6834513f441575544226353" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="card-area">
    <view class="top-description border-bottom">默认样式</view>
    <slider class="slider" min="0" max="1500" value="200" step="30" bind:change="sliderChange" disabled="false"></slider>
</view>
```

###  代码示例2 - 显示当前取值 

* 在 swan 文件中

```xml
<view class="card-area">
    <view class="top-description border-bottom">
        <view>显示当前取值</view>
        <view>show-value</view>
    </view>
    <slider class="slider" min="0" max="200" value="30" show-value step="30" bind:change="sliderChange" disabled="false"></slider>
</view>
```

###  代码示例3 - 自定义最大/最小值 

* 在 swan 文件中

```xml
<view class="card-area">
    <view class="top-description border-bottom">
        <view>自定义最大/最小值</view>
        <view>min="200" max="1500"</view>
    </view>
    <slider class="slider" min="200" max="1500" value="400"  show-value step="30" bind:change="sliderChange" disabled="false"></slider>
</view>
```

###  代码示例4 - 自定义步长 

* 在 swan 文件中

```xml
<view class="card-area">
    <view class="top-description border-bottom">
        <view>自定义步长</view>
        <view>step="30"</view>
    </view>
    <slider class="slider" min="0" max="1500" value="200" step="30" bind:change="sliderChange" disabled="false"></slider>
</view>
```

### 代码示例5 - 自定义滑块样式 

<a href="swanide://fragment/adb53cc13556fb8e4277c02396c9b8791575544431665" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <view class="card-area">
        <view class="top-description border-bottom">
            <view>自定义样式</view>
            <view>block-size="16"  block-color="#3388FF"</view>
        </view>
        <slider class="slider"  min="0" max="1500" value="200" step="30" block-size="16"  block-color="#3388FF" bind:change="sliderChange" disabled="false"></slider>
    </view>
</view>
```

### 代码示例6 - 自定义进度条样式 

<a href="swanide://fragment/03cd862f718cdbf42381e9eb48abcb691576152025499" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <view class="card-area">
        <view class="top-description border-bottom">
            <view>自定义样式</view>
            <view>backgroundColor="#DB7093"  activeColor="#000"</view>
        </view>
        <slider class="slider"  min="0" max="1500" value="200" step="30" block-size="16"  backgroundColor="#DB7093"  activeColor="#000" bind:change="sliderChange" disabled="false"></slider>
    </view>
</view>
```

##  属性说明 

|属性名 |类型  |默认值  | 必填 |说明|
|:---- | :---- |: ---- |:---- |:---- |
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
