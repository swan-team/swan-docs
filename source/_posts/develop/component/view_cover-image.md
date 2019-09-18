---
title: cover-image 图片视图
header: develop
nav: component
sidebar: view_cover-image
---

 
**解释：**覆盖在<a href="https://smartprogram.baidu.com/docs/develop/component/native/">原生组件</a>之上的图片视图（与 cover-view 相比，仅支持图片）,支持嵌套在 <a href="https://smartprogram.baidu.com/docs/develop/component/view/#cover-view/">cover-view</a> 里。 



**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/cover-image.png"  class="demo-qrcode-image" />

**属性说明： **

|属性名 |类型  |默认值  | 必填 |说明|
|---- | ---- | ---- | ---- |---- |
| src | String | | 否 |图标路径，支持临时路径、网络地址。暂不支持 base64 格式。|
|bindload|	EventHandle| | 否 |图片加载成功时触发|
|binderror|	EventHandle	| | 否 |图片加载失败时触发|



**示例**：

<a href="swanide://fragment/23aebf6b1898af1931dba33c5df80f331565505998697" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<map id="myMap" style="width: 100%" longitude="{{longitude}}" atitude="{{latitude}}">
    <cover-image class="cover-image"
        src="https://b.bdstatic.com/miniapp/image/cover-image.png">
    </cover-image>
</map>
```

**图示**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="../../../img/component/cover-image.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src="">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src="">
    </div>
</div>

**Bug & Tip**：

* 支持 css transition 动画，transition-property 只支持 transform (translateX, translateY) 与 opacity。
* 文本建议都套上 cover-view 标签，避免排版错误。
* 只支持基本的定位、布局、文本样式。不支持设置单边的 border、background-image、shadow、overflow: visible 等。
* 建议子节点不要溢出父节点。
* 默认设置的样式有：white-space: nowrap; line-height: 1.2; display: block。
* 建议不要频繁改变 s-if 表达式的值控制显隐，否则会导致 cover-view 显示异常。
* IOS端暂不支持一个页面有多个video时嵌套cover-view。
* cover-view 和 cover-image 从基础库版本1.12.0开始支持事件捕获、冒泡。
* cover-image和cover-view的渲染顺序与页面中的标签使用顺序一致。


