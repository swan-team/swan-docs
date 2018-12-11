---
title: 反馈提示
layout: gamedoc
sidebar: toast
categoryName: design
topic: component
---

反馈提示 Toast 用于向用户提供其行为的简洁的结果反馈。它既不会阻塞用户后续行为，也不要求用户响应操作，在同步用户展现信息一定时间（可配，不建议超过 7s）后便自动消失。
在连续反馈场景，新的反馈提示会被优先展现。

智能小程序提供图文Toast（1）和纯文Toast（2），开发者可自定义配置提示内容。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-error ">
		<img src="/img/design/component/toast/1.png">
	</div>
</div>

## 图文Toast
图文Toast通常用于强调最终结果反馈，默认 2s 后自动消失。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-error ">
		<img src="/img/design/component/toast/2.png">
		<p class="m-doc-custom-examples-text">
			图文Toast的容器（1）由小程序统一提供，不可定制；开发者可以修改反馈图标（2，可选）和提示文案（3）</p>
	</div>
</div>

### 反馈图标
在图文 Toast 中，图标默认存在并设定为 “Success”（当开发者不需要图标时，可去掉图标，使用纯文 Toast）。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="/img/design/component/toast/3-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">“成功”图标准确表达操作结果</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="/img/design/component/toast/3-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">图标与反馈的结果不符合</p>
	</div>
</div>


当反馈结果前的操作过程较长时，可以调用图标 “Loading”，结果完成后再将图标切换成 “Success”。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct ">
		<img src="/img/design/component/toast/4.png">
	</div>
</div>

### 提示文案
最多显示 7 个中文汉字，若超出则从第 7 个字符开始截断。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="/img/design/component/toast/5-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">表达任务及任务结果，简单易懂</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="/img/design/component/toast/5-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">过长的文本信息会被截断</p>
	</div>
</div>

## 纯文Toast
纯文 Toast 通常用于强调需要补充信息，内容较多时的反馈，默认2s后自动消失。
请注意，如果需要表达的信息较多且非常重要，需要用户明确知晓，请考虑使用提示框组件。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-error ">
		<img src="/img/design/component/toast/6.png">
		<p class="m-doc-custom-examples-text">
			图文 Toast 的容器（1）由小程序统一提供，不可定制，容器高度根据文案内容自适应；开发者可以修改提示文案（2）</p>
	</div>
</div>

### 提示文案
文本 Toast 最多显示两行文本信息，支持折行，超出部分被截断。
为提升文本 Toast 的可读性，建议文本信息一行控制在 14 个中文汉字以内。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="/img/design/component/toast/7-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">使用简单易懂的文案，交待原因和当前状态</p>
	</div>
	<div class="m-doc-custom-examples-error">
		<img src="/img/design/component/toast/7-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">当需要较长文案说明时，折行断句可以帮助用户阅读更顺畅</p>
	</div>
</div>

过长的文案会导致文案无法展现完全，且短时间内无法阅读接收信息，反而交代不清楚当前状况。
我们应精简表达，控制文案长度，同时，在措辞上应该使用用户能理解的表达。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct ">
		<img src="/img/design/component/toast/7-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">未使用标点和断句，表述模糊冗余，且过长文案显示不完整</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="/img/design/component/toast/7-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">行业术语、技术代码均无法交代清楚原因，应转化为用户语言</p>
	</div>
</div>
