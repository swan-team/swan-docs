---
title: 生命周期函数
header: develop
nav: framework
sidebar: app_service_pagelife
---



 

### onLoad(Object query)
页面加载时触发。一个页面只会调用一次，可以在 onLoad 的参数中获取打开当前页面路径中的参数。

**参数：**

|属性名|类型|说明|
|----|----|----|
|query|Object|打开当前页面路径中的参数|

### onShow()
页面显示/切入前台时触发。

### onReady()
页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。

### onHide()
页面隐藏/切入后台时触发。 如通过调用 [swan.navigateTo](https://smartprogram.baidu.com/docs/develop/api/show/tab_swan-navigateTo/) 或底部 tab 切换到其他页面，小程序切入后台等时触发。

### onUnload()
页面卸载时触发。如通过调用 [swan.redirectTo](https://smartprogram.baidu.com/docs/develop/api/show/tab_swan-redirectTo/) 或 [swan.navigateBack](https://smartprogram.baidu.com/docs/develop/api/show/tab_swan-navigateBack/) 到其他页面时触发。


<div class="m-doc-custom-examples">
<div class="m-doc-custom-examples-warning">
 <p class="m-doc-custom-examples-title">注意</p><p class="m-doc-custom-examples-text"><ul><li>在解析 query 的时候，基础库会使用decodeURIComponent对query的参数值进行一次解码，该功能将在新的版本中下线。</li><li>如页面跳转时传递了 encode 后的值作为参数，为避免发生页面错误，使用时请自行将拿到的值使用decodeURIComponent进行一次decode操作。</li></ul></p>
</div>
</div>
