---
title: rich-text 富文本
header: develop
nav: component
sidebar: base_rich-text
---

**解释**： 富文本，nodes 属性推荐使用 Array 类型，由于组件会将 String 类型转换为 Array 类型，因而性能会有所下降。



**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/rich-text.png"  class="demo-qrcode-image" />

**属性说明:**

|属性名 |类型  |默认值  | 必填 |说明|
|---- | ---- | ---- | ---- |---- |
| nodes | Array &#124; String  | [] | 否 |节点列表 / HTML String|
| selectable | Boolean | false | 否 |富文本是否可以长按选中，可用于复制，粘贴等场景。 <font color="#4183c4">百度 APP 11.10 以上</font>|

### nodes
现支持两种节点，通过type来区分，分别是 **元素节点** 和 **文本节点**，默认是元素节点，在富文本区域里显示的HTML节点。

* 元素节点：type = node

**属性说明:**

|属性名 | 说明 | 类型  | 必填 | 备注 |
|---- | ---- | ---- |---- | ---- |
| name | 标签名 | String | 是 | 支持部分受信任的HTML节点 |
| attrs | 属性 | Object | 否 | 支持部分受信任的属性，遵循Pascal命名法 |
| children | 子节点列表 | Array | 否 | 结构和nodes一致 |

* 文本节点：type = text


**属性说明:**

|属性名 | 说明 | 类型  | 必填 | 备注 |
|---- | ---- | ---- |---- | ---- |
| text | 文本 | String | 是 | 支持entities |

### 受信任的HTML节点及属性。

> 全局支持class和style属性，不支持id属性。

属性说明:

|节点 | 属性 |
|---- | ---- |
| a | |
| abbr |- |
| b |- |
| blockquote | |
| br | |
| code |- |
| col | span，width |
| colgroup | span，width |
| dd | |
| del | |
| div |- |
| dl |- |
| dt |- |
| em | |
| fieldset |- |
| h1 |- |
| h2 |- |
| h3 |- |
| h4 |- |
| h5 |- |
| h6 |- |
| hr | |
| i |- |
| img | alt，src，height，width |
| ins |- |
| label |- |
| legend |- |
| li | |
| ol | start，type |
| p | |
| q |- |
| span |- |
| strong | |
| sub |- |
| sup |- |
| table | width |
| tbody |- |
| td | colspan，height，rowspan，width |
| tfoot | |
| th | colspan，height，rowspan，width |
| thead |- |
| tr | |
| ul | - |

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/rich-text.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：


<a href="swanide://fragment/ce3c9b8128d96855f3a0983f2b897b661572918834655" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="rich-text">
    <view class="renders">
        <view class="renders_title">通过HTML String渲染</view>
        <view class="renders_view">
            <scroll-view scroll-y>
                <view class="cont">{{htmlSnip}}</view>
            </scroll-view>
            <button type="primary" bind:tap="renderHtml">渲染HTML</button>
            <block s-if="{{renderedByHtml}}">
                <rich-text nodes="{{htmlSnip}}" selectable="true"></rich-text>
            </block>
        </view>
    </view>
    <view class="renders">
        <view class="renders_title">通过节点渲染</view>
        <view class="renders_view">
            <scroll-view scroll-y>
                <view class="cont">{{nodeSnip}}</view>
            </scroll-view>
            <button type="primary" bind:tap="renderNode">渲染Node</button>
            <block s-if="{{renderedByNode}}" style="margin-bottom:.5rem">
                <rich-text nodes="{{nodes}}" selectable="true"></rich-text>
            </block>
        </view>
    </view>
</view>
```

* 在 js 文件中

```js
const htmlSnip
=`<div class="div_class">
  <h1>Title</h1>
  <p class="p">
    Life is&nbsp;<i>like</i>&nbsp;a box of
    <b>&nbsp;chocolates</b>
  </p>
</div>`;
const nodeSnip
=`Page({
  data: {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: #4F99FB;'
      },
      children: [{
        type: 'text',
        text: 'You never know what you're gonna get.'
      }]
    }]
  }
})`;

Page({
    data: {
        htmlSnip,
        nodeSnip,
        renderedByHtml: false,
        renderedByNode: false,
        nodes: [{
            name: 'div',
            attrs: {
                class: 'div_class',
                style: 'line-height: 60px; color: #4F99FB;'
            },
            children: [{
                type: 'text',
                text: 'You never know what you\'re gonna get.'
            }]
        }]
    },
    renderHtml() {
        this.setData({
            renderedByHtml: true
        });
    },
    renderNode() {
        this.setData({
            renderedByNode: true
        });
    },
    enterCode(e) {
      this.setData({
          htmlSnip: e.detail.value
      });
    }
});
```


**Bug & Tip**：

* 单击此处，查看将<a href="https://gitee.com/sootou/bdparse">富文本字符串转成 json 格式</a>的具体方法。
* 支持默认事件，包括：tap、touchstart、touchmove、touchcancel、touchend和longtap。
* nodes 不推荐使用 String 类型，性能会有所下降。
* rich-text 组件内屏蔽所有节点的事件。
* attrs 属性不支持 id，支持 class。
* name 属性大小写不敏感。
* 如果使用了不受信任的HTML节点，该节点及其所有子节点将会被移除。
* img 标签仅支持网络图片。
* 如果在自定义组件中使用 rich-text 组件，那么仅自定义组件的 swan 样式对 rich-text 中的 class 生效。



