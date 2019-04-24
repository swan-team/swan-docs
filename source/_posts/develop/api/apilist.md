---
title: API 列表
header: develop
nav: api
sidebar: apilist
---

## 网络

|API 名称|解释|
|--|--|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net_request/#swan-request/">swan.request</a>|发起网络请求|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net_uploadfile/#swan-uploadFile/">swan.uploadFile</a>|将本地资源上传到开发者服务器，客户端发起一个 HTTPS POST 请求，其中 content-type 为 multipart/form-data 如页面通过 swan.chooseImage 等接口获取到一个本地资源的临时文件路径后，可通过此接口将本地资源上传到指定服务器。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net_uploadfile/#swan-downloadFile/">swan.downloadFile</a>|下载文件资源到本地，客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net_websocket/#swan-connectSocket/">swan.connectSocket</a>|创建一个 WebSocket 连接。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net_websocket/#swan-onSocketOpen/">swan.onSocketOpen</a>|监听 WebSocket 连接打开事件。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net_websocket/#swan-onSocketError/">swan.onSocketError</a>|监听 WebSocket 错误|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net_websocket/#swan-sendSocketMessage/">swan.sendSocketMessage</a>|通过 WebSocket 连接发送数据，需要先调用 swan.connectSocket，并在 swan.onSocketOpen 回调之后才能发送。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net_websocket/#swan-onSocketMessage/">swan.onSocketMessage</a>|监听 WebSocket 接受到服务器的消息事件。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net_websocket/#swan-closeSocket/">swan.closeSocket</a>|关闭 WebSocket 连接，须在 WebSocket 打开期间调用 swan.closeSocket 才能关闭。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net_websocket/#swan-onSocketClose/">swan.onSocketClose</a>|监听 WebSocket 关闭。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net_websocket/#SocketTask/">SocketTask</a>|WebSocket 任务，可通过 swan.connectSocket() 接口创建返回。|



## AI

|API 名称|解释|
|--|--|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai_ocr/#swan-ai-ocrIdCard/">swan.ai.ocrIdCard</a>|用户向服务请求识别身份证，身份证识别包括正面和背面。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai_ocr/#swan-ai-ocrBankCard/">swan.ai.ocrBankCard</a>|识别银行卡并返回卡号、发卡行和卡片类型。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai_ocr/#swan-ai-ocrDrivingLicense/">swan.ai.ocrDrivingLicense</a>|对机动车驾驶证所有关键字段进行识别。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai_ocr/#swan-ai-ocrVehicleLicense/">swan.ai.ocrVehicleLicense</a>|对机动车行驶证正本所有关键字段进行识别。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai_text/#swan-ai-textReview/">swan.ai.textReview</a>|运用业界领先的深度学习技术，判断一段文本内容是否符合网络发文规范，实现自动化、智能化的文本审核。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai_audio/#swan-ai-textToAudio/">swan.ai.textToAudio</a>|将文本转换为可以播放的 mp3 文件。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai_audit/#swan-ai-imageAudit/">swan.ai.imageAudit</a>|自定义图像审核。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai_classify/#swan-ai-advancedGeneralIdentify/">swan.ai.advancedGeneralIdentify</a>|通用物体及场景识别，即对于输入的一张图片（可正常解码，且长宽比适宜），输出图片中的多个物体及场景标签。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai_classify/#swan-ai-objectDetectIdentify/"> swan.ai.objectDetectIdentify</a>|用户向服务请求检测图像中的主体位置。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai_classify/#swan-ai-carClassify/">swan.ai.carClassify</a>|用于检测一张车辆图片的具体车型，即对于输入的一张图片（可正常解码，且长宽比适宜），输出图片的车辆品牌及型号、颜色及年份、位置信息。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai_classify/#swan-ai-dishClassify/">swan.ai.dishClassify</a>|用于菜品识别，即对于输入的一张图片（可正常解码，且长宽比适宜），输出图片的菜品名称、卡路里信息、置信度。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai_classify/#swan-ai-logoClassify/">swan.ai.logoClassify</a>|用于检测和识别图片中的品牌 LOGO 信息。即对于输入的一张图片（可正常解码，且长宽比适宜），输出图片中 LOGO 的名称、位置和置信度。 当效果欠佳时，可以建立子库（在控制台创建应用并申请建库）并通过调用 logo 入口接口完成自定义 logo 入库，提高识别效果。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai_classify/#swan-ai-animalClassify/">swan.ai.animalClassify</a>|该请求用于识别一张图片，即对于输入的一张图片（可正常解码，且长宽比较合适），输出动物识别结果。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai_classify/#swan-ai-plantClassify/">swan.ai.plantClassify</a>|该请求用于识别一张图片，即对于输入的一张图片（可正常解码，且长宽比较合适），输出植物识别结果。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai_voice/#swan-ai-getVoiceRecognizer/">swan.ai.getVoiceRecognizer</a>|获取全局唯一的语音识别器voiceRecognizer。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai_face/#swan-ai-faceDetect/">swan.ai.faceDetect</a>|人脸检测，检测图片中的人脸并标记出相应的信息位置，同时可以展示出人脸的关键信息和属性信息，比如年龄，性别等。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai_face/#swan-ai-faceMatch/">swan.ai.faceMatch</a>|人脸对比，支持两张人脸图片的相似度对比，图片类型可以为：生活照，证件照，身份证芯片照或者带网纹照。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai_face/#swan-ai-faceSearch/">swan.ai.faceSearch</a>|人脸搜索，传入人脸图片，支持在指定人脸图片集合中，找到与传入图片中人脸最为相似的图片。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai_face/#swan-ai-facePersonVerify/">swan.ai.facePersonVerify</a>|公安验证，基于姓名和身份证号，调取公民身份证小图（源自公安系统），将当前获取的人脸图片，与此证件小图进行对比，得出比对分数。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai_face/#swan-ai-facePersonIdmatch/">swan.ai.facePersonIdmatch</a>|身份证和名字对比，验证用户输入的身份证号码和姓名是否匹配，用于判断用户信息是否真实。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai_face/#swan-ai-faceVerify/">swan.ai.faceVerify</a>|在线活体检测，基于单张图片，判断图片中的人脸是否为二次翻拍。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai_face/#swan-ai-faceLivenessSessioncode/">swan.ai.faceLivenessSessioncode</a>|H5活体检测-语音校验码，为防止用户提交非当前操作的视频，在录制视频时，随机分配一个数字，用户需要读出这个数字，在后续识别时校验，以判断视频是否为现场录制。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai_face/#swan-ai-faceLivenessVerify/">swan.ai.faceLivenessVerify</a>|H5活体检测-视频活体检测，录制并上传的视频，会在云端进行随机抽帧分析，并得出最终的活体检测分数。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai_word/#swan-ai-nlpLexerCustom/">swan.ai.nlpLexerCustom</a>|词法分析，提供分词、词性标注、专名识别三大功能。|

## 媒体

|API 名称|解释|
|--|--|
|<a href="http://localhost:4000/docs/develop/api/media_image/#swan-chooseImage/">swan.chooseImage</a>|从本地相册选择图片或使用相机拍照。|
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||


## 文件

|API 名称|解释|
|--|--|
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||

## 数据存储

|API 名称|解释|
|--|--|
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||

## 位置

|API 名称|解释|
|--|--|
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||

## 界面

|API 名称|解释|
|--|--|
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||

## 设备

|API 名称|解释|
|--|--|
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||

## 第三方平台

|API 名称|解释|
|--|--|
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||

## 开放接口

|API 名称|解释|
|--|--|
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
|<a href=""></a>||
