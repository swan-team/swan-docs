---
title: 层次感
header: design
nav: principle
sidebar: hierarchical
categoryName: design
topic: principle
---
移动设备屏幕尺寸相对小，一屏展现的信息非常有限。设计小程序时，请注意在页面展现时突出一个重点，帮助用户快速理解，避免页面上出现其它与用户的决策和操作无关的干扰因素，降低筛选信息的难度。

## 信息设计重点明确

设计界面信息时，请注意根据内容的重要程度设计其层级主次，以帮助用户更简单地获取所需要的信息和做出判断。可以通过更大的字体、更强的文字体量、更明显的颜色等为内容赋予更强的展现，详见[布局排版](../../foundation/layout)。

<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="/img/design/principle/2-1-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">字体大号加粗的标题最突出，正文字体小颜色浅的辅助信息展现能力较弱。</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="/img/design/principle/2-1-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">所有信息都强，分散阅读时的注意力，影响信息传递。</p>
	</div>
</div>

适当地省略重复信息，合理的排版，使浏览更加轻松。

<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="/img/design/principle/2-2-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">除了字体大小不同，上下排版也使需要使的重点信息更突出。</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="/img/design/principle/2-2-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">对主次信息的混排、冗余的文案穿插均让找关键信息变得困难。</p>
	</div>
</div>

## 功能操作主次分明

当希望对用户的下一步功能操作进行引导时，应为推荐的主操作按钮设计更显眼的样式。详见[按钮](../../component/button)。

<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="/img/design/principle/2-3-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">对用户可能需要进行的下一步操作的功能进行强化展现。</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="/img/design/principle/2-3-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">多平行操作，用户难以选择。</p>
	</div>
</div>

## 反馈力度强弱适度

在用户使用小程序时，会出现需要等待的场景。用户的耐心非常宝贵，为避免让用户面对一个静止的屏幕等待未知的结果，需要对当前状态及时反馈，告知用户当前小程序仍在正常运作，能降低用户使用过程中等待的焦虑感。
<br></br>
#### 框架启动加载
<div class="m-doc-custom-text-image">
 	<div>启动小程序框架时，加载反馈动画与百度 App 通用加载动画不同，更突出小程序的品牌和特性。

此为百度小程序框架通用能力，除 LOGO 和名称调用开发者的小程序信息外，其他视觉动效及交互均由百度小程序框架统一提供，开发者无需进行额外开发。
 	</div>
 	 	<div><img src="/img/design/principle/2-4.png">
		</div>
	</div>
</div>

#### 全局加载反馈
百度小程序提供通用加载的组件，也可以由开发者自己根据品牌定义加载样式。但此时无法明确告知具体加载位置和进度，**自行设计时请注意设计加载动画，避免页面静止从而引起用户焦虑**。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
 		<img src="/img/design/principle/2-5.png">
		<p class="m-doc-custom-examples-text">1.加载浮层
			2.顶部导航栏加载
			3.开发者自定义加载样式（示例）</p>
	</div>
</div>

#### 下拉加载反馈
百度小程序提供通用的下拉加载组件，使用此组件后，当用户下拉页面至一定高度时，可以触发当前页面的整体刷新。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
 		<img src="/img/design/principle/2-6.png">
	</div>
</div>

#### 内容选择反馈
用于页面内某个选项或输入区做出的用户选择的状态，并在当前操作区域反馈其选择状态,详见[选择](../../component/selection)。

<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<p class="m-doc-custom-examples-text">多选 Checkbox</p>
 		<a href="../docs/develop/component/form_checkbox/"><img src="/img/design/principle/2-7-1.png"></a>
	</div>
	<div class="m-doc-custom-examples-error ">
		<p class="m-doc-custom-examples-text">单选 Radio</p>
 		<a href="../docs/develop/component/form_radio/"><img src="/img/design/principle/2-7-2.png"></a>
	</div>
	<div class="m-doc-custom-examples-correct">
		<p class="m-doc-custom-examples-text">开关 Switch</p>
		<a href="../docs/develop/component/form_switch/"><img src="/img/design/principle/2-7-3.png"></a>
	</div>
	<div class="m-doc-custom-examples-error ">
		<p class="m-doc-custom-examples-text">滑动选择条 Slider</p>
 		<a href="../docs/develop/component/form_slider/"><img src="/img/design/principle/2-7-4.png"></a>
	</div>
</div>

当选择项较多，或选项间有前向依赖时，可以使用浮层选择器承载内容。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
 		<img src="/img/design/principle/2-8.png">
		<p class="m-doc-custom-examples-text">1.单列选择器
			2.时间选择器
			3.日期选择器</p>
	</div>
</div>

#### 操作结果反馈
同一时间只显示一个反馈提示，并且应该根据不同的场景和反馈需要的强弱程度选择不同样式。
<br>

#### 反馈提示 Toast
不打断用户流程，会自动消失，适用于轻量级的提示，详见[反馈提示](../../component/toast)。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="/img/design/principle/2-9.png"><p class="m-doc-custom-examples-text">1.图文Toast 适用于操作成功反馈。
		2.纯文Toast 适用于情况说明和提醒。</p>
	</div>
</div>

#### 提示框 Dialog
作为模态组件，会打断用户路径并分散用户的注意，请谨慎使用，详见[提示框](../../component/dialog)。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
 		<img src="/img/design/principle/2-10.png"><p class="m-doc-custom-examples-text">1.单按钮提示框 用于重要信息周知。
 		2.双按钮提示框 周知并询问下一步操作。</p>
	</div>
</div>

#### 全屏结果页
在任务流程的最后一环，且结果反馈比较重要时，可使用全屏结果页向用户明确操作结果，并引导下一步操作。
开发者可以根据场景需求自行开发，设计资源的[视觉组件库](https://smartprogram.baidu.com/docs/design/resource/uikit/)中也放置了基础视觉源文件，供快速开发使用。


<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
 		<img src="/img/design/principle/2-11.png"><p class="m-doc-custom-examples-text">1.操作结果反馈（示例）
 		2.出错或内容为空（示例）</p>
	</div>
</div>
