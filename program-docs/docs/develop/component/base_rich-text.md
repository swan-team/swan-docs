---
title: rich-text 富文本
header: develop
nav: component
sidebar: base_rich-text
# webUrl: https://qft12m.smartapps.cn/subPackages/componentPackage/pages/rich-text/rich-text
---

**解释**： 富文本，nodes 属性推荐使用 Array 类型，由于组件会将 String 类型转换为 Array 类型，因而性能会有所下降。

##  属性说明 

|属性名 |类型  |默认值  | 必填 |说明| 
|:---- |: ---- | :---- | :---- |:---- |
| nodes | Array &#124; String  | [] | 否 |节点列表 / HTML String| 
| selectable | Boolean | false（基础库3.150.1以前版本）<br>true（基础库3.150.1及以后版本） | 否 |富文本是否可以长按选中，可用于复制，粘贴，长按搜索等场景。<font color="#4183c4">百度 APP 11.10 以上</font>|
| name | 标签名 | String | 是 | 支持部分受信任的HTML节点 |
| attrs | 属性 | Object | 否 | 支持部分受信任的属性，遵循Pascal命名法 |
| children | 子节点列表 | Array | 否 | 结构和nodes一致 |
| text | 文本 | String | 是 | 支持entities |

### nodes

现支持两种节点，通过type来区分，分别是  元素节点  和  文本节点 ，默认是元素节点，在富文本区域里显示的HTML节点。

|值|说明|
|:---|:---|
|node|元素节点|
|text|文本节点|


### 受信任的HTML节点属性说明 

> 全局支持class和style属性，不支持id属性。

 

|节点 | 属性 |
|:---- |: ---- |
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



## 示例

<a href="swanide://fragment/c65a0c47c1984826568ab46d080df9d11579503051880" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/rich-text.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>


 

###  代码示例 


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
                <!-- 基础库 3.150.1 以前的版本，selectable 属性默认为 false，期望文本不可被选中时不用设置此属性 -->
                <rich-text nodes="{{htmlSnip}}"></rich-text>
                <!-- 基础库 3.150.1 及以后版本，selectable 属性默认为 true，期望文本不可被选中时需设置此属性为 false -->
                <!-- <rich-text selectable="false" nodes="{{htmlSnip}}"></rich-text> -->    
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
            <block s-if="{{renderedByNode}}" style="margin-bottom:.5rem;">
                <!-- 基础库 3.150.1 以前的版本，selectable 属性默认为 false，期望文本不可被选中时不用设置此属性 -->
                <rich-text nodes="{{nodes}}"></rich-text>
                <!-- 基础库 3.150.1 及以后版本，selectable 属性默认为 true，期望文本不可被选中时需设置此属性为 false -->
                <!-- <rich-text selectable="false" nodes="{{nodes}}"></rich-text> -->
            </block>
        </view>
    </view>
</view>
```

* 在 js 文件中

```js
const htmlSnip =
`<div class="div_class">
    <h1>Title</h1>
    <p class="p">
        Life is&nbsp;<i>like</i>&nbsp;a box of
        <b>&nbsp;chocolates</b>
    </p>
</div>`;
const nodeSnip =
`Page({
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



 



##  Bug & Tip 

* Tip：单击此处，查看将<a href="https://gitee.com/sootou/bdparse">富文本字符串转成 json 格式</a>的具体方法。
* Tip：支持默认事件，包括：tap、touchstart、touchmove、touchcancel、touchend和longtap。
* Tip：nodes 不推荐使用 String 类型，性能会有所下降。
* Tip：rich-text 组件内屏蔽所有节点的事件。
* Tip：attrs 属性不支持 id，支持 class。
* Tip：name 属性大小写不敏感。
* Tip：如果使用了不受信任的HTML节点，该节点及其所有子节点将会被移除。
* Tip：img 标签仅支持网络图片。
* Tip：如果在自定义组件中使用 rich-text 组件，那么仅自定义组件的 swan 样式对 rich-text 中的 class 生效。



## 参考示例

###  参考示例 1


<a href="swanide://fragment/88908bd935f1b4cbc68da29488cec1f71574937264448" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="rich-text">
    <view class="renders">
        <view class="renders_title">通过HTML String渲染</view>
        <view class="renders_view">
            <scroll-view scroll-y>
                <view class="cont">{{htmlSnip}}</view>
            </scroll-view>
            <rich-text nodes="{{htmlSnip}}" selectable="true"></rich-text>
        </view>
    </view>
</view>
```

* 在 js 文件中

```js
const htmlSnip =
`<div class="div_class">
    <h1>Title</h1>
    <p class="p">
        Life is&nbsp;<i>like</i>&nbsp;a box of
        <b>&nbsp;chocolates</b>
    </p>
</div>`;

Page({
    data: {
        htmlSnip
    }
});
```




###  参考示例 2


<a href="swanide://fragment/f317171bbd03629d899ca3aac3022e541574937336081" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="rich-text">
    <view class="renders">
        <view class="renders_title">通过节点渲染</view>
        <view class="renders_view">
            <scroll-view scroll-y>
                <view class="cont">{{nodeSnip}}</view>
            </scroll-view>
            <rich-text nodes="{{nodes}}" selectable="true">
            </rich-text>
        </view>
    </view>
</view>
```

* 在 js 文件中

```js
const nodeSnip
=`
Page({
  data: {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: #4F99FB;;'
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
        nodeSnip,
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
    }
});
```
