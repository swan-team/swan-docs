---
title: bdparse
header: develop
nav: extended
sidebar: bdparse
---

> 本组件为开发者贡献组件，详情访问<a href="https://gitee.com/sootou/bdparse">当前组件的git仓库原始地址</a>。

**解释：** 智能小程序富文本解析工具bdParse，改造自wxparse，支持html转换成智能小程序富文本节点。


##  属性说明

|属性名 | 类型 | 必填 | 默认值 |说明 |
|:---|:---|:---|:---|:---|
|raw|String |是|''|需要转换展现的原始内容|
|format|String |否|'html'|需要转换内容的原始格式，可选有：'html', 'markdown'|
|padding|Number|否|5|渲然出来界面的左右留白(px为单位)|

## 示例

<a href="swanide://fragment/80138c592c5052fe0e8938c27c501fce1580812312899" title="在开发者工具中预览效
果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/code-4-bdparse.png"  class="demo-qrcode-image" />

### 图片示例

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/swan-demo-bdparser-smsize.png" />
    </div> 
</div>

### 安装

```
npm install @smt-lib/bdparse
```

###  代码示例

* 在 swan 文件中

```html
<view class="card-area">
    <view class="top-description border-bottom">原文</view>
    <view class="text-content">{{raw}}</view>
</view>

<view class="card-area {{converted ? 'show': 'hide'}}">
    <view class="top-description border-bottom">转换后的内容</view>
    <view class="text-content">
        <bdparse raw={{raw}} />
    </view>
</view>
```


* 在 js 文件中

```js
Page({
    data: {
        raw:[
            '<div>',
            '<span>我是HTML代码</span>',
            '<span>',
            '内容',
            '</span>',
            '<img src="https://b.bdstatic.com/miniapp/images/demo-dog.png" class="custom-img" />',
            '</div>'
        ].join('\n')
    }
});
```


* 在 css 文件中

```css
.custom-img {
    width: 100% !important;
}
```
