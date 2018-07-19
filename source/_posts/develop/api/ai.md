---
title: 百度AI
header: develop
nav: api
sidebar: ai
---

AI
-----

### ocrIdCard

**解释： **用户向服务请求识别身份证，身份证识别包括正面和背面。

**方法参数： **Object

**Object参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|detect_direction |Boolean | 否   || 是否检测图像旋转角度，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括：true：检测旋转角度并矫正识别；false：不检测旋转角度，针对摆放情况不可控制的情况建议本参数置为true|
|id_card_side  |  String  | 否  | |front：身份证含照片的一面；back：身份证带国徽的一面|
|image | String | 是   | | 图片资源地址|
|detect_risk | Boolean | 否  | | 是否开启身份证风险类型(身份证复印件、临时身份证、身份证翻拍、修改过的身份证)功能，默认不开启，即：false。可选值:true-开启；false-不开启|
|success |Function    |否 ||      收到开发者服务成功返回的回调函数|
|fail |   Function|    否  ||     接口调用失败的回调函数|
|complete  |  Function  |  否   ||    接口调用结束的回调函数（调用成功、失败都会执行）|


**success 返回参数说明：**

|参数 | 类型 | 说明  |
|---- | ---- |---- |
|direction|	Number |图像方向，当detect_direction=true时存在。-1:未定义，0:正向，1: 逆时针90度，2:逆时针180度，3:逆时针270度|
|image_status  |  String  |normal-识别正常；reversed_side-身份证正反面颠倒；non_idcard-上传的图片中不包含身份证；blurred-身份证模糊；other_type_card-其他类型证照；over_exposure-身份证关键字段反光或过曝；unknown-未知状态|
|risk_type |String | 输入参数 detect_risk = true 时，则返回该字段识别身份证类型: normal-正常身份证；copy-复印件；temporary-临时身份证；screen-翻拍；unknow-其他未知情况|
|edit_tool | String | 如果参数 detect_risk = true 时，则返回此字段。如果检测身份证被编辑过，该字段指定编辑软件名称，如:Adobe Photoshop CC 2014 (Macintosh),如果没有被编辑过则返回值无此参数|
|log_id | String | 唯一的log id，用于问题定位|
|words_result|	Array	|定位和识别结果数组|
|words_result_num|	Number	|识别结果数，表示words_result的元素个数|
|location|	Array	|位置数组（坐标0点为左上角）|
|left|	Number|	表示定位位置的长方形左上顶点的水平坐标|
|top|	Number	|表示定位位置的长方形左上顶点的垂直坐标|
|width|	Number|	表示定位位置的长方形的宽度|
|height|	Number|	表示定位位置的长方形的高度|
|words|	String|	识别结果字符串|

**示例： **
```js
swan.chooseImage({
    count: 1,
    success: function (res) {
        swan.ai.ocrIdCard({
            image: res.tempFilePaths[0],
            success: function (data) {
                swan.showToast({
                    title: JSON.stringify(data)
                });
            },
            fail: function (err) {
                swan.showToast({
                    title: '身份证识别失败-fail'
                });
            }
        });
    },
    fail: function (err) {
        swan.showToast({
            title: '图片选择失败'
        });
    }
});

```


### ocrBankCard

**解释： **识别银行卡并返回卡号、发卡行和卡片类型。

**方法参数： **Object

**Object参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|image | String | 是   | | 图像资源地址|
|success |Function    |否 ||      收到开发者服务成功返回的回调函数|
|fail |   Function|    否  ||     接口调用失败的回调函数|
|complete  |  Function  |  否   ||    接口调用结束的回调函数（调用成功、失败都会执行）|


**success 返回参数说明：**

|参数 | 类型 | 说明  |
|---- | ---- | ---- |
|log_id | String |请求标识码，随机数，唯一。|
|result | Object |返回结果。|

**result 返回参数说明：**

|参数 | 类型 | 说明  |
|---- | ---- | ---- |
|bank_card_number  |  String  |银行卡卡号 |
|bank_name |String | 银行名，不能识别时为空 |
|bank_card_type | String | 银行卡类型，0:不能识别; 1: 借记卡; 2: 信用卡 |

