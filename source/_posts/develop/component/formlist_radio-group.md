---
title: radio-group 单项选择器组
header: develop
nav: component
sidebar: formlist_radio-group
---


 

**解释**：单项选择器组，内部由多个radio组成。代码示例与 [radio](/develop/component/formlist_radio/) 相同。


## 代码示例

<a href="swanide://fragment/6e21eb27622b96b353930a5f18234e061565503524059" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/radio.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/radio.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例1 - 默认样式 

<a href="swanide://fragment/6e21eb27622b96b353930a5f18234e061565503524059" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="card-area">
    <view class="top-description border-bottom">默认样式</view>
    <view class="radio">
        <radio-group>
            <radio checked>单选项一</radio>
            <radio class="radio-before" checked="false">单选项二</radio>
        </radio-group>
    </view>
</view>
```

###  代码示例2 - 列表展示 

* 在 swan 文件中

```xml
<view class="card-area">
    <view class="top-description border-bottom">列表展示</view>
    <view class="radio-area">
        <radio-group>
            <radio class="radio border-bottom" checked>单选项一</radio>
            <radio class="radio border-bottom" checked="false">单选项二</radio>
            <radio class="radio border-bottom" checked="false">单选项三</radio>
        </radio-group>
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
    <view class="radio-area">
        <radio-group>
            <radio class="radio border-bottom" checked>可用选项</radio>
            <radio class="radio border-bottom" checked="false">可用选项</radio>
            <radio class="radio" checked="false" disabled>
                <text class="disabledText">禁用选项</text>
            </radio>
        </radio-group>
    </view>
</view>
```

###  代码示例4 - 默认不选中 

* 在 swan 文件中

```xml
<view class="card-area">
    <view class="top-description border-bottom">
        <view>默认不选中</view>
        <view>checked="false"</view>
    </view>
    <view class="radio-area">
        <radio-group>
            <radio class="radio border-bottom" checked>单选项一</radio>
            <radio class="radio border-bottom" checked="false">单选项二</radio>
        </radio-group>
    </view>
</view>
```

###  代码示例5 - 自定义颜色 

* 在 swan 文件中

```xml
<view class="card-area">
    <view class="top-description border-bottom">
        <view>自定义颜色</view>
        <view>color="#00BC89"</view>
    </view>
    <view class="radio-area">
        <radio-group>
            <radio class="radio border-bottom" color="#00BC89" checked>单选项一</radio>
            <radio class="radio border-bottom" color="#00BC89">单选项二</radio>
        </radio-group>
    </view>
</view>
```
##  属性说明 

| 属性名 | 类型 | 默认值 | 必填 | 说明 |
| :---- |: ---- |: ---- |: ---- |: ---- |
| bindchange | EventHandle | &nbsp; | 否 | &lt;radio-group/&gt; 中的选中项发生变化时触发 change 事件，event.detail = {value: 选中项 radio 的 value} |
