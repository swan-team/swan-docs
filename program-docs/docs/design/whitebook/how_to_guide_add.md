---
title: 如何吸引用户关注
header: design
nav: whitebook
sidebar:  howtoguideadd
---
为帮助小程序开发者更好地留存用户，并在未来持续性与用户进行互动，智能小程序官方推出了小程序关注组件。
通过关注组件，能够强势获取用户注意力，提示、引导、教育用户关注小程序，为后续经营用户打下良好的基础。

在引导用户关注小程序后，用户激活和回访能力都会大幅提升，包括且不限于：
1. 能收到开发者的消息推送；
2. 可在“百度APP-我的”中快速回访。

<img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/guanfang.png">

## 一、选择引导的方式
在设计时，可以这样引导用户关注自己的小程序：
1. 引导用户在小程序框架菜单中关注小程序；
2. 在合适场景，增设关注小程序按钮组件引导关注（即将开放）。

<img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/helishiyong1.png">

## 二、选择引导的形式
开发者可选择合适的业务场景，引导用户关注小程序：
1. 关注引导气泡：轻量引导，固定指向小程序导航栏的菜单入口；
2. 全页关注引导蒙层：强展现引导，拆解操作步骤，流程清晰。

<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct"><img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/yindao1.png"></div>
	<div class="m-doc-custom-examples-correct"><img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/yindao2.png"></div>
</div>

### 1. 关注引导气泡
气泡引导不会阻塞用户行为，它应在一定时间（建议5s）内自动消失，或提供关闭按钮由用户手动关闭。
<img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/yindao1-1.png">

> 你可直接使用智能小程序官方提供的5s自动消失的关注引导气泡。（[查看开发文档](https://smartprogram.baidu.com/docs/develop/api/show/nacomponent/#showFavoriteGuide/)）

<p></p>
开发者也可以根据自身品牌进行样式自定义开发，如：
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct"><img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/yindao1-1-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">气泡背景使用白色，展示品牌LOGO，提供关闭按钮。</p>
	</div>
	<div class="m-doc-custom-examples-correct"><img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/yindao1-1-2.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">气泡背景色使用品牌色，使用图标强化功能，5s后自动关闭。</p>
	</div>
	<div class="m-doc-custom-examples-correct"><img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/yindao1-1-3.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">气泡背景色使用品牌色，引导文案更详细（不超两行），5s后自动关闭。</p>
	</div>
</div>

### 2. 全页关注引导蒙层
蒙层引导能使用户注意力聚焦在引导上，此时原页面功能均无法使用。
考虑到它会打断用户的任务路径和沉浸式体验，我们建议谨慎使用，可在用户首次进入小程序首页时展示1次。
<img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/yindao3-1.png">

<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct"><img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/yindao3-2.png"><p class="m-doc-custom-examples-text">示例：1. 沉浸式顶部导航栏效果（幸运日历盒）；2. 原生顶部导航栏效果（TA说）。</p>
	</div>
</div>

## 三、体验不佳的情况
### 1. 违反功能正确实现规范
说明：应对关注引导出现与消失制定策略，可用且好用，不允许出现气泡无法关闭的情况。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<video width="100%" controls="controls" muted src="https://b.bdstatic.com/miniapp/assets/docs/do1.mov">
你的浏览器不支持该视频播放</video>
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">关注成功后，引导气泡消失。</p>
	</div>
	<div class="m-doc-custom-examples-error">
		<video width="100%" controls="controls" muted src="https://b.bdstatic.com/miniapp/assets/docs/donot1.mov">
你的浏览器不支持该视频播放</video>
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">关注成功后，关注引导气泡不应再出现。</p>
	</div>
</div>


### 2. 违反不可诱导用户规范
说明：引导未经百度公司同意或授权的情况下，智能小程序提供的服务中，不得存在诱导类行为，包括但不限于诱导分享、诱导关注、诱导抽奖、诱导下载或打开APP等。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-error ">
		<img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/donot2.png"><p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">不应以诱导类的虚假信息吸引用户关注小程序。</p>
	</div>
</div>

### 3. 不符合不妨碍用户规范
说明：不同时使用多种引导手段，反复对用户造成打扰。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-error ">
		<img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/donot3.png"><p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">不应出现多种关注引导方式，如引导气泡（1）叠加引导蒙层（2），对用户造成打扰。</p>
	</div>
</div>	


