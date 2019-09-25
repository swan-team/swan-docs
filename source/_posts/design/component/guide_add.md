---
title: 引导关注
header: design
nav: component
sidebar: guide_add
---
智能小程序提供两类引导关注组件，帮助开发者提示和引导用户进行“关注小程序”这一操作。用户通过引导添加组件“关注小程序”后，可以在“百度APP-我的”中找到我的小程序。

开发文档说明详见<a href="http://smartprogram.baidu.com/docs/develop/api/nacomponent/#showFavoriteGuide/"  target="_blank">showFavoriteGuide</a>。
> 百度App v11.15及以上版本的智能小程序，支持关注小程序引导组件。

<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/component/guide_add/1.png">
	<p class="m-doc-custom-examples-text">1. 浮层引导
	2. 气泡引导</p>
	</div>
</div>

## 浮层引导
浮层引导的展现力度比气泡引导更强，它固定展现在页面的底部，用户在组件上能直接进行“关注”操作。引导内容暂不支持开发者自定义。
<div class="m-doc-custom-examples"><div class="m-doc-custom-examples-correct"><img src="../../../img/design/component/guide_add/3.png">
		<p class="m-doc-custom-examples-text">1. 关闭按钮：点击后，浮层引导消失；
	2. 小程序头像：默认抓取小程序头像展现；
3. 引导内容：一键关注小程序；
4. 操作区：关注按钮，点击后直接执行关注小程序，浮层引导消失。</p></div></div>

### 展现策略
用户点击“关闭”或“关注”后，浮层引导才消失。
<video width="100%" muted autoplay="autoplay" loop="loop"  src="../../../img/design/component/guide_add/5.mp4"/>
你的浏览器不支持该视频播放
</video>
<p class="m-doc-custom-examples-text">温馨提示：如果你的浏览器无法正常播放，请尝试Chrome浏览器。</p>

## 气泡引导
气泡引导是一种轻量引导组件，固定指向小程序框架的菜单入口。
它既不会阻塞用户后续行为，也不要求用户响应操作，在一定时间内向用户展现信息，便自动消失。
引导内容为“关注小程序，下次使用更便捷”，暂不支持开发者自定义。

### 展现策略
用户无操作，则5s后自动消失；用户点击菜单，或者切换页面，气泡引导马上消失。
<video width="100%" muted autoplay="autoplay" loop="loop"  src="../../../img/design/component/guide_add/7.mp4"/>
你的浏览器不支持该视频播放
</video>
<p class="m-doc-custom-examples-text">温馨提示：如果你的浏览器无法正常播放，请尝试Chrome浏览器。</p>

