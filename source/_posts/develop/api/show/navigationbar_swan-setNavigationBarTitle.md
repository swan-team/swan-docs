---
title:  swan.setNavigationBarTitle
header: develop
nav: api
sidebar: navigationbar_swan-setNavigationBarTitle
---
 

**解释**：动态设置当前页面的标题。

 
## 方法参数 

Object object

###  `object`参数说明  

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|title   |String|  是 | |  页面标题|
|success |Function |   否 | |   接口调用成功的回调函数|
|fail   | Function|    否 | |   接口调用失败的回调函数|
|complete   | Function   | 否| |   接口调用结束的回调函数（调用成功、失败都会执行）|


## 示例

<a href="swanide://fragment/01552c32fa4399c3ae2b3465ecd5977c1574136270589" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a> 

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/setNavigationBarTitle.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/setnavigationbartitle.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例 


* 在 swan 文件中

```html
<view class="container">
    <view class="card-area">
        <input bind:input="titleInput" class="input border-bottom" type="text" placeholder="请输入页面标题并点击设置即可"/>
        <button bind:tap="setNavigationBarTitle" type="primary" hover-stop-propagation="true">设置框架标题</button>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        newTitle: ''
    },
    titleInput(e) {
        this.setData('newTitle', e.detail.value);
    },
    setNavigationBarTitle(e) {
        let newTitle = this.getData('newTitle');
        if (!newTitle) {
            swan.showToast({
                title: '请输入标题'
            });
            return;
        }
        swan.setNavigationBarTitle({
            title: newTitle
        });
    }
});
```

##  错误码

### Android

|错误码|说明|
|--|--|
|1001|执行失败   |



### iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确   |

