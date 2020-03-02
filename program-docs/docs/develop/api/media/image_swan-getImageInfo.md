---
title: swan.getImageInfo
header: develop
nav: api
sidebar: image_swan-getImageInfo
# webUrl: https://qft12m.smartapps.cn/swan-api/getImageInfo/getImageInfo
---

  

**解释**：获取图片信息

 
## 方法参数
Object object
### `object`参数说明 ：

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|src |String | 是  | | 图片的路径，可以是相对路径、临时文件路径或存储文件路径、网络图片。|
|success| Function  |  否  | | 接口调用成功的回调函数|
|fail  |  Function  |  否  | | 接口调用失败的回调函数|
|complete |   Function |   否  | | 接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数说明 ：

|参数  |类型 | 说明|
|---- | ---- | ---- |
|width |  Number | 图片宽度（单位：px）|
|height | Number | 图片高度（单位：px）|
|path  |  String | 返回图片的本地路径|
|orientation|String|返回图片的方向：<p> ·  up:默认不变；<p> · down：180度旋转；<p> · left：逆时针90度旋转；<p> · right：顺时针90度旋转；<p> ·  up-mirrored：镜像翻转；<p> ·  down-mirrored：镜像180旋转；<p> ·  left-mirrored：逆时针90度镜像旋转；<p> ·  right-mirrored：顺时针90度镜像旋转。|
|type|String|返回图片的格式 |


## 示例

<a href="swanide://fragment/a71d4303d014dc1a93d480a830e11b131577675842297" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_getImageInfo.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 
 
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/getImageInfo.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div> 

### 代码示例1 - 网络图片 ：

<a href="swanide://fragment/df7f65d3a9291abfa38941fc2fa042b61575221415775" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
Page({
    getImageInfo() {
        swan.getImageInfo({
            src: 'https://b.bdstatic.com/miniapp/image/getImageInfo.png',
            success: res => {
                console.log('getImageInfo success', res);
            },
            fail: err => {
                console.log('getImageInfo fail', err);
            }
        });
    }
});
```

### 代码示例2 - 相对路径图片 ：

<a href="swanide://fragment/17400460df9b7e4cc918584d4d6352901575221354113" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
Page({
    getImageInfo() {
        swan.getImageInfo({
            src: '../images/ai.png',
            success: res => {
                console.log('getImageInfo success', res);
            },
            fail: err => {
                console.log('getImageInfo fail', err);
            }
        });
    }
});
```

### 代码示例3 - 临时文件路径 ：

<a href="swanide://fragment/9ee1a17ef7f4213500de86206a11e46a1575221590828" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
Page({
    getImageInfo() {
        let that = this;
        swan.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'], 
            sourceType: ['camera'],
            success: res => {
                console.log(res.tempFilePaths);
                this.setData('imageList', res.tempFilePaths);
                swan.getImageInfo({
                    src: res.tempFilePaths[0],
                    success: res => {
                        console.log('getImageInfo success', res);
                        that.updateInfoList(res);
                    },
                    fail: err => {
                        console.log('getImageInfo fail', err);
                    }
                });
            },
            fail: err => {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });
    }
});
```

### 代码示例4 - 存储文件路径 ：

<a href="swanide://fragment/e809b7bda6706cfab69843527b5bc03d1575221754351" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
Page({
    getImageInfo() {
        let that = this;
        swan.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'], 
            sourceType: ['album'],
            success: res => {
                console.log(res.tempFilePaths);
                this.setData('imageList', res.tempFilePaths);
                swan.getImageInfo({
                    src: res.tempFilePaths[0],
                    success: res => {
                        console.log('getImageInfo success', res);
                        that.updateInfoList(res);
                    },
                    fail: err => {
                        console.log('getImageInfo fail', err);
                    }
                });
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
|202|解析失败，请检查参数是否正确|
|1001|执行失败|

### iOS

|错误码|说明|
|:--|:--|
|202  |解析失败，请检查参数是否正确|
|1003|读取图片内容为空(小程序文件夹为空或读取图片失败)|


