---
title: 配置 app.json 文件
header: develop
nav: tutorial
sidebar: process
---



可以通过配置 app.json 文件，设置 SWAN 的界面、路径、多 TAB 等。

**app.json 配置项列表如下**

|属性|类型|必填|描述|
|----|----|----|----|
|[pages](#pages)|Array.&lt; string&gt; |是|设置页面路径|
|[window](#window)|Object|否|设置页面展现|
|[preloadRule](https://smartprogram.baidu.com/docs/develop/framework/subpackages/#分包预下载规则) |Object |否| 分包预下载规则 |
|[tabBar](#tabBar)|Object|	否|	底部 tab 栏的表现|
|[requiredBackgroundModes](#requiredBackgroundModes)|string[]|否|需要在后台使用的能力，如「音乐播放」|
|[subPackages](https://smartprogram.baidu.com/docs/develop/framework/subpackages/#普通分包)| Array.&lt; object&gt; |否|	分包结构配置|
|[prefetches](#prefetches)|Object Array|	否| 预请求的配置列表|
|[networkTimeout](#networkTimeout)|Object|否|网络超时|


**代码示例**

<a href="swanide://fragment/5ac6441402c040f2c37722872ee29c1e1576047748031" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>
 

```json
{
    "pages": [
        "component/component",
        "api/api"
    ],
    "subPackages": [
        {
            "root": "subpackage",
            "pages": [
                "pages/subpageone/subpageone",
                "pages/subpagetwo/subpagetwo"
            ]
        }
    ],
    "window": {
        "navigationBarTitleText": "Demo",
        "navigationBarBackgroundColor": "#000000",
        "navigationBarTextStyle": "white",
        "navigationStyle": "default",
        "backgroundColor": "#ffffff",
        "backgroundTextStyle": "dark",
        "enablePullDownRefresh": "true",
        "onReachBottomDistance":"50"
    },
    "preloadRule": 
    {
       "pages/index": {
            "network": "all",
            "packages": ["subpackage"]
        }
    },
    "tabBar": {
        "list": [
            {
                "pagePath": "component/component",
                "text": "首页",
                "iconPath":"/images/API_normal.png",
                "selectedIconPath":"/images/API_selected.png"
	        },
            {
                "pagePath": "api/api",
                "text": "详情",
                "iconPath":"/images/component_normal.png",
                "selectedIconPath":"/images/component_selected.png"
            }
        ],
        "backgroundColor" : "#ffffff",
        "borderStyle": "white",
        "color": "#000",
        "selectedColor": "#6495ED"
    },
    "requiredBackgroundModes": ["audio"],
    "prefetches": ["https://m.baidu.com", "https://m.baidu.com?query=${query}"],
    "networkTimeout": {
        "request": 30000,
        "connectSocket": 10000,
        "uploadFile": 10000,
        "downloadFile": 10000
    }
}
```
<br/>

### pages

pages 接受一个数组，每一项都是一个字符串，指定 SWAN App 都有哪些页面。每一项代表页面的[路径 + 文件名]，数组第一项代表 SWAN 初始页面。

SWAN 中新增或减少页面的话，需要在 pages 中进行配置。

配置项中不需要加文件后缀名， SWAN 会自动解析。

如，开发目录为：

```
├── app.js
├── app.json
├── app.css
├── project.config.json
└──  pages
    └── index
        ├── index.swan
        ├── index.css
        ├── index.js
        └── index.json
    └── detail
        ├── detail.swan
        ├── detail.css
        ├── detail.js
        └── detail.json
```

则需要在 app.json 中书写

**代码示例**

```json
{
    "pages":[
	"pages/index/index",
	"pages/detail/detail"
    ]
}
```

**提示**：
* 开发者工具在app.json的pages中填写页面路径可自动生成文件夹。

<br>

### window

用于设置 SWAN 的状态栏、导航条、标题、窗口背景色。

|属性|类型|默认值|描述|最低版本|
|----|----|----|----|----|
|navigationBarBackgroundColor|HexColor|#000000|导航栏背景颜色，如 "#000000"| |
|navigationBarTextStyle|String|white|导航栏标题颜色，目前有效值 black/white| |
|navigationBarTitleText|String| |导航栏标题文字内容| |
|navigationStyle|String|default|导航栏样式，有效值：default(默认样式) custom(自定义导航栏)，只保留右上角胶囊按钮|2.10.34|
|backgroundColor|HexColor|#ffffff|背景颜色| |
|backgroundTextStyle|String|dark|下拉背景字体、loading 图的样式，有效值 dark/light| |
|enablePullDownRefresh|Boolean|false|是否开启下拉刷新| |
|onReachBottomDistance|Number|50|页面上拉触底事件触发时距页面底部距离，单位为 px| | |


**注意**：
* navigationStyle 全局配置`Android`和`iOS`从基础库版本 2.10.34 开始支持, 但子页面配置支持情况`Android`从`基础库版本 2.10.34`开始支持，`iOS`从`基础库 3.0.39`开始支持, 做低版本兼容时，通过 <a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-getSystemInfo/#getSystemInfo">swan.getSystemInfo</a> 或者 <a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-getSystemInfo/#getSystemInfoSync">swan.getSystemInfoSync</a> 获取百度 App版本号进行兼容判断，具体见下表；
* 无其它特殊说明，请使用`canIUse`或者`SWAN基础库版本`进行兼容判断。

**navigationStyle配置**


|顶bar设置|iOS|Android|WebView组件页面|备注|
|---|---|---|---|---|
|百度 App定义的顶bar|无版本限制|无版本限制|无版本限制| |
|顶bar全局透明设置|基础库版本 2.10.34|基础库版本 2.10.34|不生效| |
|顶bar子页面透明设置|基础库版本 2.10.34|基础库版本 2.10.34|不生效|每个page的json文件可以单独配置navigationStyle|

<div class="m-doc-custom-examples">
<div class="m-doc-custom-examples-warning">
 <p class="m-doc-custom-examples-title">适配提示</p><p class="m-doc-custom-examples-text">原生顶bar高度=状态栏高度（statusBarHeight）+顶部导航栏高度（navigationBarHeight）；可通过 [swan.getSystemInfo](https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-getSystemInfo/) 或者 [swan.getSystemInfoSync](https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-getSystemInfoSync/) 获取。</p>
</div>
</div>

**代码示例**

```json
{
    "window": {
	"navigationBarBackgroundColor": "#ffffff",
	"navigationBarTextStyle": "black",
	"navigationBarTitleText": "swan接口功能演示",
	"backgroundColor": "#eeeeee",
	"backgroundTextStyle": "light"
    }
}
```
<br>

**代码示例 - 错误写法**

json文件看起来同 JavaScript 的对象表达方式十分相似，但是有所不同。

JSON的Key必须包裹在一个双引号中，在实践中，编写 JSON 的时候，忘了给 Key 值加双引号或者是把双引号写成单引号是常见错误。
```json
{
    window: {
	"navigationBarBackgroundColor": "#ffffff",
	"navigationBarTextStyle": "black",
	"navigationBarTitleText": "swan接口功能演示",
	"backgroundColor": "#eeeeee",
	"backgroundTextStyle": "light"
    }
}
```

### tabBar

用于设置客户端底部的tab栏：可通过tabBar设置tab的颜色、个数、位置、背景色等内容。

|属性|类型|必填|描述|
|----|----|----|----|
|backgroundColor|HexColor|是|tab 的背景色。|
|borderStyle|String|否|tabBar 边框颜色。有效值 black/white 两种边框颜色，默认值为 black 。|
|color|HexColor|是|tab 上文字的默认颜色。|
|list|Array|是|tab 的列表，列表个数2~5个。 <br>list 接受一个数组，tab 按数组的顺序排序，每个项都是一个对象，其属性值如下：<br>-  pagePath：已在 pages 中定义的页面路径；类型：String；必填项。<br>-  text：tab上显示的文字信息；类型：String；必填项。<br>-  iconPath：图片路径，icon 大小限制为40kb，建议尺寸为 78px*78px，不支持网络图片；类型：String；非必填项。<br>-  selectedIconPath：选中时的图片路径，icon 规格同上；类型：String；非必填项。|
|selectedColor|HexColor|是|tab 上的文字选中时的颜色。|

**代码示例**

<a href="swanide://fragment/22c464efe88757d194d6af37db126ddd1572882792148" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```json
{
    "tabBar": {
        "list": [
            {
                "pagePath": "pages/index/index",
                "text": "首页",
                "iconPath":"/images/API_normal.png",
                "selectedIconPath":"/images/API_selected.png"
	    },
            {
                "pagePath": "pages/detail/detail",
                "text": "详情",
                "iconPath":"/images/component_normal.png",
                "selectedIconPath":"/images/component_selected.png"
            }
        ],
        "backgroundColor" : "#ffffff",
        "borderStyle": "white",
        "color": "#000",
        "selectedColor": "#6495ED"
    }
}
```

### requiredBackgroundModes

> 基础库 3.50.36 及以上版本支持

申明需要后台运行的能力，类型为数组。目前支持以下项目：

audio: 后台音乐播放

**代码示例**

```json
{
    "pages": ["pages/index/index"],
    "requiredBackgroundModes": ["audio"]
}
```
注：在此处申明了后台运行的接口，开发版和体验版上可以直接生效，正式版还需通过审核。

### prefetches

用于设置预请求的所有url的列表，该部分URL，会在进入小程序后自动发起请求(优于开发者代码加载)。当开发者再次发起request请求时可以增加cache参数，如果配置的prefetch请求已返回，则会直接返回请求结果，如果配置的prefetch请求还未返回，则当次request会继续之前未发送完成的request请求。

**代码示例**

<a href="swanide://fragment/1b50c5342babcda03f71d3d559bca6fc1574152614328" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>
```json
// app.json
{
    prefetches: [
        'https://m.baidu.com'
    ]
}
```
```javascript
swan.request({
    url: 'https://m.baidu.com',
    usePrefetchCache: true,
    success: res => {
        console.log('缓存结果:', res);
    }
});
```
<notice>注意： </notice>
配置项中可以增加变量，且该变量只能来自于打开小程序的调起协议中的query。如：
```json
// app.json
{
    prefetches: [
        'https://m.baidu.com?id=${id}'
    ]
}
```
打开小程序的协议中，也需要携带此参数：
```javascript
pages/index/index?id=123
```
这样，再次使用request发起请求时，就可以利用上prefetches中的配置。

### networkTimeout

各类网络请求的超时时间。

|属性|	类型|必填|	默认值|	说明|
|---|---|---|---|---|
|request|	number|	否|	60000|	swan.request 的超时时间，单位：毫秒。|
|connectSocket|	number|	否|	60000|	swan.connectSocket 的超时时间，单位：毫秒。|
|uploadFile	|number|	否|	60000|	swan.uploadFile 的超时时间，单位：毫秒。|
|downloadFile|	number|	否|	60000	|swan.downloadFile 的超时时间，单位：毫秒。|

