---
title: 功能信息完整
layout: gamedoc
header: design
topic: control
categoryName: design
sidebar: function_integrity
priority: 02-03
---


## 反馈提示及时

游戏细节的反馈提示会影响到玩家的游戏体验。在遇到数据异常、网络中断等特殊环境下，应向玩家传达准确的反馈提示，减少玩家的等待与焦虑。包括但不限于如下反馈提示：
<div class="m-doc-custom-img">
	<div >
		<img src="/img/game/design/29-1.png"><p class="m-doc-custom-examples-text">网络环境异常提示</p>
	</div>
	<div >
		<img src="/img/game/design/29-2.png"><p class="m-doc-custom-examples-text">访问数据异常提示</p>
	</div>
</div>

## 游戏引导

为降低玩家的学习成本，可选择设置游戏引导。引导样式可使用弹窗（文案、图片、视频等）或关键区域高亮引导玩家进行游戏。
<div class="m-doc-custom-img">
	<div >
		<img src="/img/game/design/30.png"><p class="m-doc-custom-examples-text">1.文字引导<br>2.图片引导<br>3.视频引导<br>4.高亮引导</p>
	</div>
</div>

避免大面积占用主要操作区，长时间或反复提示，强制玩家点击的操作。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct"><img src="/img/game/design/31-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">引导内容简洁清晰，可跳过。</p>
	</div>
    <div class="m-doc-custom-examples-warning"><img src="/img/game/design/31-2.png">
    	<p class="m-doc-custom-examples-title">注意</p><p class="m-doc-custom-examples-text">引导内容复杂繁多，不可跳过。</p>
    </div>
</div>

## 游戏引导

如排行榜、社交功能等游戏场景需要获取玩家信息权限时，应弹出授权提示告知所需具体权限，避免权限滥用。
<div class="m-doc-custom-img">
	<div >
		<img src="/img/game/design/32.png"><p class="m-doc-custom-examples-text">授权提示面板</p>
	</div>
</div>

## 输入

小游戏支持调起键盘与单行展示输入框。使用时请考虑输入框高度对游戏中输入内容的影响，避免遮挡。
<div class="m-doc-custom-img">
	<div >
		<img src="/img/game/design/33.png"><p class="m-doc-custom-examples-text">1. 竖屏模态键盘组件<br>2. 横屏模态键盘组件</p>
	</div>
</div>
