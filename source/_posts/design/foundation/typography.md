---
title: 页面排版
header: design
nav: foundation
sidebar: typography
---

## 阅读视线流
中国用户阅读浏览内容的习惯通常是“从左往右，从上往下”，在信息排版时，我们应该把主要的信息内容放在屏幕左上侧。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/foundation/typography/5-1.png">
		<p class="m-doc-custom-examples-text">认真沉浸阅读（Z型）
1. 从左侧开始，视线向右水平移动阅读；
2. 视线下移至最左侧，重复第1步，从上往下逐行阅读。</p>
	</div>
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/foundation/typography/5-2.png">
		<p class="m-doc-custom-examples-text">快速扫视浏览（锯齿型）
1. 从上至下垂直扫描；
2. 发现感兴趣的内容，视线从左向右水平移动。</p>
	</div>
</div>

<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-warning">
		<img src="../../../img/design/foundation/typography/6-1.png">
		<p class="m-doc-custom-examples-title">注意</p><p class="m-doc-custom-examples-text">传统中文的竖向排版，对于长文本场景阅读效率较低，请谨慎使用。</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="../../../img/design/foundation/typography/6-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">内容横竖排版混用，阅读视线零碎，不建议使用。</p>
	</div>
</div>


## 字体
当用户手机系统未自定义字体时，小程序遵循以下字体展现响应优先级：
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/foundation/typography/7.png">
	</div>
</div>
开发者可以在小程序默认字体库的基础上，增加自定义字体库。

<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/foundation/typography/8-1.png">
		<p class="m-doc-custom-examples-text">开发者使用自定义字体“楷体”; 当用户手机有此自定义字体时，显示自定义“楷体”。</p>
	</div>
</div>
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples--correct">
		<img src="../../../img/design/foundation/typography/8-2.png">
		<p class="m-doc-custom-examples-text">发者使用自定义字体“楷体”;用户手机无楷体时，按下一优先级字体显示，保底情况为显示系统默认字体：iOS-苹方-简（1）；安卓-Droid Sans（2）。 </p>
	</div>
</div>

## 字号
建议按场景使用适合的字号，常用场景字号建议如下：
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/foundation/typography/9.png">
		<p class="m-doc-custom-examples-text">注：建议阅读文本使用20px及以上，可点击文本按钮使用24px及以上。</p>
	</div>
</div>

## 颜色
建议按使用场景定义文本颜色，常用场景文本颜色建议如下：
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/foundation/typography/10.png">
	</div>
</div>