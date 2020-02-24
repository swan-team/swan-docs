---
title: label 表单组件标签
header: develop
nav: component
sidebar: formlist_label
webUrl: https://qft12m.smartapps.cn/subPackages/componentPackage/pages/label/label
---




**解释**：为鼠标用户改进表单的可用性。使用 for 属性找到对应的 id（必须写for），当点击时，就会触发对应的控件。for 优先级高于内部控件，内部有多个控件的时候默认触发第一个控件。目前可以绑定的控件有：`<button/>`、 `<checkbox/>`、 `<radio/>`、`<switch/>`。

##  属性说明 

|属性名|类型|默认值|必填|说明|
|:-----|:--- |:--- |:--- |:--- |
|for|String| | 否 |绑定控件的 id|

## 示例

<a href="swanide://fragment/d45e0c0552e807263fd72f5ae90cfece1577360566830" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/label.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>


 
###  代码示例1 - label用for标识表单组件 ：

<a href="swanide://fragment/e57d56f1f8440367f2980cafcbf112f91565503515586" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

:::codeTab
```swan
<view class="card-area">
        <view class="top-description border-bottom">label用for标识表单组件</view>
        <radio-group class="group">
            <view class="label-2 {{index === 0 ? 'label-first': ''}}" s-for="item, index in radioItems">
                <label class="block {{item.checked == 'true' ? 'border-bottom': ''}}">
                    <radio id="{{item.name}}" value="{{item.name}}" checked="{{item.checked}}"></radio>
                    <label class="label-2-text" for="{{item.name}}"><text>{{item.value}}</text></label>
                </label>
            </view>
        </radio-group>
    </view>
```

 

```js
Page({
    data: {
        radioItems: [
            {name: 'CHN', value: '中国', checked: 'true'},
            {name: 'USA', value: '美国'}
        ]
    }
});
```
::: 
###  代码示例2 - 表单组件在label内 ：

:::codeTab
```swan
<view class="card-area">
    <view class="top-description border-bottom">表单组件在label内</view>
    <checkbox-group class="group">
        <view class="label-1 {{index === 0 ? 'label-first': ''}}" s-for="item, index in checkboxItems">
            <label class="block {{item.checked == 'true' ? 'border-bottom': ''}}">
            <checkbox value="{{item.name}}" checked="{{item.checked}}"></checkbox>
            <text class="label-1-text">{{item.value}}</text>
            </label>
        </view>
    </checkbox-group>
</view>
```

 

```js
Page({
    data: {
        checkboxItems: [
            {name: 'CHN', value: '中国', checked: 'true'},
            {name: 'USA', value: '美国'}
        ]
    }
});
```
:::

###  代码示例3 - label内有多个选项时，选中第一个 ：

:::codeTab
```swan
<view class="card-area">
    <view class="top-description border-bottom">label内有多个选项时，选中第一个</view>
    <label class="label-3">         
        <label class="label-box border-bottom">
            <checkbox>选项一</checkbox>
        </label>
        <label class="label-box border-bottom"> 
            <checkbox>选项二</checkbox>
        </label> 
        <label class="label-box border-bottom"> 
            <checkbox>选项三</checkbox>      
        </label>
        <view class="near-button">
            点击选中第一项
        </view>
    </label>
</view>
```
:::

###  代码示例4 - label可控制热区 ：

<a href="swanide://fragment/72a27b52f27e27f779ceb251dd2666ae1575131264690" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

:::codeTab
```swan
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
 

```css
.wrap {
    font-size: .16rem;
}

.label {
    display: block;
    padding: .2rem;
}
```

:::
