---
title: swan.downloadFile
header: develop
nav: api
sidebar: downloadFile
---



**解释**：下载文件资源到本地，客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径。


### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/downloadFile.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

##  方法参数  

Object object

###  `object`参数说明  ：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|url |String | 是 || 下载资源的 url|
|header | Object  |否 || HTTP 请求 Header，header 中不能设置 Referer|
|success |Function |   否  | | 下载成功后以 tempFilePath 的形式传给页面，res = {tempFilePath: '文件的临时路径'}|
|fail   | Function   | 否||  接口调用失败的回调函数|
|complete  |  Function  |  否 || 接口调用结束的回调函数（调用成功、失败都会执行）|
|filePath| String|否||指定文件下载后存储的路径。|


###  success 返回参数说明  ：

|参数 | 类型 | 说明|
|---- | ---- | ---- |
|tempFilePath  |  String  |临时文件路径，下载后的文件会存储到一个临时文件|
|statusCode | Number | 开发者服务器返回的 HTTP 状态码|

###  fail 返回参数说明  ：


* Andriod

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确  |
|1001|执行错误|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确  |
|1001|请求文件超过10M|
|1002|无法确定下载文件大小|

## 示例


###  图片示例  

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/downloadFile.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例1  ：
 

<a href="swanide://fragment/0bac1c0d10ee17ce6be023aac81a8c381572945831796" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    data: { },
    downloadFile() {
        swan.downloadFile({
            url: 'https://smartprogram.baidu.com/docs/img/file-simple.pdf',
            header: {
                'content-type': 'application/json'
            },
            success: res => {
                //下载成功
                if (res.statusCode === 200) {
                    console.log("临时文件路径" + res.tempFilePath);
                }
            },
            fail: err => {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });
    }
})
```

###  代码示例2  - 指定下载路径  ：
 

<a href="swanide://fragment/3351aaeff8b78f4bdd7800516ab2b1841575215908227" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    data: { },
    downloadFile() {
        swan.downloadFile({
            url: 'https://smartprogram.baidu.com/docs/img/file-simple.pdf',
            header: {
                'content-type': 'application/json'
            },
            filePath: 'bdfile://usr/办理指南文档.pdf',
            success: res => {
                console.log(res);
                let filePath = res.filePath;
                swan.showModal({
                    title: '文件下载完成',
                    content: '是否需要打开？',
                    confirmText: '打开',
                    success: res => {
                        if (res.confirm) {
                            swan.openDocument({
                                filePath: filePath,
                                fileType: 'pdf',
                                fail: err => {
                                    this.toast('打开失败');
                                }
                            });
                        }
                    }
                });
            },
            fail: err => {
                this.toast('下载文件失败');
            },
            complete: () => {
                swan.hideToast();
            }
        });
    }
});
```

返回值：

返回一个 downloadTask 对象，通过 downloadTask，可监听下载进度变化事件，以及取消下载任务。

##  Bug & Tip  

* 文件的临时路径，在智能小程序本次启动期间可以正常使用，如需持久保存，需再主动调用 swan.saveFile，才能在智能小程序下次启动时访问得到；
* 请在 header 中指定合理的 Content-Type 字段，以保证客户端正确处理文件类型。
* 下载最大限制10MB。
