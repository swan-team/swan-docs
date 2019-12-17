---
title: swan.ai.faceLivenessSessioncode
header: develop
nav: api
sidebar: face_swan-ai-faceLivenessSessioncode
---

 

>基础库 3.20.11 开始支持，低版本需做兼容处理。

**解释**：H5活体检测-语音校验码，为防止用户提交非当前操作的视频，在录制视频时，随机分配一个数字，用户需要读出这个数字，在后续识别时校验，以判断视频是否为现场录制。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_faceLivenessSessioncode.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|appid | string| 是 | |百度云创建应用时的唯一标识 ID | 
|success | Function | 否 | | 接口调用成功后的回调函数 | 
|fail | Function | 否 | | 接口调用失败的回调函数 | 
|complete|	Function|	否	| |接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明** 

|参数名 | 参数类型 |说明  | 
|---|---|---|---|
|log_id| Number|	唯一的log id，用于问题定位。|
|error_no| Number|	错误码，错误码为0时，活体检测成功。|
|error_msg| String|	错误描述信息，帮助理解和解决发生的错误。|
|session_id | string |语音校验码会话 ID，有效期 5 分钟，请提示用户在五分钟内完成全部操作。| 
|code | string |语音验证码，数字形式，3~6 位数字。| 

**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/faceLivenessSessioncode.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**

<a href="swanide://fragment/ada1eec5142a8582dfa2c9395a043f411573752628692" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    faceLivenessSessioncode() {
        swan.ai.faceLivenessSessioncode({
            appid: 'xxx', // 百度云创建应用时的唯一标识 ID
            success(res) {
                console.log('ai.faceLivenessSessioncode success', res);
                swan.showModal({
                    title: '五分钟内语音验证码会失效',
                    content: 'session_id为' + JSON.stringify(res.result.session_id)+ '，语音校验码为' + JSON.stringify(res.result.code)
                });
            },
            fail(err) {
                console.log('ai.faceLivenessSessioncode fail', err);
            }
        });
    }
});

```

**返回示例**
```js
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
```




