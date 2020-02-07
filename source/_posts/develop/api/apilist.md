---
title: API 列表
header: develop
nav: api
sidebar: apilist
---

> API [错误码](/develop/api/errorcode/)

## 网络

|API 名称|解释|
|--|--|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net/request/">swan.request</a>|发起网络请求|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net/uploadfile/">swan.uploadFile</a>|将本地资源上传到开发者服务器，客户端发起一个 HTTPS POST 请求，其中 content-type 为 multipart/form-data 如页面通过 swan.chooseImage 等接口获取到一个本地资源的临时文件路径后，可通过此接口将本地资源上传到指定服务器。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net/downloadFile/">swan.downloadFile</a>|下载文件资源到本地，客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net/websocket/">swan.connectSocket</a>|创建一个 WebSocket 连接。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net/websocket_swan-onSocketOpen/">swan.onSocketOpen</a>|监听 WebSocket 连接打开事件。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net/websocket_swan-onSocketError/">swan.onSocketError</a>|监听 WebSocket 错误|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net/websocket_swan-sendSocketMessage/">swan.sendSocketMessage</a>|通过 WebSocket 连接发送数据，需要先调用 swan.connectSocket，并在 swan.onSocketOpen 回调之后才能发送。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net/websocket_swan-onSocketMessage/">swan.onSocketMessage</a>|监听 WebSocket 接受到服务器的消息事件。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net/websocket_swan-closeSocket/">swan.closeSocket</a>|关闭 WebSocket 连接，须在 WebSocket 打开期间调用 swan.closeSocket 才能关闭。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net/websocket_swan-onSocketClose/">swan.onSocketClose</a>|监听 WebSocket 关闭。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net/websocket_SocketTask/">SocketTask</a>|WebSocket 任务，可通过 swan.connectSocket() 接口创建返回。|



## AI

|API 名称|解释|
|--|--|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/ocr_swan-ai-ocrIdCard/">swan.ai.ocrIdCard</a>|用户向服务请求识别身份证，身份证识别包括正面和背面。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/ocr_swan-ai-ocrBankCard/">swan.ai.ocrBankCard</a>|识别银行卡并返回卡号、发卡行和卡片类型。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/ocr_swan-ai-ocrDrivingLicense/">swan.ai.ocrDrivingLicense</a>|对机动车驾驶证所有关键字段进行识别。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/ocr_swan-ai-ocrVehicleLicense/">swan.ai.ocrVehicleLicense</a>|对机动车行驶证正本所有关键字段进行识别。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/text_swan-ai-textReview/#swan-ai-textReview/">swan.ai.textReview</a>|运用业界领先的深度学习技术，判断一段文本内容是否符合网络发文规范，实现自动化、智能化的文本审核。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/audio/#swan-ai-textToAudio/">swan.ai.textToAudio</a>|将文本转换为可以播放的 mp3 文件。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/audit/#swan-ai-imageAudit/">swan.ai.imageAudit</a>|自定义图像审核。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/classify_swan-ai-advancedGeneralIdentify/">swan.ai.advancedGeneralIdentify</a>|通用物体及场景识别，即对于输入的一张图片（可正常解码，且长宽比适宜），输出图片中的多个物体及场景标签。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/classify_swan-ai-objectDetectIdentify/"> swan.ai.objectDetectIdentify</a>|用户向服务请求检测图像中的主体位置。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/classify_swan-ai-carClassify/">swan.ai.carClassify</a>|用于检测一张车辆图片的具体车型，即对于输入的一张图片（可正常解码，且长宽比适宜），输出图片的车辆品牌及型号、颜色及年份、位置信息。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/classify_swan-ai-dishClassify/">swan.ai.dishClassify</a>|用于菜品识别，即对于输入的一张图片（可正常解码，且长宽比适宜），输出图片的菜品名称、卡路里信息、置信度。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/classify_swan-ai-logoClassify/">swan.ai.logoClassify</a>|用于检测和识别图片中的品牌 LOGO 信息。即对于输入的一张图片（可正常解码，且长宽比适宜），输出图片中 LOGO 的名称、位置和置信度。 当效果欠佳时，可以建立子库（在控制台创建应用并申请建库）并通过调用 logo 入口接口完成自定义 logo 入库，提高识别效果。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/classify_swan-ai-animalClassify/">swan.ai.animalClassify</a>|该请求用于识别一张图片，即对于输入的一张图片（可正常解码，且长宽比较合适），输出动物识别结果。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/classify_swan-ai-plantClassify/">swan.ai.plantClassify</a>|该请求用于识别一张图片，即对于输入的一张图片（可正常解码，且长宽比较合适），输出植物识别结果。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/voice_swan-ai-getVoiceRecognizer/">swan.ai.getVoiceRecognizer</a>|获取全局唯一的语音识别器voiceRecognizer。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/face_swan-ai-faceDetect/">swan.ai.faceDetect</a>|人脸检测，检测图片中的人脸并标记出相应的信息位置，同时可以展示出人脸的关键信息和属性信息，比如年龄，性别等。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/face_swan-ai-faceMatch/">swan.ai.faceMatch</a>|人脸对比，支持两张人脸图片的相似度对比，图片类型可以为：生活照，证件照，身份证芯片照或者带网纹照。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/face_swan-ai-faceSearch/">swan.ai.faceSearch</a>|人脸搜索，传入人脸图片，支持在指定人脸图片集合中，找到与传入图片中人脸最为相似的图片。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/face_swan-ai-facePersonVerify/">swan.ai.facePersonVerify</a>|公安验证，基于姓名和身份证号，调取公民身份证小图（源自公安系统），将当前获取的人脸图片，与此证件小图进行对比，得出比对分数。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/face_swan-ai-facePersonIdmatch/">swan.ai.facePersonIdmatch</a>|身份证和名字对比，验证用户输入的身份证号码和姓名是否匹配，用于判断用户信息是否真实。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/face_swan-ai-faceLivenessSessioncode/">swan.ai.faceLivenessSessioncode</a>|H5活体检测-语音校验码，为防止用户提交非当前操作的视频，在录制视频时，随机分配一个数字，用户需要读出这个数字，在后续识别时校验，以判断视频是否为现场录制。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/word/">swan.ai.nlpLexerCustom</a>|词法分析，提供分词、词性标注、专名识别三大功能。|
<!-- |<a href="https://smartprogram.baidu.com/docs/develop/api/ai/face_swan-ai-faceDetect/#swan-ai-faceVerify/">swan.ai.faceVerify</a>|在线活体检测，基于单张图片，判断图片中的人脸是否为二次翻拍。| -->
<!-- |<a href="https://smartprogram.baidu.com/docs/develop/api/ai/face_swan-ai-faceDetect/#swan-ai-faceLivenessVerify/">swan.ai.faceLivenessVerify</a>|H5活体检测-视频活体检测，录制并上传的视频，会在云端进行随机抽帧分析，并得出最终的活体检测分数。| -->

