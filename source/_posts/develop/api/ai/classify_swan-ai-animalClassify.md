---
title: swan.ai.animalClassify
header: develop
nav: api
sidebar:  classify_swan-ai-animalClassify
---

 

**解释** ：该请求用于识别一张图片，即对于输入的一张图片（可正常解码，且长宽比较合适），输出动物识别结果。


## 方法参数

Object object

### `object`参数说明 ：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|image|	String|是|-  |图像资源地址|
|top_num|	Number |否	| 6 |返回预测得分top结果数，默认为6|
|success |Function    |否 | |      接口调用成功的回调函数|
|fail |   Function|    否  | |     接口调用失败的回调函数|
|complete  |  Function  |  否   | |    接口调用结束的回调函数（调用成功、失败都会执行）|

###  success 返回参数说明 

|参数 |类型 |说明  |
|---- | ---- | ---- |
|log_id| Number|	唯一的log id，用于问题定位|
|result| Array|	识别结果数组|

###  result 返回值说明 

|参数名 | 参数类型 |说明  |
|---|---|---|---|
|name|	String|	动物名称，示例：蒙古马。|
|score|	String|		置信度，示例：0.5321。|

## 示例

<a href="swanide://fragment/d3a867157469e01d1f6515f27172d4331569501144725" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/advancedGeneralIdentify.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/animalClassify.jpeg">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例 



```js
Page({
    animalClassify() {
        swan.chooseImage({
            success: res => {
                let image = res.tempFilePaths[0];
                swan.ai.animalClassify({
                    image,
                    top_num: 6,
                    success: res => {
                        console.log('animalClassify res', res.result);
                    },
                    fail: err => {
                        console.log('animalClassify err', err);
                    }
                });
            }
        });
    }
});
```

###  返回值示例 ：
```json
{
    "log_id": $log_id,
    "result": [
        {
            "score": "0.989849",
            "name": "国宝大熊猫"
        },
        {
            "score": "0.00507955",
            "name": "秦岭四宝"
        },
        {
            "score": "0.00143795",
            "name": "团团圆圆"
        },
        {
            "score": "0.000770976",
            "name": "棕色大熊猫"
        },
        {
            "score": "0.000324621",
            "name": "圆仔"
        },
        {
            "score": "0.000130874",
            "name": "小熊猫"
        }
    ]
}
```

