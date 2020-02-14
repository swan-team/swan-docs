---
title: text 文本
header: develop
nav: component
sidebar: base_text
---




**解释**：文本元素

##  属性说明 

|属性名 |类型  |默认值  | 必填 |说明|最低版本|
|:---- |: ---- | :---- |:---- |:---- |:--|
| space | String  | false | 否 |显示连续空格|-|
| selectable|Boolean|false（基础库3.150.1以前版本）<br>true（基础库3.150.1及以后版本）| 否 |文本是否可选<br> true :可用于文本复制，粘贴，长按搜索等场景。|3.10.4 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|

###  space 有效值 

| 值 | 说明 |
| :---- |: ---- |
| ensp | 中文字符空格一半大小 |
| emsp | 中文字符空格大小 |
| nbsp | 根据字体设置的空格大小 |


## 示例

<a href="swanide://fragment/584fca924c6e0b46b8fb4193a4add5fb1577170498889" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/text.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>



###  图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/searchbox/icms/searchbox/images/text.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例：


* 在 swan 文件中

```html
<view class="wrap">
    <view class="page-section page-section-spacing">
        <view class="text-box">
            <!-- 基础库 3.150.1 以前的版本，selectable 属性默认为 false，期望文本可被选中时需设置此属性为 true -->
            <text selectable="true" space="20">{{text}}</text>
            <!-- 基础库 3.150.1 及以后版本，selectable 属性默认为 true，期望文本可被选中时不用设置此属性 -->
            <!-- <text space="20">{{text}}</text> -->
        </view>
        <button class="btn" disabled="{{!canAdd}}" type="primary" bind:tap="add">add text</button>
        <button class="btn" disabled="{{!canRemove}}" type="primary" bind:tap="remove">remove text</button>
    </view>
</view>
```

* 在 js 文件中

```js
const texts = [
    '百度智能小程序',
    '生态共建',
    '持续为开发者拓展更多的百度内、外的流量资源',
    '百亿广告分成',
    '通过把广告组件嵌入到小程序里得到广告收益',
    '十亿创新基金',
    '为创新类小程序提升流量及曝光',
    '......'
];
let extraLine = [];

Page({
    data: {
        text: '这是一段文字',
        canAdd: true,
        canRemove: false,
        extraLine : [],
    },
    add() {
        extraLine.push(texts[extraLine.length % 12]);
        this.setData({
            text: extraLine.join('\n'),
            canAdd: extraLine.length < 12,
            canRemove: extraLine.length > 0
        })
    },
    remove() {
        if (extraLine.length > 0) {
            extraLine.pop();
            this.setData({
                text: extraLine.join('\n'),
                canAdd: extraLine.length < 12,
                canRemove: extraLine.length > 0,
            })
        }
        else {
            this.setData({
                text: 'end'
            })
        }
    }
});

```
## 参考示例

###  图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/text-search.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  参考示例 ：

<a href="swanide://fragment/0975d407116406962b9346f8d66d80ce1577170406870" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <view class="card-area">
        <view class="top-description border-bottom">
            <view>文本是否可选</view>
            <view>下面文字空了4个格</view>
        </view>
        <view class="text">
            <view>
                <!-- 基础库 3.150.1 以前的版本，selectable 属性默认为 false，期望文本可被选中时需设置此属性为 true -->
                <text class="content" selectable="true" space="ensp">{{text1}}</text>
                <!-- 基础库 3.150.1 及以后版本，selectable 属性默认为 true，期望文本可被选中时不用设置此属性 -->
                <!-- <text class="content" space="ensp">{{text1}}</text> -->
            </view>
            <view>
                <!-- 基础库 3.150.1 以前的版本，selectable 属性默认为 false，期望文本可被选中时需设置此属性为 true -->
                <text class="content" selectable="true" space="nbsp">{{text3}}</text>
                <!-- 基础库 3.150.1 及以后版本，selectable 属性默认为 true，期望文本可被选中时不用设置此属性 -->
                <!-- <text class="content" space="nbsp">{{text3}}</text> -->
            </view>
            <view>
                <!-- 基础库 3.150.1 以前的版本，selectable 属性默认为 false，期望文本可被选中时需设置此属性为 true -->
                <text class="content" selectable="true" space="emsp">{{text2}}</text>
                <!-- 基础库 3.150.1 及以后版本，selectable 属性默认为 true，期望文本可被选中时不用设置此属性 -->
                <!-- <text class="content" space="emsp">{{text2}}</text> -->
            </view>
        </viewclass>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        text1: '这是一段    文字；(中文字符空格一半大小)',
        text2: '这是一段    文字；（中文字符空格大小)',
        text3: '这是一段    文字；(根据字体设置的空格大小)'
    }
});
```


##  Bug & Tip 

* Tip：除了文本节点以外的其他节点都无法长按选中，支持复制，但不支持剪切。
* Tip：各个操作系统的空格标准并不一致。
* Tip：`<text/>`组件内只支持`<text/>`嵌套，注意被嵌套的text绑定事件无法触发。

