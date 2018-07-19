---
title: 导航
header: develop
nav: component
sidebar: nav
---

navigator
-----

<div class="notice">解释： </div>页面链接
<div></div>

|属性名 |类型  |默认值  |说明|
|---- | ---- | ---- |---- |
| url | String |  |应用内的跳转链接 |
|open-type | String  | navigate  |跳转方式|
|delta | Number | |当 open-type 为 'navigateBack' 时有效，表示回退的层数|
|hover-class | String  |navigator-hover |指定点击时的样式类，当`hover-class="none"`时，没有点击态效果|
|hover-stop-propagation | Boolean  | false | 指定是否阻止本节点的祖先节点出现点击态|
|hover-start-time |Number | 50  | 按住后多久出现点击态，单位毫秒 |
|hover-stay-time |Number |600 |手指松开后点击态保留时间，单位毫秒|

**open-type 有效值：**


|值 |说明 |
|--- |--- |
| navigate | 对应 `swan.navigateTo` 的功能|
| redirect | 对应 `swan.redirectTo` 的功能|
| switchTab | 对应 `swan.switchTab ` 的功能|
| reLaunch | 对应 `swan.reLaunch ` 的功能|
| navigateBack | 对应 `swan.navigateBack ` 的功能|


<notice>Tips: </notice> `navigator-hover` 默认为:
```css
{
	background-color: rgba(0, 0, 0, 0.1);
	opacity: 0.7;
}
```
`<navigator/>` 的子节点背景色应为透明色。
<notice>示例： </notice>
```css
/** css **/
/** 修改默认的navigator点击态 **/
.navigator-hover {
	color:red;
}
/** 自定义其他点击态样式类 **/
.other-navigator-hover {
	color:green;
}

```

```xml
<!-- navigator.swan -->
<view class="swan-demo">
	<navigator url="pages/navigate/navigate" hover-class="navigator-hover">跳转到新页面</navigator>
	<navigator url="pages/detail/detail" open-type="redirect" hover-class="other-navigator-hover">在当前页打开</navigator>
	<navigator url="pages/index/index" open-type="switchTab" hover-class="other-navigator-hover">切换 Tab</navigator>
</view>

```
