---
title:  swan.ai.dishClassify
header: develop
nav: api
sidebar:  classify_swan-ai-dishClassify
---

 

**解释**：用于菜品识别，即对于输入的一张图片（可正常解码，且长宽比适宜），输出图片的菜品名称、卡路里信息、置信度。

**百度APP中扫码体验：**

<img src="	https://b.bdstatic.com/miniapp/assets/images/doc_demo/dishClassify.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|image|	String|是| - |图像资源地址|
|top_num	|Number	|否|5	|返回结果top n,默认值为5。|
|filter_threshold|Number|	是|-	|默认0.95，可以通过该参数调节识别效果，降低非菜品识别率.|
|success |Function    |否 | |      接口调用成功的回调函数|
|fail |   Function|    否  | |     接口调用失败的回调函数|
|complete  |  Function  |  否   | |    接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**：

|参数 |类型 | 说明  |
|---- | ---- | ---- |
|log_id|	Number|	唯一的log id，用于问题定位。|
|result_num|	Number|	返回结果数目，及result数组中的元素个数。|
|result|	Array|	菜品识别结果数组|


**result 返回值说明**

|参数名 | 参数类型 |说明  |
|---|---|---|---|
|name|	String|	菜名，示例：鱼香肉丝。|
|has_calorie|   Boolean|菜品是否含有卡路里。 |
|calorie|	String|	卡路里，每100g的卡路里含量。|
|probability|	String	|识别结果中每一行的置信度值，0-1。|


**示例**：

<a href="swanide://fragment/537ef56cc65e65914349ddad095f1d021569501070696" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
swan.chooseImage({
  success: res => {
    let image = res.tempFilePaths[0];
    swan.ai.dishClassify({
      image,
      top_num: 5,
      filter_threshold: 0.95,
      success: res => {
        console.log('dishClassify res', res.result);
      },
      fail: err => {
          console.log('dishClassify res', err);
        }
    });
  }
});
```

**返回值示例**：
```json
{
    "log_id": $log_id,
    "result_num": 5,
    "result": [
        {
            "calorie": "119",
            "has_calorie": true,
            "name": "小炒黄牛肉",
            "probability": "0.137841"
        },
        {
            "calorie": "22",
            "has_calorie": true,
            "name": "牛肉粒",
            "probability": "0.0870818"
        },
        {
            "calorie": "120",
            "has_calorie": true,
            "name": "炒牛肉",
            "probability": "0.0813015"
        },
        {
            "calorie": "109",
            "has_calorie": true,
            "name": "炒田螺",
            "probability": "0.0772957"
        },
        {
            "calorie": "117",
            "has_calorie": true,
            "name": "干煸豆角",
            "probability": "0.048997"
        }
    ]
}
```

