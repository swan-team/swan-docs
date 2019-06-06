---
title: 基础内容
header: develop
nav: component
sidebar: base
---

## icon

**解释**： 图标
**属性说明**:

|属性名|类型  |默认值  |说明|
|---- | ---- | ---- |---- |
|type |String  | |生效的值：success, info, warn, waiting, success_no_circle, clear, search, personal, setting, top, close, cancel, download, checkboxSelected, radioSelected, radioUnselect|
|size | Number  |23 |icon 的大小，单位是 px|
|color | Color |   |icon 的颜色，同 css 的 color|


**示例**：
<a href="swanide://fragment/2a32f184480504bafc440fea395eaac21558615858590" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <view class="title">默认样式</view>
    <view class="group">
        <view>
            <icon s-for="type in types.smallDefault" type="{{type}}" class="small-default" />
        </view>
    </view>

    <view class="title">尺寸选择</view>
    <view class="group choose">
        <icon s-for="size in sizes" type="success" size="{{size}}" class="icon-size" />
    </view>

    <view class="title">颜色选择</view>
    <view class="group choose">
        <icon s-for="color in colors" type="success" size="40" color="{{color}}" class="icon-color" />
    </view>
</view> 
```

* 在 js 文件中

```js
Page({
    data: {
        types: {
            smallDefault: ['success', 'info', 'warn', 'waiting',
            'success_no_circle', 'clear', 'search', 'personal',
            'setting', 'top', 'close', 'cancel', 'download',
            'checkboxSelected', 'radioSelected', 'radioUnselect']
        },
        colors: [
            '#333', '#666', '#999', '#3C76FF', '#F7534F'
        ],
        sizes: [
            40, 35, 30, 25
        ]
    }
}); 
```

* 在 css 文件中

```css
.wrap {
    font-size: .16rem;
}
.group {
    background: #fff;
    padding: .17rem .4rem;
}
icon:last-child {
    margin-right: 0;
}
.big-default {
    margin-right: .19rem;
}
.small-default {
    margin: .2rem .2rem .1rem 0;
    display: inline-block;
}
.small-primary {
    margin: .15rem .2rem .1rem 0;
    display: inline-block;
}
.default {
    height: 1.8rem;
}
.choose {
    height: .8367rem;
    line-height: .8rem;
}
.icon-color,
.icon-size {
    margin-right: .15rem;
    line-height: 1;
} 
```

![图片](../../../img/icon-demo.png)

## text

**解释**：放文本的元素
**属性说明:**

|属性名 |类型  |默认值  |说明|最低版本|
|---- | ---- | ---- |---- |--|
| space | String  | false |显示连续空格|-|
| selectable|Boolean|false|文本是否可选<br>**true**:可用于文本复制，粘贴等场景。|3.10.4|

**space 有效值**:

| 值 | 说明 |
| ---- | ---- |
| ensp | 中文字符空格一半大小 |
| emsp | 中文字符空格大小 |
| nbsp | 根据字体设置的空格大小 |

**示例**：
<a href="swanide://fragment/73974b65ed16e5694bfcf2337b8df8d41558616173370" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <text selectable="true">{{text}}</text>
    <button class="btn" type="primary" bind:tap="add">add text</button>
    <button class="btn" type="primary" bind:tap="remove">remove text</button>
</view> 
```

* 在 js 文件中

```js
let initData = '这是一段文字.';
let extraLine;
Page({
    data: {
        text: initData
    },
    onShow(e) {
        extraLine = [];
    },
    add(e) {
        extraLine.push('其他文字');
        this.setData({
            text: initData + extraLine.join(',')
        });
    },
    remove(e) {
        if (extraLine.length > 0) {
            extraLine.pop();
            this.setData({
                text: initData + extraLine.join(',')
            });
        }
    }
}); 
```

* 在 css 文件中

```css
.wrap {
    font-size: 29rpx;
    padding: 30rpx;
}

.wrap button {
    margin-top: 30rpx;
    height: 80rpx;
    line-height: 80rpx;
}
```
**图示**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="../../../img/text-demo2.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
</div>


**说明:**

* 除了文本节点以外的其他节点都无法长按选中。
* 各个操作系统的空格标准并不一致。
* `<text/>`组件内只支持`<text/>`嵌套。


## rich-text

**解释**： 富文本
**属性说明:**

