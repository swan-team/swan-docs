---
title: swan.ai.faceDetect
header: develop
nav: api
sidebar: face_swan-ai-faceDetect
---



>基础库 3.20.11 开始支持，低版本需做兼容处理。

**解释**：人脸检测，检测图片中的人脸并标记出相应的信息位置，同时可以展示出人脸的关键信息和属性信息，比如年龄，性别等。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/faceDetect.png"  class="demo-qrcode-image" />


**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----| 
|image | string | 是 | | 图片信息(总数据大小应小于 10M)，图片上传方式根据 image_type 来判断。 | 
|image_type | string | 是 | | 图片类型。有效值：<br>**· BASE64:**图片的 base64 值，base64 编码后的图片数据，编码后的图片大小不超过 2M；<br>**· URL**: 图片的 URL 地址(可能由于网络等原因导致下载图片时间过长)；<br>**· FACE_TOKEN**: 人脸图片的唯一标识，调用人脸检测接口时，会为每个人脸图片赋予一个唯一的 FACE_TOKEN，同一张图片多次检测得到的 FACE_TOKEN 是同一个。 | 
|face_field | string | 否 | | 包括 age,beauty,expression,face_shape,gender,glasses,landmark,<br>race,quality,eye_status,emotion,face_type 信息，逗号分隔。<br>默认只返回 face_token、人脸框、概率和旋转角度。 | 
|max_face_num | string | 否 | 1| 最多处理人脸的数目，默认值为 1，仅检测图片中面积最大的那个人脸；最大值 10，检测图片中面积最大的几张人脸。 |
|face_type | string | 否 |LIVE| 人脸的类型。有效值：<br>**· LIVE 表示生活照**：通常为手机、相机拍摄的人像图片、或从网络获取的人像图片等；<br>**· IDCARD 表示身份证芯片照**：二代身份证内置芯片中的人像照片；<br>**· WATERMARK 表示带水印证件照**：一般为带水印的小图，如公安网小图；<br>**· CERT 表示证件照片**：如拍摄的身份证、工卡、护照、学生证等证件图片；默认 LIVE。 | 
|success | Function | 否 | | 接口调用成功后的回调函数 | 
|fail | Function | 否 ||接口调用失败的回调函数 | 
|complete|	Function|	否	| |接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|
|log_id| Number|	唯一的log id，用于问题定位。|
|error_no| Number|	错误码，错误码为0时，人脸检测成功。|
|error_msg| String|	错误描述信息，帮助理解和解决发生的错误。|
|face_num | Number |检测到图片中的人脸数量|
|face_list| Array | 人脸信息列表|

**face_list 参数说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|
|face_token | string |人脸图片的唯一标识| 
|location| Object | 人脸在图片中的位置|
|face_probability| number | 人脸置信度，范围[0~1]，代表这是一张人脸的概率，0最小、1最大。|
|angel|Object | 人脸旋转角度参数| 
|age|number|年龄，当 face_field 包含 age 时返回。|
|beauty|number|美丑打分，范围 [0-100]，越大表示越美，当 face_fields 包含 beauty 时返回。|
|expression|Object|表情，当 face_field 包含 expression 时返回。|
|face_shape|Object|脸型，当 face_field 包含 face_shape 时返回。|
|gender|Object|性别，face_field 包含 gender 时返回。|
|glasses|Object|是否带眼镜，face_field 包含 glasses 时返回。|
|eye_status|Object|双眼状态（睁开/闭合）face_field 包含 eye_status 时返回。|
|emotion|Object|情绪，face_field 包含 emotion 时返回。|
|race|Object|人种 face_field 包含 race 时返回。|
|face_type|Object|真实人脸/卡通人脸 face_field 包含 face_type 时返回。|
|landmark|Object|4 个关键点位置，左眼中心、右眼中心、鼻尖、嘴中心。face_field 包含 landmark 时返回。|
|quality|Object|人脸质量信息，face_field 包含 quality 时返回。|

**location 返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|
|left| number | 人脸区域离左边界的距离|
|top| number | 人脸区域离上边界的距离|
|width| number | 人脸区域的宽度|
|height| number | 人脸区域的高度|
|rotation| number |人脸框相对于竖直方向的顺时针旋转角，[-180,180]。|

**angel 返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|
|yaw| number | 三维旋转之左右旋转角[-90(左), 90(右)]。|
|pitch| number | 三维旋转之俯仰角度[-90(上), 90(下)]。|
|roll| number | 平面内旋转角[-180(逆时针), 180(顺时针)]。|

**expression 返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|
|type| string | none:不笑；smile:微笑；laugh:大笑。|
|probability| number | 表情置信度，范围 [0~1]，0最小、1最大。|

**face_shape 返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|
|type| string |square: 正方形；triangle:三角形；oval: 椭圆；heart: 心形；round: 圆形。|
|probability| number | 置信度，范围 [0~1]，代表这是人脸形状判断正确的概率，0 最小、1 最大。|

**gender 返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|
|type| string |male:男性；female:女性。|
|probability| number | 性别置信度，范围[0~1]，0 代表概率最小、1 代表最大。|

**glasses 返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|
|type| string |none:无眼镜；common:普通眼镜；sun:墨镜。|
|probability| number |眼镜置信度，范围 [0~1]，0 代表概率最小、1 代表最大。|

**eye_status 返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|
|left_eye| number |左眼状态 [0,1] 取值，越接近 0 闭合的可能性越大。|
|right_eye| number |右眼状态 [0,1] 取值，越接近 0 闭合的可能性越大。|

**emotion 返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|
|type| string |angry:愤怒；disgust:厌恶；fear:恐惧；happy:高兴；sad:伤心；surprise:惊讶；neutral:无情绪。|
|probability| number |情绪置信度，范围 0~1。|

