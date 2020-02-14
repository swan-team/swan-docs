---
title: swan.canvasToTempFilePath
header: develop
nav: api
sidebar: canvas_swan-canvasToTempFilePath
---

 

**解释**：把当前画布指定区域的内容导出生成指定大小的图片，并返回文件路径。在自定义组件下，第二个参数传入组件实例`this`，以操作组件内`<canvas/>`组件。


 
## 方法参数 

Object object

###  `object`参数说明  

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|x	| Number | 否  |0| 指定的画布区域的左上角横坐标|
|y	| Number | 否  | 0| 指定的画布区域的左上角纵坐标|
|width	| Number | 否  | canvas宽度-x |指定的画布区域的宽度 |
|height	| Number | 否  | canvas高度-y | 指定的画布区域的高度 |
|destWidth	| Number | 否  |width * 屏幕像素密度| 输出图片宽度|
|destHeight	| Number | 否  |height * 屏幕像素密度| 输出图片高度 |
|canvasId	| String | 是  | | 画布标识，传入`<canvas/>`的 canvas-id|
|fileType	| String | 否  |png| 目标文件的类型，有效值只支持 'jpg' 或 'png' 。|
|quality	| Number | 否  | | 图片的质量，取值范围为 (0, 1]，不在范围内时当作 1.0 处理 。|
|success	| Function | 否  | | 接口调用成功的回调函数 |
|fail	| Function | 否  | |接口调用失败的回调函数 |
|complete	| Function | 否  | |接口调用结束的回调函数（调用成功、失败都会执行）|
## 示例

 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_canvasToTempFilePath.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/canvasToTempFilePath.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例 1  

<a href="swanide://fragment/6558373f7fb39417072963fef3915f841574332412536" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

> 请使用[2.7.0-beta及其以上版本](https://smartprogram.baidu.com/docs/develop/devtools/history/)进行预览，正式版将在2.6.1以上版本支持。


* 在 swan 文件中

```html
<canvas canvas-id="myCanvas" />
<button type="primary" bindtap="canvasToTempFilePath">canvasToTempFilePath</button>
<image src="{{src}}"></image>
```

* 在 js 文件中

```js
Page({
     data: {
        src: ''
    },
    onReady: function () {
        const canvasContext = this.createCanvasContext('myCanvas');
        canvasContext.setFillStyle('#ff0000');
        canvasContext.arc(100, 50, 50, 0, 2 * Math.PI);
        canvasContext.fill();
        canvasContext.draw();
    },
    canvasToTempFilePath (){
        const that = this;
        swan.canvasToTempFilePath({
            x: 0,
            y: 0,
            width: 300,
            height: 225,
            destWidth: 300,
            destHeight: 225,
            canvasId: 'myCanvas',
            success: function(res){
                that.setData("src", res.tempFilePath);
                swan.showModal({
                    title: '图片路径',
                    content: JSON.stringify(res.tempFilePath)
                })
            }
        })
    }
})
```

###  代码示例 2：在draw中使用 

<a href="swanide://fragment/0052de94836ab84f999612f1ed7437de1574352005128" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

> 请使用[2.19.0-rc及其以上版本](https://smartprogram.baidu.com/docs/develop/devtools/history/)进行预览，正式版将在2.18.1(不包括2.18.1)以上版本支持。


* 在 swan 文件中

```html
<canvas canvas-id="myCanvas" />
<image src="{{src}}"></image>
```

* 在 js 文件中

```js
Page({
     data: {
        src: ''
    },
    onReady: function () {
        let that = this;
        const canvasContext = this.createCanvasContext('myCanvas');
        canvasContext.setFillStyle('#ff0000');
        canvasContext.arc(100, 50, 50, 0, 2 * Math.PI);
        canvasContext.fill();
        canvasContext.draw(function() {
            swan.canvasToTempFilePath({
                x: 0,
                y: 0,
                width: 300,
                height: 225,
                destWidth: 300,
                destHeight: 225,
                canvasId: 'myCanvas',
                success: function(res){
                    that.setData("src", res.tempFilePath);
                    swan.showModal({
                        title: '图片路径',
                        content: JSON.stringify(res.tempFilePath)
                    })
                }
            })
        });
    }
})
```



## 错误码
###  Android

|错误码|说明|
|:--|:--|
|201|解析失败，请检查调起协议是否合法|
|1001|执行失败|

###  iOS

|错误码|说明|
|:--|:--|
|202|解析失败，请检查参数是否正确      |
 

##  Bug & Tip 

* 在 draw 回调里调用该方法才能保证图片导出成功。
* 当 x < 0 或者 x > canvase.width 时，x 会被置成0，y 同理。
* 当 x 合法的前提下，若 x + width > canvas.width 时， width 会被置成 canvas.width - x，y 同理。


