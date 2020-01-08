---
title: swan.ai.ocrDrivingLicense
header: develop
nav: api
sidebar: ocr_swan-ai-ocrDrivingLicense
---

  

**解释**：对机动车驾驶证所有关键字段进行识别。

 
## 方法参数

Object object

### `object`参数说明 ：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|image | String | 是   |- | 图像资源地址|
|detect_direction |Boolean | 否   | | 是否检测图像旋转，可检验图像的选装方向和旋转角度。<p>  ·  true：检测旋转角度并矫正识别。针对摆放情况不可控制的情况建议本参数置为true；<p>  ·   false:不检测旋转角度，默认不检测。|
|unified_valid_period |Boolean    |否 | | <p>  ·   true: 归一化格式输出；<p>  ·   false 或无此参数按非归一化格式输出。|
|success |Function    |否 | |      接口调用成功的回调函数|
|fail |   Function|    否  | |     接口调用失败的回调函数|
|complete  |  Function  |  否   | |    接口调用结束的回调函数（调用成功、失败都会执行）|


### success 返回参数说明 

|参数 | 类型 | 说明  |
|---- | ---- | ---- |
|log_id | Number |唯一的log id，用于问题定位。|
| words_result_num  |  Number  |识别结果数，表示 words_result 的元素个数。 |
|words_result |  Object  | 识别结果 |

### words_result 返回值说明 

|参数名 | 参数类型 |说明  |
|---|---|---|---|
| 证号 | Object | 证号（持证人的身份证号）|
| 有效期限 | Object | 有效期限|
| 准驾车型 | Object | 准驾车型|
| 有效起始日期 | Object | 有效起始日期|
| 住址 | Object | 住址|
| 姓名 | Object | 姓名|
| 国籍 | Object | 国籍|
| 出生日期 | Object | 出生日期|
| 性别 | Object | 性别|
| 初次领证日期 | Object | 初次领证日期|

### 证号/有效期限/准驾车型/有效起始日期/住址/姓名/国籍/出生日期/性别/初次领证日期 返回值说明 

|参数名 | 参数类型 |说明  |
|---|---|---|---|
|words | String | 识别结果字符串 |

## 示例

<a href="swanide://fragment/208a29298f9a7c31f626328e779e94081569500548249" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/ocrDrivingLicense.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>



### 图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/ocrDrivingLicense.jpeg">
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
    ocrDrivingLicense() {
        swan.chooseImage({
            success: res => {
                let image = res.tempFilePaths[0];
                swan.ai.ocrDrivingLicense({
                    image, // 暂不支持识别网络图片
                    detect_direction: true,
                    unified_valid_period: true,
                    success: res => {
                        console.log('ocrDrivingLicense res',res.words_result);
                    },
                    fail: err => {
                        console.log('ocrDrivingLicense err', err);
                    }
                });
            }
        })
    }
});
```

### 返回值示例 ：
```json
{
    "log_id": $log_id,
    "direction": -1,
    "words_result_num": 10,
    "words_result": {
        "证号": {
            "words": "3208231999053090"
        },
        "有效期限": {
            "words": "6年"
        },
        "准驾车型": {
            "words": "B2"
        },
        "有效起始日期": {
            "words": "20101125"
        },
        "住址": {
            "words": "江苏省南通市海门镇秀山新城"
        },
        "姓名": {
            "words": "小欧欧"
        },
        "国籍": {
            "words": "中国"
        },
        "出生日期": {
            "words": "19990530"
        },
        "性别": {
            "words": "男"
        },
        "初次领证日期": {
            "words": "20100125"
        }
    }
}
```