## 媒体

|API 名称|解释|
|--|--|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media/image_swan-chooseImage/">swan.chooseImage</a>|从本地相册选择图片或使用相机拍照。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media/image_swan-chooseImage/#swan-previewImage/">swan.previewImage</a>|预览图片|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media/image_swan-chooseImage/#swan-getImageInfo/">swan.getImageInfo</a>|获取图片信息|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media/image_swan-chooseImage/#swan-compressImage/">swan.compressImage</a>|压缩图片接口|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media/image_swan-chooseImage/#swan-saveImageToPhotosAlbum/">swan.saveImageToPhotosAlbum</a>|保存图片到系统相册，需要用户授权。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media/image_swan-chooseImage/#swan-chooseAlbum/">swan.chooseAlbum</a>|打开本地相册，相册内可以同时包含图片和视频。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media/recorder_swan-getRecorderManager/">swan.getRecorderManager</a>|获取全局唯一的录音管理器recorderManager。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media/recorder_swan-getAvailableAudioSources//">swan.getAvailableAudioSources</a>|获取当前支持的音频输入源|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media/backgroundaudiomanager_swan-getBackgroundAudioManager/">swan.getBackgroundAudioManager</a>|获取全局唯一的背景音频管理器 backgroundAudioManager。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media/createinneraudiocontext_swan-createInnerAudioContext/">swan.createInnerAudioContext</a>|创建并返回内部 audio 上下文 innerAudioContext 对象。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media/createinneraudiocontext_swan-setInnerAudioOption/">swan.setInnerAudioOption</a>|对innerAudioContext进行小程序内部的全局设置。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media/video_swan-chooseVideo/">swan.chooseVideo</a>|拍摄视频或从手机相册中选视频，返回视频的临时文件路径。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media/video_swan-saveVideoToPhotosAlbum/">swan.saveVideoToPhotosAlbum</a>|保存视频到系统相册。需要用户授权。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media/videocontext_swan-createVideoContext/">swan.createVideoContext</a>|创建并返回 video 上下文 videoContext 对象。通过 videoId 跟一个 video 组件绑定，通过它可以操作一个 video 组件。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media/animationvideo_swan-createAnimationVideo/">swan.createAnimationVideo</a>|创建并返回 animation-video 上下文 animationVideo 对象。通过 animationVideoId 跟一个 animation-video 组件绑定，通过它可以操作一个 [animation-video](/develop/component/animation-video/) 组件。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media/liveplayercontext_swan-createLivePlayerContext/">swan.createLivePlayerContext</a>|操作对应的 `<live-player/>` 组件。 创建并返回 live-player 上下文 LivePlayerContext 对象。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media/cameracontext_swan-createCameraContext/">swan.createCameraContext</a>|创建并返回 camera 上下文 cameraContext对象，cameraContext 与页面的 camera 组件绑定，一个页面只能有一个 camera，通过它可以操作对应的组件。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media/arcameracontext_swan-createARCameraContext/">swan.createARCameraContext</a>|创建并返回 ar-camera 上下文 ARCameraContext对象，ARCameraContext 与页面的 ar-camera 组件绑定，一个页面只能有一个 ar-camera，通过它可以操作对应的组件。|


