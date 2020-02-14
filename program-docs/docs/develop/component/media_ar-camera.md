---
title: ar-camera AR相机
header: develop
nav: component
sidebar: media_ar-camera
---

 

> 基础库 3.15.104 开始支持，低版本需做兼容处理。**ar-camera 组件目前只针对百度 APP 开放使用**。 

**解释**：AR相机，在[DuMixAR内容开放平台](https://dumix.baidu.com/content#/)提交并上线AR项目后（选择“百度App-相机”渠道）获取到AR Key、AR Type，可配置展现。

##  属性说明 

|属性名 |类型  |默认值  | 必填 |说明|
|:---- |: ---- |: ---- |:---- |:---- |
|key| String |   | 是 |AR项目唯一标识，在DuMixAR内容开放平台上传生成AR项目后获取AR Key|
|type| String |   | 是 |AR相机类型，在DuMixAR内容开放平台上传生成AR项目后获取AR Type：<br>2D 跟踪类型：0；<br>SLAM 类型：5；<br>IMU 类型：8。|
|flash|String| off | 否 |闪光灯，值为auto, on, off|
|binderror|EventHandle| | 否 |用户不允许使用摄像头或扫码失败时触发|
|bindload|EventHandle| | 否 |AR加载成功时触发|
|bindmessage|EventHandle| | 否 |开发者制作AR项目时可自定义按键，用户点击时会收到事件和数据|
|bindscancode|EventHandle| | 否 | 扫描识图结束后触发 |

###  type 有效值  

| 值 | 说明 |
| :---- | :---- |
| 0 | 2D 跟踪类型 |
| 5 | SLAM 类型 |
| 8 | IMU 类型 |

###  flash 有效值  

| 值 | 说明 |
| :---- | :---- |
| auto | 自动闪光灯 |
| on | 闪光灯开 |
| off | 闪光灯关 |


## 示例
 

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/ar-camera.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>



###  图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/ar-camera.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例 


<a href="swanide://fragment/88816aa54768ab457f54bb55804c6f301565512329940" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<ar-camera ar-key="10298931" ar-type="5" flash="{{flashState}}" class="camera" bindload="loadCameraSuccess" bindmessage="message" binderror="error">
</ar-camera>
```
> 其它代码过长，建议直接<a href="swanide://fragment/88816aa54768ab457f54bb55804c6f301565512329940" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>。


##  Bug & Tip 

* Tip：ar-camera 组件是由客户端创建的原生组件，它的层级是最高的，不能通过 z-index 控制层级。可使用 cover-view cover-image 覆盖在上面。
* Tip：同一页面只能插入一个 ar-camera 组件。可在新页面中放置ar-camera组件，并使用 <a href='https://smartprogram.baidu.com/docs/develop/api/show/tab_swan-switchTab/#navigateTo/'>swan.navigate</a>  API（注意应防止用户多次连续点击，否则会导致AR页面多次打开出现卡顿）跳转至该页面。
* Tip：请勿在 scroll-view、swiper、picker-view、movable-view 中使用 ar-camera 组件。
* Tip：AR 相机支持 iPhone X 及以上机型显示 16：9 的比例；支持 iPhone X 以下机型显示全屏比例。
* Tip：相关API：<a href='https://smartprogram.baidu.com/docs/develop/api/media/arcameracontext_swan-createARCameraContext/'>createARCameraContext</a>。
