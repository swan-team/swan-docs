---
title: smt-page-status 页面状态组件
header: develop
nav: extensions
sidebar: smt-page-status
---

**解释：** 页面状态组件，可用于全屏和半屏。用于展示页面加载，页面异常-有操作、页面异常-无操作三种页面状态。

##  属性说明 

|属性名 | 类型 | 必填 | 默认值 |说明 |
|---|---|---|---|---|
|theme |String |否||主题配置，默认浅色；沉浸式主题请指定dark|
|loading |Boolean |否|false|页面状态配置，默认不展示加载状态页面|
|icon |String |否|content|空态&#x2F;缺省页面下的图标名称|
|loadingTitle |String |否|正在加载...|加载页面下的标题文案|
|title |String |否|单行标题|空态&#x2F;缺省页面下的标题文案|
|desc |String |否||空态&#x2F;缺省页面下的描述文案|
|showBtn |Boolean |否|true|是否展示空态&#x2F;缺省页面下的操作按钮，默认展示|
|btnText |String |否|重新加载|空态&#x2F;缺省页面下，操作按钮的描述文案,建议最多显示4个汉字，超出内容截断|


## 代码示例

<a href="" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/smt-page-status.png"  class="demo-qrcode-image" />

###  图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/smt-page-status.gif">
    </div>  
</div>

###  代码示例

* 在 swan 文件中

```html
<smt-page-status 
    class="content"
    loading="{{loading}}"
    title="网络不给力，请稍后再试" >
</smt-page-status>
```


* 在 js 文件中

```javascript
Page({
    data: {
        loading: false
    },
    reloading() {
        this.setData({loading: true});
        setTimeout(() => {
            this.setData(
                {loading: false},
            );
        }, 3000);
    }
});
```


* 在 css 文件中

```css
.content {
    width: 100%;
    height: 100vh;
}
```


