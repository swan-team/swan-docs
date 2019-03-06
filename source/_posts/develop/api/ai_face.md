---
title: 人脸识别
header: develop
nav: api
sidebar: ai_face
---

##  faceDetect

> 人脸检测，最低支持版本 3.20.11 。

### 参数

|参数名 | 参数类型 | 是否必填 |说明  |  
|---|---|---|---| 
|image | string | 是 | 图片信息(总数据大小应小于 10M)，图片上传方式根据 image_type 来判断。 | 
|image_type | string | 是 | 图片类型。<br>**· BASE64:**图片的 base64 值，base64 编码后的图片数据，编码后的图片大小不超过 2M；<br>**· URL**: 图片的 URL 地址(可能由于网络等原因导致下载图片时间过长)；<br>**· FACE_TOKEN**: 人脸图片的唯一标识，调用人脸检测接口时，会为每个人脸图片赋予一个唯一的 FACE_TOKEN，同一张图片多次检测得到的 FACE_TOKEN 是同一个。 | 
|face_field | string | 否 | 包括 age,beauty,expression,face_shape,gender,glasses,landmark,<br>race,quality,eye_status,emotion,face_type 信息，逗号分隔。<br>默认只返回 face_token、人脸框、概率和旋转角度。 | 
|max_face_num | string | 否 | 最多处理人脸的数目，默认值为 1 ，仅检测图片中面积最大的那个人脸；最大值 10，检测图片中面积最大的几张人脸。 |
|face_type | string | 否 | 人脸的类型。<br>**· LIVE 表示生活照**：通常为手机、相机拍摄的人像图片、或从网络获取的人像图片等；<br>**· IDCARD 表示身份证芯片照**：二代身份证内置芯片中的人像照片；<br>**· WATERMARK 表示带水印证件照**：一般为带水印的小图，如公安网小图；<br>**· CERT 表示证件照片**：如拍摄的身份证、工卡、护照、学生证等证件图片；默认 LIVE。 | 
|success | Function | 否 | 接口调用成功后的回调函数 | 
|fail | Function | 否 | 接口调用失败的回调函数 | 
|complete|	Function|	否	|接口调用结束的回调函数（调用成功、失败都会执行）|

