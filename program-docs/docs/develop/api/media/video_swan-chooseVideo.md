---
title: swan.chooseVideo
header: develop
nav: api
sidebar: video_swan-chooseVideo
webUrl: https://qft12m.smartapps.cn/subPackages/apiPackage/pages/chooseVideo/chooseVideo
---



**解释**： 拍摄视频或从手机相册中选视频，返回视频的临时文件路径。

 
## 方法参数
Object object
### `object`参数说明  

|属性名 |类型  |必填 | 默认值 |说明|最低版本|
|---- | ---- | ---- | ----|----|----|
|sourceType | Array.&lt;string&gt; |否 | ['album', 'camera']|  album 从相册选择视频，camera 使用相机，默认二者都有。|-|
|compressed  | Boolean | 否  | true| 是否压缩所选的视频源文件，默认值为true，需要压缩。|-|
|maxDuration  | Number | 否  | 60| 拍摄视频最长拍摄时间，（单位：s）。最长支持 60 秒。|-|
|camera  | String | 否  | 'back'| 默认拉起的是前置或者后置摄像头。部分 Android 手机下由于系统 ROM 不支持无法生效。|3.120.1|
|success |Function  |  否 | | 接口调用成功，返回视频文件的临时文件路径，详见返回参数说明。|-|
|fail  |  Function |   否 || 接口调用失败的回调函数|-|
|complete   | Function  |  否 | |  接口调用结束的回调函数（调用成功、失败都会执行）|-|

### camera参数说明 

|参数名|参数类型|说明|
|---|---|---|
|back|String|默认拉起后置摄像头|
|front|String|默认拉起前置摄像头|

### success返回参数说明 


|参数  |  说明 |
|---- | ---- |
|tempFilePath | 选定视频的临时文件路径 |
|duration | 选定视频的时间长度 (单位：s)|
|size | 选定视频的数据量大小（单位：B）|
|height | 返回选定视频的长 |
|width | 返回选定视频的宽 |


## 示例

<a href="swanide://fragment/c82decd60ec2154b7458ded836c3d2c91573651529736" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/chooseVideo.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

 

### 代码示例 



```javascript
Page({
    chooseVideo() {
        swan.chooseVideo({
            sourceType: ['album', 'camera'],
            compressed: false,
            maxDuration: 60,
            camera: 'back',
            success: res => {
                // 成功返回选定视频的临时文件路径
                console.log('res', res.tempFilePath);
            },
            fail: err => {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });
    }
});
```


## 错误码

### Android

|错误码|说明|
|:--|:--|
|201|解析失败，请检查调起协议是否合法|
|1002|用户取消操作|

### iOS

|错误码|说明|
|:--|:--|
|202|解析失败，请检查参数是否正确       |
|1002|用户取消操作|
|1004|小程序文件目录为空|

## Bug & Tip 

文件的临时路径，在智能小程序本次启动期间可以正常使用，如需持久保存，需在主动调用 swan.saveFile，在智能小程序下次启动时才能访问得到。
