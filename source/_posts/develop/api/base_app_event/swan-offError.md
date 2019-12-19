---
title: swan.offError
header: develop
nav: api
sidebar: swan-offError
---

 
> 基础库 3.60.2 开始支持，低版本需做[兼容处理](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)。

**解释**：   取消监听小程序错误事件。

##  方法参数
   无
   
## 代码示例

<a href="swanide://fragment/54f7a7d7055d5906448ac64a594c6e621573989952662" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/offError.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>





###  图片示例  

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/offError.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例  



```js
// app.js
App({
    onLaunch() {
        swan.onError(function(errMsg) {
            console.log(errMsg);
            swan.showModal({
                title: '',
                content: JSON.stringify(errMsg)
            });
        });
    },
    // 在App onShow后约3秒取消事件监听（仅做功能示例，开发者可根据业务逻辑选择取消监听时机）  
    onShow() {
        setTimeout(function() {
            swan.offError();
            swan.showModal({
                title: '',
                content: '此后点击按钮触发报错，将不会触发swan.onError事件.'
            });
        }, 3000);
    }
});
```