|属性名 |类型  |默认值  |说明|
|---- | ---- | ---- |---- |
| nodes | Array / String  | [] |节点列表 / HTML String。|

### nodes

* nodes 属性推荐使用 Array 类型，由于组件会将 String 类型转换为 Array 类型，因而性能会有所下降。
* 现支持两种节点，通过type来区分，分别是元素节点和文本节点，默认是元素节点，在富文本区域里显示的HTML节点。

#### 元素节点：type = node

**属性说明:**

|属性名 | 说明 | 类型  | 必填 | 备注 |
|---- | ---- | ---- |---- | ---- |
| name | 标签名 | String | 是 | 支持部分受信任的HTML节点 |
| attrs | 属性 | Object | 否 | 支持部分受信任的属性，遵循Pascal命名法 |
| children | 子节点列表 | Array | 否 | 结构和nodes一致 |

#### 文本节点：type = text

**属性说明:**

|属性名 | 说明 | 类型  | 必填 | 备注 |
|---- | ---- | ---- |---- | ---- |
| text | 文本 | String | 是 | 支持entities |

### 受信任的HTML节点及属性。

> 全局支持class和style属性，不支持id属性。

属性说明:

|节点 | 属性 |
|---- | ---- |
| a | -|
| abbr |- |
| b |- |
| blockquote | -|
| br | -|
| code |- |
| col | span，width |
| colgroup | span，width |
| dd | -|
| del | -|
| div |- |
| dl |- |
| dt |- |
| em | -|
| fieldset |- |
| h1 |- |
| h2 |- |
| h3 |- |
| h4 |- |
| h5 |- |
| h6 |- |
| hr | -|
| i |- |
| img | alt，src，height，width |
| ins |- |
| label |- |
| legend |- |
| li | -|
| ol | start，type |
| p | -|
| q |- |
| span |- |
| strong | -|
| sub |- |
| sup |- |
| table | width |
| tbody |- |
| td | colspan，height，rowspan，width |
| tfoot | -|
| th | colspan，height，rowspan，width |
| thead |- |
| tr | -|
| ul | - |

**说明**：

* 支持默认事件，包括：tap、touchstart、touchmove、touchcancel、touchend和longtap。
* 单击此处，查看将<a herf="https://gitee.com/sootou/bdparse ">富文本字符串转成 json 格式</a>的具体方法。
* nodes 不推荐使用 String 类型，性能会有所下降。
* rich-text 组件内屏蔽所有节点的事件。
* attrs 属性不支持 id ，支持 class。
* name 属性大小写不敏感。
* 如果使用了不受信任的HTML节点，该节点及其所有子节点将会被移除。
* img 标签仅支持网络图片。
* 如果在自定义组件中使用 rich-text 组件，那么仅自定义组件的 swan 样式对 rich-text 中的 class 生效。


**示例**

<a href="swanide://fragment/191f3a0c75c7f87284bd3f3b03fcfa3a1556527446420" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="rich-text">
    <view class="renders">
        <view class="renders_title">通过HTML String渲染</view>
        <view class="renders_view">
            <scroll-view scroll-y>
                <view class="cont">{{htmlSnip}}</view>
            </scroll-view>
            <button type="primary" bind:tap="renderHtml">渲染HTML</button>
            <block s-if="{{renderedByHtml}}">
                <rich-text nodes="{{htmlSnip}}"></rich-text>
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
            <block s-if="{{renderedByNode}}">
                <rich-text nodes="{{nodes}}"></rich-text>
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
        style: 'line-height: 60px; color: red;'
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
        console.log(e.detail.value);
        this.setData({
            htmlSnip: e.detail.value
        });
    }
});
```

* 在 css 文件中

```css
.rich-text {
    width: 100%;
    height: 100%;
    font-size: .16rem;
    padding: .16rem;
}
.renders {
    width: 100%;
    margin-top: 60rpx;
}
.renders_view {
    width: 100%;
    height: auto;
}
.renders_title {
    color: darkgrey;
}
.p {
    color: #4F99FB;
    line-height: 60rpx;
}
scroll-view {
    width: 100%;
    height: 350rpx;
    border: 1rpx solid #1AAD19;
    box-sizing: border-box;
    line-height: 50rpx;
}
.cont {
    width: 100%;
    height: 100%;
    white-space: pre;
}
button {
    margin: 20rpx 0;
}
```


**图示:**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="../../../img/component/richtext.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
</div>



## progress

**解释**：进度条

**属性说明**：

|属性名 |类型  |默认值  |说明|
|---- | ---- | ---- |---- |
| percent | Float  | |百分比 0~100 |
| show-info | Boolean  | false  |在进度条右侧显示百分比|
| stroke-width | Number/String | 2 |进度条线的宽度，单位 px|
| color | Color  | #09BB07 |进度条颜色 （请使用 activeColor）	|
| activeColor | Color  | #09BB07 | 已选择的进度条的颜色	|
| backgroundColor |  Color | #E6E6E6 |未选择的进度条的颜色	|
| active | Boolean  | false  |进度条从左往右的动画	|
| active-mode | String  | backwards  |backwards: 动画从头播；forwards：动画从上次结束点接着播	|

**示例**：
<a href="swanide://fragment/92ceb2b4893622aee68732f8ab88b7481558616315541" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <progress class="progress" percent="20" activeColor="#3c76ff" stroke-width="2" show-info />
    <progress class="progress" percent="40" activeColor="#3c76ff" active />
    <progress class="progress" percent="60" activeColor="#3c76ff" active />
    <progress class="progress" percent="80" activeColor="#74fa7d" active />
</view>
``` 

