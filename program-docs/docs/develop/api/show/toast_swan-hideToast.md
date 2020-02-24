---
title: swan.hideToast
header: develop
nav: api
sidebar:  toast_swan-hideToast
# webUrl: https://qft12m.smartapps.cn/subPackages/apiPackage/pages/toast/toast
---

 
**解释**： 隐藏消息提示框

 
## 方法参数 

Object object
### `object`参数说明 

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|success|	function|		否||	接口调用成功的回调函数|
|fail	|function		|否||	接口调用失败的回调函数|
|complete|	function	|	否||	接口调用结束的回调函数（调用成功、失败都会执行）|
## 示例

<a href="swanide://fragment/39bce6ec155b167062495e213ae5ebfe1574135466986" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>
 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_Toast.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/hidetoast.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 


 

:::codeTab
```swan
<view class="container">
    <view class="card-area">
        <button bindtap="showToast" type="primary" hover-stop-propagation="true">swan.showToast</button> 
        <button bindtap="hideToast" type="primary" hover-stop-propagation="true">swan.hideToast</button>   
    </view>
</view>
```

 

```js
showToast() {
    swan.showToast({
        title: 'toast',
        icon: 'none'
    });
},
hideToast() {
    swan.hideToast();
}
```
:::
##  错误码
### Android 

|错误码|说明|
|:--|:--|
|1001|执行失败              |





