---
title: ARCameraContext.reset
header: develop
nav: api
sidebar: arcameracontext_ARCameraContext-reset
---


 

**解释**：重置相机

**方法参数**：Object object

**`object`参数说明**：

|参数  |类型 | 默认值 |必填|说明|
|---- | ---- | ---- |---- |--|
|success| Function | |   否  |接口调用成功的回调函数|
|fail  |  Function  |   | 否 |接口调用失败的回调函数|
|complete |   Function  | | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

**代码示例**：

<a href="swanide://fragment/c65bf6b8d21e92d6cbddb53e8c609d151574017249241" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<ar-camera ar-key="10298931" ar-type="5" flash="{{flashState}}" class="camera" bindload="loadCameraSuccess" bindmessage="message" binderror="error">
    <cover-view s-if="ifRecord" class="cameraState" bindtap="startRecord"> 开始录像 </cover-view>
    <cover-view s-else class="cameraState" bindtap="stopRecord"> 结束录像 </cover-view>
    <cover-view> 
        <video src="{{VideoPath}}"></video>
    </cover-view>
    <!--重拍，保存的按钮-->
    <cover-view class="action-complete" s-if="isRecordComplete">
        <cover-image class="giveup-img" src="https://b.bdstatic.com/miniapp_cl_ar_back.png" bindtap="reset" />
        <cover-image class="save-img" src="https://b.bdstatic.com/miniapp_cl_ar_save.png" bindtap="save" />
    </cover-view>

</ar-camera>

```

```js
Page({
    data: {
        photoSrc: '',
        ifRecord: true,
        VideoPath: '',
        isRecordComplete: false
    },
    onReady() {
        this.ARCameraContext = swan.createARCameraContext();
    },
    startRecord() {
        let that = this;
        this.ARCameraContext.startRecord({
            success: res => {
                that.setData({'ifRecord': false});
            }
        });
    },
    stopRecord() {
        let that = this;
        this.ARCameraContext.stopRecord({
            success: res => {
                that.setData({'ifRecord': true});
                swan.showModal({
                    title: 'success',
                    content: JSON.stringify(res)
                });
                that.setData({
                    VideoPath: res.tempVideoPath,
                    isRecordComplete: true
                })
            }
        });
    },
    reset() {
        this.ARCameraContext.reset({
            success: res => {
                this.setData({
                    isRecordComplete: false,
                    isUpload: false,
                    photoSrc: '',
                    videoSrc: ''
                }, () => {
                    this.changeAction(this.data.cameraState);
                });
            },
            fail: e => {
                swan.showToast({
                    title: JSON.stringify(e),
                    icon: 'none'
                });
            }
        });
    },
    save() {
        swan.saveVideoToPhotosAlbum({
            filePath: this.data.VideoSrc,
            success: handleSaveSuccess.bind(this),
            fail: handleSaveFail.bind(this)
        });
        function handleSaveSuccess(res) {
            swan.showToast({
                title: '保存成功',
                success: () => {
                    this.reTake();
                }
            });

            this.setData({
                isRecordComplete: true,
                isUpload: false
            });
        }
        function handleSaveFail(e) {
            swan.showToast({title: '保存失败'});
        }
    }
});
```