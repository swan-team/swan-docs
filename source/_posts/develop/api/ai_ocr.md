---
title: 文字识别
header: develop
nav: api
sidebar: ai_ocr
---


## swan.ai.ocrIdCard

**解释**：用户向服务请求识别身份证，身份证识别包括正面和背面。

**百度APP中扫码体验：**

<img src="	https://b.bdstatic.com/miniapp/assets/images/doc_demo/ocrIdCard.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|detect_direction |Boolean | 否   |-| 是否检测图像旋转，可检验图像的选装方向和旋转角度。<p> **·** true：检测旋转角度并矫正识别。针对摆放情况不可控制的情况建议本参数置为true；<p> **·**  false:不检测旋转角度，默认不检测。|
|id_card_side  |  String  | 否  |- |front：身份证含照片的一面；back：身份证带国徽的一面。|
|image | String | 是   | -| 图片资源地址|
|detect_risk | Boolean | 否  |- | 是否开启身份证风险类型(身份证复印件、临时身份证、身份证翻拍、修改过的身份证)功能，默认不开启，即：false。可选值:true-开启；false-不开启。|
|success |Function    |否 |-|      接口调用成功的回调函数|
|fail |   Function|    否  |-|     接口调用失败的回调函数|
|complete  |  Function  |  否   |-|    接口调用结束的回调函数（调用成功、失败都会执行）|


**success 返回参数说明**：

|参数 | 类型 | 说明  |
|---- | ---- |---- |
|direction|	Number |图像方向，当 detect_direction=true 时存在。-1: 未定义，0: 正向，1: 逆时针90度，2: 逆时针180度，3: 逆时针270度。|
|image_status  |  String  |normal-识别正常；reversed_side-身份证正反面颠倒；non_idcard-上传的图片中不包含身份证；blurred-身份证模糊；other_type_card-其他类型证照；over_exposure-身份证关键字段反光或过曝；unknown-未知状态。|
|risk_type |String | 输入参数 detect_risk = true 时，则返回该字段识别身份证类型: normal-正常身份证；copy-复印件；temporary-临时身份证；screen-翻拍；unknown-其他未知情况。|
|edit_tool | String | 如果参数 detect_risk = true 时，则返回此字段。如果检测身份证被编辑过，该字段指定编辑软件名称，如:Adobe Photoshop CC 2014 (Macintosh),如果没有被编辑过则返回值无此参数。|
|log_id | Number | 唯一的log id，用于问题定位。|
|words_result_num|  Number  |识别结果数，表示words_result的元素个数。|
|words_result|	Object	|定位和识别结果|

**words_result 返回值说明**

|参数名 | 参数类型 |说明  |
|---|---|---|---|
| 住址 | Object | 住址|
| 公民身份号码 | Object | 公民身份号码|
| 出生 | Object | 出生|
| 姓名 | Object | 姓名|
| 性别 | Object | 性别|
| 民族 | Object | 民族|

**住址/公民身份号码/出生/姓名/性别/民族 返回值说明**

|参数名 | 参数类型 |说明  |
|---|---|---|---|
|location| Object | 位置信息（坐标0点为左上角）|
|words| String | 识别结果字符串|

**location 返回值说明**

|参数名 | 参数类型 |说明  |
|---|---|---|---|
|left| Number | 表示识别结果的定位位置的长方形左上顶点的水平坐标。|
|top| Number | 表示识别结果的定位位置的长方形左上顶点的垂直坐标。|
|width| Number | 表示识别结果的定位位置的长方形的宽度。|
|height| Number | 表示识别结果的定位位置的长方形的高度。|

**示例**：

