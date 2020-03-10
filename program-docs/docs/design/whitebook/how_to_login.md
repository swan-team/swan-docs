---
title: 如何使用小程序登录能力
header: design
nav: whitebook
sidebar: howtologin
---


为帮助开发者更好地运营用户，智能小程序团队推出了官方登录组件。
当开发者使用官方登录能力后，可方便地获取百度提供的登录用户身份标识状态及相应用户信息，实现账户信息的打通和各业务间的联动，从而帮助开发者快速建立小程序内的用户体系，更便捷地运营用户。
小程序登录能力开发流程时序及说明：[查看开发文档](https://smartprogram.baidu.com/docs/develop/api/open/log/) 。

## 一、触发登录的入口

#### 开发者选择合适的场景，进行用户登录引导：

1. 全页功能触发：页面中的所有内容均需要登录才能浏览/操作; 
2. 局部功能模块触发：页面中的部分内容模块，需要登录才能浏览/操作;
3. 个人中心触发：在个人中心场景下，由未登录头像、按钮、说明文案组合构成。

<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<p class="m-doc-custom-examples-text">示例1：我的收藏（全页功能触发）</p>
		<img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/02281-1.png">
	</div>
	<div class="m-doc-custom-examples-correct">
		<p class="m-doc-custom-examples-text">示例2：购物车（局部功能模块触发）</p>
		<img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/02281-2.png">
	</div>
	<div class="m-doc-custom-examples-correct">
		<p class="m-doc-custom-examples-text">示例3：个人中心触发</p>
		<img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/02281-3.png">
	</div>
</div>

#### 设计全页/局部模块的登录引导时，建议围绕当前场景，配置相应的图标和文案说明、登录入口：

<p sclass="m-doc-custom-examples-text">示例1：我关注的人、我的评论等全页登录引导场景按不同的场景配置了不同的功能图标和登录说明引导文案；<br>
示例2：使用局部功能模块登录引导时，可适当展现更多推荐内容。</p>
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/02282.png">
	</div>
</div>

 ## 二、选择登录的交互流程

#### 1. 百度授权登录按钮/文字链：一步完成，用户步长最短；点击后直接触发授权弹窗；
#### 2. 登录中间页：统一多场景的登录体验，更大设计空间；点击页面内的“百度授权登录”按钮，触发授权弹窗。

<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<p class="m-doc-custom-examples-text">示例1：点击登录按钮，触发登录授权。</p>
		<video width="100%" controls="controls" muted src="https://b.bdstatic.com/miniapp/assets/docs/02283-1.mov">
你的浏览器不支持该视频播放</video>
	</div>
	<div class="m-doc-custom-examples-error ">
		<p class="m-doc-custom-examples-text">示例2：从登录中间页触发登录授权。</p>
		<video width="100%" controls="controls" muted src="https://b.bdstatic.com/miniapp/assets/docs/02283-3.mov">
你的浏览器不支持该视频播放</video>
	</div>
</div>

### 1. 百度授权登录按钮/文字链

在百度APP中，配合“百度用户授权登录”文案的按钮/文字链，体现官方权威感，增强用户信任；
如展示空间较小，也可以直接使用“授权登录”文案的按钮/文字链。
<div class="m-doc-custom-examples-correct">
	<img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/02284.png">
	<p class="m-doc-custom-examples-text">建议直接使用 百度授权登录按钮 (1) ，也可根据自身品牌进行样式自定义（2）。</p>
</div>

### 2. 登录中间页
小程序登录流程中，如需用户多次授权，建议使用登录中间页，提高页面稳定性。

设计登录中间页的要素与弹窗相似，应体现品牌、登录说明引导文案和授权登录按钮。
中间页有更大的展示空间，使用此形式时可考虑进行放置相关内容或品牌扩展。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-error">
		<img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/02286.png">
			<div class="m-doc-custom-examples-text">1. 品牌图片区：建议小程序头像尺寸180px-219px；图片体现小程序品牌属性或符合当前应用场景；
               2. 登录说明引导文案：可说明登录后能使用的功能/服务/优惠;
               3. 授权登录按钮：登录按钮支持自定义，在百度APP中，建议使用 “百度授权登录” 按钮文案 。
            </div>
   </div> 
</div>

<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<video width="100%" controls="controls" muted src="https://b.bdstatic.com/miniapp/assets/docs/02287-1.mov">
你的浏览器不支持该视频播放</video>
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">如需手机号和公开信息授权，建议从登录中间页触发。</p>
	</div>
	<div class="m-doc-custom-examples-error">
		<video width="100%" controls="controls" muted src="https://b.bdstatic.com/miniapp/assets/docs/02287-2.mov">
你的浏览器不支持该视频播放</video>
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">用户刚进入小程序，自动连续弹出手机号和公开信息授权弹窗。</p>
	</div>
</div> 

## 三、避免以下体验不佳的情况
### 1. 违反功能实现规范
#### 说明：小程序页面顶部、中间、底部等所有的分类导航按钮，点击后均应该跳转对应的二级页面。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-error">
		<video width="100%" controls="controls" muted src="https://b.bdstatic.com/miniapp/assets/docs/0228e1-1.mp4">
你的浏览器不支持该视频播放</video>
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">切换底部导航TAB时，调起授权面板。</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<video width="100%" controls="controls" muted  src="https://b.bdstatic.com/miniapp/assets/docs/0228e1-2.mp4">
你的浏览器不支持该视频播放</video>
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">切换底部导航TAB时，调起登录弹窗。</p>
	</div>
	<div class="m-doc-custom-examples-error">
		<video width="100%" controls="controls" muted  src="https://b.bdstatic.com/miniapp/assets/docs/0228e1-3.mp4">
你的浏览器不支持该视频播放</video>
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">切换底部导航TAB时，在当前页面调起登录中间页。</p>
	</div>
</div>

#### 说明：跳出弹窗时，用户可选择接受或拒绝，不允许出现弹窗无法关闭的情况。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/0228e2-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">用户可以选择登录，也可以不登录。</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/0228e2-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">不允许出现弹窗无法关闭的情况。</p>
	</div>
</div>

#### 说明：各个功能的排版、样式、位置要合理，确保用户在任何场景下都可以迅速找到该功能。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/0228e3-1.png">
		<p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">保证可读性的前提下，通过适当的颜色搭配辅助品牌定位。</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/0228e3-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">按钮可读性差（1），请不要使用警示色（2）或置灰色（3）。</p>
	</div>
</div>

### 2. 违反不妨碍用户规范
#### 说明：不允许频繁多次跳出不必要的获取定位、手机号等获取用户权限或其他广告弹窗。
1. 用户刚进入小程序就强制用户登录，若用户未同意，就无法使用小程序；
2. 用户刚进入小程序就弹窗强提醒用户登录，若用户未同意，就无法使用小程序；
3. 用户拒绝授权登录或未主动触发登录授权流程，虽可继续使用小程序，但是在用户接下来的使用中仍频繁要求用户登录。

<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-error">
		<img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/0228e4-1.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">不登录无法看到任何内容。</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/0228e4-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">进入首页就强制弹窗要求登录。</p>
	</div>
</div>

#### 说明：不允许在用户主要路径放置不可关闭的悬浮组件，干扰用户浏览体验。
<div class="m-doc-custom-examples"><div class="m-doc-custom-examples-error">
<img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/0228e5.png">
<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">在小程序首页放置不可关闭的浮层、悬浮按钮，影响阅读体验。</p>
</div></div>

### 3. 不符合百度核心能力接入要求
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-error">
		<img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/0228e6-1.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">未使用小程序授权能力登录。</p>
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/0228e6-2.png">
		<p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">刻意弱化小程序授权能力登录。</p>
	</div>
</div>

## 相关开发能力
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		1. 申请用户手机号信息
		<p class="m-doc-custom-examples-text">用户同意授权后，智能小程序向开发者提供用户手机号码。开发者与有自有用户体系映射成功后，便直接完成登录。
		调用说明：此授权需要<a href="https://smartprogram.baidu.com/docs/introduction/getphonenumber/">申请使用</a>。</p>
		<img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/02289-1.png">
	</div>
	<div class="m-doc-custom-examples-correct">
	   1. 申请用户公开信息（头像、昵称）
	   	<p class="m-doc-custom-examples-text">用户同意授权后，智能小程序向开发者提供用户在百度账号中的头像、昵称和唯一用户识别码。
		调用说明：<a href="https://smartprogram.baidu.com/docs/develop/api/open/userinfo_swan-getUserInfo/">查看开发文档</a>。</p>
		<img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/02289-2.png">
	</div>
</div>