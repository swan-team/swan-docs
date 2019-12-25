---
title: swan.onAppShow
header: develop
nav: api
sidebar: swan-onAppShow
---

 
> 基础库 3.60.2 开始支持，低版本需做[兼容处理](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)。

**解释：** 监听小程序切前台事件。该事件与 [App.onShow](/develop/framework/app_service_register/) 的回调参数一致。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/onAppShow.png"  class="demo-qrcode-image" />


**方法参数：** function callback
小程序切前台事件的回调函数。

**callback返回参数说明**：

**Object res**
返回的对象信息。

|属性  |类型  |说明  |最低版本|
|---- | ---- | ---- |---|
|scene | String | 打开智能小程序的<a href="https://smartprogram.baidu.com/docs/data/scene/">场景值</a> | |
|path|String|打开小程序的路径。| |
|query|Object|打开小程序的query。| |
|shareTicket|String|标记转发对象。| |
|referrerInfo|Object|从另一个小程序打开该小程序时，返回此字段。| |
|entryType|String|页面展现的来源标识，可取的值为: 'user'、'schema'、'sys'，对应代表的意义如下表。|2.10.7|
|appURL| String|展现时的调起协议，仅当entryType值为 schema 时存在。|2.10.7|

**referrerInfo 的结构:**

|属性|类型|说明|
|---- | ---- | ---- |
|appId|String|来源小程序的 appKey。|  
|extraData|Object|来源小程序传过来的数据|  

**entryType 的取值说明:**

|属性值|类型|说明|
|----|----|----|
|user|String|表示通过home前后台切换或解锁屏幕等方式调起。|
|schema|String|表示通过协议调起。|
|sys|String|其它。|

**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/onAppShow.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**

 
* 示例一：在onShow中使用 
<a href="swanide://fragment/43271d765935b79fea07900426f687ed1572851143727" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// app.js
App({
    onShow: function (res) {
        console.log('onShow', res)
        swan.showModal({
            title: 'res',
            content: JSON.stringify(res),
            showCancel: false
        });
    }
});

```

* 示例二：在生命周期的onAppShow中使用 
<a href="swanide://fragment/4efb3ba9fdce332a9d1f323ebb69302d1572851185273" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// app.js
App({
    onLaunch: function () {
        swan.onAppShow(function(res) {
            console.warn('请在真机中进行中进行验证,在工具中点击工具栏的刷新按钮也可模拟onShow触发事件，开发者按照自己的业务逻辑进行监听，被触发时机和App.onShow一致。');
            swan.showModal({
                title: 'res',
                content: JSON.stringify(res),
                showCancel: false
            });
            console.log('scene', res.scene);
            console.log('path', res.path);
            console.log('query', res.query);
            console.log('shareTicket', res.shareTicket);
            console.log('referrerInfo', res.referrerInfo);
            console.log('entryType', res.entryType);
            console.log('appURL', res.appURL);
        });
    }
});
```


<div class="m-doc-custom-examples">
<div class="m-doc-custom-examples-warning">
    <p class="m-doc-custom-examples-title">注意</p><p class="m-doc-custom-examples-text"><ul><li>在解析 query 的时候，基础库会使用decodeURIComponent对query的参数值进行一次解码，该功能将在未来的基础库版本下线，并提前通知开发者下线的基础库版本号；</li><li>如在打开或跳转小程序时传递了 encode 后的值作为参数，为避免发生页面错误，使用时请自行将拿到的值使用decodeURIComponent进行一次decode操作。</li></ul></p>
</div>
</div>
