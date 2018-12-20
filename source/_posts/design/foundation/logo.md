---
title: 头像输出规范
header: design
nav: foundation
sidebar: logo
---
小程序头像将在开发者平台、百度App、小程序页面内以圆形外观展现，请使用清晰、合适大小的头像切图，以保证在界面展现上的美观和完整。

## 输出规格
小程序头像图片输出需符合以下规范：
1. 图片格式：png/bmp/jpeg/jpg；
2. 图片尺寸：144x144px正方形；
3. 文件大小：不可大于120kb

<div class="m-doc-custom-img">
	<div >
		<img src="../../../img/design/foundation/logo/1.png">
	</div>
</div>

## 输出原则

小程序头像输出需保证主体元素的完整性，不能被前端圆形容器裁切。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/foundation/logo/2-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">头像图片输出时主体元素比例适中，前端圆形头像展现完整。</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="../../../img/design/foundation/logo/2-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">头像图片输出时主体元素占比过大，导致被前端圆形容器裁切。</p>
	</div>
</div>

1. 小程序头像为单体元素，元素在图片整体尺寸中的占比建议在70%以上，最好不超过80%。
<div class="m-doc-custom-img">
	<div >
		<img src="../../../img/design/foundation/logo/3.png">
	</div>
</div>

2. 如小程序头像为“图形+文字”的上下组合，或左右组合形式，应至少预留整体图片的20%作为出血区。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/foundation/logo/4-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">头像图片预留了20%出血区，页面中圆形头像展现完整。</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="../../../img/design/foundation/logo
/4-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">头像图片预留出血区比例过低，导致被前端圆形容器裁切。</p>
	</div>
</div>