**示例： **
```js
swan.chooseImage({
    count: 1,
    success: function (res) {
        swan.ai.ocrBankCard({
            image: res.tempFilePaths[0],
            success: function (data) {
                swan.showModal({
                    title: '银行卡识别-成功',
                    content: JSON.stringify(data),
                    showCancel: false
                });
            },
            fail: function (err) {
                swan.showToast({
                    title: '银行卡识别失败-fail'
                });
            }
        });
    },
    fail: function (err) {
        swan.showToast({
            title: '图片选择失败'
        });
    }
});

```

### ocrDrivingLicense

**解释： ** 对机动车驾驶证所有关键字段进行识别。

**方法参数： ** Object

**Object参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|image | String | 是   | | 图像资源地址|
|detect_direction |Boolean | 否   || 是否检测图像旋转角度，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:true：检测旋转角度并矫正识别；false：不检测旋转角度，针对摆放情况不可控制的情况建议本参数置为true。|
|unified_valid_period |Boolean    |否 || true: 归一化格式输出；false 或无此参数按非归一化格式输出|
|success |Function    |否 ||      收到开发者服务成功返回的回调函数|
|fail |   Function|    否  ||     接口调用失败的回调函数|
|complete  |  Function  |  否   ||    接口调用结束的回调函数（调用成功、失败都会执行）|


**success 返回参数说明：**

|参数 | 类型 | 说明  |
|---- | ---- | ---- |
|log_id | String |唯一的log id，用于问题定位。|
| words_result_num  |  Number  |识别结果数，表示words_result的元素个数 |
|words_result |  Number  | 识别结果数组 |
|words | String | 识别结果字符串 |

**示例： **
```js
swan.chooseImage({
    count: 1,
    success: function (res) {
        swan.ai.ocrDrivingLicense({
            image: res.tempFilePaths[0],
            'detect_direction': true,
            success: function (data) {
                swan.showModal({
                    title: '驾驶证识别-成功0000',
                    content: JSON.stringify(data),
                    showCancel: false
                });
            },
            fail: function (err) {
                swan.showToast({
                    title: '驾驶证识别失败-fail'
                });
            }
        });
    },
    fail: function (err) {
        swan.showToast({
            title: '图片选择失败'
        });
    }
});

```


### ocrVehicleLicense

**解释： **对机动车行驶证正本所有关键字段进行识别。

**方法参数： **Object

**Object参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|image | String | 是   | | 图像资源地址|
|detect_direction |Boolean | 否   | | 是否检测图像旋转角度，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:true：检测旋转角度并矫正识别；false：不检测旋转角度，针对摆放情况不可控制的情况建议本参数置为true。|
|accuracy	 | String   |否 | | normal 使用快速服务，1200ms左右时延；缺省或其它值使用高精度服务，1600ms左右时延|
|success |Function    |否 ||      收到开发者服务成功返回的回调函数|
|fail |   Function|    否  ||     接口调用失败的回调函数|
|complete  |  Function  |  否   ||    接口调用结束的回调函数（调用成功、失败都会执行）|


**success 返回参数说明：**

|参数 | 类型 | 说明  |
|---- | ---- | ---- |
|log_id | String |唯一的log id，用于问题定位。|
| words_result_num  |  Number  |识别结果数，表示words_result的元素个数 |
|words_result |  Number  | 识别结果数组 |
|words | String | 识别结果字符串 |

**示例： **
```js
swan.chooseImage({
    count: 1,
    success: function (res) {
        swan.ai.ocrVehicleLicense({
            image: res.tempFilePaths[0],
            success: function (data) {
                swan.showModal({
                    title: '驾驶证识别-成功',
                    content: JSON.stringify(data),
                    showCancel: false
                });
            },
            fail: function (err) {
                swan.showToast({
                    title: '驾驶证识别失败-fail'
                });
            }
        });
    },
    fail: function (err) {
        swan.showModal({
            title: '图片选择失败'
        });
    }
});

```


### textReview

**解释： **运用业界领先的深度学习技术，判断一段文本内容是否符合网络发文规范，实现自动化、智能化的文本审核。

