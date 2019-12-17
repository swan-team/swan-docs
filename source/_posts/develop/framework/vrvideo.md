---
title: 全景视频vrvideo组件
header: develop
nav: framework
sidebar: vrvideo
---



手百小程序vrvideo动态库提供了在小程序中播放全景视频的方法。

## 使用方法

### 1. 在项目中引用动态库

使用动态库的方法参见[小程序文档：使用动态库](https://smartprogram.baidu.com/docs/develop/framework/dynamiclib_use/)，在 `app.json` 中增添一项 `dynamicLib`，与 `pages` 同级。

```json
"dynamicLib": {
    "myDynamicLib": {
        "provider": "vrvideo"
    }
},
```

### 2. 在使用到组件的页面配置动态库

在每个使用到图表组件的页面，配置 `*.json` 文件如：

```json
{
    "usingSwanComponents": {
        "vrvideo": "dynamicLib://myDynamicLib/vrvideo"
    }
}
```

### 3. 编写 `*.swan` 文件

```html
<vrvideo src="{{ src }}" style="width: 100%; height: 100%; display: block"></vrvideo>
```

这是一种最基本的配置方式。`style` 也可以在 `*.css` 中声明，需要保证 `<vrvideo>` 是有宽度和高度的。`options` 在 `*.js` 中绑定到页面的 data 中：

## 动态库属性列表

`<vrvideo>` 上支持的属性包括：

|属性名 |类型  |默认值  | 必填 |说明|
|---- | ---- | ---- |---- |---- |
|src|String|  | 是 |视频的资源地址|
|initial-time|Number|  | 否 |指定视频初始播放位置|
|controls|Boolean|true|否|是否显示默认播放控件（播放/暂停按钮、播放进度、时间）|
|autoplay|Boolean|false|否|是否自动播放|
|loop|Boolean|false|否|是否循环播放|
|muted|Boolean|false|否|是否静音播放|
|poster|String|  |否|视频封面的图片网络资源地址|
|show-progress|	Boolean|	true|否|	若不设置，宽度大于240时才会显示。|
|show-fullscreen-btn|	Boolean|	true|否|	是否显示全屏按钮|
|show-play-btn|	Boolean	|true|否|	是否显示视频底部控制栏的播放按钮|
|show-center-play-btn|	Boolean	|true	|否|是否显示视频中间的播放按钮|
|show-no-wifi-tip|Boolean|true|否|非wifi环境下是否显示继续播放浮层 <font color="#4183c4">基础库 3.100.4 以上</font>|
|vrVideoMode|Object||否|全景相关配置

除vrVideoMode参数外，其他参数与普通视频类似，可参考[vide组件](https://smartprogram.baidu.com/docs/develop/component/media_video/)。

### vrVideoMode参数说明
vrVideoMode包含以下字段：

|字段名|类型|默认值|必填|说明|
|---- | ---- | ---- |---- |---- |
|interactiveMode|String|VRModeInteractiveMotionWithTouch|否|交互模式，有效值见下表|
|displayMode|String|VRModeDisplayNormal|否|显示模式，有效值见下表|
|projectionMode|String|VRModeProjectionSphere|否|投影模式，有效值见下表|
|fov|number|90|否|初始fov|
|minFov|number|动态计算|否|最小fov|
|maxFov|number|动态计算|否|最大fov|
|pinchEnable|boolean|true|否|是否开启手势缩放|

如果不填写，则为默认值，即
```js
{
    interactiveMode: 'VRModeInteractiveMotionWithTouch',
    displayMode: 'VRModeDisplayNormal',
    projectionMode: 'VRModeProjectionSphere',
    fov: 90,
    pinchEnable: true
}
```

interactiveMode 有效值:

|值|说明|
|---- | ---- | 
|VRModeInteractiveTouch|拖拽|
|VRModeInteractiveMotion|移动|
|VRModeInteractiveMotionWithTouch|移动+拖拽|

displayMode 有效值:

|值|说明|
|---- | ---- | 
|VRModeDisplayNormal|单目普通模式|
|VRModeDisplayGlass|双目眼镜模式|

projectionMode 有效值:

|值|说明|
|---- | ---- | 
|VRModeProjectionSphere|球形|
|VRModeProjectionDome180|穹形180度|
|VRModeProjectionDome230|穹形230度|
|VRModeProjectionDome180Upper|穹形180度UPPER|
|VRModeProjectionDome230Upper|穹形230度UPPER|
|VRModeProjectionStereoSphereHorizontal|球形左右立体|
|VRModeProjectionStereoSphereVertical|球形上下立体|
|VRModeProjectionPlaneFit|平面FIT|
|VRModeProjectionPlaneCrop|平面CROP|
|VRModeProjectionPlaneFull|平面FULL|
|VRModeProjectionStereoPlaneFitHorizontal|平面FIT左右立体|
|VRModeProjectionStereoPlaneFitVertical|平面FIT上下立体|
