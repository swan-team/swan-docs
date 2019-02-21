---
title: 易用性
layout: gamedoc
header: design
topic: principle
sidebar: easytouse
priority: 01-01
---

用户在日常使用移动设备时，由于实际场景的多样性，注意力容易分散或暂时中断。因此为用户设计小程序的使用流程时，需要做到：用户架构清晰，流程明确简单，并为用户的每一步操作提供及时的反馈。
## 导航架构清晰

#### 架构连续的用户任务流程，通常使用统一纵向导航。
百度小程序框架通过顶部导航栏，为小程序配备统一的页面纵深导航能力。开发者只需要标记定义“首页”即可，无需额外开发成本，页面默认返回时逐层级返回。
	<div class="m-doc-custom-examples-correct">
		<img src="/img/game/design/principle/1-1.png"><p class="m-doc-custom-examples-text">从小程序首页开始浏览小程序页面的经典用户路径示意（红线前进路径，蓝线逐级返回路径，灰线关闭路径）。</p>
	</div>

顶部导航栏位置始终固定，可以帮助用户定位“当前位置”，以防用户迷失在小程序流程页面中，顶部导航栏名称应体现小程序页面的核心内容。

<div class="m-doc-custom-examples">

	<div class="m-doc-custom-examples-correct">
		<img src="/img/game/design/principle/1-2-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">标题清晰的体现了查询航班的起点和终点。</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="/img/game/design/principle/1-2-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">标题表达模糊，必须通过浏览内容进行思考判断。</p>
	</div>
</div>

除标题文字外，每个页面的顶部导航栏样式均可进行自定义。**自定义时需注意信息的可读性**，详见[顶部导航栏](../../component/topnav/)。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="/img/game/design/principle/1-3-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">保证可读性的前提下，可通过适当的颜色搭配辅助品牌定位。</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="/img/game/design/principle/1-3-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">对比度过弱的颜色搭配或过于鲜艳的颜色，均会导致可读性变差。</p>
	</div>
</div>

#### 架构横向的同级信息通常使用页内标签栏。
* 当用户在页面标签栏切换时，可在当前视图内浏览更多同层级的内容，页面标签栏本身并不随页面滑动。
* 底部标签导航栏通常在首页使用，常驻屏幕底部，提供小程序2-5个顶层视图的快速切换。
* 下图为小程序首页的底部标签栏切换示意。
	<div class="m-doc-custom-examples-correct">
		<img src="/img/game/design/principle/1-4.png">
	</div>

除标签栏个数、标签栏背景色、选项的图标和文字外均可进行自定义，**自定义时请注意信息可读性**，详见[底部标签栏](../../component/bottomtab)。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="/img/game/design/principle/1-5-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">保证可读性的前提下，可通过适当的颜色搭配辅助品牌定位。</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="/img/game/design/principle/1-5-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">对比度过弱的颜色搭配或过于鲜艳的颜色，均会导致可读性变差。</p>
	</div>
</div>

## 操作流程流畅
考虑使用场景的复杂性和移动设备屏幕大小的适配问题，建议一次只引导用户做一件事情，并且避免出现任务路径外的内容打断用户流程，从而帮助用户聚焦当前任务，快速顺利完成操作。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-error">
		<img src="/img/game/design/principle/1-6.png">
		<p class="m-doc-custom-examples-text">请勿在用户浏览目标已经明确的情况下（蓝线），强行引导用户中断原目标流程（红线）。</p>
	</div>
</div>

移动设备屏幕虽然有变大的趋势，屏幕精度也在提升，但输入操作的准确性并不算高——尤其手机键盘布键密集，输入困难还易引起输入错误。因此开发者在设计小程序时，应该充分考虑手机特性，尽量减少用户输入，利用现有接口或其他易操作的选择控件来改善用户输入的体验。

<div class="m-doc-custom-examples-correct">
	<img src="/img/game/design/principle/1-8.png"><p class="m-doc-custom-examples-text">例：查违章小程序，在选择汽车类型时，使用选择的方式取代了让用户直接手动输入，预期明确，操作也更加便利。</p>
</div>

<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="/img/game/design/principle/1-9-1.png"><p class="m-doc-custom-examples-text">例：智能小程序，在搜索时会记录用户近期搜索小程序的历史。</p>
	</div>
		<div class="m-doc-custom-examples-correct">
		<img src="/img/game/design/principle/1-9-2.png"><p class="m-doc-custom-examples-text">例：百度火车票小程序，在搜索城市时，跟随用户输入提供关键词进行联想。</p>
	</div>
</div>
</div>