## 文件

|API 名称|解释|
|--|--|
|<a href="https://smartprogram.baidu.com/docs/develop/api/file/save_swan-saveFile/">swan.saveFile</a>|保存文件到本地|
|<a href="https://smartprogram.baidu.com/docs/develop/api/file/save_swan-getFileInfo/">swan.getFileInfo</a>|获取文件信息|
|<a href="https://smartprogram.baidu.com/docs/develop/api/file/save_swan-getSavedFileList/">swan.getSavedFileList</a>|获取本地已保存的文件列表|
|<a href="https://smartprogram.baidu.com/docs/develop/api/file/save_swan-getSavedFileInfo/">swan.getSavedFileInfo</a>|获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件，若需要获取临时文件信息，请使用 getFileInfo 接口。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/file/remove/">swan.removeSavedFile</a>|删除本地存储的文件|
|<a href="https://smartprogram.baidu.com/docs/develop/api/file/open/">swan.openDocument</a>|新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx（只支持 Android ）。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/file/swan-getFileSystemManager/">swan.getFileSystemManager</a>|获取全局唯一的文件管理器对象。|

## 数据存储

|API 名称|解释|
|--|--|
|<a href="https://smartprogram.baidu.com/docs/develop/api/storage/save_process/#swan-setStorage/">swan.setStorage</a>|将数据存储在本地缓存指定的 key 中。如果之前存在同名 key ，会覆盖掉原来该 key 对应的内容。这是一个异步接口。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/storage/save_swan-setStorageSync/">swan.setStorageSync</a>|将数据存储在本地缓存中指定的 key 中。如果之前存在同名 key ，会覆盖掉原来该 key 对应的内容。这是一个同步接口。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/storage/save_swan-getStorage/">swan.getStorage</a>|从本地缓存中异步获取指定 key 对应的内容。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/storage/save_swan-getStorageSync/">swan.getStorageSync</a>|从本地缓存中同步获取指定 key 对应的内容。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/storage/save_swan-getStorageInfo/">swan.getStorageInfo</a>|异步获取当前 storage 的相关信息。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/storage/save_swan-getStorageInfoSync/">swan.getStorageInfoSync</a>|同步获取当前 storage 的相关信息。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/storage/remove_swan-removeStorage/">swan.removeStorage</a>|从本地缓存中异步移除指定 key。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/storage/remove_swan-removeStorageSync/">swan.removeStorageSync</a>|从本地缓存中同步移除指定 key。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/storage/remove_swan-clearStorage/">swan.clearStorage</a>|清理本地数据缓存。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/storage/remove_swan-clearStorageSync/">swan.clearStorageSync</a>|同步清理本地数据缓存。|


## 位置

|API 名称|解释|
|--|--|
|<a href="https://smartprogram.baidu.com/docs/develop/api/location/swan-getLocation/">swan.getLocation</a>|获取当前的地理位置、速度。当用户离开智能小程序后，此接口无法调用。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/location/swan-chooseLocation/">swan.chooseLocation</a>| 打开地图选择位置。需要用户授权 scope.userLocation。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/location/swan-openLocation/">swan.openLocation</a>|使用宿主 App 内置地图查看位置。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/location/swan-createMapContext/">swan.createMapContext</a>|创建并返回 map 上下文 mapContext 对象。在自定义组件下，第二个参数传入组件实例 this，以操作组件内 <map/> 组件。mapContext 通过 mapId 跟一个 组件绑定，通过它可以操作对应的 组件。|


## 界面

