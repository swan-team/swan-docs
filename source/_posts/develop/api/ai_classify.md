---
title: 图像识别
header: develop
nav: api
sidebar: ai_classify
---


## swan.ai.advancedGeneralIdentify

**解释**：通用物体及场景识别，即对于输入的一张图片（可正常解码，且长宽比适宜），输出图片中的多个物体及场景标签。

**百度APP中扫码体验：**

<img src="	https://b.bdstatic.com/miniapp/assets/images/doc_demo/advancedGeneralIdentify.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|image|	String|是| - |图像资源地址|
|success |Function    |否 |-|      接口调用成功的回调函数|
|fail |   Function|    否  |-|     接口调用失败的回调函数|
|complete  |  Function  |  否   |-|    接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**：

|参数 |类型 | 说明  |
|---- | ---- | ---- |
|log_id|	Number|	唯一的log id，用于问题定位。|
|result_num|	Number|	返回结果数目，及result数组中的元素个数。|
|result|	Array|	标签结果数组|

**result 返回值说明**

|参数名 | 参数类型 |说明  |
|---|---|---|---|
|keyword|	String|	图片中的物体或场景名称|
|score|Number	|置信度，0-1|
|root|	String|	识别结果的上层标签，有部分钱币、动漫、烟酒等tag无上层标签。|

**示例**：

<a href="swanide://fragment/dcc9c3fcf59e0de53028a481f22d92951569388593001" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
  swan.chooseImage({
    success: res => {
      let image = res.tempFilePaths[0];
      swan.ai.advancedGeneralIdentify({
        image, // 暂不支持识别网络图片
        success: res => {
          console.log('advancedGeneralIdentify res', res.result);
        },
        fail: err => {
          console.log('advancedGeneralIdentify err', err);
        }
      });
    }
  })
});
```

**返回值示例**：
```json
{
    "log_id": $log_id,
    "result_num": 5,
    "result": [
        {
            "score": 0.371429,
            "root": "",
            "keyword": "Shop BGM & J-Clef 카페이야기 Vol.7 (商店音乐 & J-Clef 咖啡故事 Vol.7)"
        },
        {
            "score": 0.25045,
            "root": "商品-容器",
            "keyword": "水壶"
        },
        {
            "score": 0.169905,
            "root": "商品-生活用品",
            "keyword": "功夫茶具"
        },
        {
            "score": 0.095448,
            "root": "交通工具-汽车",
            "keyword": "汽车"
        },
        {
            "score": 0.019755,
            "root": "商品-食物",
            "keyword": "咖啡"
        }
    ]
}
```


## swan.ai.objectDetectIdentify

**解释**：用户向服务请求检测图像中的主体位置。

**百度APP中扫码体验：**

<img src="	https://b.bdstatic.com/miniapp/assets/images/doc_demo/objectDetectIdentify.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|image|	String|是| - |图像资源地址|
|with_face|Number	|否|	1|如果检测主体是人，主体区域是否带上人脸部分，0-不带人脸区域，其他-带人脸区域，裁剪类需求推荐带人脸，检索/识别类需求推荐不带人脸。默认取1，带人脸。|
|success |Function    |否 |-|      接口调用成功的回调函数|
|fail |   Function|    否  |-|     接口调用失败的回调函数|
|complete  |  Function  |  否   |-|    接口调用结束的回调函数（调用成功、失败都会执行）|

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


**示例**：

<a href="swanide://fragment/20502601a7541449683704fcfb93e0491559034111209" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
  swan.chooseImage({
    success: res => {
      let image = res.tempFilePaths[0];
      swan.ai.objectDetectIdentify({
        image,
        success: res => {
          console.log('objectDetectIdentify res', res.result);
        },
        fail: err => {
          console.log('objectDetectIdentify fail', err);
        }
      });
    }
  })
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


## swan.ai.carClassify

**解释**：用于检测一张车辆图片的具体车型，即对于输入的一张图片（可正常解码，且长宽比适宜），输出图片的车辆品牌及型号、颜色及年份、位置信息。


**百度APP中扫码体验：**

<img src="	https://b.bdstatic.com/miniapp/assets/images/doc_demo/carClassify.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|image|	String|是| - |图像资源地址|
|top_num	|Number	|否|5|返回结果top n，默认5。|
|success |Function    |否 |-|      接口调用成功的回调函数|
|fail |   Function|    否  |-|     接口调用失败的回调函数|
|complete  |  Function  |  否   |-|    接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**：

|参数 |类型 | 说明  |
|---- | ---- | ---- |
|log_id|	Number|	唯一的log id，用于问题定位|
|color_result|	string|	颜色|
|result|	Array|	车型识别结果数组|
|location_result|	Object|	车在图片中的位置信息|

**result 返回值说明**

|参数名 | 参数类型 |说明  |
|---|---|---|---|
|name|	String|	车型名称，示例：宝马x6|
|score|	Number|	置信度，示例：0.5321|
|year|	String|	年份|

**location_result 返回值说明**

|参数名 | 参数类型 |说明  |
|---|---|---|---|
|left|    Number| 左起像素位置|
|top|     Number| 上起像素位置|
|width|   Number| 像素宽|
|height|  Number| 像素高|


**示例**：

<a href="swanide://fragment/5cb0c5cf808cc6057d8fb94b56357bf21569414658661" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
swan.chooseImage({
  success: res => {
    let image = res.tempFilePaths[0];
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
});
```

