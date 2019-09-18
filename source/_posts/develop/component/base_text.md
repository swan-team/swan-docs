---
title: text 文本
header: develop
nav: component
sidebar: base_text
---




**解释**：文本元素

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/text.png"  class="demo-qrcode-image" />

**属性说明:**

|属性名 |类型  |默认值  | 必填 |说明|最低版本|
|---- | ---- | ---- |---- |---- |--|
| space | String  | false | 否 |显示连续空格|1.10.1|
| selectable|Boolean|false| 否 |文本是否可选<br>**true**:可用于文本复制，粘贴等场景。|3.10.4|

**space 有效值**:

| 值 | 说明 |
| ---- | ---- |
| ensp | 中文字符空格一半大小 |
| emsp | 中文字符空格大小 |
| nbsp | 根据字体设置的空格大小 |

**示例**：
<a href="swanide://fragment/475757ad12315ba758ce42bc61e47ba11565503530789" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <view class="page-section page-section-spacing">
        <view class="text-box">
            <text selectable="true" space="20">{{text}}</text>
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
  ]
  let extraLine = []

Page({
    data: {
        text: '这是一段文字',
        canAdd: true,
        canRemove: false,
        extraLine : [],
    },
    add() {
        extraLine.push(texts[extraLine.length % 12])
        this.setData({
          text: extraLine.join('\n'),
          canAdd: extraLine.length < 12,
          canRemove: extraLine.length > 0
        })
    },
    remove() {
      if (extraLine.length > 0) {
          extraLine.pop()
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
**图示**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="../../../img/component/text.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src="">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src="">
    </div>
</div>


**Bug & Tip**：

* 除了文本节点以外的其他节点都无法长按选中，支持复制，但不支持剪切。
* 各个操作系统的空格标准并不一致。
* `<text/>`组件内只支持`<text/>`嵌套，注意被嵌套的text绑定事件无法触发。