|API 名称|解释|
|--|--|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_swan-createCanvasContext//">swan.createCanvasContext</a>|在 Page 中，推荐使用this.createCanvasContext(canvasId)，进行绘图上下文的创建。也可使用swan.createCanvasContext(canvasId)，但使用swan.createCanvasContext(canvasId)进行创建时，并非在执行所在的 Page 对象中使用 canvasId 进行查找，而是在用户当前可视的 Page 中使用 canvasId 进行查找。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_swan-canvasGetImageData/">swan.canvasGetImageData</a>|返回一个数组，用来描述 canvas 区域隐含的像素数据。在自定义组件下，第二个参数传入自定义组件实例 this，以操作组件内 `<canvas>` 组件。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_swan-canvasPutImageData/">swan.canvasPutImageData</a>|将像素数据绘制到画布的方法。在自定义组件下，第二个参数传入自定义组件实例 this，以操作组件内 `<canvas>` 组件。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_swan-canvasToTempFilePath/">swan.canvasToTempFilePath</a>|把当前画布指定区域的内容导出生成指定大小的图片，并返回文件路径。在自定义组件下，第二个参数传入组件实例this，以操作组件内`<canvas/>`组件。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext/">canvasContext</a>|绘图上下文|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-setFillStyle/">canvasContext.setFillStyle</a>|设置填充色。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-setStrokeStyle/">canvasContext.setStrokeStyle</a>|设置边框颜色。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-setShadow/">canvasContext.setShadow</a>|设置阴影样式。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-createLinearGradient/">canvasContext.createLinearGradient</a>|创建一个线性的渐变颜色。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-createCircularGradient/">canvasContext.createCircularGradient</a>|创建一个圆形的渐变颜色。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-addColorStop/">canvasContext.addColorStop</a>|创建一个颜色的渐变点。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-setLineWidth/">canvasContext.setLineWidth</a>|设置线条的宽度。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-setLineCap/">canvasContext.setLineCap</a>|设置线条的端点样式。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-setLineJoin/">canvasContext.setLineJoin</a>|设置线条的交点样式。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-setLineDash/">canvasContext.setLineDash</a>|设置线条的宽度。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-setMiterLimit/">canvasContext.setMiterLimit</a>|设置最大斜接长度，斜接长度指的是在两条线交汇处内角和外角之间的距离，当 setLineJoin() 为 miter 时才有效，超过最大倾斜长度的，连接处将以 lineJoin 为 bevel 来显示。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-rect/">canvasContext.rect</a>|创建一个矩形。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-fillRect/">canvasContext.fillRect</a>|填充一个矩形。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-strokeRect/">canvasContext.strokeRect</a>|画一个矩形(非填充)。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-clearRect/">canvasContext.clearRect</a>|清除画布上在该矩形区域内的内容。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-fill/">canvasContext.fill</a>|对当前路径中的内容进行填充。默认的填充色为黑色。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-stroke/">canvasContext.stroke</a>|画出当前路径的边框。默认颜色为黑色。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-beginPath/">canvasContext.beginPath</a>|开始创建一个路径，需要调用 fill 或者 stroke 才会使用路径进行填充或描边。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-closePath/">canvasContext.closePath</a>|关闭一个路径。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-moveTo/">canvasContext.moveTo</a>|把路径移动到画布中的指定点，不创建线条。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-lineTo/">canvasContext.lineTo</a>|lineTo 方法增加一个新点，然后创建一条从上次指定点到目标点的线。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-arc/">canvasContext.arc</a>|画一条弧线。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-scale/">canvasContext.scale</a>|在调用scale方法后，之后创建的路径其横纵坐标会被缩放。多次调用scale，倍数会相乘。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-rotate/">canvasContext.rotate</a>|以原点为中心，原点可以用 translate 方法修改。顺时针旋转当前坐标轴。多次调用 rotate，旋转的角度会叠加。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-translate/">canvasContext.translate</a>|对当前坐标系的原点 (0, 0) 进行变换，默认的坐标系原点为页面左上角。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-clip/">canvasContext.clip</a>|clip() 方法从原始画布中剪切任意形状和尺寸。一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内（不能访问画布上的其他区域）。可以在使用 clip() 方法前通过使用 save() 方法对当前画布区域进行保存，并在以后的任意时间对其进行恢复（通过 “restore()” 方法）。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-setFontSize/">canvasContext.setFontSize</a>|设置字体的字号。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-fillText/">canvasContext.fillText</a>|在画布上绘制被填充的文本。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-setTextAlign/">canvasContext.setTextAlign</a>|用于设置文字的对齐。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-setTextBaseline/">canvasContext.setTextBaseline</a>|用于设置文字的水平对齐。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-drawImage/">canvasContext.drawImage</a>|绘制图像到画布。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-setGlobalAlpha/">canvasContext.setGlobalAlpha</a>|设置全局画笔透明度。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-measureText/">canvasContext.measureText</a>|测量文本尺寸信息，目前仅返回文本宽度，同步接口。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-strokeText/">canvasContext.strokeText</a>|给定的 (x, y) 位置绘制文本描边的方法。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-setLineDashOffset/">canvasContext.setLineDashOffset</a>|设置虚线偏移量的属性。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-bezierCurveTo/">canvasContext.bezierCurveTo</a>|创建三次方贝塞尔曲线路径。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-quadraticCurveTo/">canvasContext.quadraticCurveTo</a>|创建二次贝塞尔曲线路径。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-save/">canvasContext.save</a>|保存当前的绘图上下文。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-restore/">canvasContext.restore</a>|恢复之前保存的绘图上下文。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-draw/">canvasContext.draw</a>|将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-font/">canvasContext.font</a>|设置当前字体样式的属性。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/canvas_CanvasContext-setTransform/">canvasContext.setTransform</a>|使用矩阵重新设置（覆盖）当前变换的方法。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/toast_swan-showToast/">swan.showToast</a>|显示消息提示框|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/toast_swan-showLoading/">swan.showLoading</a>|显示 loading 提示框, 需主动调用 hideLoading 才能关闭提示框。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/toast_swan-hideToast/">swan.hideToast</a>|隐藏消息提示框|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/toast_swan-hideLoading/">swan.hideLoading</a>|隐藏 loading 提示框|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/toast_swan-showModal/">swan.showModal</a>|显示模态弹窗|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/toast_swan-showActionSheet/">swan.showActionSheet</a>|显示操作菜单|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/navigationbar_swan-setNavigationBarTitle/">swan.setNavigationBarTitle</a>|动态设置当前页面的标题。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/navigationbar_swan-showNavigationBarLoading/">swan.showNavigationBarLoading</a>|该方法在当前页面显示导航条加载动画。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/navigationbar_swan-hideNavigationBarLoading/">swan.hideNavigationBarLoading</a>|隐藏导航条加载动画。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/navigationbar_swan-setNavigationBarColor/">swan.setNavigationBarColor</a>|动态设置当前页面导航条的颜色。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/tabbar_swan-setTabBarBadge/">swan.setTabBarBadge</a>|为 tabBar 某一项的右上角添加文本|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/tabbar_swan-removeTabBarBadge/">swan.removeTabBarBadge</a>|移除tabBar某一项右上角的文本|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/tabbar_swan-showTabBarRedDot/">swan.showTabBarRedDot</a>|显示 tabBar 某一项的右上角的红点|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/tabbar_swan-hideTabBarRedDot/">swan.hideTabBarRedDot</a>|隐藏 tabBar 某一项的右上角的红点|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/tabbar_swan-setTabBarStyle/">swan.setTabBarStyle</a>|动态设置 tabBar 的整体样式|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/tabbar_swan-setTabBarItem/">swan.setTabBarItem</a>|动态设置 tabBar 某一项的内容|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/tabbar_swan-showTabBar/">swan.showTabBar</a>|显示 tabBar|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/tabbar_swan-hideTabBar/">swan.hideTabBar</a>|隐藏 tabBar|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/tab_swan-navigateTo/">swan.navigateTo</a>|保留当前页面，跳转到应用内的某个页面，但是不能跳转到 tabbar 页面，使用 swan.navigateBack 可以返回到原页面。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/tab_swan-redirectTo/">swan.redirectTo</a>|关闭当前页面，跳转到应用内的某个页面。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/tab_swan-switchTab/">swan.switchTab</a>|跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/tab_swan-navigateBack/">swan.navigateBack</a>|关闭当前页面，返回上一页面或多级页面。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/tab_swan-reLaunch/">swan.reLaunch</a>|关闭所有页面，打开到应用内的某个页面。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/createanimation_swan-createAnimation/">swan.createAnimation</a>|创建一个动画实例 animation|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/createanimation_Animation/">animation</a>|动画实例可以调用以下方法来描述动画，调用结束后会返回自身，支持链式调用的写法。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/pagescrollto_swan-pageScrollTo/">swan.pageScrollTo</a>|将页面滚动到目标位置（可以设置滚动动画时长）。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/background_swan-setBackgroundColor/">swan.setBackgroundColor</a>|设置窗口的背景颜色。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/background_swan-setBackgroundTextStyle/">swan.setBackgroundTextStyle</a>|设置窗口下拉背景loading样式|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/pull_onPullDownRefresh/">onPullDownRefresh</a>|详情参见<a href="https://smartprogram.baidu.com/docs/develop/framework/app_service_page/#%E9%A1%B5%E9%9D%A2%E7%9B%B8%E5%85%B3%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E5%87%BD%E6%95%B0/">页面相关事件处理函数</a>。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/pull_swan-startPullDownRefresh/">swan.startPullDownRefresh</a>|开始下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/pull_swan-stopPullDownRefresh/">swan.stopPullDownRefresh</a>|停止当前页面下拉刷新。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/custom_component/">swan.nextTick</a>|延迟一部分操作到下一个时间片再执行。（类似于 setTimeout）|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/menu_info">swan.getMenuButtonBoundingClientRect</a>|获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/query_swan-createIntersectionObserver/">swan.createIntersectionObserver</a>|创建并返回一个 IntersectionObserver 对象实例。在自定义组件中，可以使用 this.createIntersectionObserver([options]) 来代替。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/query_IntersectionObserver/">IntersectionObserver</a>|IntersectionObserver 对象，用于推断某些节点是否可以被用户看见、有多大比例可以被用户看见。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/query_IntersectionObserver-relativeTo/">IntersectionObserver.relativeTo</a>|使用选择器指定一个节点，作为参照区域之一。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/query_IntersectionObserver-relativeToViewport/">IntersectionObserver.relativeToViewport</a>|指定页面显示区域作为参照区域之一|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/query_IntersectionObserver-observe/">IntersectionObserver.observe</a>|指定目标节点并开始监听相交状态变化情况|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/query_IntersectionObserver-disconnect/">IntersectionObserver.disconnect</a>|停止监听。回调函数将不再触发|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/query_swan-createSelectorQuery">swan.createSelectorQuery</a>|返回一个 SelectorQuery 对象实例。可以在这个实例上使用 select 等方法选择节点，并使用 boundingClientRect 等方法选择需要查询的信息。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/query_SelectorQuery/">selectorQuery</a>|选择器|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/query_SelectorQuery-in/">selectorQuery.in</a>|将选择器的选取范围更改为自定义组件 component 内（初始时，选择器仅选取页面范围的节点，不会选取任何自定义组件中的节点）。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/query_SelectorQuery-select/">selectorQuery.select</a>|在当前页面下选择第一个匹配选择器 selector 的节点，返回一个 NodesRef 对象实例，可以用于获取节点信息。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/query_SelectorQuery-selectAll/">selectorQuery.selectAll</a>|在当前页面下选择匹配选择器 selector 的节点，返回一个 NodesRef 对象实例。 与 selectorQuery.select(selector) 不同的是，它选择所有匹配选择器的节点。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/query_SelectorQuery-selectViewport/">selectorQuery.selectViewport</a>|选择显示区域，可用于获取显示区域的尺寸、滚动位置等信息，返回一个NodesRef对象实例。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/query_SelectorQuery-exec/">selectorQuery.exec</a>|执行所有的请求，请求结果按请求次序构成数组，在 callback 的第一个参数中返回。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/query_NodesRef/">nodesRef</a>|节点信息|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/query_NodesRef-boundingClientRect/">nodesRef.boundingClientRect</a>|添加节点的布局位置的查询请求，相对于显示区域，以像素为单位。其功能类似于 DOM 的 getBoundingClientRect。返回值是 nodesRef 对应的 selectorQuery。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/query_NodesRef-scrollOffset/">nodesRef.scrollOffset</a>| 添加节点的滚动位置查询请求，以像素为单位。节点必须是 scroll-view 或者 viewport 。返回值是 nodesRef 对应的 selectorQuery 。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/query_NodesRef-fields/">nodesRef.fields</a>|获取节点的相关信息，需要获取的字段在 fields 中指定。返回值是 nodesRef 对应的 selectorQuery 。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/nacomponent/">swan.showFavoriteGuide</a>|支持在小程序内调起关注小程序引导组件，引导用户关注小程序。引导组件设计文档详见：关注小程序引导。|

