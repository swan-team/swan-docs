---
title: swan.switchTab
header: develop
nav: api
sidebar: tab_swan-switchTab
---

  

**解释**：跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_navigateTo.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|url |String | 是  | | 需要跳转的 tabBar 页面的路径（需在 app.json 的 tabBar 字段定义的页面），路径后不能带参数。|
|success |Function  |  否  | |  接口调用成功的回调函数|
|fail   | Function |   否  | |  接口调用失败的回调函数|
|complete |   Function |   否 | |   接口调用结束的回调函数（调用成功、失败都会执行）|

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/switchtab.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：
<a href="swanide://fragment/ec2dc973777c2059652a99fda7f117621574140319528" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 swan 文件中

```html
<view class="wrap">    
    <button bind:tap="switchTab" type="primary" hover-stop-propagation="true">跳转到API Tab页</button>
</view>
```

* 在 js 文件中

```js
Page({
    data: { },
    switchTab() {
        swan.switchTab({
            url: '/api/api',
            success: res => {
                console.log('switchTab success');
            },
            fail: err => {
                console.log('switchTab fail', err);
            }
        })
    }
});
```

