---
title: radio-group 单项选择器组
header: develop
nav: component
sidebar: formlist_radio-group
webUrl: https://qft12m.smartapps.cn/component/radio/radio
---


 

**解释**：单项选择器组，内部由多个radio组成。代码示例与 [radio](/develop/component/formlist_radio/) 相同。

##  属性说明 

| 属性名 | 类型 | 默认值 | 必填 | 说明 |
| :---- |: ---- |: ---- |: ---- |: ---- |
| bindchange | EventHandle | &nbsp; | 否 | &lt;radio-group/&gt; 中的选中项发生变化时触发 change 事件，event.detail = {value: 选中项 radio 的 value} |

## 示例

<a href="swanide://fragment/888efc1c79bb58d37aaaedf3ac792b851577360633121" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/radio.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

 
###  代码示例1 - 默认样式 

<a href="swanide://fragment/6e21eb27622b96b353930a5f18234e061565503524059" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

 

:::codeTab
```swan
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
:::

###  代码示例2 - 列表展示 

 

:::codeTab
```swan
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
:::
###  代码示例3 - 包含禁用选项 

 

:::codeTab
```swan
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
:::
###  代码示例4 - 默认不选中 

 

:::codeTab
```swan
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
:::
###  代码示例5 - 自定义颜色 

 

:::codeTab
```swan
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
:::

### 代码示例 6: 改变小程序原生组件大小,拿radio举例，其他组件也适用 

<a href="swanide://fragment/e1e1a4c5c8688c310eb539033f72b3d51576135418767" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

 

:::codeTab
```swan
<view class="wrap">
    <view class="card-area">
        <view class="top-description border-bottom">改变小程序原生组件大小</view>
            <radio-group class="radioSmall">
                <radio checked class="radio1">单选项一</radio>
                <radio checked="false" class="radio2">单选项二</radio>
            </radio-group>
        </view>
    </view>
</view>
```

 

```css
.radioSmall {
    transform: scale(0.7)
}
```

:::