<a href="swanide://fragment/df2dc68bac6877259e9dc9f36e977b0a1558353838222" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    swan.chooseImage({
        success: res => {
            let image = res.tempFilePaths[0];
            swan.ai.ocrIdCard({
                detect_direction: true,
                id_card_side: 'front',
                detect_risk: true,
                image, // 暂不支持识别网络图片
                success: res => {
                    console.log('ocrIdCard res', res.words_result);
                },
                fail: err => {
                    console.log('ocrIdCard err', err);
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
    "direction": 0,
    "image_status": "normal",
    "idcard_type": "normal",
    "edit_tool": "Adobe Photoshop CS3 Windows",
    "words_result": {
        "住址": {
            "location": {
                "left": 267,
                "top": 453,
                "width": 459,
                "height": 99
            },
            "words": "南京市江宁区弘景大道3889号"
        },
        "公民身份号码": {
            "location": {
                "left": 443,
                "top": 681,
                "width": 589,
                "height": 45
            },
            "words": "330881199904173914"
        },
        "出生": {
            "location": {
                "left": 270,
                "top": 355,
                "width": 357,
                "height": 45
            },
            "words": "19990417"
        },
        "姓名": {
            "location": {
                "left": 267,
                "top": 176,
                "width": 152,
                "height": 50
            },
            "words": "伍云龙"
        },
        "性别": {
            "location": {
                "left": 269,
                "top": 262,
                "width": 33,
                "height": 52
            },
            "words": "男"
        },
        "民族": {
            "location": {
                "left": 492,
                "top": 279,
                "width": 30,
                "height": 37
            },
            "words": "汉"
        }
    },
    "words_result_num": 6
}
```



## swan.ai.ocrBankCard

**解释**：识别银行卡并返回卡号、发卡行和卡片类型。

**百度APP中扫码体验：**

<img src="	https://b.bdstatic.com/miniapp/assets/images/doc_demo/ocrBankCard.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|image | String | 是   |- | 图像资源地址|
|success |Function    |否 |-|      接口调用成功的回调函数|
|fail |   Function|    否  |-|     接口调用失败的回调函数|
|complete  |  Function  |  否   |-|    接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**：

|参数 | 类型 | 说明  |
|---- | ---- | ---- |
|log_id | Number |请求标识码，随机数，唯一。|
|result | Object |返回结果|

**result 返回值说明**

|参数名 | 参数类型 |说明  |
|---|---|---|---|
|bank_card_number  |  String  |银行卡卡号 |
|bank_name |String | 银行名，不能识别时为空 。|
|bank_card_type | Number | 银行卡类型，0: 不能识别; 1: 借记卡; 2: 信用卡 。|

**示例**：

<a href="swanide://fragment/1e8e28ffd4bb694c9c9b006da1b3f31c1569500427353" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


```js
Page({
    swan.chooseImage({
        success: res => {
            let image = res.tempFilePaths[0];
            swan.ai.ocrBankCard({
                image, // 暂不支持识别网络图片
                success: res => {
                    console.log('ocrBankCard res', res.result);
                }，
                fail: err => {
                    console.log('ocrBankCard err', err);
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
        "bank_card_number": "622500000000000",
        "bank_name": "招商银行",
        "bank_card_type": 1
    }
}
```

## swan.ai.ocrDrivingLicense

**解释**：对机动车驾驶证所有关键字段进行识别。


**百度APP中扫码体验：**

<img src="	https://b.bdstatic.com/miniapp/assets/images/doc_demo/ocrDrivingLicense.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|image | String | 是   |- | 图像资源地址|
|detect_direction |Boolean | 否   |-| 是否检测图像旋转，可检验图像的选装方向和旋转角度。<p> **·** true：检测旋转角度并矫正识别。针对摆放情况不可控制的情况建议本参数置为true；<p> **·**  false:不检测旋转角度，默认不检测。|
|unified_valid_period |Boolean    |否 |-| <p> **·**  true: 归一化格式输出；<p> **·**  false 或无此参数按非归一化格式输出。|
|success |Function    |否 |-|      接口调用成功的回调函数|
|fail |   Function|    否  |-|     接口调用失败的回调函数|
|complete  |  Function  |  否   |-|    接口调用结束的回调函数（调用成功、失败都会执行）|


**success 返回参数说明**

|参数 | 类型 | 说明  |
|---- | ---- | ---- |
|log_id | Number |唯一的log id，用于问题定位。|
| words_result_num  |  Number  |识别结果数，表示 words_result 的元素个数。 |
|words_result |  Object  | 识别结果 |

**words_result 返回值说明**

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

**证号/有效期限/准驾车型/有效起始日期/住址/姓名/国籍/出生日期/性别/初次领证日期 返回值说明**

|参数名 | 参数类型 |说明  |
|---|---|---|---|
|words | String | 识别结果字符串 |

**示例**：

<a href="swanide://fragment/208a29298f9a7c31f626328e779e94081569500548249" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
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
});
```

**返回值示例**：
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



## swan.ai.ocrVehicleLicense

**解释**：对机动车行驶证正本所有关键字段进行识别。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|image | String | 是   |- | 图像资源地址|
|detect_direction |Boolean | 否   | -| 是否检测图像旋转，可检验图像的选装方向和旋转角度。<p> **·** true：检测旋转角度并矫正识别。针对摆放情况不可控制的情况建议本参数置为true；<p> **·**  false:不检测旋转角度，默认不检测。|
|accuracy	 | String   |否 |- | normal 使用快速服务，1200ms左右时延；缺省或其它值使用高精度服务，1600ms左右时延。|
|success |Function    |否 |-|      接口调用成功的回调函数|
|fail |   Function|    否  |-|     接口调用失败的回调函数|
|complete  |  Function  |  否   |-|    接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**：

|参数 | 类型 | 说明  |
|---- | ---- | ---- |
|log_id | Number |唯一的log id，用于问题定位。|
| words_result_num  |  Number  |识别结果数，表示words_result的元素个数。 |
|words_result |  Object  | 识别结果 |

**words_result 返回值说明**

|参数名 | 参数类型 |说明  |
|---|---|---|---|
| 品牌型号 | Object | 品牌型号|
| 发证日期 | Object | 发证日期|
| 使用性质 | Object | 使用性质|
| 发动机号码 | Object | 发动机号码|
| 号牌号码 | Object | 号牌号码|
| 所有人 | Object | 所有人|
| 住址 | Object | 住址|
| 注册日期 | Object | 注册日期|
| 车辆识别代号 | Object | 车辆识别代号|
| 车辆类型 | Object | 车辆类型|

**品牌型号、发证日期、使用性质、发动机号码、号牌号码、所有人、住址、注册日期、车辆识别代号、车辆类型 返回值说明**

|参数名 | 参数类型 |说明  |
|---|---|---|---|
|words | String | 识别结果字符串 |

**示例**：

<a href="swanide://fragment/3e9a8f4c2f24fc11673d070ec25bd7d41569500638249" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    swan.chooseImage({
        success: res => {
            let image = res.tempFilePaths[0];
            swan.ai.ocrVehicleLicense({
                image, // 暂不支持识别网络图片
                detect_direction: true,
                accuracy: normal
                success: res => {
                    console.log('ocrVehicleLicense res', res.words_result);
                },
                fail: err => {
                    console.log('ocrVehicleLicense err', err);
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
    "direction": 0,
    "words_result_num": 10,
    "words_result": {
        "品牌型号": {
            "words": "保时捷GT37182RUCRE"
        },
        "发证日期": {
            "words": "20160104"
        },
        "使用性质": {
            "words": "非营运"
        },
        "发动机号码": {
            "words": "20832"
        },
        "号牌号码": {
            "words": "苏A001"
        },
        "所有人": {
            "words": "圆圆"
        },
        "住址": {
            "words": "南京市江宁区弘景大道"
        },
        "注册日期": {
            "words": "20160104"
        },
        "车辆识别代号": {
            "words": "HCE58"
        },
        "车辆类型": {
            "words": "小型轿车"
        }
    }
}
}
```


