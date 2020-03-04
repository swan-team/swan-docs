---
title: swan.chooseImage
header: develop
nav: api
sidebar: image_swan-chooseImage
# webUrl: https://qft12m.smartapps.cn/swan-api/chooseImage/chooseImage
---




**解释**：从本地相册选择图片或使用相机拍照。

## 方法参数
Object object
### `object`参数说明 ：

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|count  | Number | 否 |9| 最多可以选择的图片张数 。|
|sizeType  |Array.&lt;string&gt;  | 否 || original 原图，compressed 压缩图，默认二者都有。|
|sourceType | Array.&lt;string&gt;  |否 | |  album 从相册选图，camera 使用相机，默认二者都有。|
|success |Function  |  否 ||成功则返回图片的本地文件路径列表 tempFilePaths。|
|fail  |  Function |   否  | | 接口调用失败的回调函数|
|complete   | Function  |  否 | |  接口调用结束的回调函数（调用成功、失败都会执行）|



### success返回参数说明 ：

|参数  |类型|  说明 | Web 态说明|
|---- | ---- | ---- | ---- |
|tempFilePaths  | Array.&lt; string&gt;  |图片的本地文件路径列表 。| Web 态值为浏览器所支持的 blob URL 数组，形如 `["blob:https://xxx"]`|
|tempFiles  | Array.&lt;object&gt; |图片的本地文件列表，每一项是一个 File 对象。|  - |

### tempFiles 对象结构如下:

|字段 | 类型  |说明 |  Web 态说明|
|---- | ---- | ---- | ---- |
|path  |  String  |本地文件路径| Web 态值为浏览器所支持的 blob URL 数组，示例 `"blob:https://9zs64x.smartapps.cn/52f855e3-2d9d-49b5-aeb4-96534135f0a9"`|
|size   | Number | 本地文件大小（单位：B）| - |


## 示例



### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/chooseImage.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例


<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/chooseImage2.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
</div>

### 代码示例1 - tempFilePaths ：

<a href="swanide://fragment/8ffb1a4177b33946ea0bed99b96071c21575216316424" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    chooseImage() {
        swan.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: res => {
                // 成功则返回图片的本地文件路径列表 tempFilePaths
                console.log(res.tempFilePaths);
                this.setData('imageList', res.tempFilePaths);
            },
            fail: err => {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });
    }
});
```

### 代码示例2 - tempFiles ：

<a href="swanide://fragment/593c7689acbe113cbdbb5e4441dcaa921575216919794" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    chooseImage() {
        swan.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: res => {
                // 文件列表对象
                console.log(res.tempFiles);
                let imageList = [];
                res.tempFiles.forEach((e)=>{ 
                    imageList.push(e.path)
                })
                this.setData('imageList', imageList);
            },
            fail: err => {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });
    }
});
```

##  错误码

### Android

|错误码|说明|
|:--|:--|
|202|解析失败，请检查参数是否正确   |
|1002|用户取消操作错误码|

### iOS

|错误码|说明|
|:--|:--|
|202|解析失败，请检查参数是否正确  |
|1002|用户取消操作错误码|
|1003|用户没有授权百度使用相册|


## Bug & Tip

1. 文件的临时路径，在智能小程序本次启动期间可以正常使用，如需持久保存，需在主动调用 swan.saveFile，在智能小程序下次启动时才能访问得到。
2. 在 **Web 态**内，文件的临时路径仅在浏览器关闭前有效。受浏览器限制，在 Web 态无法使用 swan.saveFile 在本地持久保存文件。

