---
title: 应用级事件
header: develop
nav: api
sidebar: base_app_event
---



## swan.onPageNotFound
> 基础库 3.60.2 开始支持，低版本需做[兼容处理](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)。

监听小程序要打开的页面不存在事件。该事件与 [App.onPageNotFound](https://smartprogram.baidu.com/docs/develop/framework/app_service_register/#App/) 的回调时机一致。

**方法参数**

**function callback**
小程序要打开的页面不存在事件的回调函数。

**回调方法参数**

**Object res**

|属性|类型|说明|
|----|----|----|
|path|string|不存在页面的路径|
|query|Object|打开不存在页面的 query 参数|
|isEntryPage|boolean|是否本次启动的首个页面（例如从分享等入口进来，首个页面是开发者配置的分享页面）|

**注意:**
- 开发者可以在回调中进行页面重定向。


## swan.onError
> 基础库 3.60.2 开始支持，低版本需做[兼容处理](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)。

监听小程序错误事件。如脚本错误或 API 调用报错等。该事件与 [App.onError](https://smartprogram.baidu.com/docs/develop/framework/app_service_register/#App/) 的回调时机与参数一致。

**方法参数**

**function callback**
小程序错误事件的回调函数。

**回调方法参数**

**Object error**
错误信息，包含堆栈。

## swan.onAppShow
> 基础库 3.60.2 开始支持，低版本需做[兼容处理](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)。

监听小程序切前台事件。该事件与 [App.onShow](https://smartprogram.baidu.com/docs/develop/framework/app_service_register/#App/) 的回调参数一致。

**方法参数**

**function callback**
小程序切前台事件的回调函数。

**回调方法参数**

**Object res**

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


<div class="m-doc-custom-examples">
<div class="m-doc-custom-examples-warning">
    <p class="m-doc-custom-examples-title">注意</p><p class="m-doc-custom-examples-text"><ul><li>在解析 query 的时候，基础库会使用decodeURIComponent对query的参数值进行一次解码，该功能将在未来的基础库版本下线，并通知开发者下线的基础库版本号</li><li>如在打开或跳转小程序时传递了 encode 后的值作为参数，为避免发生页面错误，使用时请自行将拿到的值使用decodeURIComponent进行一次decode操作。</li></ul></p>
</div>
</div>

## swan.onAppHide
> 基础库 3.60.2 开始支持，低版本需做[兼容处理](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)。

监听小程序切后台事件。该事件与 [App.onHide](https://smartprogram.baidu.com/docs/develop/framework/app_service_register/#App/) 的回调时机一致。

**参数**

**function callback**
小程序切后台事件的回调函数。


## swan.onAppoffPageNotFoundHide
> 基础库 3.60.2 开始支持，低版本需做[兼容处理](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)。

取消监听小程序要打开的页面不存在事件。

**参数**

**function callback**
小程序要打开的页面不存在事件的回调函数。

## swan.offError
> 基础库 3.60.2 开始支持，低版本需做[兼容处理](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)。

取消监听小程序错误事件。

**参数**

**function callback**
小程序错误事件的回调函数。


## swan.offAppShow
> 基础库 3.60.2 开始支持，低版本需做[兼容处理](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)。

取消监听小程序切前台事件。

参数

**参数**

**function callback**
小程序切前台事件的回调函数。


## swan.offAppShow
> 基础库 3.60.2 开始支持，低版本需做[兼容处理](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)。

取消监听小程序切后台事件。

参数

**参数**

**function callback**
小程序切后台事件的回调函数。



