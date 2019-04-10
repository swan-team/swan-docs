---
title: 页面开发
header: develop
nav: tutorial
sidebar: dev
---


## 开发 .swan 文件

这部分是每个智能小程序页面的展现模板，类似于 Web 开发中的 HTML ，SWAN 模板中使用的标签均为 SWAN 组件规定的标签。


```xml
<view s-for="item in items" class="single-item" bind:tap="oneItemClick" bind:touchstart="oneItemTouchStart" bind:touchmove="oneItemTouchmove" bind:touchcancel="oneItemTouchcancel" bind:touchend="oneItemTouchEnd">
	<image src="{{item.imgsrc}}" class="single-img"></image>
	<view class="single-text-area">
		<text class="single-title">
			{{item.title}}
		</text>
		<view s-if="{{item.tags}}" class="tag-area">
		<text s-for="tag in item.tags" class="{{tag.className}}">
			{{tag.content}}
		</text>
		</view>
	</view>
</view>
<view class="view-more" bind:tap="loadMore">
	<text>点击加载更多</text>
</view>

```
<br/>
### 基础数据绑定

```xml
<!-- xxx.swan -->
<view>
	Hello My {{ name }}
</view>
```

```javascript
// xxx.js
Page({
	data: {
		name: 'SWAN'
	}
});
```

#### 循环

开发者可以通过在元素上添加`s-for`指令，来渲染一个列表。

**示例**：

```xml
<view>
	<view s-for="p in persons">
		{{p.name}}
	</view>
</view>
```
```javascript
Page({
	data: {
		persons: [
			{name: 'superman'},
			{name: 'spiderman'}
		]
	}
});
```

#### 条件

开发者可以通过在元素上添加`s-if`指令，来在视图层进行逻辑判断：
**示例**：
```xml
<view s-if="is4G">4G</view>
<view s-elif="isWifi">Wifi</view>
<view s-else>Other</view>
```

```javascript
Page({
	data: {
		is4G: true,
		isWifi: false
	}
});
```
<br/>
### 事件

#### 事件处理

开发者可以使用`bind: + 事件名`来进行事件绑定

```xml
<view class="view-more" bind:tap="loadMore">
	点击加载更多
</view>
```

```javascript
Page({
	loadMore: function () {
		console.log('加载更多被点击');
	}
});
```
目前支持的事件类型有：

|类型|触发条件|
|---|---|
|touchstart|手指触摸开始|
|touchmove|手指触摸后进行移动|
|touchend|手指触摸结束|
|touchcancel|手指触摸动作被打断，如来电提醒等|
|tap|手指触摸后马上离开动作|

#### 事件对象

当开发者绑定方法到事件，事件触发时，SWAN 会给触发的方法传递事件对象，事件对象因事件不同而不同，目前基础的事件对象结构为：

|属性|类型|说明|
|----|----|----|
|type|String|事件类型|
|currentTarget|Object|事件触发的属性集合|

#### dataset

开发者可以在组件中自定义数据，并在事件发生时，由 SWAN 所在事件对象中，传递给绑定函数。

示例代码：

```xml
<view data-swan="1" bind:tap="viewtap">dataset-test</view>
```

```javascript
Page({
	viewtap: function (event) {
		console.log('value is:', event.currentTarget.dataset.swan);// 输出1
	}
});
```

#### touches

开发者在接收到触摸类事件后，在事件对象上，可以接收到当前停留在屏幕上的触摸点。

Touch 对象

|属性|类型|描述|
|----|----|----|
|pageX , pageY|Number|距离文档左上角的距离，横向为 X，纵向为 Y|
|clientX , clientY|Number|距离屏幕视口左上角距离，横向为 X，纵向为 Y|


## 开发 .css 文件

CSS 结尾的样式文件，类似于常规 CSS，用以渲染界面时进行样式描述。

## 开发 .js 文件

SWAN 智能小程序中，JS 文件是控制交互逻辑的动态语言。
如，在 SWAN 模板中书写了以下代码：

