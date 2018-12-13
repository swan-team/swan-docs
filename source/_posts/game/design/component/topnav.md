---
title: 顶部导航栏
layout: gamedoc
sidebar: topnav
categoryName: design
topic: component
priority: 03-01
---

顶部导航栏由智能小程序框架统一提供，用于控制整体小程序，指示当前位置及辅助小程序内部页面导航。
它始终固定在屏幕顶部，不随页面滚动隐藏。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-error ">
		<img src="/img/design/component/topnav/1.png">
	</div>
</div>

## 元素解构
内部页面导航功能区居最左，页面标题名称放中间，小程序框架控制功能区最右。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-error">
		<img src="/img/design/component/topnav/2.png"><p class="m-doc-custom-examples-text">1.容器
2.内部页面导航功能区
3.页面标题（可选）
4.小程序框架控制功能区</p>
	</div>
</div>

#### 容器
容器承载了顶部导航栏的功能，为其明确了导航区域。
顶部导航栏容器默认显示白色，开发者也可以配置相应的颜色。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="/img/design/component/topnav/2-9.png"><p class="m-doc-custom-examples-text">普通手机（1）和iPhone X（2）的页面布局都从顶部导航栏窗口底部开始。
iOS状态栏会随着顶部导航栏元素和容器背景自动改变。</p>
	</div>
</div>

#### 框架内部导航功能区
<div class="m-doc-custom-text-image">
 	<div>
 		<p>当用户处于小程序首页时，此区域不展现任何功能。
 			其他页面下，根据场景展现：
1. 返回：用于返回上一页面;
2. 回首页：用于返回小程序首页。
		</p>
 	</div>
 		<div><img src="/img/design/component/topnav/3.png">
		</div>
	</div>
</div>


#### 页面标题
页面标题用于辅助和指示用户当前的位置，它通常描述当前页面/功能名称，或当前智能小程序的名称。
顶部导航栏默认展现页面标题，开发者也可以选择将其隐藏。
当标题过长时自动截断，但截断可能会导致用户误解。为保证主流机型显示，设计建议页面标题不超过 8 个中文字符。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="/img/design/component/topnav/4-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">标题表达信息过长时，在不影响理解的前提下，应精简表达。</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="/img/design/component/topnav/4-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">标题过长截断导致的信息丢失，容易产生误解，应尽量避免截断。</p>
	</div>
</div>

#### 框架控制功能区
<div class="m-doc-custom-text-image">
 	<div>
 		<p>此区域为所有的小程序统一提供：
1.菜单：呼出菜单面板，内含夜间模式、分享等；
2.关闭：关闭并退出当前小程序。

控制功能区支持黑色元素样式和白色元素样式。
		</p>
 	</div>
 	<div><img src="/img/design/component/topnav/5.png">
	</div>
</div>


## 个性定制
顶部导航栏样式可个性定制，可分为以下两种：黑色元素、白色元素。

#### 黑色元素
默认顶部导航栏元素为黑，状态栏颜色跟随；容器背景默认为白色，但可被配置。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-error ">
		<img src="/img/design/component/topnav/6.png">
	</div>
</div>

自定义配置容器背景颜色时，请重点关注信息的可识别性和整体阅读舒适度。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="/img/design/component/topnav/7-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">黑色元素适合颜色较浅的容器背景。</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="/img/design/component/topnav/7-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">容器背景避免使用高饱和度或较深的颜色，黑色元素与之搭配可识别性较差。</p>
	</div>
</div>

#### 白色元素
顶部导航栏元素配置为白时，状态栏颜色跟随；容器背景可被配置。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="/img/design/component/topnav/8.png">
	</div>
</div>

智能小程序中，智能小程序会自动继承小程序首页顶部导航栏的配置，但每个页面均可配置其顶部导航栏。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="/img/design/component/topnav/9-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">白色元素适合颜色较深的容器背景。</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="/img/design/component/topnav/9-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">容器背景避免使用高饱和度或较浅的颜色，白色元素与之搭配可识别性较差。</p>
	</div>
</div>