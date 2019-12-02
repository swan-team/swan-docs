---
title: swan.navigateTo
header: develop
nav: api
sidebar: tab_swan-navigateTo
---

> * 以下 5 个 API 都有与之功能一致的 [navigator 组件](/develop/component/nav/) 声明方式。
* 如果两种方式都能满足您的使用场景，推荐您使用 [navigator 组件](/develop/component/nav/) 实现相应的导航功能，以便更好的被搜索引擎理解。


 

**解释**：保留当前页面，跳转到应用内的某个页面，但是不能跳转到 tabbar 页面，使用 swan.navigateBack 可以返回到原页面。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_navigateTo.png"  class="demo-qrcode-image" />


**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|url |String  |是| |  需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 ‘path?key=value&key2=value2’。|
|success| Function  |  否  | |  接口调用成功的回调函数|
|fail  |  Function  |  否  | |  接口调用失败的回调函数|
|complete  |  Function  |  否 | |   接口调用结束的回调函数（调用成功、失败都会执行）|


**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/navigeto.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**
<a href="swanide://fragment/0d35934b50b1749bc787786f3cd140241574138803752" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button bind:tap="navigateTo" type="primary" hover-stop-propagation="true">跳转新页面</button>
</view>
```

* 在 js 文件中

```js
Page({
    data: { },
    navigateTo(e) {
        swan.navigateTo({
            url: '/detail/detail?id=新页面'
        });
    }
});
```
**Bug & Tip**：
jssdk 在 web-view 中使用 swan.navigateTo 接口跳转 success、fail、complete 回调函数不显示。
 
