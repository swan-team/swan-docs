---
title: 底部操作菜单
header: design
nav: foundation
sidebar: actionsheet
---
操作菜单用于显示用户操作某个控件时，出现选项列表。

开发文档说明详见<a href="https://smartprogram.baidu.com/docs/develop/api/show_toast/#swan-showActionSheet/" target="_blank"> showActionSheet </a>。

<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-error ">
		<img src="../../../img/design/component/actionsheet/1.png">
	</div>
</div>

## 元素解构
智能小程序提供统一操作面板，开发者可以配置其操作选项的数量（1-6个）和文字颜色。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-error ">
		<img src="../../../img/design/component/actionsheet/2.png">
		<p class="m-doc-custom-examples-text">1. 容器
2.操作选项（可配）
3.取消
4.蒙层</p>
	</div>
</div>

### 操作选项
支持配置1-6项操作，操作文案建议精简表达，控制在10个中文字符内，用户应该通过操作文案能够快速理解选项的含义。操作文案使用规范请参见 [措辞](../../foundation/writing) 章节。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/component/actionsheet/3-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">操作文案简短清晰。</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="../../../img/design/component/actionsheet/3-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">文案冗余，阅读理解起来难度会加大。</p>
	</div>
</div>
操作菜单自带“取消”选项，点击“取消”或触碰蒙层区域自动收起面板且不执行任何操作。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/component/actionsheet/4-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">操作任务明确。</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="../../../img/design/component/actionsheet/4-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">“取消”操作重复，增大理解难度。</p>
	</div>
</div>

## 个性定制
操作菜单中，可个性定制样式的只有操作选项的文案颜色，且所有选项（除“取消”）统一配色。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/component/actionsheet/5-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">使用默认操作菜单样式。</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="../../../img/design/component/actionsheet/5-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">红色常用于表达警示，此时可能使用户紧张。</p>
	</div>
</div>
用色上除了注意按钮主次展现、品牌外，还需要考虑是否与行业常用于特殊状态的颜色冲突，如红色、浅灰色等。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/component/actionsheet/6-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">使用品牌色，与小程序整体风格更一致。</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="../../../img/design/component/actionsheet/6-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">浅灰色常用于表达按钮不可用，此时会影响用户对于可用性的判断。</p>
	</div>
</div>