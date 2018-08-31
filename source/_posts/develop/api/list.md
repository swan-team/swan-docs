---
title: API索引
header: develop
nav: api
sidebar: list
---



### 网络 API 列表

|API | 说明 |
|---- | ---- |
|<a href="https://smartprogram.baidu.com/docs/develop/api/net/#request">request</a>  | 发起网络请求 |
|<a href="https://smartprogram.baidu.com/docs/develop/api/net/#uploadFile">uploadFile</a>| 上传 |
|<a href="https://smartprogram.baidu.com/docs/develop/api/net/#downloadFile">downloadFile</a> |下载  |  
|<a href="https://smartprogram.baidu.com/docs/develop/api/net/#connectSocket">connectSocket</a>|创建一个 WebSocket 连接|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net/#onSocketOpen">onSocketOpen</a>|监听 WebSocket 连接打开事件|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net/#onSocketError">onSocketError</a>|监听 WebSocket 错误|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net/#sendSocketMessage">sendSocketMessage</a>|通过 WebSocket 连接发送数据，需要先调用 swan.connectSocket，并在 swan.onSocketOpen 回调之后才能发送。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net/#onSocketMessage">onSocketMessage</a>|监听 WebSocket 接受到服务器的消息事件|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net/#clouseSocketMessage">closeSocket</a>|关闭 WebSocket 连接。必须在 WebSocket 打开期间调用 swan.closeSocket 才能关闭。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net/#onSocketClose">onSocketClose</a>|监听 WebSocket 关闭|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net/#SocketTask">SocketTask</a>|WebSocket 任务，可通过 swan.connectSocket() 接口创建返回。|

### AI API 列表

|API|说明|
|----|----|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/#ocrIdCard">ocrIdCard</a>|用户向服务请求识别身份证，身份证识别包括正面和背面。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/#ocrBankCard">ocrBankCard</a>|识别银行卡并返回卡号、发卡行和卡片类型。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/#ocrDrivingLicense">ocrDrivingLicense</a>|对机动车驾驶证所有关键字段进行识别。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/#ocrVehicleLicense">ocrVehicleLicense</a>|对机动车行驶证正本所有关键字段进行识别。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/#textReview">textReview</a>|运用业界领先的深度学习技术，判断一段文本内容是否符合网络发文规范，实现自动化、智能化的文本审核。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/#textToAudio">textToAudio</a>|将文本转换为可以播放的mp3文件。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/#imageAudit">imageAudit</a>|自定义图像审核。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/#advancedGeneralIdentify">advancedGeneralIdentify</a>|通用物体及场景识别，即对于输入的一张图片（可正常解码，且长宽比适宜），输出图片中的多个物体及场景标签。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/#objectDetectIdentify">objectDetectIdentify</a>|用户向服务请求检测图像中的主体位置。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/#carClassify">carClassify</a>|用于检测一张车辆图片的具体车型，即对于输入的一张图片（可正常解码，且长宽比适宜），输出图片的车辆品牌及型号、颜色及年份、位置信息。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/#dishClassify">dishClassify</a>|用于菜品识别，即对于输入的一张图片（可正常解码，且长宽比适宜），输出图片的菜品名称、卡路里信息、置信度。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/#logoClassify">logoClassify</a>| 用于检测和识别图片中的品牌LOGO信息。即对于输入的一张图片（可正常解码，且长宽比适宜），输出图片中LOGO的名称、位置和置信度。 当效果欠佳时，可以建立子库（在控制台创建应用并申请建库）并通过调用logo入口接口完成自定义logo入库，提高识别效果。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/#animalClassify">animalClassify</a>|该请求用于识别一张图片，即对于输入的一张图片（可正常解码，且长宽比较合适），输出动物识别结果。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ai/#plantClassify">plantClassify</a>| 该请求用于识别一张图片，即对于输入的一张图片（可正常解码，且长宽比较合适），输出植物识别结果。|

