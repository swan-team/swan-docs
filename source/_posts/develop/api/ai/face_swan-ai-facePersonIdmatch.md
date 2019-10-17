---
title: swan.ai.facePersonIdmatch
header: develop
nav: api
sidebar: face_swan-ai-facePersonIdmatch
---

 

>基础库 3.20.11 开始支持，低版本需做兼容处理。

**解释**：身份证和名字对比，验证用户输入的身份证号码和姓名是否匹配，用于判断用户信息是否真实。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/facePersonIdmatch.png"  class="demo-qrcode-image" />


**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|id_card_number | string | 是 | -|身份证号 | 
|name | string | 是 | -|姓名| 
|success | Function | 否 | -|接口调用成功后的回调函数 | 
|fail | Function | 否 |-| 接口调用失败的回调函数 | 
|complete|	Function|	否	|-|接口调用结束的回调函数（调用成功、失败都会执行）|

**示例代码**

<a href="swanide://fragment/49590e5e5e3e6e4dc9f04b1795d3c18c1569416163042" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
swan.ai.facePersonIdmatch({
    id_card_number: '',
    name: '',
    success: res => {
        console.log('success', res);
    },
    fail: err => {
        console.log('fail', err);
    }
});
```