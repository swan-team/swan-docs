---
title: 人脸识别
header: develop
nav: api
sidebar: ai_face
---

##  swan.ai.faceDetect

>基础库 3.20.11 开始支持，低版本需做兼容处理。

**解释：**人脸检测，检测图片中的人脸并标记出相应的信息位置，同时可以展示出人脸的关键信息和属性信息，比如年龄，性别等。

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----| 
|image | string | 是 | -| 图片信息(总数据大小应小于 10M)，图片上传方式根据 image_type 来判断。 | 
|image_type | string | 是 | -| 图片类型。<br>**· BASE64:**图片的 base64 值，base64 编码后的图片数据，编码后的图片大小不超过 2M；<br>**· URL**: 图片的 URL 地址(可能由于网络等原因导致下载图片时间过长)；<br>**· FACE_TOKEN**: 人脸图片的唯一标识，调用人脸检测接口时，会为每个人脸图片赋予一个唯一的 FACE_TOKEN，同一张图片多次检测得到的 FACE_TOKEN 是同一个。 | 
|face_field | string | 否 | -| 包括 age,beauty,expression,face_shape,gender,glasses,landmark,<br>race,quality,eye_status,emotion,face_type 信息，逗号分隔。<br>默认只返回 face_token、人脸框、概率和旋转角度。 | 
|max_face_num | string | 否 | -| 最多处理人脸的数目，默认值为 1 ，仅检测图片中面积最大的那个人脸；最大值 10，检测图片中面积最大的几张人脸。 |
|face_type | string | 否 | -| 人脸的类型。<br>**· LIVE 表示生活照**：通常为手机、相机拍摄的人像图片、或从网络获取的人像图片等；<br>**· IDCARD 表示身份证芯片照**：二代身份证内置芯片中的人像照片；<br>**· WATERMARK 表示带水印证件照**：一般为带水印的小图，如公安网小图；<br>**· CERT 表示证件照片**：如拍摄的身份证、工卡、护照、学生证等证件图片；默认 LIVE。 | 
|success | Function | 否 | -| 接口调用成功后的回调函数 | 
|fail | Function | 否 |  -|接口调用失败的回调函数 | 
|complete|	Function|	否	| -|接口调用结束的回调函数（调用成功、失败都会执行）|

**返回值参数说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|face_num | number |检测到图片中的人脸数量| 
|face_list| Array | 人脸信息列表|

**face_list 参数说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|face_token | string |人脸图片的唯一标识| 
|location| Object | 人脸在图片中的位置|
|face_probability| number | 人脸置信度，范围[0~1]，代表这是一张人脸的概率，0最小、1最大。|
|angel|Object | 人脸旋转角度参数| 
|age|number|年龄 ，当 face_field 包含 age 时返回。|
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
|---|---|---|---|
|left| number | 人脸区域离左边界的距离|
|top| number | 人脸区域离上边界的距离|
|width| number | 人脸区域的宽度|
|height| number | 人脸区域的高度|
|rotation| number |人脸框相对于竖直方向的顺时针旋转角，[-180,180]。|

**angel 返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|yaw| number | 三维旋转之左右旋转角[-90(左), 90(右)]。|
|pitch| number | 三维旋转之俯仰角度[-90(上), 90(下)]。|
|roll| number | 平面内旋转角[-180(逆时针), 180(顺时针)]。|

**expression 返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|type| string | none:不笑；smile:微笑；laugh:大笑。|
|probability| number | 表情置信度，范围 [0~1]，0最小、1最大。|

**face_shape 返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|type| string |square: 正方形；triangle:三角形；oval: 椭圆；heart: 心形；round: 圆形。|
|probability| number | 置信度，范围 [0~1]，代表这是人脸形状判断正确的概率，0 最小、1 最大。|

**gender 返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|type| string |male:男性；female:女性。|
|probability| number | 性别置信度，范围[0~1]，0 代表概率最小、1 代表最大。|

**glasses 返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|type| string |none:无眼镜；common:普通眼镜；sun:墨镜。|
|probability| number |眼镜置信度，范围 [0~1]，0 代表概率最小、1 代表最大。|

**eye_status 返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|left_eye| number |左眼状态 [0,1] 取值，越接近 0 闭合的可能性越大。|
|right_eye| number |右眼状态 [0,1] 取值，越接近 0 闭合的可能性越大。|

