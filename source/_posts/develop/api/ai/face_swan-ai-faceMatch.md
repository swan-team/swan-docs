---
title: swan.ai.faceMatch
header: develop
nav: api
sidebar: face_swan-ai-faceMatch
---

 

>基础库 3.20.11 开始支持，低版本需做兼容处理。

**解释**：人脸对比，支持两张人脸图片的相似度对比，图片类型可以为：生活照，证件照，身份证芯片照或者带网纹照。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/faceMatch.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|data | Array| 是 | | 图片信息 | 
|success | Function |  否 | |接口调用成功后的回调函数 | 
|fail | Function | 否 | | 接口调用失败的回调函数 | 
|complete|	Function|	否	| |接口调用结束的回调函数（调用成功、失败都会执行）|

**data  参数**

|参数名 | 参数类型 | 是否必填 |说明  | 
|---|---|---|---|
|image | string | 是 | 图片信息(总数据大小应小于 10M)，图片上传方式根据 image_type 来判断。 | 
|image_type | string | 是 | 图片类型。<br> **· BASE64**:图片的 base64 值，base64 编码后的图片数据，编码后的图片大小不超过 2M；<br>**· URL**: 图片的 URL 地址( 可能由于网络等原因导致下载图片时间过长)；<br>**· FACE_TOKEN**: 人脸图片的唯一标识，调用人脸检测接口时，会为每个人脸图片赋予一个唯一的 FACE_TOKEN，同一张图片多次检测得到的 FACE_TOKEN 是同一个。 | 
|quality_control | string | 否 | 图片质量控制。<br> **· NONE**: 不进行控制；<br> **· LOW**:较低的质量要求；<br> **· NORMAL**: 一般的质量要求；<br> **· HIGH**: 较高的质量要求；默认 NONE，若图片质量不满足要求，则返回结果中会提示质量检测失败。 | 
|liveness_control | string | 否 | 活体检测控制。<br> **· NONE**: 不进行控制；<br> **· LOW**:较低的活体要求(高通过率 低攻击拒绝率)；<br> **· NORMAL**: 一般的活体要求(平衡的攻击拒绝率, 通过率)；<br> **· HIGH**: 较高的活体要求(高攻击拒绝率 低通过率)。默认 NONE，若活体检测结果不满足要求，则返回结果中会提示活体检测失败。|
|face_type | string | 否 | 人脸的类型。<br> **· LIVE** 表示生活照：通常为手机、相机拍摄的人像图片、或从网络获取的人像图片等；<br> **· IDCARD**表示身份证芯片照：二代身份证内置芯片中的人像照片；<br> **· WATERMARK** 表示带水印证件照：一般为带水印的小图，如公安网小图；<br> **· CERT** 表示证件照片：如拍摄的身份证、工卡、护照、学生证等证件图片；默认 LIVE。 | 

**success 返回参数说明**

|参数名 | 参数类型 | 说明 |  
|---|---|---|
|score|number |人脸相似度得分，推荐阈值80分。|
|face_list|Array|人脸信息列表|

**face_list参数说明**

|参数名 | 参数类型 | 说明 |  
|---|---|---|
|face_token|string |人脸的唯一标志|

**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/faceMatch.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/faceMatch2.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**

<a href="swanide://fragment/ae12872d24c04bfd2071e38cbbf2a1aa1569415830853" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    faceMatch() {
        swan.ai.faceMatch({
            data: [{
                    "image": "https://www.downloadImage.com/xxxx.jpg",
                    "image_type": "URL",
                    "face_type": "LIVE",
                    "quality_control": "LOW",
                    "liveness_control": "HIGH"
                },
                {
                    "image": "https://www.downloadImage.com/xxxx.jpg",
                    "image_type": "URL",
                    "face_type": "IDCARD",
                    "quality_control": "LOW",
                    "liveness_control": "HIGH"
            }],
            success: res => {
                console.log('res');
            },
            fail: err => {
                console.log('err');
            }
        });
    }
});
```

**返回示例**

```js
{
    "score": 44.3,
    "face_list": [  //返回的顺序与传入的顺序保持一致
        {
            "face_token": "fid1"
        },
        {
            "face_token": "fid2"
        }
    ]
}

```
