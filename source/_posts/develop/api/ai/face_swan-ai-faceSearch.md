---
title: swan.ai.faceSearch
header: develop
nav: api
sidebar: face_swan-ai-faceSearch
---

  

>基础库 3.20.11 开始支持，低版本需做兼容处理。

**解释**：人脸搜索，传入人脸图片，支持在指定人脸图片集合中，找到与传入图片中人脸最为相似的图片。使用本功能需要小程序开发者后台登录超级管理员账号，点击[云平台付费链接](https://ai.baidu.com/ai-doc/FACE/Bk37c1m1n)开通云账号付费功能。

 
## 方法参数

Object object

### `object`参数说明 ：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|image | string | 是 | | 图片信息(总数据大小应小于 10M)，图片上传方式根据 image_type 来判断。 | 
|image_type | string | 是 | |图片类型<br> **·**BASE64 :图片的 base64 值，base64 编码后的图片数据，编码后的图片大小不超过2M；<br>**·**URL :图片的 URL 地址( 可能由于网络等原因导致下载图片时间过长)；<br>**·**FACE_TOKEN : 人脸图片的唯一标识，调用人脸检测接口时，会为每个人脸图片赋予一个唯一的 FACE_TOKEN，同一张图片多次检测得到的 FACE_TOKEN 是同一个。 | 
|group_id_list | string | 是 | | 从指定的 group 中进行查找 用逗号分隔，上限 10 个。| 
|quality_control | string | 否 | | 图片质量控制。<br> **·**NONE : 不进行控制；<br> **·**LOW :较低的质量要求；<br> **·**NORMAL : 一般的质量要求；<br> **·**HIGH : 较高的质量要求；默认 NONE，若图片质量不满足要求，则返回结果中会提示质量检测失败。 | 
|liveness_control | string | 否 | |活体检测控制。<br> **·**NONE : 不进行控制；<br> **·**LOW :较低的活体要求(高通过率 低攻击拒绝率)；<br> **·**NORMAL : 一般的活体要求(平衡的攻击拒绝率, 通过率)；<br> **·**HIGH : 较高的活体要求(高攻击拒绝率 低通过率)。默认 NONE，若活体检测结果不满足要求，则返回结果中会提示活体检测失败。|
|max_face_num | string | 否 | |最多处理人脸的数目，默认值为1，仅检测图片中面积最大的那个人脸；最大值10，检测图片中面积最大的几张人脸。 |
|user_id | string | 否 | | 当需要对特定用户进行比对时，指定user_id进行比对。即人脸认证功能。 | 
|success | Function | 否 | | 接口调用成功后的回调函数 | 
|fail | Function | 否 | | 接口调用失败的回调函数 | 
|complete|	Function|	否	| |接口调用结束的回调函数（调用成功、失败都会执行）|

### success 返回参数说明 

|参数名 | 参数类型 | 说明 |  
|---|---|---|
|face_token | string | 人脸标志 | 
|user_list | Array | 匹配的用户信息列表|

### user_list参数说明 

|参数名 | 参数类型 | 说明 |  
|---|---|---|
|group_id | string | 用户所属的 group_id | 
|user_id | Array | 用户的 user_id|
|user_info | Array | 注册用户时携带的 user_info|
|score | number | 用户的匹配得分，推荐阈值 80 分。|

## 示例

<a href="swanide://fragment/c5aabb973ce9c3e6ce54d4a547b390711575000496556" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/faceSearch.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>


### 图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/faceSearch.gif">
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
    faceSearch() {
        swan.chooseImage({
            success: res => {
                let imageTop = res.tempFilePaths[0];
                // let imageLeft = res.tempFilePaths[1];
                // let imageMid = res.tempFilePaths[2];
                // let imageRight = res.tempFilePaths[3];
                swan.ai.faceSearch({
                    image,
                    image_type: 'BASE64',
                    group_id_list: 'imageLeft,imageMid,imageRight',
                    quality_control: 'NONE',
                    liveness_control: 'NONE',
                    face_type: 'LIVE',
                    user_id: 'xxxxxx',
                    max_user_num: 20,
                    success: res => {
                        console.log(res);
                    },
                    fail: err => {
                        console.log(err);
                    }
                });
            }
        });
    }
});
```

### 返回示例 

```
{
    "face_token": "fid",
    "user_list": [  
       {
          "group_id" : "test1",
          "user_id": "u333333",
          "user_info": "Test User",
          "score": 99.3  
      }
    ]
  }
```