* 在 css 文件中


```css
.wrap {
    font-size: .16rem;
    padding: .3rem .15rem;
}
.progress {
    margin-bottom: .35rem;
    border-radius: 3px;
}
```


## animation-view

**解释**：支持 Lottie 动画

**属性说明**：

|属性名 |类型  |必填 |默认值  |说明|最低版本|
|---- | ---- | --- | ---- |---- |--|
| path | String  |是 |  |动画资源地址，目前只支持绝对路径|-|
| loop | Boolean  | 否 | false | 动画是否循环播放 |-|
|autoplay | Boolean | 否 |true	  |动画是否自动播放	|-|
|action | String  |	 否 | play |动画操作，可取值 play、pause、stop	|-|
|hidden | Boolean  | 否 | true |是否隐藏动画|-|
|bindended | EventHandle | 否 |   | 当播放到末尾时触发 ended 事件（自然播放结束会触发回调，循环播放结束及手动停止动画不会触发。）|3.0.0|

**说明:**

* animation-view组件的位置信息、padding值以path里传的json文件里的left、top、padding值为准。
* animation-view组件不支持原生组件嵌套。
* 为避免出现iOS中画面被拉伸的情况，建议将animation-view组件的长宽比设置的与动画长宽比一致。

**示例**：

<a href="swanide://fragment/1aaf692b0800fd9e2ea9d84e1c0613431556528002310" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="container">
    <view class="animation-content hide">
        <view class="animation-info">
            <animation-view id="myAnim" action="{{action}}" loop="{{loop}}" hidden="{{hidden}}" class="controls hide" autoplay="{{autoplay}}" path="{{path}}">
            </animation-view>
        </view>
        <view class="button-content">
            <button bind:tap="playLottie" class="toggle-animation" type="primary" hover-stop-propagation="true">{{status}}动画</button>
        </view>
    </view>
    <view class="page-title">
        <view class="page-title-line"></view>
        <view class="page-title-text">{{title}}</view>
    </view>
</view>

```
* 在 js 文件中

```javascript
Page({
    data: {
        title: 'animation-view',
        action: 'play',
        hidden: false,
        path: '/anims/lottie_example.json',
        loop: true,
        autoplay: true,
        status: '停止',
        updateImgSrc: 'https://b.bdstatic.com/searchbox/icms/searchbox/img/bg-new.png',
        textImgSrc: 'https://b.bdstatic.com/searchbox/icms/searchbox/img/title.png'
    },
    playLottie() {
        // 切换播放状态
        let action = this.data.action;
        action = action === 'pause' ? 'play' : 'pause';
        let status = action === 'pause' ? '播放' : '停止';

        this.setData({
            action,
            status
        });
    }
});
```
* 在 css 文件中

```css
.animation-info {
    padding-top: .4rem;
}
.controls {
    width: 88%;
    margin: 0 auto;
}
.button-content {
    position: relative;
    top: 0;
}
.toggle-animation {
    margin-top: .22rem!important;
    border-radius: .04rem;
}
.toggle-animation::after {
    border: none;
}
```