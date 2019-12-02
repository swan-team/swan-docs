---
title: label 表单组件标签
header: develop
nav: component
sidebar: formlist_label
---




**解释：** 为鼠标用户改进表单的可用性。使用 for 属性找到对应的 id（必须写for），当点击时，就会触发对应的控件。for 优先级高于内部控件，内部有多个控件的时候默认触发第一个控件。目前可以绑定的控件有：`<button/>`、 `<checkbox/>`、 `<radio/>`、`<switch/>`。


**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/label.png"  class="demo-qrcode-image" />

**属性说明**

|属性名|类型|默认值|必填|说明|
|-----|--- |--- |--- |--- |
|for|String| | 否 |绑定控件的 id|

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/label.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例1**：

<a href="swanide://fragment/e57d56f1f8440367f2980cafcbf112f91565503515586" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

``` xml
<view class="wrap">
    <view class="page-section">
        <view class="page-section-title">表单组件在label内</view>
        <checkbox-group class="group">
            <view class="label-1 {{index === 0 ? 'label-first': ''}}" s-for="item, index in checkboxItems">
              <label>
                <checkbox value="{{item.name}}" checked="{{item.checked}}"></checkbox>
                <text class="label-1-text">{{item.value}}</text>
              </label>
            </view>
        </checkbox-group>
    </view>
    <view class="page-section">
        <view class="page-section-title">label用for标识表单组件</view>
        <radio-group class="group">
            <view class="label-2 {{index === 0 ? 'label-first': ''}}" s-for="item, index in radioItems">
              <radio id="{{item.name}}" value="{{item.name}}" checked="{{item.checked}}"></radio>
              <label class="label-2-text" for="{{item.name}}"><text>{{item.value}}</text></label>
            </view>
        </radio-group>
    </view>
    <view class="page-section">
        <view class="page-section-title">label内有多个时选中第一个</view>
        <label class="label-3">
            <view class="label-box">
                <checkbox></checkbox>
                <checkbox></checkbox>
                <checkbox></checkbox>
                <checkbox></checkbox>
            </view>
            <view class="label-3-text">click me～</view>
        </label>
    </view>
</view>
```
* 在 js 文件中
```javascript
Page({
    data: {
        checkboxItems: [
            {name: 'CHN', value: '中国', checked: 'true'},
            {name: 'USA', value: '美国'}
        ],
        radioItems: [
            {name: 'CHN', value: '中国', checked: 'true'},
            {name: 'USA', value: '美国'}
        ]
    }
});
```

**代码示例2 - label可控制热区**：

<a href="swanide://fragment/72a27b52f27e27f779ceb251dd2666ae1575131264690" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

``` xml
<view class="wrap">
    <view class="card-area">
        <view class="top-description">控制热区为整行</view>
        <label class="label border-bottom">
            <checkbox/>
            <text>智能小程序</text>
        </label>
        <label class="label border-bottom">
            <radio/>
            <text>智能小程序</text>
        </label>
        <label class="label border-bottom">
            <switch/>
            <text style="vertical-align:.1rem">智能小程序</text>
        </label>  
    </view>
</view>
```
* 在 css 文件中
```css
.wrap {
    font-size: .16rem;
}

.label {
    display: block;
    padding: .2rem;
}
```