---
title: swan.ai.carClassify
header: develop
nav: api
sidebar:  classify_swan-ai-carClassify
---



**解释** ：用于检测一张车辆图片的具体车型，即对于输入的一张图片（可正常解码，且长宽比适宜），输出图片的车辆品牌及型号、颜色及年份、位置信息。


 

## 方法参数 

Object object

### `object`参数说明 ：

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|image|	String|是| - |图像资源地址|
|top_num	|Number	|否|5|返回结果top n，默认5。|
|success |Function    |否 | |      接口调用成功的回调函数|
|fail |   Function|    否  | |     接口调用失败的回调函数|
|complete  |  Function  |  否   | |    接口调用结束的回调函数（调用成功、失败都会执行）|

### success 返回参数说明 ：

|参数 |类型 | 说明  |
|---- | ---- | ---- |
|log_id|	Number|	唯一的log id，用于问题定位|
|color_result|	string|	颜色|
|result|	Array|	车型识别结果数组|
|location_result|	Object|	车在图片中的位置信息|

### result 返回值说明 

|参数名 | 参数类型 |说明  |
|---|---|---|
|name|	String|	车型名称，示例：宝马x6|
|score|	Number|	置信度，示例：0.5321|
|year|	String|	年份|

### location_result 返回值说明 

|参数名 | 参数类型 |说明  |
|---|---|---|
|left|    Number| 左起像素位置|
|top|     Number| 上起像素位置|
|width|   Number| 像素宽|
|height|  Number| 像素高|

## 示例

<a href="swanide://fragment/4ad90882398c9e1169a7180f37a13eba1581334598991" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/carClassify.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/carClassify.jpeg">
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
  carClassify() {
        swan.chooseImage({
            success: res => {
                let image = res.tempFilePaths[0];
                // AI系列的api有宿主使用限制,只可在百度App中使用,建议使用时加一层判断防止代码报未知错误
                let host = swan.getSystemInfoSync().host;
                if (host === 'baiduboxapp') {
                    swan.ai.carClassify({
                        image,
                        top_num: 5,
                        success: res => {
                        console.log('carClassify res', res.result);
                        },
                        fail: err => {
                        console.log('carClassify err', err);
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
    }
});
```

### 返回值示例 ：
```json
{
    "log_id": $log_id,
    "location_result": {
        "width": 434,
        "top": 119,
        "height": 246,
        "left": 110
    },
    "result": [
        {
            "score": 0.99993008375168,
            "name": "宝马X3",
            "year": "2016"
        },
        {
            "score": 0.00005255633732304,
            "name": "宝马X4",
            "year": "2015-2016"
        },
        {
            "score": 0.0000031432850846613,
            "name": "SWM斯威X7",
            "year": "2016-2017"
        },
        {
            "score": 0.0000012879694395451,
            "name": "宝马X5",
            "year": "2016-2017"
        },
        {
            "score": 5.6126202707674e-7,
            "name": "丰田汉兰达",
            "year": "2015-2017"
        },
        {
            "score": 4.4069730620322e-7,
            "name": "斯柯达速尊",
            "year": "2014-2016"
        },
        {
            "score": 4.0618823504701e-7,
            "name": "宝马X1",
            "year": "2017"
        }
    ],
    "color_result": "白色"
}
```
