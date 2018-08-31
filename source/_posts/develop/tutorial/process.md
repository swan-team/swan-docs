---
title: 启动流程与能力
header: develop
nav: tutorial
sidebar: process
---
配置界面、路径
-----

可以通过配置 app.json 文件，设置 SWAN 的界面、路径、多 TAB 等。

**app.json 配置项列表如下**

|属性|类型|必填|描述|
|----|----|----|----|
|pages|{String, Array}|是|设置页面路径|
|window|Object|否|设置页面展现|

<notice>示例： </notice>

```json
{
	"pages": [
		"pages/index/index",
		"pages/detail/detail"
	],
	"window": {
		"navigationBarTitleText": "Demo"
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
pages/

	pages/index/index.swan

	pages/index/index.css

	pages/index/index.js

	pages/detail/detail.swan

	pages/detail/detail.css

	pages/detail/detail.js

app.js

app.json

app.css
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

|属性|类型|必填|描述|
|----|----|----|----|
|navigationBarBackgroundColor|HexColor|#000000|导航栏背景颜色，如 "#000000"|
|navigationBarTextStyle|String|white|导航栏标题颜色，目前仅支持 black/white|
|navigationBarTitleText|String||导航栏标题文字内容|
|backgroundColor|HexColor|#ffffff|背景颜色|
|backgroundTextStyle|String|dark|下拉背景字体、loading 图的样式，仅支持 dark/light|
|enablePullDownRefresh|Boolean|false|是否开启下拉刷新|
|onReachBottomDistance|Number|50|页面上拉触底事件触发时距页面底部距离，单位为 px|

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
用于设置客户端底部的tab栏：可通过tabBar设置tab的颜色、个数、位置、背景色等内容。

|属性|类型|必填|描述|
|----|----|----|----|
|backgroundColor|HexColor|是|tab 的背景色。|
|borderStyle|String|否|tabBar 边框颜色。仅支持 black/white 两种边框颜色，默认值为 black 。|
|color|HexColor|是|tab 上文字的默认颜色。|
|position|String|否|tabBar 的位置。 仅支持 bottom/top 两种位置设置，默认值为 bottom 。|
|list|Array|是|tab 的列表，列表个数2~5个。 <br>list 接受一个数组，tab 按数组的顺序排序，每个项都是一个对象，其属性值如下：<br>-  pagePath：已在 pages 中定义的页面路径；类型：String；必填项。<br>-  text：tab上显示的文字信息；类型：String；必填项。<br>-  iconPath：图片路径，icon 大小限制为40kb，建议尺寸为 78px*78px，不支持网络图片；类型：String；非必填项。<br>-  selectedIconPath：选中时的图片路径，icon 规格同上；类型：String；非必填项。<br>- 当 postion 为 top 时，不显示 icon 。|
|selectedColor|HexColor|是|tab 上的文字选中时的颜色。|

配置全局数据
-----
app.js 中存放全局的 JS 逻辑。

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

SWAN 生命周期
-----
|属性|类型|描述|触发时机|
|----|----|----|--------|
|onLaunch|Function|SWAN 初始化的生命周期函数|当 SWAN App 初始化完成时，会触发 onLaunch（全局只触发一次）|
|onShow|Function| SWAN App 展示时调用的生命周期函数|SWAN App 从后台进入前台，触发 onShow|
|onHide|Function| SWAN App 隐藏时调用的生命周期函数|SWAN App 从前台进入后台，触发 onHide|
|onLoad|Function| 监听页面加载的生命周期函数|SWAN App 页面加载完成，触发 onLoad|
|onReady|Function| 监听页面初次渲染完成的生命周期函数|SWAN App 页面渲染完成，触发 onReady|
|onUnload|Function| 监听页面卸载的生命周期函数|页面卸载，触发 onUnload|
|onError|Function|错误监听函数|当 SWAN App 发生错误时，会触发|