**emotion 返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|type| string |angry:愤怒；disgust:厌恶；fear:恐惧；happy:高兴；sad:伤心；surprise:惊讶；neutral:无情绪。|
|probability| number |情绪置信度，范围 0~1。|

**race 返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|type| string |yellow: 黄种人；white: 白种人；black:黑种人；arabs: 阿拉伯人。|
|probability| number |人种置信度，范围[0~1]，0 代表概率最小、1 代表最大。|

**face_type 返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|type| string |human: 真实人脸； cartoon: 卡通人脸。|
|probability| number |人脸类型判断正确的置信度，范围[0~1]，0 代表概率最小、1 代表最大。|

**landmark 返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|landmark72| Array |72 个特征点位置 face_field 包含 landmark72 时返回。|
|landmark150| Array |150 个特征点位置 face_field 包含 landmark150 时返回。|

**quality 返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|occlusion| number |人脸各部分遮挡的概率，范围 [0~1]，0 表示完整，1 表示不完整。|
|blur| number |人脸模糊程度，范围 [0~1]，0 表示清晰，1 表示模糊。|
|illumination| number |取值范围在 [0~255], 表示脸部区域的光照程度越大表示光照越好。|
|completeness| number |人脸完整度，0 或 1, 0 为人脸溢出图像边界，1 为人脸都在图像边界内。|

**occlusion 返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|left_eye| number |左眼遮挡比例，[0-1] ，1 表示完全遮挡。|
|right_eye| number |右眼遮挡比例，[0-1] ，1 表示完全遮挡。|
|nose| number |鼻子遮挡比例，[0-1] ，1 表示完全遮挡。|
|left_cheek| number |左脸颊遮挡比例，[0-1] ，1 表示完全遮挡。|
|right_cheek| number |右脸颊遮挡比例，[0-1] ，1 表示完全遮挡。|
|chin| number |下巴遮挡比例，[0-1] ，1 表示完全遮挡。|


**示例代码**
```
swan.chooseImage({
  success(res) {
    let image = res.tempFilePaths[0];
    swan.ai.faceDetect({
      image,
      image_type: 'BASE64',
      success(res) {
        console.log(res);
      }
    });
  }
});
```
**返回值示例**

```
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


##  swan.ai.faceMatch

>基础库 3.20.11 开始支持，低版本需做兼容处理。

**解释**：人脸对比，支持两张人脸图片的相似度对比，图片类型可以为：生活照，证件照，身份证芯片照或者带网纹照。


**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|data | Array| 是 | -| 图片信息 | 
|success | Function |  否 | -|接口调用成功后的回调函数 | 
|fail | Function | 否 |-| 接口调用失败的回调函数 | 
|complete|	Function|	否	|-|接口调用结束的回调函数（调用成功、失败都会执行）|

**data  参数**

|参数名 | 参数类型 | 是否必填 |说明  | 
|---|---|---|---|
|image | string | 是 | 图片信息(总数据大小应小于 10M)，图片上传方式根据 image_type 来判断。 | 
|image_type | string | 是 | 图片类型。<br> **· BASE64**:图片的 base64 值，base64 编码后的图片数据，编码后的图片大小不超过 2M；<br>**· URL**: 图片的 URL 地址( 可能由于网络等原因导致下载图片时间过长)；<br>**· FACE_TOKEN**: 人脸图片的唯一标识，调用人脸检测接口时，会为每个人脸图片赋予一个唯一的 FACE_TOKEN，同一张图片多次检测得到的 FACE_TOKEN 是同一个。 | 
|quality_control | string | 否 | 图片质量控制。<br> **· NONE**: 不进行控制；<br> **· LOW**:较低的质量要求；<br> **· NORMAL**: 一般的质量要求；<br> **· HIGH**: 较高的质量要求；默认 NONE，若图片质量不满足要求，则返回结果中会提示质量检测失败。 | 
|liveness_control | string | 否 | 活体检测控制。<br> **· NONE**: 不进行控制；<br> **· LOW**:较低的活体要求(高通过率 低攻击拒绝率)；<br> **· NORMAL**: 一般的活体要求(平衡的攻击拒绝率, 通过率)；<br> **· HIGH**: 较高的活体要求(高攻击拒绝率 低通过率)。默认 NONE，若活体检测结果不满足要求，则返回结果中会提示活体检测失败。|
|face_type | string | 否 | 人脸的类型。<br> **· LIVE** 表示生活照：通常为手机、相机拍摄的人像图片、或从网络获取的人像图片等；<br> **· IDCARD**表示身份证芯片照：二代身份证内置芯片中的人像照片；<br> **· WATERMARK** 表示带水印证件照：一般为带水印的小图，如公安网小图；<br> **· CERT** 表示证件照片：如拍摄的身份证、工卡、护照、学生证等证件图片；默认 LIVE。 | 

**返回值说明**

|参数名 | 参数类型 | 说明 |  
|---|---|---|
|score|number |人脸相似度得分，推荐阈值80分。|
|face_list|Array|人脸信息列表|

**face_list参数说明**

|参数名 | 参数类型 | 说明 |  
|---|---|---|
|face_token|string |人脸的唯一标志|

**示例代码**
```js
swan.ai.faceMatch({
  data: [
    {
        "image": "https://www.downloadImage.com/xxxx.jpg",
        "image_type": "URL",
        "face_type": "LIVE",
        "quality_control": "LOW",
        "liveness_control": "HIGH"
    },
    {
        "image": "https://www.downloadImage.com/xxxx.jpg",
        "image_type": "URL",
        "face_type": "IDCARD",
        "quality_control": "LOW",
        "liveness_control": "HIGH"
    }
  ],
  success(res) {
    console.log('res');
  }
});
```
**返回示例**

```
{
    "score": 44.3,
    "face_list": [  //返回的顺序与传入的顺序保持一致
        {
            "face_token": "fid1"
        },
        {
            "face_token": "fid2"
        }
    ]
}

