---
title: 全局配置
header: develop
nav: tutorial
sidebar: process
---

##  配置 app.json 文件

可以通过配置 app.json 文件，设置 SWAN 的界面、路径、多 TAB 等。

**app.json 配置项列表如下**

|属性|类型|必填|描述|
|----|----|----|----|
|pages|String Array|是|设置页面路径|
|window|Object|否|设置页面展现|
|preloadRule |Object |否| 分包预下载规则 |
|tabBar|Object|	否|	底部 tab 栏的表现|
|subpackages|Object Array|	否|	分包结构配置|

<notice>示例： </notice>

```json
{
	"pages": [
		"pages/index/index",
		"pages/detail/detail"
	],
	"window": {
		"navigationBarTitleText": "Demo"
	},
	 "tabBar": {
		"list": [{
		"pagePath": "pages/index/index",
		"text": "首页"
	}, {
		"pagePath": "pages/detail/detail",
		"text": "详情"
		}]
  }
}
```


<br/>
### pages

pages 接受一个数组，每一项都是一个字符串，指定 SWAN App 都有哪些页面。每一项代表页面的 [路径 + 文件名]，数组第一项代表 SWAN 初始页面。

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

```json
{
	"pages":[
		"pages/index/index",
		"pages/detail/detail"
	]
}
```
<br>
### window

用于设置 SWAN 的状态栏、导航条、标题、窗口背景色。

|属性|类型|默认值|描述|最低版本|
|----|----|----|----|----|
|navigationBarBackgroundColor|HexColor|#000000|导航栏背景颜色，如 "#000000"|-|
|navigationBarTextStyle|String|white|导航栏标题颜色，目前仅支持 black/white|-|
|navigationBarTitleText|String|-|导航栏标题文字内容|-|
|navigationStyle|String|default|导航栏样式，仅支持以下值：default(默认样式) custom(自定义导航栏)，只保留右上角胶囊按钮|<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">百度 App版本11.1.0</a>|
|backgroundColor|HexColor|#ffffff|背景颜色|-|
|backgroundTextStyle|String|dark|下拉背景字体、loading 图的样式，仅支持 dark/light|-|
|enablePullDownRefresh|Boolean|false|是否开启下拉刷新|-|
|onReachBottomDistance|Number|50|页面上拉触底事件触发时距页面底部距离，单位为 px|-|

#### navigationStyle

* 无其它特殊说明，请使用`canIUse`或者`SWAN基础库版本`进行兼容判断。
* navigationStyle 全局配置`Android`和`iOS`从百度 App版本 11.1.0 开始支持, 但子页面配置支持情况`Android`从`百度 App版本11.1`开始支持，`iOS`从`百度 App版本11.2`开始支持, 做低版本兼容时，通过 <a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/#getSystemInfo">swan.getSystemInfo</a> 或者 <a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/#getSystemInfoSync">swan.getSystemInfoSync</a> 获取百度 App 版本号进行兼容判断，具体见下表；


**navigationStyle配置**

|导航栏设置|iOS|Android|WebView组件页面|备注|
|---|---|---|---|---|
|百度 App定义的顶bar|无版本限制|无版本限制|无版本限制|-|
|导航栏全局透明设置|百度 App版本>=11.1|百度 App版本>=11.1|不生效|-|
|导航栏子页面透明设置|百度 App版本>=11.2|百度 App版本>=11.1|不生效|每个page的json文件可以单独配置navigationStyle|

<div class="m-doc-custom-examples">
<div class="m-doc-custom-examples-warning">
 <p class="m-doc-custom-examples-title">适配提示</p><p class="m-doc-custom-examples-text">智能小程序返回按钮Y位置 = 状态栏高度（statusBarHeight，可通过 <a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/#swan-getSystemInfo/">swan.getSystemInfo</a> 或者 <a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/#swan-getSystemInfoSync/">swan.getSystemInfoSync</a> 获取）+ 0.5 * 导航栏高度（navigationBarHeight，可通过  <a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/#swan-getSystemInfo/">swan.getSystemInfo</a>或者 <a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/#swan-getSystemInfoSync/">swan.getSystemInfoSync</a> 获取）</p>
</div>
</div>

<notice>示例： </notice>

```json
{
	"window":{
		"navigationBarBackgroundColor": "#ffffff",
		"navigationBarTextStyle": "black",
		"navigationBarTitleText": "swan接口功能演示",
		"backgroundColor": "#eeeeee",
		"backgroundTextStyle": "light"
	}
}
```
<br>
### tabBar
用于设置客户端底部的 tab 栏：可通过 tabBar 设置 tab 的颜色、个数、位置、背景色等内容。

|属性|类型|必填|描述|
|----|----|----|----|
|backgroundColor|HexColor|是|tab 的背景色。|
|borderStyle|String|否|tabBar 边框颜色。仅支持 black/white 两种边框颜色，默认值为 black 。|
|color|HexColor|是|tab 上文字的默认颜色。|
|list|Array|是|tab 的列表，列表个数 2~5 个。 <br>list 接受一个数组，tab 按数组的顺序排序，每个项都是一个对象，其属性值如下：<br>-  pagePath：已在 pages 中定义的页面路径；类型：String；必填项。<br>-  text：tab上显示的文字信息；类型：String；必填项。<br>-  iconPath：图片路径，icon 大小限制为 40kb，建议尺寸为 78px*78px，不支持网络图片；类型：String；非必填项。<br>-  selectedIconPath：选中时的图片路径，icon 规格同上；类型：String；非必填项。<br>- 当 position 为 top 时，不显示 icon 。|
|selectedColor|HexColor|是|tab 上的文字选中时的颜色。|

## 配置 app.js 文件

app.js 中存放全局的 JavaScript 逻辑。

<notice>示例： </notice>
```javascript
App({
	onLaunch: function () {
		console.log('SWAN launch');
	},
	onShow: function () {
		console.log('SWAN展现');
	},
	onHide: function () {
		console.log('SWAN当前处于后台');
	},
	onError: function () {
		console.log('SWAN发生错误');
	},
	globalData: 'SWAN'
});
```
