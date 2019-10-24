---
title: swan.ai.facePersonVerify
header: develop
nav: api
sidebar: face_swan-ai-facePersonVerify
---

 

>基础库 3.20.11 开始支持，低版本需做兼容处理。

**解释**：公安验证，基于姓名和身份证号，调取公民身份证小图（源自公安系统），将当前获取的人脸图片，与此证件小图进行对比，得出比对分数。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/facePersonVerify.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|image | string | 是 |-| 图片信息(总数据大小应小于 10M)，图片上传方式根据 image_type 来判断。 | 
|image_type | string | 是 |-| 图片类型<br> **· BASE64**:图片的 base64 值，base64 编码后的图片数据，编码后的图片大小不超过 2M；<br>**· URL**:图片的 URL 地址( 可能由于网络等原因导致下载图片时间过长)；<br>**· FACE_TOKEN**: 人脸图片的唯一标识，调用人脸检测接口时，会为每个人脸图片赋予一个唯一的 FACE_TOKEN，同一张图片多次检测得到的 FACE_TOKEN 是同一个。 | 
|id_card_number | string | 是 | -|身份证号码| 
|name | string | 是 |-| 姓名| 
|quality_control | string | 否 |-| 图片质量控制。<br> **· NONE**: 不进行控制；<br> **· LOW**:较低的质量要求；<br> **· NORMAL**: 一般的质量要求；<br> **· HIGH**: 较高的质量要求；默认 NONE，若图片质量不满足要求，则返回结果中会提示质量检测失败。 | 
|liveness_control | string | 否 |-| 活体检测控制。<br> **· NONE**: 不进行控制；<br> **· LOW**:较低的活体要求(高通过率 低攻击拒绝率)；<br> **· NORMAL**: 一般的活体要求(平衡的攻击拒绝率, 通过率)；<br> **· HIGH**: 较高的活体要求(高攻击拒绝率 低通过率)。默认 NONE，若活体检测结果不满足要求，则返回结果中会提示活体检测失败。|
|success | Function | 否 | -|接口调用成功后的回调函数 | 
|fail | Function | 否 |-| 接口调用失败的回调函数 | 
|complete|	Function|	否	|-|接口调用结束的回调函数（调用成功、失败都会执行）|

**返回值说明**

|参数名 | 参数类型 |说明 | 
|---|---|---|
|log_id | Number | 日志 ID| 
|score | number | 与公安小图相似度可能性，用于验证生活照与公安小图是否为同一人，有正常分数时为 [0~100]，推荐阈值 80，超过即判断为同一人。| 



**示例代码**

<a href="swanide://fragment/a0142547079efe546bcc078e70501fbb1569416045077" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
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
```

**返回示例**
```
{
  "score": 44.3,
}
```

