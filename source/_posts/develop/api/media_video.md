---
title: 视频
header: develop
nav: api
sidebar: media_video
---
chooseVideo
-----



**解释：** 拍摄视频或从手机相册中选视频，返回视频的临时文件路径。

**参数：** Object

**Object参数说明：**

|参数 | 类型  |必填 | 说明|
|---- | ---- | ---- | ----|
|sourceType | Array.<string> |否 |  album 从相册选择视频，camera 使用相机，默认二者都有。|
|compressed  | Boolean | 否  | 是否压缩所选的视频源文件，默认值为true，需要压缩。|
|maxDuration  | Number | 否  | 拍摄视频最长拍摄时间，（单位：s）。最长支持 60 秒。|
|success |Function  |  是 | 接口调用成功，返回视频文件的临时文件路径，详见返回参数说明。|
|fail  |  Function |   否  | 接口调用失败的回调函数|
|complete   | Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**


|参数  |  说明 |
|---- | ---- |
|tempFilePath | 选定视频的临时文件路径 |
|duration | 选定视频的时间长度 (单位：s)|
|size | 选定视频的数据量大小（单位：B）|
|height | 返回选定视频的长 |
|width | 返回选定视频的宽 |

**说明**：
文件的临时路径，在智能小程序本次启动期间可以正常使用，如需持久保存，需在主动调用 swan.saveFile，在智能小程序下次启动时才能访问得到。

**示例：**
<a href="swanide://fragment/1ad682d22d305ed32c33695919d358791548069205371" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果 </a>
```html
<button bind:tap="chooseVideo" type="primary">点击选择视频</button>
<video src="{{src}}" controls></video>
```

```javascript
Page({
    data: {
        sourceType: ['album', 'camera'],
        compressed: false,
        maxDuration: 60,
        src: ''
    },

    chooseVideo() {
        let self = this;
        swan.chooseVideo({
            sourceType: this.getData('sourceType'),
            compressed: this.getData('compressed'),
            maxDuration: this.getData('maxDuration'),
            success: function (res) {
                // 成功返回选定视频的临时文件路径
                self.setData('src', res.tempFilePath);
            },
            fail: function (err) {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });
    }
});
```

<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法|
|1002|用户取消操作错误码|

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|1002|用户取消操作|
|1004|小程序文件目录为空| -->

saveVideoToPhotosAlbum
-----


**解释：** 保存视频到系统相册。需要用户授权。

**参数：** Object

**Object参数说明：**

|参数名| 类型 | 必填 | 说明|
|---- | ---- | ---- |---- |
|filePath  |  String  |是 |  视频文件路径，可以是临时文件路径也可以是永久文件路径。|
|success |Function |   否  | 接口调用成功的回调函数|
|fail  |  Function  |  否  | 接口调用失败的回调函数|
|complete |   Function |   否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

<!-- **success返回参数说明：**

|参数名| 类型|  说明|
|---- | ---- | ---- |
|filePath  |String | 调用结果,返回视频文件路径。| -->


**示例：**

```js
swan.saveVideoToPhotosAlbum({
    'filePath': 'bdfile://xxx',
    success: function (res) {
        console.log(res);
    },
    fail: function (err) {
        console.log('错误码：' + err.errCode);
        console.log('错误信息：' + err.errMsg);
    }
});
```

<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确 |
|1001|执行失败|
|200301|保存图片、视频到相册-用户拒绝|

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确 |
|1003|用户没有授权百度使用相册|
|1005|没有读取任何视频数据|
|1006|保存出错|
|10002|网络请求失败|
|200301|相册权限，用户拒绝小程序相册|
|200302|相册权限，用户拒绝系统相册权限| -->