---
title: 提示框
header: design
nav: component
sidebar: dialog
---
提示框用于同步用户重要信息，并要求用户对此进行确认，或执行特定操作以决策下一步骤。作为模态组件，提示框出现时，蒙层覆盖原界面，以聚焦用户注意力于提示框上，原页面功能均无法使用；除非用户对其进行操作，提示框并不会自动消失。
综上，请谨慎使用提示框，因为它们会分散用户的注意力，并且打断用户的任务路径。


开发文档说明详见<a href="https://smartprogram.baidu.com/docs/develop/api/show_toast/#swan-showModal/" target="_blank">showModal</a>。

<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-error ">
		<img src="../../../img/design/component/dialog/1.png">
	</div>
</div>

## 元素解构
智能小程序提供统一提示框，开发者可以配置其标题、内容及操作按钮的数量（1-2个）和按钮文字颜色。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-error ">
		<img src="../../../img/design/component/dialog/2.png">
		<p class="m-doc-custom-examples-text">1.容器
2.标题（可选，可配）
3.内容（可配）
4.操作按钮（可配）
5.蒙层</p>
	</div>
</div>

### 标题
提示框的标题默认存在，用于明确提示的类型或主题，建议精简表达，控制在8个中文字符内。
如提示的内容简单，开发者可以选择去掉标题。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/component/dialog/3-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">标题简短清晰，内容对情况的补充说明充分。</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="../../../img/design/component/dialog/3-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">标题冗余，阅读理解起来难度会加大，且显示不全。</p>
	</div>
</div>


<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-warning">
		<img src="../../../img/design/component/dialog/4-1.png">
		<p class="m-doc-custom-examples-title">注意</p><p class="m-doc-custom-examples-text">笼统的标题，对于用户没有价值。</p>
	</div>
	<div class="m-doc-custom-examples-warning">
		<img src="../../../img/design/component/dialog/4-2.png">
		<p class="m-doc-custom-examples-title">注意</p><p class="m-doc-custom-examples-text">需要说明的内容简单，此时标题和内容重合度高，可考虑去掉标题。</p>
	</div>
</div>

### 内容
内容通常作为标题的补充信息，旨在告知状态、信息和解决方法，表达精简。当表达为陈述词，且只有一句时，句尾不必以句号结尾；措辞时，不可使用强硬语气和标点符号“！”，减少压迫感。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/component/dialog/5-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">内容对标题进行补充说明</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="../../../img/design/component/dialog/5-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">内容与标题重复，强迫性语气令人不适。</p>
	</div>
</div>
对话框内容应精简，并控制在50汉字以内，但当内容说明不可避免需要详细说明时，提示框支持用户在内容区内上下滑动查看详细信息。此时。提示框标题、底部按钮，蒙层及背后的页面元素不会跟随滑动。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-error ">
		<img src="../../../img/design/component/dialog/6.png">
		<p class="m-doc-custom-examples-text">
			用户可以在此区域（1）内上下滑动查看更多内容。</p>
	</div>
</div>

### 操作区
支持1-2项操作，默认情况下为双操作按钮，左侧为“取消”（可选），右侧为“确定”。
按钮文案文字颜色和内容均可配，最多支持4个中文字符。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-error ">
		<img src="../../../img/design/component/dialog/7.png">
		<p class="m-doc-custom-examples-text">1.双操作按钮（默认）
2.单操作按钮</p>
	</div>
</div>

#### 双操作按钮
对话框提供2种操作按钮时，必须一个是确定性操作，另一个是取消性或关闭性操作。要关闭对话框，需选择其中一个操作。操作文案使用规范请参见[措辞](../../../design/foundation/writing)章节。用户应该通过标题和按钮就能大致明白提示框的含义，最好在用词上有所呼应，如标题为“新版内测邀请”，确认按钮为“立即体验”。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/component/dialog/8-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">操作任务明确，且能与标题呼应。</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="../../../img/design/component/dialog/8-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">文案表达模糊，操作区有歧义。</p>
	</div>
</div>

#### 单操作按钮
提示框用于同步用户重要信息时并仅要求其确认知晓，其操作区通常为单操作按钮。
根据场景不同，我们建议整体考虑按钮文案，最多可支持4个中文字符。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/component/dialog/9-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">“我知道了”没有操作目标暗示，理解无歧义。</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="../../../img/design/component/dialog/9-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">此时使用“确定”可能导致困惑：是确定知晓，还是确定去看活动。</p>
	</div>
</div>


## 个性定制
提示框中，可个性定制样式的只有操作区的按钮文案颜色。
如默认样式所示，我们将“确认”按钮使用更高调的蓝色，“取消”按钮使用黑色，以在视觉展现上有主次之分，引导用户操作。若两个按钮都同等重要，也可以使用同一颜色，此时没有主次之分。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/component/dialog/10-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">使用默认提示框样式</p>
	</div>
	<div class="m-doc-custom-examples-warning">
		<img src="../../../img/design/component/dialog/10-2.png">
		<p class="m-doc-custom-examples-title">注意</p><p class="m-doc-custom-examples-text">需两个按钮都使用强展现，则没有主次。</p>
	</div>

</div>

对于不可逆的重要操作，建议其按钮使用红色，警告用户此操作的重要性。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/component/dialog/11-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">操作选项重要且不可逆，使用红色作为警示。</p>
	</div>
	<div class="m-doc-custom-examples-error">
		<img src="../../../img/design/component/dialog/11-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">不应调换确定执行按钮的位置，会导致交互操作逻辑不一致。</p>
	</div>
</div>

开发者还可以在按钮文字颜色上适合使用品牌色。但请注意，过多颜色并存，可能会影响用户判断。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/component/dialog/12-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">在强引导按钮使用品牌色，与小程序整体风格更一致。</p>
	</div>
	<div class="m-doc-custom-examples-error">
		<img src="../../../img/design/component/dialog/12-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">多种强调色共用，则按钮没有主次。
		</p>
	</div>
</div>

用色上除了注意按钮主次展现、品牌外，还需要考虑是否与行业常用于特殊状态的颜色冲突，如红色、浅灰色等。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-error">
		<img src="../../../img/design/component/dialog/13-1.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">浅灰色常用于表达按钮不可用，此时会影响用户判对于可用性判断。</p>
	</div>
	<div class="m-doc-custom-examples-error">
		<img src="../../../img/design/component/dialog/13-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">红色常用于表达警示，此时可能使用户紧张。</p>
	</div>
</div>

