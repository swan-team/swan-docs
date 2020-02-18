---
title: spin 加载
header: develop
nav: extended
sidebar: smt-spin
webUrl: https://qft12m.smartapps.cn/subPackages/extensionsPackage/component/pages/smt-spin/smt-spin
---

**解释：** 加载组件，可用于全屏和半屏。用于展示加载状态，点击加载、正在加载、加载完成、重新加载四种状态。

##  属性说明 

|属性名 | 类型 | 必填 | 默认值 |说明 |
|---|---|---|---|---|
|status |Number |是||加载状态配置|
|theme |String |否||主题配置，默认浅色；深色主题请指定dark|
|textConfig |Array |否|[&#39;点击加载更多&#39;, &#39;正在加载...&#39;, &#39;已经到底啦&#39;, &#39;加载失败 点击重新加载&#39;]|加载状态对应的文案|
|secureBottom |Boolean |否|true|默认兼容iPhoneX 及以上型号底部安全区，非全屏可关闭|

## 示例

<a href="swanide://fragment/25af44248f8aad73b64e274ead38d6151577191316430" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/smt-spin.png"  class="demo-qrcode-image" />

###  图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/smt-spin.gif">
    </div>  
</div>

###  代码示例

* 在 swan 文件中

```html
<smt-spin status="{{status}}">
</smt-spin>
```


* 在 js 文件中

```javascript
Page({
    data: {
        status: 1
    }
});
```