**方法参数： **Object

**Object参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|content | String | 是  | | 待审核文本，UTF-8，不可为空，不超过20000字节 |
|success |Function    |否 ||      收到开发者服务成功返回的回调函数|
|fail |   Function|    否  ||     接口调用失败的回调函数|
|complete  |  Function  |  否   ||    接口调用结束的回调函数（调用成功、失败都会执行）|


**success 返回参数说明：**

|参数 | 类型 | 说明  |
|---- | ---- | ---- |
|log_id | String |唯一的log id，用于问题定位。|
|result| Object| 审核结果详情 |

**result 返回参数说明：**

|参数 | 类型 | 说明  |
|---- | ---- | ---- |
| spam  |  Number  |请求中是否包含违禁，0表示非违禁，1表示违禁，2表示建议人工复审 |
|reject |  Array  | 审核未通过的类别列表与详情 |
|review | Array | 待人工复审的类别列表与详情 |
|pass |  Array  | 审核通过的类别列表与详情 |
|label | Number | 请求中的违禁类型 |
|score | Number | 违禁检测分，范围0~1，数值从低到高代表风险程度的高低 |
|hit | Array | 违禁类型对应命中的违禁词集合，可能为空 |

**违禁labels类型说明：**

|值 | 说明  |
|---- | ---- |
|1 |暴恐违禁。|
|2 |文本色情。|
|3 |政治敏感。|
|4 |恶意推广。|
|5 |低俗辱骂。|

**示例： **
```js
swan.ai.textReview({
    content: '待审核文本',
    success: function (res) {
        swan.showToast({
            title: JSON.Stringify(res)
        });
    },
    fail: function (err) {
        swan.showToast({
            title: '文本审核失败' + JSON.Stringify(res)
        });
    }
});

```


### textToAudio

**解释： **将文本转换为可以播放的mp3文件。

**方法参数： **Object

**Object参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|tex|	String|是|	|合成的文本，使用UTF-8编码。小于512个中文字或者英文数字。（文本在百度服务器内转换为GBK后，长度必须小于1024字节）|
|ctp|	String|是	| |客户端类型选择，web端填写固定值1|
|lan|	String|是	|  |固定值zh。语言选择,目前只有中英文混合模式，填写固定值zh|
|spd|	String|否	|  |语速，取值0-9，默认为5中语速|
|pit|	String|否	|  |音调，取值0-9，默认为5中语调|
|vol|	String|否	|  |音量，取值0-9，默认为5中音量|
|per|	String|否	|  |发音人选择, 0为普通女声，1为普通男生，3为情感合成-度逍遥，4为情感合成-度丫丫，默认为普通女声|
|success |Function    |否 ||      收到开发者服务成功返回的回调函数|
|fail |   Function|    否  ||     接口调用失败的回调函数|
|complete  |  Function  |  否   ||    接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明：**

|参数 | 类型 | 说明  |
|---- | ---- | ---- |
|data | Object | data.filePath合成语音的地址。|

**示例： **
```js
swan.ai.textToAudio({
    tex: '需合成的文本',
    ctp: 1,
    lan: 'zh',
    success: function (res) {
        swan.showToast({
            title: '语音合成成功,地址' + res.filePath
        });
    },
    fail: function (err) {
        swan.showToast({
            title: '语音合成失败' + JSON.Stringify(res)
        });
    }
});

```


### imageAudit

**解释： **自定义图像审核。

**方法参数： **Object

**Object参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|image|	String|是|  |图像资源地址|
|imgUrl|	String|	否| |网图URL地址，以网图形式请求，图片Url需要做UrlEncode。不能与image并存。|
|success |Function    |否 |  |      收到开发者服务成功返回的回调函数|
|fail |   Function|    否  |   |     接口调用失败的回调函数|
|complete  |  Function  |  否| |    接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明：**

