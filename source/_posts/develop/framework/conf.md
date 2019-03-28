---
title: 配置
header: develop
nav: framework
sidebar: conf
---

配置
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