### 媒体 API 列表

|API|说明|
|----|----|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media/#chooseImage">chooseImage</a>|从本地相册选择图片或使用相机拍照。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media/#previewImage">previewImage</a>|预览图片|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media/#getImageInfo">getImageInfo</a>|获取图片信息|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media/#saveImageToPhotosAlbum">saveImageToPhotosAlbum</a>|保存图片到系统相册，需要用户授权。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media/#getRecorderManager">getRecorderManager</a>|获取全局唯一的录音管理器recorderManager。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media/#getBackgroundAudioManager">getBackgroundAudioManager</a>|获取全局唯一的背景音频管理器 backgroundAudioManager。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media/#createInnerAudioContext">createInnerAudioContext</a>|创建并返回内部 audio 上下文 innerAudioContext 对象。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media/#chooseVideo">chooseVideo</a>|拍摄视频或从手机相册中选视频，返回视频的临时文件路径。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media/#saveVideoToPhotosAlbum">saveVideoToPhotosAlbum</a>|保存视频到系统相册。需要用户授权。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media/#createVideoContext">createVideoContext</a>|创建并返回 video 上下文 videoContext 对象。通过 videoId 跟一个 video 组件绑定，通过它可以操作一个 video 组件|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media/#createLivePlayerContext">createLivePlayerContext</a>|操作对应的 <live-player/> 组件。 创建并返回 live-player 上下文 LivePlayerContext 对象。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media/#createCameraContext">createCameraContext</a>|创建并返回 camera 上下文 cameraContext对象，cameraContext 与页面的 camera 组件绑定，一个页面只能有一个 camera，通过它可以操作对应的组件。|

### 文件 API 列表

|API|说明|
|----|----|
|<a href="https://smartprogram.baidu.com/docs/develop/api/file/#saveFile">saveFile</a>|保存文件到本地|
|<a href="https://smartprogram.baidu.com/docs/develop/api/file/#getFileInfo">getFileInfo</a>|获取文件信息|
|<a href="https://smartprogram.baidu.com/docs/develop/api/file/#getSavedFileList">getSavedFileList</a>|获取本地已保存的文件列表|
|<a href="https://smartprogram.baidu.com/docs/develop/api/file/#getSavedFileInfo">getSavedFileInfo</a>|获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件，若需要获取临时文件信息，请使用 getFileInfo 接口。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/file/#removeSavedFile">removeSavedFile</a>|删除本地存储的文件|
|<a href="https://smartprogram.baidu.com/docs/develop/api/file/#openDocument">openDocument</a>|新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx。|

### 数据存储 API 列表

|API|说明|
|----|----|
|<a href="https://smartprogram.baidu.com/docs/develop/api/storage/#setStorage">setStorage</a>|将数据存储在本地缓存指定的 key 中。如果之前存在同名 key ，会覆盖掉原来该 key 对应的内容。这是一个异步接口|
|<a href="https://smartprogram.baidu.com/docs/develop/api/storage/#setStorageSync">etStorageSync</a>|将数据存储在本地缓存中指定的 key 中。如果之前存在同名 key ，会覆盖掉原来该 key 对应的内容。这是一个同步接口|
|<a href="https://smartprogram.baidu.com/docs/develop/api/storage/#getStorage">getStorage</a>|从本地缓存中异步获取指定 key 对应的内容。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/storage/#getStorageSync">getStorageSync</a>|从本地缓存中同步获取指定 key 对应的内容。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/storage/#getStorageInfo">getStorageInfo</a>|异步获取当前 storage 的相关信息。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/storage/#getStorageInfoSync">getStorageInfoSync</a>|同步获取当前 storage 的相关信息。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/storage/#removeStorage">removeStorage</a>|从本地缓存中异步移除指定 key。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/storage/#removeStorageSync">removeStorageSync</a>|从本地缓存中同步移除指定 key。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/storage/#clearStorage">clearStorage</a>|清理本地数据缓存。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/storage/#clearStorageSync">clearStorageSyn</a>|同步清理本地数据缓存。|

