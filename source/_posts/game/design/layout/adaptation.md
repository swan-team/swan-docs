---
title: 良好兼容
layout: gamedoc
header: design
topic: layout
categoryName: design
sidebar: adaptation
priority: 01-03
---


## 主流屏幕设备的兼容

根据当前小游戏用户屏幕分辨率情况，开发者请优先保证游戏内容在主流分辨率下的显示效果。
<div class="m-doc-custom-img">
	<div >
		<img src="/img/game/design/11.png"><p class="m-doc-custom-examples-text">百度小游戏用户主流屏幕分辨率数据TOP10</p>
	</div>
</div>

基于分辨率的分布与开发适配泛用性综合考虑，建议使用物理分辨率750*1334 作为设计基准，并能支持对其他设备分辨率进行兼容。
<div class="m-doc-custom-img">
	<div >
		<img src="/img/game/design/12.png"><p class="m-doc-custom-examples-text"></p>
	</div>
</div>





## 特殊屏幕设备的兼容

随着技术发展，使用圆角、异形屏幕的移动设备正逐渐代替传统屏幕移动设备成为市场主流，因此，开发者应考虑游戏内容在此类特殊屏幕环境下的适配效果。

竖屏模态下，异形屏幕与下方系统手势区域对操作与内容元素呈现的影响：
<div class="m-doc-custom-img">
	<div >
		<img src="/img/game/design/13.png"><p class="m-doc-custom-examples-text">1. 全面屏<br>2. 刘海屏（顶部凹槽屏幕类型总称）<br>3. 打孔屏</p>
	</div>
</div>

在竖屏模态中的游戏内容操作应关注下方系统手势区域，避免影响系统基本操作。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct"><img src="/img/game/design/13-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">游戏操作区与系统手势区明确区分</p>
	</div>
	<div class="m-doc-custom-examples-error"><img src="/img/game/design/13-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">游戏操作区与系统手势区重叠</p>
    </div>
</div>

横屏模态下，屏幕翻转与异形屏幕左右凹槽/打孔设计对操作与内容元素呈现的影响：
<div class="m-doc-custom-img">
	<div >
		<img src="/img/game/design/14.png"><p class="m-doc-custom-examples-text">全面屏</p>
	</div>
</div>

<div class="m-doc-custom-img">
	<div >
		<img src="/img/game/design/15.png"><p class="m-doc-custom-examples-text">1. 刘海屏凹槽在左<br>2. 刘海屏凹槽在右</p>
	</div>
</div>

<div class="m-doc-custom-img">
	<div >
		<img src="/img/game/design/16.png"><p class="m-doc-custom-examples-text">1. 打孔屏孔洞在左<br>2. 打孔屏孔洞在右</p>
	</div>
</div>

适配屏幕显示比例大于16:9的移动设备时，请确保内容元素正常显示。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct"><img src="/img/game/design/17-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">内容元素正常显示。</p>
	</div>
    <div class="m-doc-custom-examples-error"><img src="/img/game/design/17-2.png">
    	<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">内容元素被裁切。</p>
    </div>
    <div class="m-doc-custom-examples-error"><img src="/img/game/design/17-3.png">
    	<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">内容元素被拉伸变形。</p>
    </div>
</div>




