---
title:  swan.ai.objectDetectIdentify
header: develop
nav: api
sidebar:  classify_swan-ai-objectDetectIdentify
---

 

**解释**：用户向服务请求检测图像中的主体位置。

**百度APP中扫码体验：**

<img src="	https://b.bdstatic.com/miniapp/assets/images/doc_demo/objectDetectIdentify.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|image|	String|是| - |图像资源地址|
|with_face|Number	|否|	1|如果检测主体是人，主体区域是否带上人脸部分，0-不带人脸区域，其他-带人脸区域，裁剪类需求推荐带人脸，检索/识别类需求推荐不带人脸。默认取1，带人脸。|
|success |Function    |否 | |      接口调用成功的回调函数|
|fail |   Function|    否  | |     接口调用失败的回调函数|
|complete  |  Function  |  否   | |    接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**：

|参数 |类型 | 说明  |
|---- | ---- | ---- |
|log_id|Number|	唯一的log id，用于问题定位。|
|result|	Object|	裁剪结果|

**result 返回值说明**

|参数名 | 参数类型 |说明  |
|---|---|---|---|
|left|    Number| 表示定位位置的长方形左上顶点的水平坐标。|
|top|     Number| 表示定位位置的长方形左上顶点的垂直坐标。|
|width|   Number| 表示定位位置的长方形的宽度。|
|height|  Number| 表示定位位置的长方形的高度。|


**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/objectDetectIdentify.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例1 - 裁剪类需求**：

<a href="swanide://fragment/893b006eaaebeec3deb75dfda46386461573996982449" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
  objectDetectIdentify() {
      swan.chooseImage({
          success: res => {
            let image = res.tempFilePaths[0];
            swan.ai.objectDetectIdentify({
              image,
              with_face: 1,
              success: res => {
                console.log('objectDetectIdentify res', res.result);
              },
              fail: err => {
                console.log('objectDetectIdentify fail', err);
              }
            });
          }
      })
  }
});
```

**代码示例1 - 检索/识别类需求**：

<a href="swanide://fragment/60962c9455805a780253e718238d0c731575194352151" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
  objectDetectIdentify() {
      swan.chooseImage({
          success: res => {
            let image = res.tempFilePaths[0];
            swan.ai.objectDetectIdentify({
              image,
              with_face: 0,
              success: res => {
                console.log('objectDetectIdentify res', res.result);
              },
              fail: err => {
                console.log('objectDetectIdentify fail', err);
              }
            });
          }
      })
  }
});
```

**返回值示例**：
```json
{
    "log_id": $log_id,
    "result": {
        "width": 671,
        "top": 147,
        "left": 94,
        "height": 243
    }
}
```