## 设备

|API 名称|解释|
|--|--|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-getSystemInfo/">swan.getSystemInfo</a>|获取系统信息|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-getSystemInfoSync/">swan.getSystemInfoSync</a>|获取系统信息同步接口|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-getEnvInfoSync/">swan.getEnvInfoSync</a>|获取运行环境信息同步接口|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-canIUse/">swan.canIUse</a>|判断智能小程序的API，回调，参数，组件等是否在当前版本可用。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/onmemory/">swan.onMemoryWarning</a>|监听内存不足的告警事件，Android 下有告警等级划分，只有 LOW 和 CRITICAL 会回调开发者；iOS 无等级划分。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-getNetworkType/">swan.getNetworkType</a>|获取网络类型|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-onNetworkStatusChange/">swan.onNetworkStatusChange</a>|监听网络状态变化|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-onAccelerometerChange/">swan.onAccelerometerChange</a>|监听加速度数据，频率：5次/秒，接口调用后会自动开始监听，可使用 swan.stopAccelerometer 停止监听。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-startAccelerometer/">swan.startAccelerometer</a>|开始监听加速度数据|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-stopAccelerometer/">swan.stopAccelerometer</a>|停止监听加速度数据|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-onCompassChange/">swan.onCompassChange</a>|监听罗盘数据，频率：5次/秒，接口调用后会自动开始监听，可使用swan.stopCompass停止监听。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-startCompass/">swan.startCompass</a>|开始监听罗盘数据。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-stopCompass/">swan.stopCompass</a>|停止监听罗盘数据。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-onDeviceMotionChange/">swan.onDeviceMotionChange</a>|监听设备方向变化事件。频率根据 swan.startDeviceMotionListening() 的 interval 参数。可以使用 swan.stopDeviceMotionListening() 停止监听。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-startDeviceMotionListening/">swan.startDeviceMotionListening</a>|开始监听设备方向的变化|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-stopDeviceMotionListening/">swan.stopDeviceMotionListening</a>|停止监听设备方向的变化。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-getBatteryInfo/">swan.getBatteryInfo</a>|支持在小程序内获取当前设备电量|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-getBatteryInfoSync/">swan.getBatteryInfoSync</a>|获取当前设备电量同步接口，ios系统不可用。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-scanCode/">swan.scanCode</a>|调起客户端扫码界面，扫码成功后返回对应的结果。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-setScreenBrightness/">swan.setScreenBrightness</a>|设置屏幕亮度|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-getScreenBrightness/">swan.getScreenBrightness</a>|获取屏幕亮度|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-setKeepScreenOn/">swan.setKeepScreenOn</a>|设置是否保持常亮状态。仅在当前智能小程序生效，离开智能小程序后设置失效。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-onUserCaptureScreen/">swan.onUserCaptureScreen</a>|监听用户主动截屏事件，用户使用系统截屏按键截屏时触发此事件。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-vibrateLong/">swan.vibrateLong</a>|使手机发生较长时间的振动（400ms）|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-vibrateShort/">swan.vibrateShort</a>|使手机发生较短时间的振动（15ms），仅在 iPhone 7/7 Plus 以上及 Android 机型生效。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-addPhoneContact/">swan.addPhoneContact</a>|调用后，用户可以选择将联系人数据以“新增联系人”或“添加到已有联系人”的方式，写入手机系统通讯录，完成手机通讯录联系人和联系方式的增加。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-makePhoneCall/">swan.makePhoneCall</a>|拨打电话|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-setClipboardData/">swan.setClipboardData</a>|设置系统剪贴板的内容|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-getClipboardData/">swan.getClipboardData</a>|获取系统剪贴板内容|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-addEventOnCalendar/">swan.addEventOnCalendar</a>|向系统日历写入一个活动，之后在设定的时间提醒|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-deleteEventOnCalendar/">swan.deleteEventOnCalendar</a>|删除日历上的某个活动|