### 位置 API 列表

|API|说明|
|----|----|
|<a href="https://smartprogram.baidu.com/docs/develop/api/location/#getLocation">getLocation</a>|获取当前的地理位置、速度。当用户离开智能小程序后，此接口无法调用。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/location/#chooseLocation">chooseLocation</a>|打开地图选择位置。需要用户授权 scope.userLocation。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/location/#openLocation">openLocation</a>|使用百度 App 内置地图查看位置。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/location/#createMapContext">createMapContext</a>|创建并返回 map 上下文 mapContext 对象。在自定义组件下，第二个参数传入组件实例 this，以操作组件内 <map/> 组件。mapContext 通过 mapId 跟一个 组件绑定，通过它可以操作对应的组件。|

### 绘图 API 列表

|API|说明|
|----|----|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#createCanvasContext">createCanvasContext</a>|在 Page 中，推荐使用this.createCanvasContext(canvasId)，进行绘图上下文的创建。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasToTempFilePath-OBJECT-this">canvasToTempFilePath(OBJECT, this)</a>|把当前画布指定区域的内容导出生成指定大小的图片，并返回文件路径。在自定义组件下，第二个参数传入组件实例this，以操作组件内 canvas 组件。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-setFillStyle">canvasContext.setFillStyle</a>|设置填充色|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-setStrokeStyle">canvasContext.setStrokeStyle</a>|设置边框颜色。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-setShadow">canvasContext.setShadow</a>|设置阴影样式。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-createLinearGradient">canvasContext.createLinearGradient</a>|创建一个线性的渐变颜色。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-createCircularGradient">canvasContext.createCircularGradient</a>|创建一个圆形的渐变颜色。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-addColorStop">canvasContext.addColorStop</a>|创建一个颜色的渐变点。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-setLineWidth">canvasContext.setLineWidth</a>|设置线条的宽度。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-setLineCap">canvasContext.setLineCap</a>|设置线条的端点样式。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-setLineJoin">canvasContext.setLineJoin</a>|设置线条的交点样式。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-setLineDash">canvasContext.setLineDash</a>|设置线条的宽度。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-setMiterLimit">canvasContext.setMiterLimit</a>|设置最大斜接长度，斜接长度指的是在两条线交汇处内角和外角之间的距离，当 setLineJoin() 为 miter 时才有效，超过最大倾斜长度的，连接处将以 lineJoin 为 bevel 来显示。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-rect">canvasContext.rec</a>|创建一个矩形。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-fillRect">canvasContext.fillRect</a>|填充一个矩形。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-strokeRect">canvasContext.strokeRect</a>|画一个矩形(非填充)。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-clearRect">canvasContext.clearRect</a>|清除画布上在该矩形区域内的内容。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-fill">canvasContext.fill</a>|对当前路径中的内容进行填充。默认的填充色为黑色。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-stroke">canvasContext.stroke</a>|画出当前路径的边框。默认颜色为黑色。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-beginPath">canvasContext.beginPath</a>|开始创建一个路径，需要调用 fill 或者 stroke 才会使用路径进行填充或描边。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-closePath">canvasContext.closePath</a>|关闭一个路径。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-moveTo">ccanvasContext.moveTo</a>|把路径移动到画布中的指定点，不创建线条。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-lineTo">canvasContext.lineTo</a>|lineTo 方法增加一个新点，然后创建一条从上次指定点到目标点的线。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-arc">canvasContext.arc</a>|画一条弧线。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-scale">canvasContext.scale</a>|在调用scale方法后，之后创建的路径其横纵坐标会被缩放。多次调用scale，倍数会相乘。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-rotate">canvasContext.rotate</a>|以原点为中心，原点可以用 translate 方法修改。顺时针旋转当前坐标轴。多次调用 rotate，旋转的角度会叠加。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-translate">canvasContext.translate</a>|对当前坐标系的原点 (0, 0) 进行变换，默认的坐标系原点为页面左上角。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-clip">canvasContext.clip</a>|clip() 方法从原始画布中剪切任意形状和尺寸。一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内（不能访问画布上的其他区域）。可以在使用 clip() 方法前通过使用 save() 方法对当前画布区域进行保存，并在以后的任意时间对其进行恢复（通过 restore() 方法）。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-setFontSize">canvasContext.setFontSizet</a>|设置字体的字号|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-fillText">canvasContext.fillText</a>|在画布上绘制被填充的文本。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-setTextAlign">canvasContext.setTextAlign</a>|用于设置文字的对齐。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-setTextBaseline">canvasContext.setTextBaseline</a>|用于设置文字的水平对齐。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-drawImage">canvasContext.drawImage">showToast</a>|绘制图像到画布。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-setGlobalAlpha">canvasContext.setGlobalAlph</a>|设置全局画笔透明度。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-measureText">canvasContext.measureText</a>|测量文本尺寸信息，目前仅返回文本宽度。同步接口。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-arcTo">canvasContext.arcTo</a>|根据控制点和半径绘制圆弧路径。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-strokeText">canvasContext.strokeTextt</a>|给定的 (x, y) 位置绘制文本描边的方法。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-setLineDashOffset">canvasContext.setLineDashOffset</a>|设置虚线偏移量的属性。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-createPattern">canvasContext.createPattern</a>|对指定的图像创建模式的方法，可在指定的方向上重复元图像。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-bezierCurveTo">canvasContext.bezierCurveTo</a>|创建三次方贝塞尔曲线路径。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-quadraticCurveTo">canvasContext.quadraticCurveTo</a>|创建二次贝塞尔曲线路径。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-save">canvasContext.savet</a>|保存当前的绘图上下文。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-restore">canvasContext.restore</a>|恢复之前保存的绘图上下文。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-draw">canvasContext.draw</a>|将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-font">canvasContext.font</a>|设置当前字体样式的属性。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/canvas/#canvasContext-setTransform">canvasContext.setTransform</a>|使用矩阵重新设置（覆盖）当前变换的方法。|

