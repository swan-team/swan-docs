---
title:   App
header: develop
nav: framework
sidebar: app_service_register
---

 


**解释**： App 函数用来注册一个智能小程序。接受一个 Object 作为参数，用以指定智能小程序的生命周期函数等。

**注: App函数必须在 app.js 中被调用一次。该函数在整个小程序中不能被调用多次，否则会出现无法预期的后果。**

**参数**

**Object object**：

|属性  |类型 | 默认值 | 描述 |触发时机|
|---- | ---- | ---- | ---- |---- |
|onLaunch | Function || 生命周期函数 -- 监听小程序的初始化 。| 当小程序初始化完成时，会触发 onLaunch （全局只触发一次）。|
|onShow | Function ||生命周期函数 -- 监听小程序的显示 。| 当小程序初始化，或从后台进入前台显示，会触发 onShow 。|
|onHide | Function || 生命周期函数 -- 监听小程序的隐藏 。| 当小程序从前台进入后台，会触发 onHide。 |
|onError|	Function||错误监听函数。|	小程序发生脚本错误，或者 api 调用失败时触发，会带上错误信息。|
|onPageNotFound|Function||页面不存在监听函数。|	小程序要打开的页面不存在时触发，会带上页面信息回调该函数。|
|其他 | Any || 开发者可以添加任意的函数或者数据到 Object 参数中, 用 this 可以访问。| |

**名词解释:**
前台、后台：当用户点击右上角的关闭，或者按了设备的 Home 键离开智能小程序，智能小程序没有直接销毁，而是进入到了后台；当再次进入智能小程序，又会从后台进入前台。

**注意:**
只有在以下情况小程序才可能会被动销毁，参考[运行机制](http://smartprogram.baidu.com/docs/develop/framework/operating-mechanism/):
- 进入后台超过5分钟；
- 系统资源占用过高；
- 打开小程序数量超过系统支持上限(系统按照小程序被打开的先后顺序进行销毁)。

**示例代码**

```js
// app.js
App({
    onLaunch(options) {
        // Do something initial when launch.
    },
    onShow(options) {
        // Do something when show.
    },
    onHide() {
        // Do something when hide.
    },
    onError(errMsg) {
        console.log(errMsg); // 发生错误时，回调此方法并传递错误信息
    },
    globalData: 'This is global data'
});
```

### onLaunch(Object object)
小程序初始化完成时触发，全局只触发一次。

|字段  |类型  |说明  |
|---- | ---- | ---- |
|scene | String | 打开智能小程序的[场景值](http://smartprogram.baidu.com/docs/data/scene/)<sup>注</sup>，scene值统一由百度小程序场景值管理中心在B端平台统一配置后下发到宿主（例如百度App），调起协议<sup>注</sup> 中会携带相应入口的scene值。|
|path|String|打开小程序的路径。|
|query|Object|打开当前页面路径中的参数。|
|shareTicket|String|标记转发对象。|
|referrerInfo|Object|从另一个小程序打开该小程序时，返回此字段。|
|referrerInfo.appId|String|来源小程序的 appKey。|
|referrerInfo.extraData|Object|	来源小程序传过来的数据。|

**名词解释:**
- 场景值: 智能小程序被打开时，其来源渠道的标识（例如: 从百度搜索结果打开、从百度信息流打开），开发者可以利用该字段统计小程序在什么场景下被打开，[更多场景值](http://smartprogram.baidu.com/docs/data/scene/)；
- 调起协议: 宿主（例如百度App）用于识别一个小程序被打开时的初始化信息（例如: 小程序的appKey、path、query等），由该类信息构成的一个协议。


### onShow(Object object)
小程序启动，或从后台进入前台显示时触发。也可以使用 [swan.onAppShow](https://smartprogram.baidu.com/docs/develop/api/base_app_event/swan-onAppShow/) 绑定监听。

**参数：**与 [swan.onAppShow](https://smartprogram.baidu.com/docs/develop/api/base_app_event/swan-onAppShow/) 一致

### onHide()
小程序从前台进入后台时触发。也可以使用 [swan.onAppHide](https://smartprogram.baidu.com/docs/develop/api/base_app_event/swan-onAppHide/) 绑定监听。

### onError(Object object)
小程序发生脚本错误或 API 调用报错时触发。也可以使用 [swan.onError](https://smartprogram.baidu.com/docs/develop/api/base_app_event/swan-onError/) 绑定监听。

**参数：**与 [swan.onError](https://smartprogram.baidu.com/docs/develop/api/base_app_event/swan-onError/) 一致

### onPageNotFound(Object object)
小程序要打开的页面不存在时触发。也可以使用 [swan.onPageNotFound](https://smartprogram.baidu.com/docs/develop/api/base_app_event/swan-onPageNotFound/) 绑定监听。注意事项请参考 [swan.onPageNotFound](https://smartprogram.baidu.com/docs/develop/api/base_app_event/swan-onPageNotFound/)。

**参数：**与 [swan.onPageNotFound](https://smartprogram.baidu.com/docs/develop/api/base_app_event/swan-onPageNotFound/) 一致

**示例代码**
```js
// app.js
App({
  onPageNotFound(res) {
    // 如果是 tabbar 页面，请使用 swan.switchTab 进行跳转
    swan.redirectTo({
      url: 'path/to/otherPage'
    });
  }
});
```