|参数 | 类型 | 	说明  |
|---- | ---- | ---- |
|log_id|	Long|		请求唯一id|
|conclusion|	String|	审核结果描述，成功才返回，失败不返回|
|conclusionType|	Number|	审核结果标识，成功才返回，失败不返回|
|data|	Array|		审核项详细信息，响应成功并且conclusion为疑似或不合规时才返回，响应失败或conclusion为合规是不返回。|
|type|	Number|		审核类型，1：色情、2：性感、3：暴恐、4:恶心、5：水印码、6：二维码、7：条形码、8：政治人物、9：敏感词、10：自定义敏感词|
|msg|	String|	不合规项描述信息|
|probability|	Number|	不合规项置信度|
|stars|	Array|	政治人物列表数组，只有政治人物审核不通过才有|
|words|	String|		审核不通过敏感词，只有敏感词审核不通过才有|

**conclusion、conclusionType参数说明：**

|参数 |说明  |
|---- | ---- |
|1 | 合规 |
|2 | 不合规 |
|3 | 疑似 |
|4 | 审核失败 |


**示例： **
```js
swan.chooseImage({
    count: 1,
    success: function (res) {
        swan.ai.imageAudit({
            image: res.tempFilePaths[0],
            success: function (data) {
                swan.showModal({
                    title: '自定义图像审核-成功',
                    content: JSON.stringify(data),
                    showCancel: false
                });
            },
            fail: function (err) {
                swan.showToast({
                    title: '自定义图像审核-fail'
                });
            }
        });
    },
    fail: function (err) {
        swan.showModal({
            title: '图片选择失败'
        });
    }
});

```

### advancedGeneralIdentify

**解释： **通用物体及场景识别，即对于输入的一张图片（可正常解码，且长宽比适宜），输出图片中的多个物体及场景标签。

**方法参数： **Object

**Object参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|image|	String|是|  |图像资源地址|
|success |Function    |否 ||      收到开发者服务成功返回的回调函数|
|fail |   Function|    否  ||     接口调用失败的回调函数|
|complete  |  Function  |  否   ||    接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明：**

|参数 |类型 | 说明  |
|---- | ---- | ---- |
|log_id|	Number|	唯一的log id，用于问题定位|
|result_num|	Number|	返回结果数目，及result数组中的元素个数|
|result|	Array)|	标签结果数组|
|keyword|	String|	图片中的物体或场景名称|
|score|Number	|置信度，0-1|
|root|	String|	识别结果的上层标签，有部分钱币、动漫、烟酒等tag无上层标签|

**示例： **
```js
swan.chooseImage({
    count: 1,
    success: function (res) {
        swan.ai.advancedGeneralIdentify({
            image: res.tempFilePaths[0],
            success: function (data) {
                swan.showModal({
                    title: '通用物体和场景识别-成功',
                    content: JSON.stringify(data),
                    showCancel: false
                });
            },
            fail: function (err) {
                swan.showToast({
                    title: '通用物体和场景识别失败-fail'
                });
            }
        });
    },
    fail: function (err) {
        swan.showModal({
            title: '图片选择失败'
        });
    }
});

```

### objectDetectIdentify

**解释： **用户向服务请求检测图像中的主体位置。

**方法参数： **Object

**Object参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|image|	String|是|  |图像资源地址|
|with_face|Nmuber	|否|	|如果检测主体是人，主体区域是否带上人脸部分，0-不带人脸区域，其他-带人脸区域，裁剪类需求推荐带人脸，检索/识别类需求推荐不带人脸。默认取1，带人脸。|
|success |Function    |否 ||      收到开发者服务成功返回的回调函数|
|fail |   Function|    否  ||     接口调用失败的回调函数|
|complete  |  Function  |  否   ||    接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明：**

|参数 |类型 | 说明  |
|---- | ---- | ---- |
|log_id|Number|	唯一的log id，用于问题定位|
|result_num|	Number|	返回结果数目，及result数组中的元素个数|
|result|	Array|	菜品识别结果数组|
|name|String|	菜名，示例：鱼香肉丝|
|calorie|	Number|	卡路里，每100g的卡路里含量|
|probability|	Number	|识别结果中每一行的置信度值，0-1|


