---
title: ARCameraContext.startRecord
header: develop
nav: api
sidebar:  arcameracontext_ARCameraContext-startRecord
---



 
**解释**：开始录像

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_ARCameraContextRecord.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|参数 | 类型 | 必填 |默认值| 说明|
|---- | ---- | ---- |---- |---|
|progress|Function|否||录制进度更新的回调函数。|
|timeout|Function|否||超过 10s 或页面 onHide 时会结束录像。|
|success |Function  |  否 | | 接口调用成功的回调函数|
|fail  |  Function |   否  | |接口调用失败的回调函数|
|complete   | Function |   否  | |接口调用结束的回调函数（调用成功、失败都会执行）|


**progress 返回参数说明**：


|参数名 |类型  |说明|
|---- | ---- | ---- |
|progress  | String | 视频的临时路径 |

**timeout 返回参数说明**：


|参数名 |类型  |说明|
|---- | ---- | ---- |
|tempVideoPath  | String | 视频的临时路径 |

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/ARCameraContextRecord.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/3f6fad0d4e6c3b41fb26e037f51dc3d31574495010676" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
* 在 js 文件中

```js
Page({
    data: {
        photoSrc: '',
        ifRecord: true,
        VideoPath: '',
        isRecordComplete: false
    },
    onReady() {
        // 初始化ar相机
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