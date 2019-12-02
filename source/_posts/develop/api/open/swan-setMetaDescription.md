---
title: swan.setMetaDescription
header: develop
nav: api
sidebar: swan-setMetaDescription
---
 
 

> 不推荐使用。

**解释**： 设置 web 版小程序 description meta 信息。此方法为 web 版小程序专用方法，使用前需判断方法是否存在。

**百度APP中扫码体验：**

请<a href="swanide://fragment/77076cb84baae5c32c01c014830348a01559045869146" title="在开发者工具中" target="_self">在开发者工具中</a>，单击“预览”，输入您的APPID，单击“WEB预览”，百度APP中扫码体验。

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
| content |  String  |是 || 需要设置的 description 内容|
|success |Function  |  否  ||接口调用成功的回调函数|
|fail  | Function  |  否  | | 接口调用失败的回调函数|
|complete   | Function   | 否  | | 接口调用结束的回调函数（调用成功、失败都会执行）|

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/setMetaDescription.jpg">
    </div>    
</div>

**代码示例**：

<a href="swanide://fragment/4ccb5b68713b1395539d9a7cfd596cf81559045540637" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


**在 js 文件中**

```js
Page({
    onShow() {
        swan.setMetaDescription({
            content: '当前小程序页面描述信息',
            success: res => {
                console.log('setMetaDescription success', res);
            },
            fail: err => {
                console.log('setMetaDescription fail', err);
            }
        });
    }
});
```


