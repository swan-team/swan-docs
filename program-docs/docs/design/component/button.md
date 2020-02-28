---
title: 按钮
header: design
nav: foundation
sidebar: button
---
按钮允许用户点击，并触发对应的操作。

开发文档说明详见<a href="/develop/component/formlist_button/" target="_blank"> button </a>。

## 大按钮
大按钮高度固定为88px，圆角大小固定8px。
自定义配置：按钮文案（建议不超过8个中文字符）。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct ">
		<img src="../../../img/design/component/button/1.png">
	</div>
</div>


## 小按钮
小按钮高度固定为56px，宽度最小114px，圆角大小固定6px。
按钮内边距最小30px，文字较长时，按钮可按所需宽度拉伸适配。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct ">
		<img src="../../../img/design/component/button/2.png">
	</div>
</div>

## 悬浮按钮
开发者可以在智能小程序页面放置悬浮按钮，为了减少对内容遮挡和用户阅读体验的影响，我们建议使用88px的悬浮按钮。
在[视觉资源下载](../../resource/uikit/)中，我们提供了悬浮按钮示例源文件，开发者也可以根据需要，替换悬浮按钮的功能及图标。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-error ">
		<img src="../../../img/design/component/button/3.png">
		<p class="m-doc-custom-examples-text">1. 视觉组件库中的设计示例；
		2. 替换图标时，新图标大小建议占悬浮按钮整体宽度的50%；
	3. 功能名称无法用图标表达，可以使用文字表达，不建议超过8个中文字符。</p></div>
</div>

### 页面布局
悬浮按钮右侧和底部间距最少34px，任何情况下均不与页面内的其他元素重叠。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/component/button/4-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">悬浮按钮离底部工具栏和右侧至少留出34px边距。</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="../../../img/design/component/button/4-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">悬浮按钮位置过于靠下，与底部工具栏重叠，无法操作。</p>
	</div>
</div>

悬浮按钮的点击区域通常为与按钮等宽高的正方形。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-error"><img src="../../../img/design/component/button/5.png">
		<p class="m-doc-custom-examples-text">悬浮按钮的点击区域。</p></div>
</div>

### 注意事项
1. 悬浮按钮应用于承载当前页面相关的功能，如“回顶部”“章节目录”等，请注意与框架已有的图标表意做区分。任何时候，均不可重复放置框架上已有的功能，包括“返回”、“关闭”等。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/component/button/6-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">悬浮按钮“页面快捷菜单”图标与框架样式不同，帮助用户正确区分。</p>
	</div>
	<div class="m-doc-custom-examples-error">
		<img src="../../../img/design/component/button/6-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">框架已有统一返回，不可在悬浮按钮放置返回功能。</p>
	</div>
</div>

2. 悬浮按钮可用于跳转与当前内容有关页面，如用于按顺序查看下一个，或者相关推荐。
<div class="m-doc-custom-examples"><div class="m-doc-custom-examples-correct"><img src="../../../img/design/component/button/7-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">悬浮按钮用于跳转相关页面，如“下一条回答”。</p>
	</div>
	<div class="m-doc-custom-examples-correct"><img src="../../../img/design/component/button/7-2.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">悬浮按钮用于推荐相关页面，如“查看更多相关内容”。</p></div>
</div>
禁止使用悬浮按钮承载与当前页面无关的内容入口，以免遮挡内容会影响用户阅读体验。
<div class="m-doc-custom-examples"><div class="m-doc-custom-examples-error">
		<img src="../../../img/design/component/button/7-3.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">悬浮按钮不可用于跳转回首页。</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="../../../img/design/component/button/7-4.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">悬浮按钮不可用于展现广告，或者作为广告页面的跳转入口。</p>
	</div>
</div>

3. 结合其使用场景，综合考虑悬浮按钮的展现策略，尽量减少对阅读内容的遮挡。

例如：我们建议悬浮按钮“回到顶部”策略：默认及上滑时不显示，下拉渐显，无操作500ms渐隐。
因为页面默认展现及用户上滑以浏览内容的情况，应以用户阅读为优先，不应显示遮挡内容；而用户下拉往上翻内容时，提供快捷“回到顶部”的操作更为合适。

<video width="100%" muted autoplay="autoplay" loop="loop"  src="../../../img/design/component/button/8.mov"/>你的浏览器不支持该视频播放</video><p class="m-doc-custom-examples-text">温馨提示：如果你的浏览器无法正常播放，请尝试Chrome浏览器。</p>

