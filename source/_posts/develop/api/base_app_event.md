---
title: 应用级事件
header: develop
nav: api
sidebar: base_app_event
---


## swan.onPageNotFound
> 基础库 3.60.2 开始支持，低版本需做[兼容处理](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)。

**解释：** 监听小程序要打开的页面不存在事件。该事件与 [App.onPageNotFound](https://smartprogram.baidu.com/docs/develop/framework/app_service_register/#App/) 的回调时机一致。

**方法参数：** Function callback
小程序要打开的页面不存在的事件回调函数。

**callback返回参数说明**：

|属性|类型|说明|
|----|----|----|
|path|string|不存在页面的路径|
|query|Object|打开不存在页面的 query 参数|
|isEntryPage|boolean|是否本次启动的首个页面（例如从分享等入口进来，首个页面是开发者配置的分享页面）|

**示例代码**
<a href="swanide://fragment/37ce9a4e5cb1c29e1182b76f561d4fa11561949585690" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// app.js
App({
    onLaunch() {
        swan.onPageNotFound(function(res) {
            console.log(res);
            // 如果将要跳转到的页面属于 tabbar 的某一页面，请使用 swan.switchTab 进行跳转
            // Do something
            // 页面不存在时，默认跳转到首页
            swan.redirectTo({
                url: '/index/index'
            });
        });
    }
});

```

**说明:**
- 开发者可以在回调中进行页面重定向。

## swan.onError
> 基础库 3.60.2 开始支持，低版本需做[兼容处理](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)。

**解释：** 监听小程序错误事件。如脚本错误或`API`调用报错等。该事件与 [App.onError](https://smartprogram.baidu.com/docs/develop/framework/app_service_register/#App/) 的回调时机与参数一致。

**方法参数：** Function callback
小程序错误事件的回调函数。

**callback返回参数说明**：

**Object error**
错误信息，包含堆栈。

**示例代码**
<a href="swanide://fragment/3e041dd08b16620b89b8f130abbf0c3c1561950449427" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// app.js
App({
    onLaunch() {
        swan.onError(function(errMsg) {
            console.log(errMsg);
        });
    };
});
```

## swan.onAppShow
> 基础库 3.60.2 开始支持，低版本需做[兼容处理](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)。

**解释：** 监听小程序切前台事件。该事件与 [App.onShow](https://smartprogram.baidu.com/docs/develop/framework/app_service_register/#App/) 的回调参数一致。

**方法参数：** function callback
小程序切前台事件的回调函数。

**callback返回参数说明**：

**Object res**
返回的对象信息。

|属性  |类型  |说明  |最低版本|
|---- | ---- | ---- |---|
|scene | String | 打开智能小程序的<a href="http://smartprogram.baidu.com/docs/data/scene/">场景值</a> |-|
|path|String|打开小程序的路径。|-|
|query|Object|打开小程序的query。|-|
|shareTicket|String|标记转发对象。|-|
|referrerInfo|Object|从另一个小程序打开该小程序时，返回此字段。|-|
|entryType|String|页面展现的来源标识，可取的值为: 'user'、'schema'、'sys'，对应代表的意义如下表。|2.10.7|
|appURL| String|展现时的调起协议，仅当entryType值为 schema 时存在。|2.10.7|

**referrerInfo 的结构:**

|属性|类型|说明|
|---- | ---- | ---- |
|appId|String|来源小程序的 appKey。|-|
|extraData|Object|来源小程序传过来的数据|-|

**entryType 的取值说明:**

|属性值|类型|说明|
|----|----|----|
|user|String|表示通过home前后台切换或解锁屏幕等方式调起。|
|schema|String|表示通过协议调起。|
|sys|String|其它。|

**示例代码**
<a href="swanide://fragment/b181931dbbdeb7fb557225b70e56e8cc1561948864535" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// app.js
App({
    onLaunch() {
        swan.onAppShow(function(res) {
            console.log(res.scene);
            console.log(res.path);
            console.log(res.query);
        });
    }
});
```


<div class="m-doc-custom-examples">
<div class="m-doc-custom-examples-warning">
    <p class="m-doc-custom-examples-title">注意</p><p class="m-doc-custom-examples-text"><ul><li>在解析 query 的时候，基础库会使用decodeURIComponent对query的参数值进行一次解码，该功能将在未来的基础库版本下线，并提前通知开发者下线的基础库版本号；</li><li>如在打开或跳转小程序时传递了 encode 后的值作为参数，为避免发生页面错误，使用时请自行将拿到的值使用decodeURIComponent进行一次decode操作。</li></ul></p>
</div>
</div>

## swan.onAppHide
> 基础库 3.60.2 开始支持，低版本需做[兼容处理](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)。

**解释：** 监听小程序切后台事件。该事件与 [App.onHide](https://smartprogram.baidu.com/docs/develop/framework/app_service_register/#App/) 的回调时机一致。

**方法参数：** Function callback
小程序切后台事件的回调函数。

**示例代码**
<a href="swanide://fragment/4be4c88950619fc8674d5e7a5de1e9561561957185046" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// app.js
App({
    onLaunch() {
        swan.onAppHide(function() {
            // Do other things
        });
    }
});
```


## swan.offPageNotFound
> 基础库 3.60.2 开始支持，低版本需做[兼容处理](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)。

**解释：** 取消监听小程序要打开的页面不存在事件。

**方法参数：** Function callback | 无
小程序要打开的页面不存在事件的回调函数（swan.onPageNotFound的回调方法引用）；当不传参数时，取消该类全部监听事件。

**示例代码**
<a href="swanide://fragment/89777c33f7b020b4a5db8eb45906fbbb1561957127870" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// app.js
App({
    onLaunch() {
        swan.onPageNotFound(function(res) {
            console.log(res);
        });
    },
    // 在App onShow后约3秒取消事件监听（仅做功能示例，开发者可根据业务逻辑选择取消监听时机）
    onShow() {
        setTimeout(function() {
            swan.offPageNotFound();
        }, 3000);
    }
});
```

## swan.offError
> 基础库 3.60.2 开始支持，低版本需做[兼容处理](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)。

**解释：** 取消监听小程序错误事件。

**方法参数：** 无

**示例代码**
<a href="swanide://fragment/f00758365371a1065c5b63d0ea89272e1561957033278" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// app.js
App({
    onLaunch() {
        swan.onError(function(errMsg) {
            console.log(errMsg);
        });
    },
    // 在App onShow后约3秒取消事件监听（仅做功能示例，开发者可根据业务逻辑选择取消监听时机）  
    onShow() {
        setTimeout(function() {
            swan.offError();
        }, 3000);
    }
});
```

## swan.offAppShow
> 基础库 3.60.2 开始支持，低版本需做[兼容处理](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)。

**解释：** 取消监听小程序切前台事件。

**方法参数：** 无

**示例代码**
<a href="swanide://fragment/d4ed29475758d6b24721cb0666a7c1411561956949062" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// app.js
App({
    onLaunch() {
        swan.onAppShow(function(res) {
            console.log(res.scene);
            console.log(res.path);
            console.log(res.query);
        });
    },
    // 在App onShow后约3秒取消事件监听（仅做功能示例，开发者可根据业务逻辑选择取消监听时机） 
    onShow() {
        setTimeout(function() {
            swan.offAppShow();
        }, 3000);
    }
});
```

## swan.offAppHide
> 基础库 3.60.2 开始支持，低版本需做[兼容处理](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)。

**解释：** 取消监听小程序切后台事件。

**方法参数：** 无

**示例代码**
<a href="swanide://fragment/93ae938df0cc43285ca8eecfa0071d261561956898192" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// app.js
App({
    onLaunch() {
        swan.onAppHide(function(res) {
            console.log(res);
        });
    },
    // 在App onShow后约3秒取消事件监听（仅做功能示例，开发者可根据业务逻辑选择取消监听时机） 
    onShow() {
        setTimeout(function() {
            swan.offAppHide();
        }, 3000);
    }
});
```