### 界面 API 列表

|API|说明|
|----|----|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#showToast">showToast</a>|显示消息提示框|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#showLoading">showLoading</a>|显示 loading 提示框, 需主动调用 hideLoading 才能关闭提示框。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#hideToast">hideLoading</a>|隐藏 loading 提示框|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#showModal">showModal</a>|显示模态弹窗|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#showActionSheet">showActionSheet</a>|显示操作菜单|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#setNavigationBarTitle">setNavigationBarTitle</a>|动态设置当前页面的标题。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#showNavigationBarLoading">showNavigationBarLoading</a>|该方法在当前页面显示导航条加载动画。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#hideNavigationBarLoading">hideNavigationBarLoading</a>|隐藏导航条加载动画|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#setNavigationBarColor">setNavigationBarColor</a>|动态设置当前页面导航条颜色|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#setTabBarBadge">setTabBarBadge</a>|为 tabBar 某一项的右上角添加文本|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#removeTabBarBadge">removeTabBarBadge</a>|移除tabBar某一项右上角的文本|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#showTabBarRedDot">showTabBarRedDot</a>|显示 tabBar 某一项的右上角的红点。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#hideTabBarRedDot">hideTabBarRedDot</a>|隐藏 tabBar 某一项的右上角的红点。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#setTabBarStyle">setTabBarStyle</a>|动态设置 tabBar 的整体样式|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#setTabBarItem">setTabBarItem</a>|动态设置 tabBar 某一项的内容|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#showTabBar">showTabBar</a>|显示 tabBar|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#hideTabBar">hideTabBar</a>|隐藏 tabBar|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#navigateTo">navigateTo</a>|保留当前页面，跳转到应用内的某个页面，使用 swan.navigateBack 可以返回到原页面。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#redirectTo">redirectTo</a>|关闭当前页面，跳转到应用内的某个页面。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#switchTab">switchTab</a>|跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#navigateBack">navigateBack</a>|关闭当前页面，返回上一页面或多级页面。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#reLaunch">reLaunch</a>|关闭所有页面，打开到应用内的某个页面。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#createAnimation">createAnimation</a>|创建一个动画实例 animation|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#pageScrollTo">pageScrollTo</a>|将页面滚动到目标位置（可以设置滚动动画时长）。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#onPullDownRefresh">onPullDownRefresh</a>|在 Page 中定义 onPullDownRefresh 处理函数，监听该页面用户下拉刷新事件。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#startPullDownRefresh">startPullDownRefresh</a>|开始下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#stopPullDownRefresh">stopPullDownRefresh</a>| 停止当前页面下拉刷新。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#createSelectorQuery">createSelectorQuery</a>| 返回一个 SelectorQuery 对象实例。可以在这个实例上使用 select 等方法选择节点，并使用 boundingClientRect 等方法选择需要查询的信息。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#selectorQuery-in-component">selectorQuery.in(component)</a>|将选择器的选取范围更改为自定义组件 component 内。（初始时，选择器仅选取页面范围的节点，不会选取任何自定义组件中的节点。）|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#selectorQuery-select-selector">selectorQuery.select(selector)</a>| 在当前页面下选择第一个匹配选择器 selector 的节点，返回一个 NodesRef 对象实例，可以用于获取节点信息。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#selectorQuery-selectAll-selector">selectorQuery.selectAll(selector)</a>|在当前页面下选择匹配选择器 selector 的节点，返回一个 NodesRef 对象实例。 与 selectorQuery.select(selector) 不同的是，它选择所有匹配选择器的节点。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#selectorQuery-selectViewport">selectorQuery.selectViewport()</a>| 选择显示区域，可用于获取显示区域的尺寸、滚动位置等信息，返回一个NodesRef对象实例。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#nodesRef-boundingClientRect-callback">nodesRef.boundingClientRect([callback])</a>| 添加节点的布局位置的查询请求，相对于显示区域，以像素为单位。其功能类似于 DOM 的 getBoundingClientRect。返回值是 nodesRef 对应的 selectorQuery。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#nodesRef-scrollOffset-callback">nodesRef.scrollOffset([callback])</a>| 添加节点的滚动位置查询请求，以像素为单位。节点必须是 scroll-view 或者 viewport 。返回值是 nodesRef 对应的 selectorQuery 。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#nodesRef-fields-fields-callback">nodesRef.fields(fields,[callback])</a>|获取节点的相关信息，需要获取的字段在 fields 中指定。返回值是 nodesRef 对应的 selectorQuery 。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show/#selectorQuery-exec-callback">selectorQuery.exec([callback])</a>|