```xml
<view>{{ me }}</view>
<button bind:tap="setName">点击变值</button>
```

在 JS 中可以对于视图中的行为进行监听，并触发界面的变化。

```js
Page({
	setName: function() {
		this.setData({ me: "aaa" });
	}
})
```
**说明**：
* 书写 SWAN App 的逻辑层请使用 JavaScript ；
* 逻辑层将数据进行更新后，会触发视图更新；
* 在 app.js 中使用 App 方法、在页面 JS 中使用 Page 方法，来进行页面的逻辑管理；
* 可以在 SWAN 命名空间下，使用各种 API 端能力；
* 框架中不可使用 window, document, location, navigator, localStorage, history等Web、浏览器 API。

## 开发 .json 文件

小程序页面可以使用.json文件来对本页面的窗口表现进行配置。

> 页面的配置只能设置 app.json 中部分 window 配置项的内容，页面中配置项会覆盖 app.json 的 window 中相同的配置项。

### 配置示例

```js
{
  "navigationBarBackgroundColor": "#ffffff",
  "navigationBarTextStyle": "black",
  "navigationBarTitleText": "智能小程序接口功能演示",
  "backgroundColor": "#eeeeee",
  "backgroundTextStyle": "light"
}
```

### 页面配置项列表


|属性|类型|默认值|描述|最低版本|
|----|----|----|----|
|navigationBarBackgroundColor|HexColor|#000000|导航栏背景颜色，如 `#000000`|-|
|navigationBarTextStyle|String|white|导航栏标题颜色，仅支持 black / white|-|
|navigationBarTitleText|String|--|导航栏标题文字内容|-|
|navigationStyle|String|default|导航栏样式，仅支持以下值：default(默认样式) custom(自定义导航栏)，只保留右上角胶囊按钮，在页面级配置优先级高于全局配置|<a href="https://smartprogram.baidu.com/docs/develop/tutorial/compatibility/">iOS 百度 App11.2, Android 百度 App版本11.1</a>|
|backgroundColor|HexColor|#ffffff|窗口的背景色|-|
|backgroundTextStyle|String|dark|下拉 loading 的样式，仅支持 dark / light|-|
|enablePullDownRefresh|Boolean|false|是否全局开启下拉刷新。详见 <a href="https://smartprogram.baidu.com/docs/develop/framework/app_service_page/#%E5%88%9D%E5%A7%8B%E5%8C%96%E6%95%B0%E6%8D%AE/">Page.onPullDownRefresh</a>。|-|
|onReachBottomDistance|Number|50|页面上拉触底事件触发时距页面底部距离，单位为px。详见<a href="https://smartprogram.baidu.com/docs/develop/framework/app_service_page/#%E5%88%9D%E5%A7%8B%E5%8C%96%E6%95%B0%E6%8D%AE/">Page.onReachBottom</a>。|-|
|disableScroll|Boolean|false|设置为 true 则页面整体不能上下滚动。只在页面配置中有效，无法在 app.json 中设置|<a href="https://smartprogram.baidu.com/docs/develop/tutorial/compatibility/">iOS 百度 App10.8，Android暂不支持</a>|



**说明**:
* 页面的.json只能设置 window 相关的配置项，以决定本页面的窗口表现，所以无需写 window 这个键；
* navigationStyle 全局配置`Android`和`iOS`从百度 App版本11.1.0开始支持, 但子页面配置支持情况`Android`从`百度 App版本11.1`开始支持，`iOS`从`百度 App版本11.2`开始支持, 做低版本兼容时，通过 <a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/#getSystemInfo">swan.getSystemInfo</a> 或者 <a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/#getSystemInfoSync">swan.getSystemInfoSync</a> 获取百度 App版本号进行兼容判断，具体见下表；
* 无其它特殊说明，请使用`canIUse`或者`SWAN基础库版本`进行兼容判断。