```



##  swan.ai.faceSearch

>基础库 3.20.11 开始支持，低版本需做兼容处理。

**解释**：人脸搜索，传入人脸图片，支持在指定人脸图片集合中，找到与传入图片中人脸最为相似的图片。

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|image | string | 是 |-| 图片信息(总数据大小应小于 10M)，图片上传方式根据 image_type 来判断。 | 
|image_type | string | 是 | -|图片类型<br> **· BASE64**:图片的 base64 值，base64 编码后的图片数据，编码后的图片大小不超过2M；<br>**· URL**:图片的 URL 地址( 可能由于网络等原因导致下载图片时间过长)；<br>**· FACE_TOKEN**: 人脸图片的唯一标识，调用人脸检测接口时，会为每个人脸图片赋予一个唯一的 FACE_TOKEN，同一张图片多次检测得到的 FACE_TOKEN 是同一个。 | 
|group_id_list | string | 是 |-| 从指定的 group 中进行查找 用逗号分隔，上限 10 个。| 
|quality_control | string | 否 |-| 图片质量控制。<br> **· NONE**: 不进行控制；<br> **· LOW**:较低的质量要求；<br> **· NORMAL**: 一般的质量要求；<br> **· HIGH**: 较高的质量要求；默认 NONE，若图片质量不满足要求，则返回结果中会提示质量检测失败。 | 
|liveness_control | string | 否 |-|活体检测控制。<br> **· NONE**: 不进行控制；<br> **· LOW**:较低的活体要求(高通过率 低攻击拒绝率)；<br> **· NORMAL**: 一般的活体要求(平衡的攻击拒绝率, 通过率)；<br> **· HIGH**: 较高的活体要求(高攻击拒绝率 低通过率)。默认 NONE，若活体检测结果不满足要求，则返回结果中会提示活体检测失败。|
|max_face_num | string | 否 | -|最多处理人脸的数目，默认值为1，仅检测图片中面积最大的那个人脸；最大值10，检测图片中面积最大的几张人脸。 |
|user_id | string | 否 |-| 当需要对特定用户进行比对时，指定user_id进行比对。即人脸认证功能。 | 
|success | Function | 否 |-| 接口调用成功后的回调函数 | 
|fail | Function | 否 |-| 接口调用失败的回调函数 | 
|complete|	Function|	否	|-|接口调用结束的回调函数（调用成功、失败都会执行）|

**返回值参数说明**

|参数名 | 参数类型 | 说明 |  
|---|---|---|
|face_token | string | 人脸标志 | 
|user_list | Array | 匹配的用户信息列表|

**user_list参数说明**

|参数名 | 参数类型 | 说明 |  
|---|---|---|
|group_id | string | 用户所属的 group_id | 
|user_id | Array | 用户的 user_id|
|user_info | Array | 注册用户时携带的 user_info|
|score | number | 用户的匹配得分，推荐阈值 80 分。|

**示例代码**

```js
swan.chooseImage({
  success(res) {
    let image = res.tempFilePaths[0];
    swan.ai.faceSearch({
	    image,
	    image_type: 'BASE64',
	    quality_control: 'NONE',
	    liveness_control: 'NONE',
	    face_type: 'LIVE',
	    user_id: 'xxxxxx',
	    max_user_num: 20,
	    success(res) {
	        console.log('success', res);
	    },
	    fail(err) {
	        console.warn('fail', err);
	    }
	});
  }
});
```
**返回示例**

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

##  swan.ai.facePersonVerify

>基础库 3.20.11 开始支持，低版本需做兼容处理。

**解释**：公安验证，基于姓名和身份证号，调取公民身份证小图（源自公安系统），将当前获取的人脸图片，与此证件小图进行对比，得出比对分数。

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|image | string | 是 |-| 图片信息(总数据大小应小于 10M)，图片上传方式根据 image_type 来判断。 | 
|image_type | string | 是 |-| 图片类型<br> **· BASE64**:图片的 base64 值，base64 编码后的图片数据，编码后的图片大小不超过 2M；<br>**· URL**:图片的 URL 地址( 可能由于网络等原因导致下载图片时间过长)；<br>**· FACE_TOKEN**: 人脸图片的唯一标识，调用人脸检测接口时，会为每个人脸图片赋予一个唯一的 FACE_TOKEN，同一张图片多次检测得到的 FACE_TOKEN 是同一个。 | 
|id_card_number | string | 是 | -|身份证号码| 
|name | string | 是 |-| 姓名| 
|quality_control | string | 否 |-| 图片质量控制。<br> **· NONE**: 不进行控制；<br> **· LOW**:较低的质量要求；<br> **· NORMAL**: 一般的质量要求；<br> **· HIGH**: 较高的质量要求；默认 NONE，若图片质量不满足要求，则返回结果中会提示质量检测失败。 | 
|liveness_control | string | 否 |-| 活体检测控制。<br> **· NONE**: 不进行控制；<br> **· LOW**:较低的活体要求(高通过率 低攻击拒绝率)；<br> **· NORMAL**: 一般的活体要求(平衡的攻击拒绝率, 通过率)；<br> **· HIGH**: 较高的活体要求(高攻击拒绝率 低通过率)。默认 NONE，若活体检测结果不满足要求，则返回结果中会提示活体检测失败。|
|success | Function | 否 | -|接口调用成功后的回调函数 | 
|fail | Function | 否 |-| 接口调用失败的回调函数 | 
|complete|	Function|	否	|-|接口调用结束的回调函数（调用成功、失败都会执行）|

**返回值说明**

|参数名 | 参数类型 |说明 | 
|---|---|---|
|log_id | string | 日志 ID| 
|score | number | 与公安小图相似度可能性，用于验证生活照与公安小图是否为同一人，有正常分数时为 [0~100]，推荐阈值 80，超过即判断为同一人。| 

**示例代码**
```js
swan.ai.facePersonVerify({
    image: 'https://www.downloadImage.com/xxxx.jpg',
    image_type: 'URL',
    quality_control: 'NONE',
    liveness_control: 'NONE',
    id_card_number: '',
    name: '',
    success(res) {
        console.log('success', res);
    }
});
```
**返回示例**
```
{
  "score": 44.3,
}
```




##  swan.ai.facePersonIdmatch

>基础库 3.20.11 开始支持，低版本需做兼容处理。

**解释**：身份证和名字对比，验证用户输入的身份证号码和姓名是否匹配，用于判断用户信息是否真实。

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|id_card_number | string | 是 | -|身份证号 | 
|name | string | 是 | -|姓名| 
|success | Function | 否 | -|接口调用成功后的回调函数 | 
|fail | Function | 否 |-| 接口调用失败的回调函数 | 
|complete|	Function|	否	|-|接口调用结束的回调函数（调用成功、失败都会执行）|

**示例代码**
```js
swan.ai.facePersonIdmatch({
    id_card_number: '',
    name: '',
    success(res) {
        console.log('success', res);
    }
});
```


##  swan.ai.faceVerify

>基础库 3.20.11 开始支持，低版本需做兼容处理。

**解释**：在线活体检测，基于单张图片，判断图片中的人脸是否为二次翻拍。

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|data | Array| 是 |-| 图片信息 | 
|success | Function | 否 |-| 接口调用成功后的回调函数 | 
|fail | Function | 否 |-| 接口调用失败的回调函数 | 
|complete|	Function|	否	|-|接口调用结束的回调函数（调用成功、失败都会执行）|

**data 参数说明**

|参数名 | 参数类型 | 是否必填 |  | 
|---|---|---|---|
|image | string | 是 | 图片信息(总数据大小应小于 10M)，图片上传方式根据 image_type 来判断。 | 
|image_type | string | 是 | 图片类型<br> **· BASE64**:图片的 base64 值，base64 编码后的图片数据，编码后的图片大小不超过2M；<br>**· URL**:图片的 URL 地址( 可能由于网络等原因导致下载图片时间过长)；<br>**· FACE_TOKEN**: 人脸图片的唯一标识，调用人脸检测接口时，会为每个人脸图片赋予一个唯一的 FACE_TOKEN，同一张图片多次检测得到的 FACE_TOKEN 是同一个。 | 
|face_field | string | 否 | 包括 age,beauty,expression,face_shape,gender,glasses,landmark,<br>race,quality,eye_status,emotion,face_type 信息，逗号分隔。<br>默认只返回 face_token、人脸框、概率和旋转角度。 | 

**返回值参数说明** 

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|face_liveness | number |活体分数值| 
|thresholds | Object |由服务端返回最新的阈值数据（随着模型的优化，阈值可能会变化），将此参数与返回的 face_liveness 进行比较，可以作为活体判断的依据。 frr_1e-4：万分之一误识率的阈值；frr_1e-3：千分之一误识率的阈值；frr_1e-2：百分之一误识率的阈值。误识率越低，准确率越高，相应的拒绝率也越高。| 
|face_list| Array | 人脸信息列表|

**face_list参数说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|face_token | string |人脸图片的唯一标识| 
|location| Object | 人脸在图片中的位置|
|face_probability| number | 人脸置信度，范围[0~1]，代表这是一张人脸的概率，0 最小、1 最大。|
|angel|Object | 人脸旋转角度参数| 
|age|number|年龄 ，当face_field包含age时返回。|
|beauty|number|美丑打分，范围 0-100，越大表示越美。当 face_fields 包含 beauty 时返回。|
|expression|Object|表情，当 face_field 包含 expression 时返回。|
|face_shape|Object|脸型，当 face_field 包含 face_shape 时返回。|
|gender|Object|性别，face_field 包含 gender 时返回。|
|glasses|Object|是否带眼镜，face_field 包含 glasses 时返回。|
|eye_status|Object|双眼状态（睁开/闭合） face_field 包含 eye_status 时返回。|
|emotion|Object|情绪 face_field 包含 emotion 时返回|
|race|Object|人种 face_field 包含 race 时返回|
|face_type|Object|真实人脸/卡通人脸 face_field 包含 face_type 时返回。|
|landmark|Object|4 个关键点位置，左眼中心、右眼中心、鼻尖、嘴中心。face_field 包含 landmark 时返回。|
|quality|Object|人脸质量信息。face_field 包含 quality 时返回|

**location返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|left| number | 人脸区域离左边界的距离|
|top| number | 人脸区域离上边界的距离|
|width| number | 人脸区域的宽度|
|height| number | 人脸区域的高度|
|rotation| number |人脸框相对于竖直方向的顺时针旋转角，[-180,180]。|

**angel返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|yaw| number | 三维旋转之左右旋转角[-90(左), 90(右)]。|
|pitch| number | 三维旋转之俯仰角度[-90(上), 90(下)]。|
|roll| number | 平面内旋转角[-180(逆时针), 180(顺时针)]。|

**expression返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|type| string | none:不笑；smile:微笑；laugh:大笑。|
|probability| number | 表情置信度，范围[0~1]，0最小、1最大。|

**face_shape返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|type| string |square: 正方形； triangle:三角形； oval: 椭圆； heart: 心形； round: 圆形。|
|probability| number | 置信度，范围[0~1]，代表这是人脸形状判断正确的概率，0最小、1最大。|

**gender返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|type| string |male:男性； female:女性。|
|probability| number | 性别置信度，范围[0~1]，0 代表概率最小、1 代表最大。|

**glasses返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|type| string |none:无眼镜；common:普通眼镜；sun:墨镜。|
|probability| number |眼镜置信度，范围[0~1]，0 代表概率最小、1 代表最大。|

**eye_status返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|left_eye| number |左眼状态 [0,1]取值，越接近 0 闭合的可能性越大。|
|right_eye| number |右眼状态 [0,1]取值，越接近 0 闭合的可能性越大。|

**emotion返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|type| string |angry:愤怒； disgust:厌恶； fear:恐惧； happy:高兴； sad:伤心； surprise:惊讶； neutral:无情绪。|
|probability| number |情绪置信度，范围 [0~1]。|

**race返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|type| string |yellow: 黄种人； white: 白种人； black:黑种人； arabs: 阿拉伯人。|
|probability| number |人种置信度，范围[0~1]，0 代表概率最小、1 代表最大。|

**face_type返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|type| string |human: 真实人脸;cartoon: 卡通人脸。|
|probability| number |人脸类型判断正确的置信度，范围[0~1]，0 代表概率最小、1 代表最大。|

**landmark返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|landmark72| Array |72 个特征点位置 face_field 包含 landmark72 时返回。|
|landmark150| Array |150 个特征点位置 face_field 包含 landmark150 时返回。|

**quality返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|occlusion| number |人脸各部分遮挡的概率，范围[0~1]，0 表示完整，1 表示不完整。|
|blur| number |人脸模糊程度，范围[0~1]，0 表示清晰，1 表示模糊。|
|illumination| number |取值范围在[0~255], 表示脸部区域的光照程度越大表示光照越好。|
|completeness| number |人脸完整度，0 或 1, 0 为人脸溢出图像边界，1 为人脸都在图像边界内。|

**occlusion返回值说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|left_eye| number |左眼遮挡比例，[0-1] ，1 表示完全遮挡。|
|right_eye| number |右眼遮挡比例，[0-1] ，1 表示完全遮挡。|
|nose| number |鼻子遮挡比例，[0-1] ， 1 表示完全遮挡。|
|left_cheek| number |左脸颊遮挡比例，[0-1] ，1 表示完全遮挡。|
|right_cheek| number |右脸颊遮挡比例，[0-1] ，1 表示完全遮挡。|
|chin| number |下巴遮挡比例 [0-1] ，1 表示完全遮挡。|

**示例代码**
```js
swan.chooseImage({
	success(res) {
		swan.ai.faceVerify({
		  data: [
		    {
		        "image": res.tempFilePaths[0],
		        "image_type": "BASE64",
		        "face_field": "age,beauty,expression"
		    },
		    {
		        "image": res.tempFilePaths[1],
		        "image_type": "BASE64",
		        "face_field": "age,beauty,expression"
		    }
		  ],
		  success(res) {
		    console.log('res');
		  }
});
	}
})