**示例： **
```js
swan.chooseImage({
    count: 1,
    success: function (res) {
        swan.ai.objectDetectIdentify({
            image: res.tempFilePaths[0],
            success: function (data) {
                swan.showModal({
                    title: '图像主体检测-成功',
                    content: JSON.stringify(data),
                    showCancel: false
                });
            },
            fail: function (err) {
                swan.showToast({
                    title: '图像主体检测-fail'
                });
            }
        });
    },
    fail: function (err) {
        swan.showModal({
            title: '图片选择失败'
        });
    }
});

```

### carClassify

**解释： **用于检测一张车辆图片的具体车型，即对于输入的一张图片（可正常解码，且长宽比适宜），输出图片的车辆品牌及型号、颜色及年份、位置信息。

**方法参数： **Object

**Object参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|image|	String|是|  |图像资源地址|
|top_num	|Nmuber	|否|	|返回结果top n,默认5.|
|success |Function    |否 ||      收到开发者服务成功返回的回调函数|
|fail |   Function|    否  ||     接口调用失败的回调函数|
|complete  |  Function  |  否   ||    接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明：**

|参数 |类型 | 说明  |
|---- | ---- | ---- |
|log_id|	Number|	唯一的log id，用于问题定位|
|color_result|	string|	颜色|
|result|	Array|	车型识别结果数组|
|name|	String|	车型名称，示例：宝马x6|
|score|	Number|	置信度，示例：0.5321|
|year|	String|	年份|
|location_result|	String|	车在图片中的位置信息|


**示例： **
```js
swan.chooseImage({
    count: 1,
    success: function (res) {
        swan.ai.carClassify({
            image: res.tempFilePaths[0],
            'top_num': 7,
            success: function (data) {
                swan.showModal({
                    title: '细粒度图像识别—车型识别-成功',
                    content: JSON.stringify(data),
                    showCancel: false
                });
            },
            fail: function (err) {
                swan.showToast({
                    title: '细粒度图像识别—车型识别-fail'
                });
            }
        });
    },
    fail: function (err) {
        swan.showModal({
            title: '图片选择失败'
        });
    }
});

```

### dishClassify

**解释： **用于菜品识别，即对于输入的一张图片（可正常解码，且长宽比适宜），输出图片的菜品名称、卡路里信息、置信度。

**方法参数： **Object

**Object参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|image|	String|是|  |图像资源地址|
|top_num	|Nmuber	|否|	|返回结果top n,默认5.|
|filter_threshold|Nmuber|	是|	|默认0.95，可以通过该参数调节识别效果，降低非菜识别率.|
|success |Function    |否 ||      收到开发者服务成功返回的回调函数|
|fail |   Function|    否  ||     接口调用失败的回调函数|
|complete  |  Function  |  否   ||    接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明：**

|参数 |类型 | 说明  |
|---- | ---- | ---- |
|log_id|	Number|	唯一的log id，用于问题定位|
|result_num|	Number|	返回结果数目，及result数组中的元素个数|
|result|	Array|	菜品识别结果数组|
|name|	String|	菜名，示例：鱼香肉丝|
|calorie|	Number|	卡路里，每100g的卡路里含量|
|probability|	Number	|识别结果中每一行的置信度值，0-1|


**示例： **
```js
swan.chooseImage({
    count: 1,
    success: function (res) {
        swan.ai.dishClassify({
            image: res.tempFilePaths[0],
            'filter_threshold': 0.9,
            success: function (data) {
                swan.showModal({
                    title: '细粒度图像识别—植物识别-成功',
                    content: JSON.stringify(data),
                    showCancel: false
                });
            },
            fail: function (err) {
                swan.showToast({
                    title: '细粒度图像识别—植物识别-fail'
                });
            }
        });
    },
    fail: function (err) {
        swan.showModal({
            title: '图片选择失败'
        });
    }
});

```

### logoClassify

**解释： **用于检测和识别图片中的品牌LOGO信息。即对于输入的一张图片（可正常解码，且长宽比适宜），输出图片中LOGO的名称、位置和置信度。 当效果欠佳时，可以建立子库（在控制台创建应用并申请建库）并通过调用logo入口接口完成自定义logo入库，提高识别效果。

**方法参数： **Object