### 设备 API 列表

|API|说明|
|----|----|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device/#getSystemInfo">getSystemInfo</a>|获取系统信息|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device/#getSystemInfoSync">getSystemInfoSync</a>|获取系统信息同步接口|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device/#canIUse">canIUse|判断智能小程序的API，回调，参数，组件等是否在当前版本可用。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device/#onMemoryWarning">onMemoryWarning</a>|监听内存不足的告警事件，Android 下有告警等级划分，只有 LOW 和 CRITICAL 会回调开发者；iOS 无等级划分。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device/#getNetworkType">getNetworkType</a>|获取网络类型|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device/#onNetworkStatusChange">onNetworkStatusChange</a>|监听网络状态变化|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device/#onAccelerometerChange">onAccelerometerChange</a>|监听加速度数据，频率：5次/秒，接口调用后会自动开始监听，可使用 swan.stopAccelerometer 停止监听。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device/#startAccelerometer">startAccelerometer</a>|开始监听加速度数据。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device/#stopAccelerometer">stopAccelerometer</a>|停止监听加速度数据。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device/#onCompassChange">onCompassChange</a>|监听罗盘数据，频率：5次/秒，接口调用后会自动开始监听，可使用swan.stopCompass停止监听。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device/#startCompass">startCompass</a>|开始监听罗盘数据。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device/#stopCompass">stopCompass</a>|停止监听罗盘数据。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device/#scanCode">scanCode</a>|调起客户端扫码界面，扫码成功后返回对应的结果。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device/#setScreenBrightness">setScreenBrightness</a>|设置屏幕亮度|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device/#getScreenBrightness">getScreenBrightness</a>|获取屏幕亮度|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device/#setKeepScreenOn">setKeepScreenOn</a>|设置是否保持常亮状态。仅在当前智能小程序生效，离开智能小程序后设置失效。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device/#onUserCaptureScreen">onUserCaptureScreen</a>|监听用户主动截屏事件，用户使用系统截屏按键截屏时触发此事件。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device/#vibrateLong">vibrateLong</a>|使手机发生较长时间的振动（400ms）|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device/#vibrateShort">vibrateShort</a>|使手机发生较短时间的振动（15ms）|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device/#addPhoneContact">addPhoneContact</a>|人和联系方式的增加。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device/#makePhoneCall">makePhoneCall</a>|拨打电话|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device/#setClipboardData">setClipboardData</a>|设置系统剪贴板的内容|
|<a href="https://smartprogram.baidu.com/docs/develop/api/device/#getClipboardData">getClipboardData</a>|获取系统剪贴板内容|