```
**返回示例**
```
{
"thresholds": {
    "frr_1e-4": 0.05,  //万分之一误拒率的阈值
    "frr_1e-3": 0.3,   //千分之一误拒率的阈值
    "frr_1e-2": 0.9    //百分之一误拒率的阈值
},
"face_liveness": 0.05532243927,
"face_list": [
    {
        "face_token": "df46f7c7db4aa09a093c26fb8d1a8d44",
        "location": {
            "left": 328.9026489,
            "top": 97.16340637,
            "width": 162,
            "height": 154,
            "rotation": 32
        },
        "face_probability": 1,
        "angle": {
            "yaw": 10.16196251,
            "pitch": 2.244354248,
            "roll": 33.82199097
        },
        "age": 23,
        "beauty": 20.23693275
    },
    {
        "face_token": "901d2c64274fccd687d311a6e6110a01",
        "location": {
            "left": 411.4876404,
            "top": 166.3593445,
            "width": 329,
            "height": 308,
            "rotation": 45
        },
        "face_probability": 0.9194830656,
        "angle": {
            "yaw": -1.716423035,
            "pitch": 7.344647408,
            "roll": 45.79914856
        },
        "age": 23,
        "beauty": 12.6438179
    },
    {
        "face_token": "7d57e36981c48b4946eb97c8d838b02a",
        "location": {
            "left": 161.4559937,
            "top": 199.8726501,
            "width": 218,
            "height": 201,
            "rotation": -1
        },
        "face_probability": 1,
        "angle": {
            "yaw": -8.187754631,
            "pitch": 6.973727226,
            "roll": -1.25429821
        },
        "age": 23,
        "beauty": 8.20657444
    }
]
}
```


##  swan.ai.faceLivenessSessioncode

>基础库 3.20.11 开始支持，低版本需做兼容处理。

**解释**：H5活体检测-语音校验码，为防止用户提交非当前操作的视频，在录制视频时，随机分配一个数字，用户需要读出这个数字，在后续识别时校验，以判断视频是否为现场录制。

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|appid | string| 是 | -|百度云创建应用时的唯一标识 ID | 
|success | Function | 否 |-| 接口调用成功后的回调函数 | 
|fail | Function | 否 |-| 接口调用失败的回调函数 | 
|complete|	Function|	否	|-|接口调用结束的回调函数（调用成功、失败都会执行）|

**返回值参数说明** 

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|session_id | string |语音校验码会话 ID，有效期 5 分钟，请提示用户在五分钟内完成全部操作。| 
|code | string |语音验证码，数字形式，3~6 位数字。| 

**示例代码**
```js
swan.ai.faceLivenessSessioncode({
  appid: '',
  success(res) {
    console.log('res');
  }
});
```
**返回示例**
```
{
	"err_no": 0,
	"err_msg": "SUCCESS",
	"result": {
		"session_id": "S59faeeebb9111890355690",
		"code": "9940"
	},
	"timestamp": 1509617387,
	"cached": 0,
	"serverlogid": "0587756642"
}
}
```

## swan.ai.faceLivenessVerify

>基础库 3.20.11 开始支持，低版本需做兼容处理。

**解释**：H5活体检测-视频活体检测，录制并上传的视频，会在云端进行随机抽帧分析，并得出最终的活体检测分数。

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|video_base64 | string| 是 |-| base64 编码后的视频数据（视频限制：最佳为上传 5-15s 的 mp4 文件。视频编码方式：h264 编码；音频编码格式：aac，pcm 均可。）| 
|session_id | string| 否 |-| 语音校验码会话 ID，使用此接口的前提是已经调用了语音校验码接口。语音校验码作为辅助性质的验证条件，是一个可选项，如果应用场景比较嘈杂或方言口音比较重，可以不使用语音验证。  | 
|success | Function | 否 | -|接口调用成功后的回调函数 | 
|fail | Function | 否 |-| 接口调用失败的回调函数 | 
|complete|	Function|	否	|-|接口调用结束的回调函数（调用成功、失败都会执行）|

**返回值参数说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|score | number |活体检测分数。此分数为视频分析结果，不包含语音验证结果，语音验证需开发基于自己的业务需求做判断。| 
|thresholds | Array |阈值参考，实际业务应用中，请以 <score> 阈值判定通过，可直接选择不同误识别率的阈值，无需对应具体的分值，选择阈值参数即可。| 
|code | Object |语音校验码信息| 
|pic_list | Array |抽取图片信息列表| 

**code参数说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|create | string |生成的校验码| 
|identify | string |语音识别出来的校验码,通过 create 和 identify 两个字段的对比，可以判断上传的视频是否为现成录制。create 和 identify 两个字段的对比逻辑需要开发者基于自身业务逻辑进行判断和开发。| 

**pic_list参数说明**

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|face_id | string |face 唯一 ID| 
|pic | string |base64 编码后的图片信息| 


**示例代码**
```js
swan.ai.faceLivenessVerify({
  video_base64: '',
  session_id: '',
  success(res) {
    console.log('res');
  }
});
```
**返回示例**
```
{

	err_no:0,
	err_msg: 'success',
	result: {
		score: 0.984654366,
		thresholds: {
			"frr_1e-4": 0.05, //万分之一误识别率的阈值
			"frr_1e-3": 0.3,  //千分之一误识别率的阈值
			"frr_1e-2": 0.9   //百分之一误识别率的阈值
   		},
   		code: {
     		"create": "5789",
     		"identify": "5789"
   		},
   		pic_list: [
   			{
     			"face_id": 5745745747,
     			"pic": "gsagaheryzxv..."
   			},
   			{
     			"face_id": 5745745747,
     			"pic": "gsagaheryzxv..."
   			}
   		]
 	},
 	"timestamp": 1509611848,
 	"cached": 0,
 	"serverlogid": "2248375729"
}
```