**navigationStyle配置**

|顶bar设置|iOS|Android|WebView组件页面|备注|
|---|---|---|---|---|
|百度 App定义的顶bar|无版本限制|无版本限制|无版本限制|-|
|顶bar全局透明设置|百度 App版本>=11.1|百度 App版本>=11.1|不生效|-|
|顶bar子页面透明设置|百度 App版本>=11.2|百度 App版本>=11.1|不生效|每个page的json文件可以单独配置navigationStyle|

<div class="m-doc-custom-examples">
<div class="m-doc-custom-examples-warning">
 <p class="m-doc-custom-examples-title">适配提示</p><p class="m-doc-custom-examples-text">百度 App原生顶bar高度 = 状态栏高度（通过 <a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/#getSystemInfo">swan.getSystemInfo</a> 或者 <a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/#getSystemInfoSync">swan.getSystemInfoSync</a> 获取）+ action高度（iOS为44px，Android为38px）</p>
</div>
</div>


## 页面路由


### 页面栈

框架以栈的形式维护了当前的所有页面。 当发生路由切换的时候，页面栈的表现如下：

|路由方式|页面栈表现|
|----|----|
|初始化|新页面入栈|
|打开新页面|新页面入栈|
|页面重定向|当前页面出栈，新页面入栈。|
|页面返回|页面不断出栈，直到目标返回页，新页面入栈。|
|Tab 切换|页面全部出栈，只留下新的 Tab 页面。|

### getCurrentPages()

getCurrentPages() 函数用于获取当前页面栈的实例，以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面。

<div class="notice"> Tip： </div> 不要尝试修改页面栈，会导致路由以及页面状态错误。<text></text>
<br/>

### 路由方式

对于路由的触发方式以及页面生命周期函数如下：

|路由方式|触发时机|路由前页面|路由后页面|
|----|----|----|----|
|初始化|智能小程序打开的第一个页面|   | onLoad, onShow |
|打开新页面|调用 API <a href="https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-navigateTo/">swan.navigateTo</a> 或使用<a href="https://smartprogram.baidu.com/docs/develop/component/nav/#navigator/">组件</a> < navigator open-type="navigateTo"/ > | onHide | onLoad, onShow |
|页面重定向|调用 API <a href="https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-redirectTo/">swan.redirectTo</a> 或使用<a href="https://smartprogram.baidu.com/docs/develop/component/nav/#navigator/">组件</a> < navigator open-type="redirectTo"/ > | onUnload | onLoad, onShow |
|Tab 切换	|调用 API <a href="https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-switchTab/">swan.switchTab</a> 或使用<a href="https://smartprogram.baidu.com/docs/develop/component/nav/#navigator/">组件</a> < navigator open-type="switchTab"/ > 或用户切换 Tab |    | 各种情况请参考下表 |
|页面返回	|调用 API <a href="https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-navigateBack/">swan.navigateBack</a> 或使用<a href="https://smartprogram.baidu.com/docs/develop/component/nav/#navigator/">组件</a> < navigator open-type="navigateBack"/ > 或用户按左上角返回按钮 | onUnload | onShow |
|重启动	|调用 API <a href="https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-reLaunch/">swan.reLaunch</a> 或使用<a href="https://smartprogram.baidu.com/docs/develop/component/nav/#navigator/">组件</a> < navigator open-type="reLaunch"/ > | onUnload | onLoad, onShow |

Tab 切换对应的生命周期（以 A、B 页面为 Tabbar 页面，C 是从 A 页面打开的页面，D 页面是从 C 页面打开的页面为例）：

|当前页面|路由后页面|触发的生命周期（按顺序）|
|----|----|----|
|A     |A     | Nothing happend |
|A     |B     | A.onHide(), B.onLoad(), B.onShow() |
|A     |B（再次打开） | A.onHide(), B.onShow() |
|C     |A     | C.onUnload(), A.onShow() |
|C     |B     | C.onUnload(), B.onLoad(), B.onShow() |
|D     |B     | D.onUnload(), C.onUnload(), B.onLoad(), B.onShow() |
|D（从转发进入）|A     | D.onUnload(), A.onLoad(), A.onShow() |
|D（从转发进入）|B     | D.onUnload(), B.onLoad(), B.onShow() |