### 示例代码
```js
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



##  faceMatch
> 人脸对比，最低支持版本 3.20.11 。

### 参数

|参数名 | 参数类型 | 是否必填 | 说明 | 
|---|---|---|---|
|data | Array| 是 | 图片信息 | 
|success | Function | 否 | 接口调用成功后的回调函数 | 
|fail | Function | 否 | 接口调用失败的回调函数 | 
|complete|	Function|	否	|接口调用结束的回调函数（调用成功、失败都会执行）|

#### data 每一项的参数
|参数名 | 参数类型 | 是否必填 |说明  | 
|---|---|---|---|
|image | string | 是 | 图片信息(总数据大小应小于10M)，图片上传方式根据image_type来判断 | 
|image_type | string | 是 | 图片类型。<br> **· BASE64**:图片的base64值，base64编码后的图片数据，编码后的图片大小不超过2M；<br>**· URL**: 图片的 URL 地址( 可能由于网络等原因导致下载图片时间过长)；<br>**· FACE_TOKEN**: 人脸图片的唯一标识，调用人脸检测接口时，会为每个人脸图片赋予一个唯一的 FACE_TOKEN，同一张图片多次检测得到的 FACE_TOKEN 是同一个。 | 
|quality_control | string | 否 | 图片质量控制。<br> **· NONE**: 不进行控制；<br> **· LOW**:较低的质量要求；<br> **· NORMAL**: 一般的质量要求；<br> **· HIGH**: 较高的质量要求；默认 NONE，若图片质量不满足要求，则返回结果中会提示质量检测失败。 | 
|liveness_control | string | 否 | 活体检测控制。<br> **· NONE**: 不进行控制；<br> **· LOW**:较低的活体要求(高通过率 低攻击拒绝率)；<br> **· NORMAL**:  一般的活体要求(平衡的攻击拒绝率, 通过率)；<br> **· HIGH**: 较高的活体要求(高攻击拒绝率 低通过率)。默认 NONE，若活体检测结果不满足要求，则返回结果中会提示活体检测失败。|
|face_type | string | 否 | 人脸的类型。<br> **· LIVE** 表示生活照：通常为手机、相机拍摄的人像图片、或从网络获取的人像图片等；<br> **· IDCARD**表示身份证芯片照：二代身份证内置芯片中的人像照片；<br> **· WATERMARK** 表示带水印证件照：一般为带水印的小图，如公安网小图；<br> **· CERT** 表示证件照片：如拍摄的身份证、工卡、护照、学生证等证件图片；默认 LIVE。 | 

### 示例代码
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


##  faceSearch
> 人脸搜索，最低支持版本 3.20.11 。

### 参数

|参数名 | 参数类型 | 是否必填 |说明  | 
|---|---|---|---|
|image | string | 是 | 图片信息(总数据大小应小于 10M)，图片上传方式根据 image_type 来判断。 | 
|image_type | string | 是 | 图片类型<br> **· BASE64**:图片的base64值，base64编码后的图片数据，编码后的图片大小不超过2M；<br>**· URL**:图片的 URL地址( 可能由于网络等原因导致下载图片时间过长)；<br>**· FACE_TOKEN**: 人脸图片的唯一标识，调用人脸检测接口时，会为每个人脸图片赋予一个唯一的FACE_TOKEN，同一张图片多次检测得到的FACE_TOKEN是同一个。 | 
|group_id_list | string | 是 | 从指定的group中进行查找 用逗号分隔，上限10个| 
|quality_control | string | 否 | 图片质量控制。<br> **· NONE**: 不进行控制；<br> **· LOW**:较低的质量要求；<br> **· NORMAL**: 一般的质量要求；<br> **· HIGH**: 较高的质量要求；默认 NONE，若图片质量不满足要求，则返回结果中会提示质量检测失败。 | 
|liveness_control | string | 否 |活体检测控制。<br> **· NONE**: 不进行控制；<br> **· LOW**:较低的活体要求(高通过率 低攻击拒绝率)；<br> **· NORMAL**:  一般的活体要求(平衡的攻击拒绝率, 通过率)；<br> **· HIGH**: 较高的活体要求(高攻击拒绝率 低通过率)。默认 NONE，若活体检测结果不满足要求，则返回结果中会提示活体检测失败。|
|max_face_num | string | 否 | 最多处理人脸的数目，默认值为1，仅检测图片中面积最大的那个人脸；最大值10，检测图片中面积最大的几张人脸。 |
|user_id | string | 否 | 当需要对特定用户进行比对时，指定user_id进行比对。即人脸认证功能。 | 
|success | Function | 否 | 接口调用成功后的回调函数 | 
|fail | Function | 否 | 接口调用失败的回调函数 | 
|complete|	Function|	否	|接口调用结束的回调函数（调用成功、失败都会执行）|

### 示例代码
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


##  facePersonVerify
> 公安验证，最低支持版本 3.20.11 。

### 参数

|参数名 | 参数类型 | 是否必填 |说明  | 
|---|---|---|---|
|image | string | 是 | 图片信息(总数据大小应小于10M)，图片上传方式根据image_type来判断 | 
|image_type | string | 是 | 图片类型<br> **· BASE64**:图片的base64值，base64编码后的图片数据，编码后的图片大小不超过2M；<br>**· URL**:图片的 URL地址( 可能由于网络等原因导致下载图片时间过长)；<br>**· FACE_TOKEN**: 人脸图片的唯一标识，调用人脸检测接口时，会为每个人脸图片赋予一个唯一的FACE_TOKEN，同一张图片多次检测得到的FACE_TOKEN是同一个。 | 
|id_card_number | string | 是 | 身份证号码| 
|name | string | 是 | 姓名| 
|quality_control | string | 否 | 图片质量控制。<br> **· NONE**: 不进行控制；<br> **· LOW**:较低的质量要求；<br> **· NORMAL**: 一般的质量要求；<br> **· HIGH**: 较高的质量要求；默认 NONE，若图片质量不满足要求，则返回结果中会提示质量检测失败。 | 
|liveness_control | string | 否 | 活体检测控制。<br> **· NONE**: 不进行控制；<br> **· LOW**:较低的活体要求(高通过率 低攻击拒绝率)；<br> **· NORMAL**:  一般的活体要求(平衡的攻击拒绝率, 通过率)；<br> **· HIGH**: 较高的活体要求(高攻击拒绝率 低通过率)。默认 NONE，若活体检测结果不满足要求，则返回结果中会提示活体检测失败。|
|success | Function | 否 | 接口调用成功后的回调函数 | 
|fail | Function | 否 | 接口调用失败的回调函数 | 
|complete|	Function|	否	|接口调用结束的回调函数（调用成功、失败都会执行）|

### 示例代码
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

##  facePersonIdmatch
> 身份证和名字对比，最低支持版本 3.20.11 。

### 参数

|参数名 | 参数类型 | 是否必填 |说明  | 
|---|---|---|---|
|id_card_number | string | 是 | 身份证号 | 
|name | string | 是 | 姓名| 
|success | Function | 否 | 接口调用成功后的回调函数 | 
|fail | Function | 否 | 接口调用失败的回调函数 | 
|complete|	Function|	否	|接口调用结束的回调函数（调用成功、失败都会执行）|

### 示例代码
```js
swan.ai.facePersonIdmatch({
    id_card_number: '',
    name: '',
    success(res) {
        console.log('success', res);
    }
});
```


##  faceVerify
> 在线活体检测，最低支持版本 3.20.11 。

### 参数

|参数名 | 参数类型 | 是否必填 | 说明 | 
|---|---|---|---|
|data | Array| 是 | 图片信息 | 
|success | Function | 否 | 接口调用成功后的回调函数 | 
|fail | Function | 否 | 接口调用失败的回调函数 | 
|complete|	Function|	否	|接口调用结束的回调函数（调用成功、失败都会执行）|

#### data 每一项的参数
|参数名 | 参数类型 | 是否必填 |  | 
|---|---|---|---|
|image | string | 是 | 图片信息(总数据大小应小于10M)，图片上传方式根据image_type来判断 | 
|image_type | string | 是 | 图片类型<br> **· BASE64**:图片的base64值，base64编码后的图片数据，编码后的图片大小不超过2M；<br>**· URL**:图片的 URL地址( 可能由于网络等原因导致下载图片时间过长)；<br>**· FACE_TOKEN**: 人脸图片的唯一标识，调用人脸检测接口时，会为每个人脸图片赋予一个唯一的FACE_TOKEN，同一张图片多次检测得到的FACE_TOKEN是同一个。 | 
|face_field | string | 否 | 包括 age,beauty,expression,face_shape,gender,glasses,landmark,<br>race,quality,eye_status,emotion,face_type 信息，逗号分隔。<br>默认只返回 face_token、人脸框、概率和旋转角度。 | 

### 示例代码
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


##  faceLivenessSessioncode

> H5活体检测-语音校验码，最低支持版本 3.20.11 。

### 参数

|参数名 | 参数类型 | 是否必填 |说明  | 
|---|---|---|---|
|appid | string| 是 | 百度云创建应用时的唯一标识ID | 
|success | Function | 否 | 接口调用成功后的回调函数 | 
|fail | Function | 否 | 接口调用失败的回调函数 | 
|complete|	Function|	否	|接口调用结束的回调函数（调用成功、失败都会执行）|


### 示例代码
```js
swan.ai.faceLivenessSessioncode({
  appid: '',
  success(res) {
    console.log('res');
  }
});
```


## faceLivenessVerify
> H5活体检测-视频活体检测，最低支持版本 3.20.11 。

### 参数

|参数名 | 参数类型 | 是否必填 | 说明 | 
|---|---|---|---|
|video_base64 | string| 是 | base64 编码后的视频数据（视频限制：最佳为上传5-15s的mp4文件。视频编码方式：h264 编码；音频编码格式：aac，pcm均可。）| 
|session_id | string| 否 | 语音校验码会话id，使用此接口的前提是已经调用了语音校验码接口。语音校验码作为辅助性质的验证条件，是一个可选项，如果应用场景比较嘈杂或方言口音比较重，可以不使用语音验证。  | 
|success | Function | 否 | 接口调用成功后的回调函数 | 
|fail | Function | 否 | 接口调用失败的回调函数 | 
|complete|	Function|	否	|接口调用结束的回调函数（调用成功、失败都会执行）|

### 示例代码
```js
swan.ai.faceLivenessVerify({
  video_base64: '',
  session_id: '',
  success(res) {
    console.log('res');
  }
});
```

