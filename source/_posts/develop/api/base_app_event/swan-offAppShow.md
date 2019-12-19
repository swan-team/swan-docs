---
title: swan.offAppShow
header: develop
nav: api
sidebar: swan-offAppShow
---
 
> 基础库 3.60.2 开始支持，低版本需做[兼容处理](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)。

**解释**：   取消监听小程序切前台事件。

##  方法参数
无

## 代码示例

<a href="swanide://fragment/bb397425fd644712e7949da424c12cdf1573990116771" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/offAppShow.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>





###  图片示例  

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/offAppShow.gif">
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
        swan.onAppShow(function(res) {
            console.log('scene', res.scene);
            console.log('path', res.path);
            console.log('query', res.query);
            swan.showModal({
                title: '',
                content: '触发swan.onAppShow回调'
            });
        });
    },
    onShow() {
        // 在App onShow后约3秒取消事件监听（仅做功能示例，开发者可根据业务逻辑选择取消监听时机）
        setTimeout(() => {
            swan.offAppShow();
            swan.showModal({
                title: '',
                content: '此后将不会触发swan.onAppShow回调'
            });
        }, 3000)
    }
});
```