**Object参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|image|	String|是|  |图像资源地址|
|custom_lib	|Boolean	|否|	|是否只检索用户子库，true则只检索用户子库，false(默认)为检索底库+用户子库|
|success |Function    |否 ||      收到开发者服务成功返回的回调函数|
|fail |   Function|    否  ||     接口调用失败的回调函数|
|complete  |  Function  |  否   ||    接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明：**

|参数 |类型 | 说明  |
|---- | ---- | ---- |
|log_id|	Number|	唯一的log id，用于问题定位|
|result_num|	Number|	识别结果数，标识返回结果数目|
|result|	Array|	返回结果数组，每一项为一个识别出的logo|
|location|	Object|	位置信息（左起像素位置、上起像素位置、像素宽、像素高）|
|left|	Number|	坐起像素位置|
|top|		Number|	上起像素位置|
|width|	Number|	像素宽|
|height|	Number|	像素高|
|name|		String|	识别的品牌名称|


**示例： **
```js
swan.chooseImage({
    count: 1,
    success: function (res) {
        swan.ai.logoClassify({
            image: res.tempFilePaths[0],
            'custom_lib': false,
            success: function (data) {
                swan.showModal({
                    title: '细粒度图像识别—logo商标识别-成功',
                    content: JSON.stringify(data),
                    showCancel: false
                });
            },
            fail: function (err) {
                swan.showToast({
                    title: '细粒度图像识别—logo商标识别-fail'
                });
            }
        });
    },
    fail: function (err) {
        swan.showModal({
            title: '图片选择失败'
        });
    }
});

```

### animalClassify

**解释： **该请求用于识别一张图片，即对于输入的一张图片（可正常解码，且长宽比较合适），输出动物识别结果。
**方法参数： **Object

**Object参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|image|	String|是|  |图像资源地址|
|top_num|	Number |否	| 6 |返回预测得分top结果数，默认为6|
|success |Function    |否 | |      收到开发者服务成功返回的回调函数|
|fail |   Function|    否  | |     接口调用失败的回调函数|
|complete  |  Function  |  否   ||    接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明：**

|参数 |类型 |说明  |
|---- | ---- | ---- |
|log_id| Number|	唯一的log id，用于问题定位|
|result| Arrry|	识别结果数组|
|name|	string|	动物名称，示例：蒙古马|
|score|	Number|		置信度，示例：0.5321|


**示例： **
```js
swan.chooseImage({
    count: 1,
    success: function (res) {
        swan.ai.animalClassify({
            image: res.tempFilePaths[0],
            'top_num': 6,
            success: function (data) {
                swan.showModal({
                    title: '细粒度图像识别—动物识别-成功',
                    content: JSON.stringify(data),
                    showCancel: false
                });
            },
            fail: function (err) {
                swan.showToast({
                    title: '细粒度图像识别—动物识别-fail'
                });
            }
        });
    },
    fail: function (err) {
        swan.showModal({
            title: '图片选择失败'
        });
    }
});

```

### plantClassify

**解释： **该请求用于识别一张图片，即对于输入的一张图片（可正常解码，且长宽比较合适），输出植物识别结果。
**方法参数： **Object

**Object参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|image|	String|是|  |图像资源地址|
|success |Function    |否 ||      收到开发者服务成功返回的回调函数|
|fail |   Function|    否  ||     接口调用失败的回调函数|
|complete  |  Function  |  否   ||    接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明：**

|参数 |类型 | 说明  |
|---- | ---- | ---- |
|log_id|	Number|	唯一的log id，用于问题定位|
|result| Arrry|	识别结果数组|
|name| String|	植物名称，示例：吉娃莲|
|score	|Number|	置信度，示例：0.5321|


**示例： **
```js
swan.chooseImage({
    count: 1,
    success: function (res) {
        swan.ai.plantClassify({
            image: res.tempFilePaths[0],
            success: function (data) {
                swan.showModal({
                    title: '细粒度图像识别—植物识别-成功',
                    content: JSON.stringify(data),
                    showCancel: false
                });
            },
            fail: function (err) {
                swan.showToast({
                    title: '细粒度图像识别—植物识别-fail'
                });
            }
        });
    },
    fail: function (err) {
        swan.showModal({
            title: '图片选择失败'
        });
    }
});

```