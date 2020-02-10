---
title: swan.ai.facePersonVerify
header: develop
nav: api
sidebar: face_swan-ai-facePersonVerify
---

 

>基础库 3.20.11 开始支持，低版本需做兼容处理。

**解释**：公安验证，基于姓名和身份证号，调取公民身份证小图（源自公安系统），将当前获取的人脸图片，与此证件小图进行对比，得出比对分数。使用本功能需要小程序开发者后台登录超级管理员账号，点击[云平台付费链接](https://ai.baidu.com/ai-doc/FACE/Bk37c1m1n)开通云账号付费功能。

 
## 方法参数

Object object

### `object`参数说明 ：

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|image | string | 是 | | 图片信息(总数据大小应小于 10M)，图片上传方式根据 image_type 来判断。 | 
|image_type | string | 是 | | 图片类型<br>   **·** BASE64 :图片的 base64 值，base64 编码后的图片数据，编码后的图片大小不超过 2M；<br>  **·** URL :图片的 URL 地址( 可能由于网络等原因导致下载图片时间过长)；<br>  **·** FACE_TOKEN : 人脸图片的唯一标识，调用人脸检测接口时，会为每个人脸图片赋予一个唯一的 FACE_TOKEN，同一张图片多次检测得到的 FACE_TOKEN 是同一个。 | 
|id_card_number | string | 是 | |身份证号码| 
|name | string | 是 | | 姓名| 
|quality_control | string | 否 | | 图片质量控制。<br>   **·** NONE : 不进行控制；<br>   **·** LOW :较低的质量要求；<br>   **·** NORMAL : 一般的质量要求；<br>   **·** HIGH : 较高的质量要求；默认 NONE，若图片质量不满足要求，则返回结果中会提示质量检测失败。 | 
|liveness_control | string | 否 | | 活体检测控制。<br>   **·** NONE : 不进行控制；<br>   **·** LOW :较低的活体要求(高通过率 低攻击拒绝率)；<br>   **·** NORMAL : 一般的活体要求(平衡的攻击拒绝率, 通过率)；<br>   **·** HIGH : 较高的活体要求(高攻击拒绝率 低通过率)。默认 NONE，若活体检测结果不满足要求，则返回结果中会提示活体检测失败。|
|success | Function | 否 | |接口调用成功后的回调函数 | 
|fail | Function | 否 | | 接口调用失败的回调函数 | 
|complete|	Function|	否	| |接口调用结束的回调函数（调用成功、失败都会执行）|

### success 返回参数说明 

|参数名 | 参数类型 |说明 | 
|---|---|---|
|log_id | Number | 日志 ID| 
|score | number | 与公安小图相似度可能性，用于验证生活照与公安小图是否为同一人，有正常分数时为 [0~100]，推荐阈值 80，超过即判断为同一人。| 

## 示例

<a href="swanide://fragment/fe52a7993df790b5b6692f320850f4351581336925738" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/facePersonVerify.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/facePersonVerify.gif">
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
    facePersonVerify() {
        // AI系列的api有宿主使用限制,只可在百度App中使用,建议使用时加一层判断防止代码报未知错误
        let host = swan.getSystemInfoSync().host;
        if (host === 'baiduboxapp') {
            swan.ai.facePersonVerify({
                image: 'https://www.downloadImage.com/xxxx.jpg',
                image_type: 'URL',
                quality_control: 'NONE',
                liveness_control: 'NONE',
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

### 返回示例 
```
{
  "score": 44.3,
}
```

