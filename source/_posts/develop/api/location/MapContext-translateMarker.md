---
title:  MapContext.translateMarker
header: develop
nav: api
sidebar:  MapContext-translateMarker
---


**解释**：平移 marker，带动画 。

 
## 方法参数 
 
 Object object

### `object`参数说明 ：

|属性名 |类型  |默认值 |必填|说明|
|---- | ---- | ---- |---- |---|
|markerId  |Number  |   |是  |指定 marker |
|destination  |Object  |   | 是 |指定marker移动到的目标点|
|autoRotate   | Boolean   |   |是 |移动过程中是否自动旋转 marker|
|rotate  |Number  |   |是  |marker 的旋转角度 |
|duration  |Number   | 1000ms  | 否 |动画持续时长，平移与旋转分别计算。 |
|animationEnd|Function||否|动画结束时回调函数|
|success|	function|	|	否|	接口调用成功的回调函数|
|fail   | Function   |  |否 | 接口调用失败的回调函数|
|complete|Function  |  |否 | 接口调用结束的回调函数（调用成功、失败都会执行）|


## 示例

 <a href="swanide://fragment/daefd8793cdad26d655a6f6a18008cf61573630179945" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_MapContextTranslateMarker.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/translateMarker.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例  
<a href="swanide://fragment/97e14b4b073aad9f739f9c29753ed84d1573555662733" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <map id="myMap" 
        longitude="{{longitude}}"
        latitude="{{latitude}}"
        style="width: 100%"  
        markers="{{markers}}">
    </map>
    <button type="primary" bindtap="translateMarker">平移 marker</button>
</view>


```

* 在 js 文件中

```js
Page({
   data: {
        latitude: 40.048828,
        longitude: 116.280412,  
        markers: [{
            markerId: 1,
            latitude: 40.052751,
            longitude: 116.278796
        }, {
            markerId: 2,
            latitude: 40.048828,
            longitude: 116.280412,
            callout: {
                display: 'ALWAYS',
                content: '百度科技园'
            }
        }] 
    },
    onReady() {
        this.mapContext = swan.createMapContext('myMap');
    },
    translateMarker: function () {
        this.mapContext.translateMarker({
            markerId: '2',
            destination: {
                latitude: 40.049655,
                longitude: 116.27505,
            },
            autoRotate: true,
            rotate: 30,
            duration: 1000,
            animationEnd() {
                swan.showToast({
                    title: '动画结束啦！',
                    icon: 'none'
                });
            },
            success(res) {
                console.log('success', res)
            },
            fail (err) {
                console.log('fail', err)
            }
        })
    }
});

```