**返回值示例**：
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



## swan.ai.dishClassify

**解释**：用于菜品识别，即对于输入的一张图片（可正常解码，且长宽比适宜），输出图片的菜品名称、卡路里信息、置信度。

**百度APP中扫码体验：**

<img src="	https://b.bdstatic.com/miniapp/assets/images/doc_demo/dishClassify.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|image|	String|是| - |图像资源地址|
|top_num	|Number	|否|5	|返回结果top n,默认值为5。|
|filter_threshold|Number|	是|-	|默认0.95，可以通过该参数调节识别效果，降低非菜品识别率.|
|success |Function    |否 |-|      接口调用成功的回调函数|
|fail |   Function|    否  |-|     接口调用失败的回调函数|
|complete  |  Function  |  否   |-|    接口调用结束的回调函数（调用成功、失败都会执行）|

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

<a href="swanide://fragment/f1a28edc917988c8cfcf0c257dbeeefa1569414920893" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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



## swan.ai.logoClassify

**解释**：用于检测和识别图片中的品牌 LOGO 信息。即对于输入的一张图片（可正常解码，且长宽比适宜），输出图片中 LOGO 的名称、位置和置信度。 当效果欠佳时，可以建立子库（在控制台创建应用并申请建库）并通过调用 logo 入口接口完成自定义 logo 入库，提高识别效果。


**百度APP中扫码体验：**

<img src="	https://b.bdstatic.com/miniapp/assets/images/doc_demo/logoClassify.png"  class="demo-qrcode-image" />


**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|image|	String|是| - |图像资源地址|
|custom_lib	|Boolean	|否|	-|是否只检索用户子库，true则只检索用户子库，false(默认)为检索底库+用户子库。|
|success |Function    |否 |-|      接口调用成功的回调函数|
|fail |   Function|    否  |-|     接口调用失败的回调函数|
|complete  |  Function  |  否   |-|    接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**：

|参数 |类型 | 说明  |
|---- | ---- | ---- |
|log_id|	Number|	唯一的log id，用于问题定位。|
|result_num|	Number|	识别结果数，标识返回结果数目。|
|result|	Array|	返回结果数组，每一项为一个识别出的logo。|


**result 返回值说明**

|参数名 | 参数类型 |说明  |
|---|---|---|---|
|type|     Number| type=0 为1千种高优商标识别结果；type=1 为2万类logo库的结果；其它type为自定义logo库结果。|
|name|     String| 识别的品牌名称|
|probability|     Number| 分类结果置信度（0--1.0）|
|location|	Object|	位置信息（左起像素位置、上起像素位置、像素宽、像素高）|

**location 返回值说明**

|参数名 | 参数类型 |说明  |
|---|---|---|---|
|left|	Number|	左起像素位置|
|top|		Number|	上起像素位置|
|width|	Number|	像素宽|
|height|	Number|	像素高|


**示例**：

<a href="swanide://fragment/ab217ecd1c08c7d10992d367ac052dbb1569414838193" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


```js
swan.chooseImage({
  success: res => {
    let image = res.tempFilePaths[0];
    swan.ai.logoClassify({
      image,
      custom_lib: false,
      success: res => {
        console.log('dishClassify res', res.result);
      },
      fail: err => {
        console.log('dishClassify err', err);
      }
    });
  }
});
```

**返回值示例**：
```json
{
    "log_id": $log_id,
    "result_num": 1,
    "result": [
        {
            "type": 0,
            "name": "百度",
            "probability": 0.99999850988388,
            "location": {
                "width": 160,
                "top": 88,
                "left": 201,
                "height": 165
            }
        }
    ]
}
```



