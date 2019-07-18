
---
title: 框架规范
layout: gamedoc
header: design
topic: layout
categoryName: design
sidebar: framework_rules
priority: 01-01
---

框架是小游戏的基础构成，开发过程中请选用正确的框架，保证功能正常使用。


## 基础功能

包括菜单和退出按钮，竖屏模态下常驻于框架右上角，方便玩家退出游戏及呼出菜单面板。

<div class="m-doc-custom-img">
	<div >
		<img src="/img/game/design/1.png"><p class="m-doc-custom-examples-text">小游戏框架</p>
	</div>
</div>

<div class="m-doc-custom-img">
	<div >
		<img src="/img/game/design/2.png"><p class="m-doc-custom-examples-text">控制功能区说明</p>
	</div>
</div>

游戏内容与功能按钮不可与框架内容重叠显示。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct"><img src="/img/game/design/3-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">游戏内容与框架功能按钮展示分明。</p>
	</div>
	<div class="m-doc-custom-examples-error"><img src="/img/game/design/3-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">游戏内容信息与框架功能按钮重叠，功能识别受阻。</p>
    </div>
</div>

## 模态选用恰当

框架支持竖屏和横屏模态，开发者可根据游戏设定酌情选用，使用时应注意游戏内容正常显示。

<div class="m-doc-custom-img">
	<div >
		<img src="/img/game/design/4.png"><p class="m-doc-custom-examples-text">1. 竖屏模态<br>2. 横屏模态</p>
	</div>
</div>

框架提供深色和浅色两种模态，使用时应注意游戏内容显示分明。
<div class="m-doc-custom-img">
	<div >
		<img src="/img/game/design/5.png"><p class="m-doc-custom-examples-text">1. 浅色框架搭配深色内容元素<br>2. 深色框架搭配浅色内容元素</p>
	</div>
</div>

选用框架时，应充分考虑游戏环境下控制功能区的可识别度与视觉舒适度。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct"><img src="/img/game/design/6-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">游戏环境颜色与控制功能区颜色显示分明，按钮清晰。</p>
	</div>
    <div class="m-doc-custom-examples-warning"><img src="/img/game/design/6-2.png">
    	<p class="m-doc-custom-examples-title">注意</p><p class="m-doc-custom-examples-text">游戏环境颜色与控制功能区颜色接近，按钮难以识别。</p>
    </div>
</div>




