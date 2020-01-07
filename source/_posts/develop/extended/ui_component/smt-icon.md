---
title: smt-icon 图标
header: develop
nav: extended
sidebar: smt-icon
---

**解释：** 包括天气、系统设置、互动社交、生活服务、书籍影音、政务服务、交通出行7个行业类别的图标。请扫描示例二维码查看图标全集。

##  属性说明 

|属性名 | 类型 | 必填 | 默认值 |说明 |
|---|---|---|---|---|
|name |String |是||icon的英文名称|
|color |String, Array.&lt;String&gt; |否||icon的颜色，多色图标支持传入色值的数组|
|size |Number |否|25|icon的尺寸，单位px|


## 示例

<a href="swanide://fragment/1151cb408d98313c4e79bb6a62755bfa1577193673206" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

 
### 扫码体验

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/smt-icon.png"  class="demo-qrcode-image" />

###  图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/smt-icon.gif">
    </div>  
</div>

###  代码示例

* 在 swan 文件中

```html
<view>
    <smt-icon name="add" color="{{color1}}" />
    <smt-icon name="smart-game-m" size="30"  color="{{color2}}"/>
</view>
```


* 在 js 文件中

```javascript
Page({
    data: {
        color1: '#3388ff',
        color2: ['#ffdd52', '#ffc92c', '#ffa808', '#ffa808']
    }
});
```





 