**race 返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|
|type| string |yellow: 黄种人；white: 白种人；black:黑种人；arabs: 阿拉伯人。|
|probability| number |人种置信度，范围[0~1]，0 代表概率最小、1 代表最大。|

**face_type 返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|
|type| string |human: 真实人脸； cartoon: 卡通人脸。|
|probability| number |人脸类型判断正确的置信度，范围[0~1]，0 代表概率最小、1 代表最大。|

**landmark 返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|
|landmark72| Array |72 个特征点位置 face_field 包含 landmark72 时返回。|
|landmark150| Array |150 个特征点位置 face_field 包含 landmark150 时返回。|

**quality 返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|
|occlusion| number |人脸各部分遮挡的概率，范围 [0~1]，0 表示完整，1 表示不完整。|
|blur| number |人脸模糊程度，范围 [0~1]，0 表示清晰，1 表示模糊。|
|illumination| number |取值范围在 [0~255], 表示脸部区域的光照程度越大表示光照越好。|
|completeness| number |人脸完整度，0 或 1, 0 为人脸溢出图像边界，1 为人脸都在图像边界内。|

**occlusion 返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|
|left_eye| number |左眼遮挡比例，[0-1]，1 表示完全遮挡。|
|right_eye| number |右眼遮挡比例，[0-1]，1 表示完全遮挡。|
|nose| number |鼻子遮挡比例，[0-1]，1 表示完全遮挡。|
|left_cheek| number |左脸颊遮挡比例，[0-1]，1 表示完全遮挡。|
|right_cheek| number |右脸颊遮挡比例，[0-1]，1 表示完全遮挡。|
|chin| number |下巴遮挡比例，[0-1]，1 表示完全遮挡。|

**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/faceDetect.jpeg">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例1 - image_type为BASE64**：

<a href="swanide://fragment/fc4fb555f1a72d086ef4698de4c0a8b01569415643600" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    faceDetect() {
        swan.chooseImage({
            success: res => {
                let image = res.tempFilePaths[0];
                swan.ai.faceDetect({
                    image,
                    image_type: 'BASE64',
                    face_field: 'age,beauty,angle,expression,face_shape,gender,glasses,eye_status,race,quality',
                    max_face_num: '1',
                    face_type: 'LIVE',
                    success: res => {
                        console.log(res.face_list);
                },
                fail: err => {
                        console.log( err);
                    }
                });
            }
        })
    }
});
```

**代码示例2 - image_type为URL**：

<a href="swanide://fragment/b0ecedcb1fcb245aeb82adc06eb57c191575196761907" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    faceDetect() {
        swan.chooseImage({
            success: res => {
                let image = res.tempFilePaths[0];
                swan.ai.faceDetect({
                    image:'https://b.bdstatic.com/miniapp/image/faceDetect.png',
                    image_type: 'URL',
                    face_field: 'age,beauty,angle,expression,face_shape,gender,glasses,eye_status,race,quality',
                    max_face_num: '1',
                    face_type: 'LIVE',
                    success: res => {
                        console.log(res.face_list);
                    },
                    fail: err => {
                            console.log( err);
                    }
                });
            }
        })
    }
});
```

**代码示例3 - image_type为FACE_TOKEN:**：

<a href="swanide://fragment/b9d0ec89d4f2c17d896234f0a8a9d4d51575196922700" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    faceDetect() {
        swan.chooseImage({
            success: res => {
                let image = res.tempFilePaths[0];
                swan.ai.faceDetect({
                    image:'4160b708a826b18de95fe5c9a098a436', //可由之前图片检测的返回值中获得
                    image_type: 'FACE_TOKEN',
                    face_field: 'age,beauty,angle,expression,face_shape,gender,glasses,eye_status,race,quality',
                    max_face_num: '1',
                    face_type: 'LIVE',
                    success: res => {
                        console.log(res.face_list);
                    },
                    fail: err => {
                            console.log( err);
                    }
                });
            }
        })
    }
});
```

**返回值示例**

```js
{	
  "face_num": 1,
  "face_list": [
        {
            "face_token": "35235asfas21421fakghktyfdgh68bio",
            "location": { 
                "left": 117,
                "top": 131,
                "width": 172,
                "height": 170,
                "rotation": 4
            },
            "face_probability": 1,
            "angle" :{
                 "yaw" : -0.34859421849251
                 "pitch" 1.9135693311691  
                 "roll" :2.3033397197723  
            }
            "landmark": [  
                {
                    "x": 161.74819946289,
                    "y": 163.30244445801
                },
                ...
            ],
            "landmark72": [ 
                {
                    "x": 115.86531066895,
                    "y": 170.0546875
                }，
                ...
            ],
            "age": 29.298097610474,
            "beauty": 55.128883361816,
            "expression": {
                "type": "smile",
                "probability" : 0.5543018579483
            },
            "gender": {
                "type": "male",
                "probability": 0.99979132413864
            },
            "glasses": {
    			"type": "sun",
                "probability": 0.99999964237213
            },
            "race": {
                "type": "yellow",
                "probability": 0.99999976158142
            },
            "face_shape": {
                "type": "triangle",
                "probability": 0.5543018579483
            }
            "quality": {
                "occlusion": {
                    "left_eye": 0,
                    "right_eye": 0,
                    "nose": 0,
                    "mouth": 0,
                    "left_cheek": 0.0064102564938366,
                    "right_cheek": 0.0057411273010075,
                    "chin": 0
                },
                "blur": 1.1886881756684e-10,
                "illumination": 141,
                "completeness": 1
            }
        }
    ]
}
```