## 第三方平台

|API 名称|解释|
|--|--|
|<a href="https://smartprogram.baidu.com/docs/develop/api/getextconfig/swan-getExtConfig/">swan.getExtConfig</a>|获取第三方平台自定义的数据字段。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/getextconfig/swan-getExtConfigSync/">swan.getExtConfigSync</a>|[swan.getExtConfig](./#getExtConfig)的同步版本。|
 

## 开放接口

|API 名称|解释|
|--|--|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/log_swan-login/">swan.login</a>|调用接口 swan.login 获取 Authorization Code，智能小程序可以使用swan.login()接口获取Authorization Code。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/log_swan-checkSession/">swan.checkSession</a>|通过上述接口获得的用户登录态拥有一定的时效性，用户越久未使用智能小程序，用户登录态越有可能失效；反之如果用户一直在使用智能小程序，则用户登录态一直保持有效。具体时效逻辑由宿主维护，对开发者透明。开发者可以调用 swan.checkSession 接口 检测当前用户登录态是否有效，登录态过期后开发者可以再调用 swan.login 获取新的用户登录态。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/log_swan-isLoginSync/">swan.isLoginSync</a>|宿主 App登录状态|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/authorize_swan-authorize/">swan.authorize</a>|提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权智能小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/userinfo_swan-getSwanId/">swan.getSwanId</a>|获取 swanid|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/userinfo_swan-getUserInfo/">swan.getUserInfo</a>|获取用户信息，首次使用的用户会弹出授权提示窗，若用户同意，则会返回用户的真实数据；若用户未登录或者拒绝授权，会返回默认用户“百度网友”及默认的头像地址。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/setting_swan-openSetting/">swan.openSetting</a>|调起客户端智能小程序设置界面，返回用户设置的操作结果。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/setting_swan-getSetting/">swan.getSetting</a>|获取用户的当前设置|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/share_onShareAppMessage/">onShareAppMessage</a>|详情参见<a href="https://smartprogram.baidu.com/docs/develop/framework/app_service_page/#%E9%A1%B5%E9%9D%A2%E7%9B%B8%E5%85%B3%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E5%87%BD%E6%95%B0/">页面相关事件处理函数</a>。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/share_swan-openShare/">swan.openShare</a>|调起分享面板|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/share_swan-shareFile/">swan.shareFile</a>|支持调起系统分享面板将文件分享到其他App。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/chooseaddress_swan-chooseAddress/">swan.chooseAddress</a>|调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址，需要用户授权 scope.address。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/payment_swan-requestPolymerPayment/">swan.requestPolymerPayment</a>|百度收银台，聚合了主流的百度钱包、微信、支付宝、网银等多种支付方式，方便开发者一站式快速接入多种支付渠道，让百度用户能在智能小程序场景下，直接完成支付、交易闭环，提升用户支付体验的同时，提高智能小程序的订单转化率。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/community_swan-openCommunityEditor/">swan.openCommunityEditor</a>|调起原生全屏内容发布器，并支持开发者配置发布器展示模块。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/community_swan-closeCommunityEditor/">swan.closeCommunityEditor</a>|关闭原生全屏内容发布器。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/replyeditor_swan-openReplyEditor/">swan.openReplyEditor</a>|调起原生半屏内容发布器，并支持开发者配置发布器展示模块。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/replyeditor_swan-closeReplyEditor/">swan.closeReplyEditor</a>|关闭原生半屏内容发布器。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/swan-chooseInvoiceTitle/">swan.chooseInvoiceTitle</a>|选择用户的发票抬头，需要用户授权 scope.invoiceTitle。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/swan-navigateToSmartProgram/">swan.navigateToSmartProgram</a>|打开另一个小程序|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/swan-navigateBackSmartProgram/">swan.navigateBackSmartProgram</a>|返回到上一个小程序|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/swan-setPageInfo/">swan.setPageInfo</a>|智能小程序可接入百度搜索和宿主 App 信息流，swan.setPageInfo 负责为小程序设置各类页面基础信息，包括标题、关键字、页面描述以及图片信息、视频信息等。开发者为智能小程序设置完备的页面基础信息，有助于智能小程序在搜索引擎和信息流中得到更加有效的展示和分发。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/swan-setMetaDescription/">swan.setMetaDescription</a>|不推荐使用|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/swan-setMetaKeywords/">swan.setMetaKeywords</a>|不推荐使用|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/swan-setDocumentTitle/">swan.setDocumentTitle</a>|不推荐使用|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/swan-loadSubPackage/">swan.loadSubPackage</a>|提前下载好子包的资源，目录结构配置参考[分包加载](https://smartprogram.baidu.com/docs/develop/framework/subpackages/)。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/swan-getUpdateManager/">swan.getUpdateManager</a>|获取全局唯一的版本更新管理器，用于管理小程序更新。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/swan-setEnableDebug/">swan.setEnableDebug</a>|设置是否打开调试开关，此开关对正式版也能生效。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/swan-reportAnalytics/">swan.reportAnalytics</a>|自定义分析数据上报接口。使用前，需要在小程序管理后台自定义分析中新建事件，配置好事件名与字段。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/timer_clearInterval/">clearInterval</a>|取消由 setInterval 设置的定时器。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/timer_clearTimeout/">clearTimeout</a>|取消由 setTimeout 设置的定时器。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/timer_setInterval/">setInterval</a>|设定一个定时器。按照指定的周期（以毫秒计）来执行注册的回调函数。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/timer_setTimeout/">setTimeout</a>|设定一个定时器，在定时到期以后执行注册的回调函数。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/swan-getSystemRiskInfo/#swan-getSystemRiskInfo">swan.getSystemRiskInfo</a>|获取用于得到风控信息的加密信息对象。|