## swan.ai.animalClassify

**解释**：该请求用于识别一张图片，即对于输入的一张图片（可正常解码，且长宽比较合适），输出动物识别结果。

**百度APP中扫码体验：**

<img src="	https://b.bdstatic.com/miniapp/assets/images/doc_demo/animalClassify.png"  class="demo-qrcode-image" />


**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|image|	String|是|-  |图像资源地址|
|top_num|	Number |否	| 6 |返回预测得分top结果数，默认为6|
|success |Function    |否 | -|      接口调用成功的回调函数|
|fail |   Function|    否  | -|     接口调用失败的回调函数|
|complete  |  Function  |  否   |-|    接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**

|参数 |类型 |说明  |
|---- | ---- | ---- |
|log_id| Number|	唯一的log id，用于问题定位|
|result| Array|	识别结果数组|

**result 返回值说明**

|参数名 | 参数类型 |说明  |
|---|---|---|---|
|name|	String|	动物名称，示例：蒙古马。|
|score|	String|		置信度，示例：0.5321。|


**示例**：

<a href="swanide://fragment/61d91bbf4843daa85ff43dbbb9cc23691569414992464" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
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
```

**返回值示例**：
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



## swan.ai.plantClassify

**解释**：该请求用于识别一张图片，即对于输入的一张图片（可正常解码，且长宽比较合适），输出植物识别结果。


**百度APP中扫码体验：**

<img src="	https://b.bdstatic.com/miniapp/assets/images/doc_demo/plantClassify.png"  class="demo-qrcode-image" />


**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|image|	String|是| - |图像资源地址|
|success |Function    |否 |-|      接口调用成功的回调函数|
|fail |   Function|    否  |-|     接口调用失败的回调函数|
|complete  |  Function  |  否   |-|    接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**

|参数 |类型 | 说明  |
|---- | ---- | ---- |
|log_id|	Number|	唯一的log id，用于问题定位。|
|result| Array|	识别结果数组|

**result 返回值说明**

|参数名 | 参数类型 |说明  |
|---|---|---|---|
|name| String|	植物名称，示例：吉娃莲。|
|score	|Number|	置信度，示例：0.5321。|

**示例**：

<a href="swanide://fragment/0ed61bf9910ed18a664037cd907c0fae1569415076954" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
swan.chooseImage({
  success: res => {
    let image = res.tempFilePaths[0];
    swan.ai.plantClassify({
      image,
      success: res => {
        console.log('plantClassify res', res.result);
      },
      fail: err => {
        console.log('plantClassify err', err);
      }
    });
  }
});
```

**返回值示例**：
```json
{
    "log_id": $log_id,
    "result": [
        {
            "score": 0.33590477705002,
            "name": "荷花"
        },
        {
            "score": 0.16884732246399,
            "name": "莲花池"
        },
        {
            "score": 0.13957330584526,
            "name": "莲花"
        },
        {
            "score": 0.038642730563879,
            "name": "夏日荷花"
        },
        {
            "score": 0.037120133638382,
            "name": "荷花池"
        }
    ]
}
```


<!-- ## recognizeImage

> 需要[申请鉴权](http://wiki.baidu.com/pages/viewpage.action?pageId=597877755)，在 3.20.3 版本开始支持。

支持在小程序内调起识图，目前支持的识图功能包含： 扫码，拍题，翻译。


**Object参数说明**：

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|categoryList |String Array |  是 | 需要调起的识图垂类列表 |
|index |Number| 否 | 对应categoryList的索引值，设定调起识图垂类功能，默认为0，即categoryList中第一项。 |
|showTitle |Boolean | 否  |当垂类列表中仅有一项时，调起识图后是否展示垂类名称，默认为false，即单一垂类调起识图时不展示名称。  |
|success |Function  |  是 |  接口调用成功的回调|
|fail   | Function |   否  | 接口调用失败的回调函数|
|complete  |  Function |   否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**categoryList有效值**

|errCodegory|功能|
|----|----|
|BARCODE|扫码|
|TRANSLATE|翻译|
|QUESTION|拍题|

**示例代码**：

```javascript
swan.recognizeImage({
    categoryList: ['BARCODE'],
    index: 0,
    showTitle: true,
    success: res => {
        console.log('调起识图成功：', res);
    },
    fail: err => {
        console.log('调起识图失败：', err);
    }
})
``` -->