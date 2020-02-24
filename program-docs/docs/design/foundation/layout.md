---
title: 页面布局
header: design
nav: foundation
sidebar: layout
---
## 基础布局
基于宽度750px（iPhone 6）输出视觉方案，我们在布局智能小程序信息时，为信息内容区至少留出左右边距34px（17pt），限制内容宽度以获得最佳的可读性。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/foundation/layout/1-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">内容左右边距应至少留出34px。</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="../../../img/design/foundation/layout/1-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">边距过宽，页面元素过于集中。</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="../../../img/design/foundation/layout/1-3.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">边距过窄，页面元素过于分散。</p>
	</div>
</div>

## 透明框架布局适配
当开发者使用小程序的原生顶部导航栏时，开发者只需要在顶部导航栏下方开始布局页面即可。
智能小程序在百度App v11.1及以上版本，可以[自定义顶部导航栏](../../component/topnav/#自定义顶部导航栏)，使其只保留框架控制功能区，后文简称为“透明框架”。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/foundation/layout/2.png"><p class="m-doc-custom-examples-text">1. 默认框架，使用小程序顶部导航栏；
		2. 透明框架。</p>
	</div>
</div>

透明框架下，页面布局从屏幕顶部开始，请注意页面内容应布局在安全区内，否则会导致信息阅读体验差，或可点击元素功能不可用。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/foundation/layout/3.png"><p class="m-doc-custom-examples-text">小程序透明框架的安全区 = 屏幕 -（系统状态栏（1） + 框架控制功能区（2））</p>
	</div>
</div>

<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/foundation/layout/4-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">页面元素和功能均在安全区内展现。</p>
	</div>
	<div class="m-doc-custom-examples-error">
		<img src="../../../img/design/foundation/layout/4-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">页面元素和功能超出安全区，无法正常使用。</p>
	</div>
</div>

上滑页面时，为保证元素正常显示，可以为系统状态栏区域单独赋予背景颜色。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/foundation/layout/5.png"><p class="m-doc-custom-examples-text">页面上滑时，内容可能与系统状态栏上的内容交叠，建议此时为系统状态栏加上背景色。</p>
	</div>
</div>

## 全面屏顶部导航栏适配
### 原生顶部导航栏适配策略
当开发者使用小程序的顶部导航栏时，我们会针对不同刘海屏机型进行适配，开发者只需要在顶部导航栏下方开始布局页面即可。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/foundation/layout/8.png">
	</div>
</div>

### 自定义顶部导航栏适配
但如果使用自定义顶部导航栏（透明框架），此时开发者需要自行适配。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/foundation/layout/9.png"><p class="m-doc-custom-examples-text">左：全面屏iPhone 安全区 = 屏幕 -（系统状态栏（1） + 框架控制功能区（2）+ 底部指示区（3））
		右：全面屏安卓手机 安全区 = 屏幕 -（系统状态栏（1） + 框架控制功能区（2））</p>
	</div>
</div>

全面屏手机的刘海高度等同于系统状态栏的高度。
通过系统信息接口[getSystemInfoSync](https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-getSystemInfo/#getSystemInfoSync)获得系统状态栏的高度（statusBarHeight），在全面屏手机页面布局中增加系统状态栏的高度。

<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/foundation/layout/10-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">正确考虑状态栏高度</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="../../../img/design/foundation/layout/10-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">元素被遮挡，显示不全。</p>
	</div>
</div>


### 注意：全面屏iPhone底部适配
在布局上，全面屏iPhone需要格外关注底部横条（Home Indicator）的配置。
全面屏iPhone的底部横条默认透明，如开发者使用小程序底部标签栏，底部横条会自动适配底部标签栏的背景颜色。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/foundation/layout/13.png"><p class="m-doc-custom-examples-text">1. 默认底部横条透明；
		2. 使用底部标签栏，自动适配底部横条。</p>
	</div>
</div>

当开发者未使用底部标签栏组件，而是自主开发底部栏（如购物栏，评论栏），需注意此区域不可布局可操作元素，避免误操作。
可以调用小程序提供的<a href="https://smartprogram.baidu.com/docs/develop/framework/view_css/#适配样式">.view_css</a>适配全面屏iPhone，把底部横条颜色适配为与底部栏一致。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/foundation/layout/14-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">底部横条已正确配置，颜色与底部栏一致。</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="../../../img/design/foundation/layout/14-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">底部横条未正确配置。</p>
	</div>
</div>