**说明**:
* navigateTo, redirectTo 只能打开非 tabBar 页面。
* switchTab 只能打开 tabBar 页面。
* reLaunch 可以打开任意页面。
* 页面底部的 tabBar 由页面决定，即只要是定义为 tabBar 的页面，底部都有 tabBar。
* 调用页面路由带的参数可以在目标页面的 onLoad 中获取。

## Page

Page() 函数用来注册一个页面。接受一个 object 参数，其指定页面的初始数据、生命周期函数、事件处理函数等。

<notice>object 参数说明：</notice>

|属性|类型|描述|
|----|----|----|
|data|Object|页面的初始数据|
|onLoad|Function| 监听页面加载的生命周期函数|
|onReady|Function| 监听页面初次渲染完成的生命周期函数|
|onShow|Function| 监听页面显示的生命周期函数|
|onHide|Function| 监听页面隐藏的生命周期函数|
|onUnload|Function| 监听页面卸载的生命周期函数|
|onPullDownRefresh|Function| 监听用户下拉动作|
|onReachBottom|Function| 页面上拉触底事件的处理函数|
|onShareAppMessage|Function| 用户点击右上角转发|
|onError|Function|错误监听函数|
|其他|不限|开发者可以添加任意的函数或数据到 object 参数中，在页面的函数中用 this 可以访问|

<notice>示例：</notice>
```js
Page({
	data: {
		name: 'swan'
	},
	onLoad: function () {

	},
	onReady: function() {
    	// Do something when page ready.
	},
	onShow: function() {
		// Do something when page show.
	},
	onHide: function() {
		// Do something when page hide.
	},
	onUnload: function() {
		// Do something when page close.
	},
	onPullDownRefresh: function() {
		// Do something when pull down.
	},
	onReachBottom: function() {
		// Do something when page reach bottom.
	},
	onShareAppMessage: function () {
		// return custom share data when user share.
	}
});
```

智能小程序框架，会将同页面的 .swan 文件与 .js 中定义的 Page 对象中的 data ，进行组合渲染。

## 组件

智能小程序中提供了丰富多样的组件，开发者可以在 .swan 文件中，使用预设好的组件，拼装完成自己的智能小程序的页面。

如：使用 slider 组件

```xml
<slider min="200" max="1500" value="{{switchDuration}}"></slider>
```

即可在页面上展示一个 slider 组件。

也可以在 slider 组件上绑定事件，在相应的组件事件发生时，得到回调与组件信息：

```xml
<slider min="200" max="1500" value="{{switchDuration}}" bind:change="changeSlider"></slider>
```

```js
Page({
	changeSwitchDuration: function () {
	    console.log('changeSwitchDuration');
	}
});
```

## API

智能小程序为开发者提供了百度 App 提供的丰富的端能力。使用方式比较简单，直接调用 SWAN 对象上的端能力方法，或者 Page 对象中 this 上挂载的方法。

如`showToast`：

```js
swan.showToast({
	title: '我是标题'
});
```
也有很多挂载在 Page 对象与 SWAN 上的方法，如 createCanvasContext ，在 SWAN 对象与 Page 对象上均有。所以，你可以这样用：

```js
Page({
	data: {},
	onLoad: function () {
		this.createCanvasContext();
	}
});
```

也可以这样用：

```js
Page({
	data: {},
	onLoad: function () {
		swan.createCanvasContext();
	}
});
```

但是推荐使用第一种方法，可以在当前 Page 上精准查找，避免一些问题。具体方法的挂载，在 [API 章节](http://smartprogram.baidu.com/docs/develop/api/net/) 会有详细介绍。
