---
title: 打开小程序
header: develop
nav: function
sidebar: opensmartprogram
---

我们除了为小程序提供搜索、信息流等流量入口，还为小程序开发者提供了自主开发小程序入口的能力，如：扫码打开小程序，在H5中打开手百小程序，在小程序中打开另一小程序。开发者可以利用这些能力自主开发小程序入口，提升小程序流量。
## 1.打开小程序原理
**下面的内容可以稍作了解，我们提供了封装好的[调起能力](#开发)，可以根据不同场景直接调用**
### 1.1 URL Scheme
URL Scheme是一种App间的调起协议。App内部注册协议后，当用户在浏览器或其他App内点击相应的scheme链接，就能够调起App并打开App内的相关页面。
下面是“智能小程序示例“小程序的调起scheme：
![图片](http://agroup-bos.cdn.bcebos.com/7dc4a455dce4433f24219aaf5eda4e0d87b72c7a)

 - baiduboxapp://
    - scheme协议。这部分表示使用百度App处理这个url。使用百度App打开小程序时，这部分保持不变。
 - swan/{{appKey}}
   - swan：小程序标识，保持不变。用来通知百度App调起小程序框架。
   - appKey：想要打开的小程序appKey
 - page+query
   - page: 小程序打开的页面路径。页面路径可以在小程序代码app.json文件的pages属性中取到，常见形式为“pages/index/index“。page为空或不正确，则打开首页。
   - query: 小程序页面路径参数。

**一般情况下开发者不需要手动拼写scheme**，可以通过[调起协议生成工具](https://smartprogram.baidu.com/docs/html/qr-code/index.html#/)快速生成scheme，使用方法参考[scheme生成工具](#scheme生成工具)
### 1.2 小程序调起机制
1. 在H5中，当用户点击这样的url时，移动设备会识别scheme协议，打开百度App，并将url的source传递给百度App。
2. 当百度App接受到source后，识别小程序标识，调起小程序框架。
3. 小程序框架通过appKey加载小程序代码，打开指定小程序。
4. 小程序根据path和query渲染具体页面，加载页面内容。
![图片](http://agroup-bos.cdn.bcebos.com/9b81dff2848245784ba674d995ad61e5747488f0)

### 1.3 统计

scheme中小程序的相关参数，开发者可以在小程序运行时[App()](http://smartprogram.baidu.com/docs/develop/framework/app_service_register/#App/)生命周期函数的`onLaunch`和`onShow`中取得。开发者可以利用这些参数，进行小程序调起来源的相关统计。
在onShow中获取调起相关参数的代码示例：

```
App({
    onShow: function (e) {
        console.log('path:', e.path); // 小程序path
        console.log('query:', e.query); // 小程序query
        console.log('scene:', e.scene); // 场景值
    },
})
```
其中path和query对应scheme中的path和query。
场景值由百度各流量入口自动添加，标识小程序打开来源。各流量入口的来源统计可以在开发者平台——数据统计——来源统计中查看。如果想手工统计场景值，请参考[场景值](https://smartprogram.baidu.com/docs/data/scene/)文档了解场景值对应的入口场景。
如有其他手工统计需求，如：UV、PV等，可以参考[手工埋点统计](https://smartprogram.baidu.com/docs/data/performance-point/)。
## 2. scheme生成工具
开发者在商业投放、上线前验证等场景下可能需要获取小程序调起协议（scheme），这时可以通过[调起协议生成工具](https://smartprogram.baidu.com/docs/html/qr-code/index.html#/)快速生成小程序scheme和二维码。
生成工具的参数填写示例如下：
![图片](http://agroup-bos.cdn.bcebos.com/249225b9b9386bcbe5b42923e5a2d0572b4db56b)
其中需要填写的参数，与scheme的对应关系如下：

|参数名 |对应scheme参数| 参数含义 |
|---|---|---|
| App Key |appKey| 小程序appKey |
| 启动页面 |page | 打开的小程序页面路径 |
| 启动参数 |query | 小程序路径的参数|
| 进入场景 |from | [场景值](https://smartprogram.baidu.com/docs/data/scene/)  |

## 3. 调起功能开发
根据小程序打开场景的不同，我们根据不同场景，封装了两种能力帮助开发者为自己的小程序添加入口，分别为：H5打开小程序、小程序打开小程序。
使用这两种能力开发调起功能，只需要配置必需的小程序参数，不需要开发者拼接scheme。
### 3.1 H5打开小程序
如果开发者有自己的H5页面，在H5中想要打开小程序时，可以使用我们提供的H5通用调起SDK——swanInvoke。
swanInvoke功能：

 - 自动拼接scheme
 - 判断浏览器和系统环境，选择最佳的方法调用scheme，打开小程序。
 - 同时支持百度App端内端外跳转
 - 如果跳转失败，引导用户以其他方式打开
 
#### 引用
像其他javascript库一样，在html中用script标签引入。
```javascript
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <!-- 引入 调起sdk 文件 -->
	<script type="text/javascript" src="https://b.bdstatic.com/searchbox/icms/searchbox/js/swanInvoke.js?v=2019-06-04-13"></script>
</head>
</html>
```
【注意】引用以上 js 代码的v参数值的格式必须是2019-06-04-13（精确到小时级别），否则可能出现缓存更新不及时的问题，且尽量使用 server 端时间。

#### 调起方法
在绑定事件中调用swanInvoke方法触发调起功能。
```
<body>
	<button id='btn'>调起</button>
	<script type="text/javascript">
	document.getElementById('btn').addEventListener('click', function () {
        window.swanInvoke({
	        appKey: '4fecoAqgCIUtzIyA4FAPgoyrc4oUc25c',
	        path: 'pages/view/view',
	        query: {
		        id:1,
		        type: 'a'
	        }
	    });
    });
</script>
</body>
```
**【注意】由于原生能力限制，在某些环境下，scheme调起必须由用户行为触发。请尽量绑定用户事件触发swanInvoke方法**
#### swanInvoke()方法参数说明

|参数名 | 类型 | 必填 | 默认值 | 说明 | 
|---|---|---|---|---|
| appKey | String | 是 | - | 要打开的小程序App Key | 
| path | String | 否 | - | 要打开的小程序页面的路径 | 
| query | Object | 否 | - | 给小程序传递的参数 | 
| failUrl | String | 否 | 默认的调起中间页 | 调起小程序失败后H5跳转页面 |
| timeout | Number | 否 | 200 | 非百度app内打开H5页面调起小程序，跳转到failUrl的延时 | 
这里的appKey、path、query，对应scheme中的同名参数（scheme参数请参考[URL Scheme](#url-scheme)）。
【注意】swanInvoke方法的query可以填写Object类型，不需要拼接成类似“aa=1&bb=2“的字符串形式。具体形式参考代码示例。
#### 调起失败
如果用户没有安装百度App，或由于某些浏览器或App禁止跳转到其他App，会出现调起失败的情况。调起失败默认跳转到我们提供的中间页，引导用户用其他方式跳转小程序。如果想要自己设置调起失败跳转页面，可以配置failUrl参数，代码示例如下：

```
window.swanInvoke({
    appKey: '4fecoAqgCIUtzIyA4FAPgoyrc4oUc25c', 
    path: 'pages/view/view',
    failUrl: 'https://www.baidu.com' // 调起失败跳转的页面
});
```

### 3.2 小程序打开小程序
在小程序中打开另一个小程序可以通过组件或api的方式。
#### 组件
在小程序中使用组件打开另一个小程序，请参考[navigator组件](https://smartprogram.baidu.com/docs/develop/component/nav/#navigator/)中target="miniProgram"的使用方法。
#### api
在小程序中使用api打开另一个小程序，请参考[swan.navigateToSmartProgram](https://smartprogram.baidu.com/docs/develop/api/open_smartprogram/#swan-navigateToSmartProgram/)

### 3.3 小程序来源统计
使用3.1、3.2两种方法调起小程序，都能将参数带入小程序的生命周期。
开发者想要进行自定义场景下的来源统计，可以在query中添加自定义参数，并在小程序生命周期中手工埋点统计。
在不同能力中，参数名称略有区分：

| H5打开小程序配置参数  | 小程序打开小程序配置参数 | 传入onShow的参数|
|---|---|---|
| appKey | app-id | - |
|  path  | path | path |
|  query | extra-data | query |
如何在生命周期```onLaunch```和```onShow```中取得参数，参考[统计](#统计)。