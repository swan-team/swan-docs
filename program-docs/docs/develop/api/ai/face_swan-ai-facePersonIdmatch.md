---
title: swan.ai.facePersonIdmatch
header: develop
nav: api
sidebar: face_swan-ai-facePersonIdmatch
# webUrl: https://qft12m.smartapps.cn/swan-api/facePersonIdmatch/facePersonIdmatch
---



>基础库 3.20.11 开始支持，低版本需做兼容处理。

**解释**：身份证和名字对比，验证用户输入的身份证号码和姓名是否匹配，用于判断用户信息是否真实。使用本功能需要小程序开发者后台登录超级管理员账号，点击[云平台付费链接](https://ai.baidu.com/ai-doc/FACE/Bk37c1m1n)开通云账号付费功能。
**Web 态说明**：受宿主环境限制，Web 态暂不支持 AI 能力相关接口。在 Web 态会做 **打开百度 App 对应小程序页面** 的降级处理。


## 方法参数

Object object

### `object`参数说明 ：

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|id_card_number | string | 是 | |身份证号 |
|name | string | 是 | |姓名|
|success | Function | 否 | |接口调用成功后的回调函数 |
|fail | Function | 否 | | 接口调用失败的回调函数 |
|complete|	Function|	否	| |接口调用结束的回调函数（调用成功、失败都会执行）|



## 示例

<a href="swanide://fragment/51ce25edcee87fd358b613451ec7030d1581337050829" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/facePersonIdmatch.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/facePersonIdmatch.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
</div>

### 代码示例



```js
Page({
    facePersonIdmatch() {
        // AI系列的api有宿主使用限制,只可在百度App中使用,建议使用时加一层判断防止代码报未知错误
        let host = swan.getSystemInfoSync().host;
        if (host === 'baiduboxapp') {
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
        }
        else {
            swan.showToast({
                title: '此api目前仅可在百度App上使用',
                icon: 'none'
            });
        }
    }
});
```