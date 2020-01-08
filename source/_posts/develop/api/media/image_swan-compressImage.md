---
title: swan.compressImage
header: develop
nav: api
sidebar: image_swan-compressImage
---

 

> 基础库 3.110.3开始支持，低版本需做兼容处理。在工具和真机中的实现有区别，详见[API 实现差异](/develop/devtools/diff/)。

**解释**：压缩图片接口，可选压缩质量

 
## 方法参数
Object object
### `object`参数说明 ：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|src |String | 是  | | 图片的路径，可以是相对路径、临时文件路径或存储文件路径|
|quality| Number | 否 | 80 | 压缩质量，仅对jpg有效；范围0～100，数值越小，质量越低，压缩率越高。|
|success| Function  |  否  | | 接口调用成功的回调函数|
|fail  |  Function  |  否  | | 接口调用失败的回调函数|
|complete |   Function |   否  | | 接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数说明 ：

|参数  |类型 | 说明|
|---- | ---- | ---- |
|tempFilePath |  String | 压缩后图片的临时文件路径示例代码|


## 示例

<a href="swanide://fragment/8feeefde9488bc59c7a25bf521d6028a1574946928289" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_compressImage.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 


<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/compressImage.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 



* 在 js 文件中

```js
Page({
    data: {
        oldSrc: '',
        newSrc: ''
    },
    compressImage() {
        let that = this;
        swan.chooseImage({
            success: function (res) {
                console.log(res.tempFilePaths[0]);
                that.setData({'oldSrc': res.tempFilePaths[0]});
                swan.compressImage({
                    src: res.tempFilePaths[0],
                    quality: 80,
                    success: function (res) {
                        console.log('compressImage success', res);
                        that.setData('newSrc', res.tempFilePath)
                    },
                    fail: function (err) {
                        console.log('compressImage fail', err);
                    }
                });
            },
            fail: function (err) {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });
    }
});
```