### 第三方平台 API 列表

|API|说明|
|----|----|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ext/#getExtConfig">getExtConfig</a>|获取第三方平台自定义的数据字段。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/ext/#getExtConfigSync">getExtConfig</a>|获取第三方平台自定义的数据字段。|

### 开放接口 API 列表

|API|说明|
|----|----|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/#login">login</a>| 调用接口 swan.login 获取 临时登录凭证（code）。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/#checkSession">checkSession</a>|通过上述接口获得的用户登录态拥有一定的时效性，用户越久未使用智能小程序，用户登录态越有可能失效；反之如果用户一直在使用智能小程序，则用户登录态一直保持有效。具体时效逻辑由百度 App 维护，对开发者透明。开发者可以调用 swan.checkSession 接口 检测当前用户登录态是否有效，登录态过期后开发者可以再调用 swan.login 获取新的用户登录态。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/#authorize">authorize</a>|提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权智能小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/#getSwanId">getSwanId</a>|获取 swanid。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/#getUserInfo">getUserInfo</a>|获取用户信息|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/#openSetting">openSetting</a>|调起客户端智能小程序设置界面，返回用户设置的操作结果。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/#getSetting">getSetting</a>|获取用户的当前设置|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/#onShareAppMessage">onShareAppMessage</a>|在 Page 中定义 onShareAppMessage 函数，设置该页面的分享信息。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/#chooseAddress">chooseAddress</a>|调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/#requestPolymerPayment">requestPolymerPayment </a><br/>版本：swanjs 1.8.5 版本开始支持。|百度聚合收银台，聚合了主流的百度钱包、微信、支付宝、网银等多种支付方式，方便开发者一站式快速接入多种支付渠道，让百度用户能在智能小程序场景下，直接完成支付、交易闭环，提升用户支付体验的同时，提高智能小程序的订单转化率。了解更多信息，请查看 [百度电商开放平台：产品介绍](http://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_3_business/mini_program_cashier/product_intro.md)|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/#chooseInvoiceTitle">chooseInvoiceTitle</a>|选择用户的发票抬头。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/#navigateToSmartProgram">navigateToSmartProgram</a>|打开另一个小程序。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open/#navigateBackSmartProgram">navigateBackSmartProgram</a>|返回到上一个小程序。|
