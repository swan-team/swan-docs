---
title: smt-navigation 顶部导航bar
header: develop
nav: extended
sidebar: smt-navigation
---

**解释：** 顶部导航bar可以自定义

## 代码示例

<a href="swanide://fragment/3be4d7bcac11266b9481dd018449a7271577692166749" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/smt-navigation.png"  class="demo-qrcode-image" />

###  图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/smt-navigation.gif">
    </div>  
</div>

###  代码示例

* 在 swan 文件中

```html
<smt-navigation>
    <view>
        <text>{{title}}</text>
        <text>{{subTitle}}</text>
    </view>
</smt-navigation>
```


* 在 js 文件中

```javascript
Page({
    data: {
        title: '主标题',
        subTitle: '副标题'
    }
});
```