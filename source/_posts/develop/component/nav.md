---
title: 导航
header: develop
nav: component
sidebar: nav
---

## navigator
<div class="notice">解释： </div>页面链接
<div></div>

|属性名 |类型  |默认值  |说明|最低版本|
|---- | ---- | ---- |---- |---- |
|target|	String|	self|	在哪个目标上发生跳转，默认当前小程序，可选值self/miniProgram|2.5.2|
| url | String | - |应用内的跳转链接 |-|
|open-type | String  | navigate  |跳转方式|-|
|delta | Number |- |当 open-type 为 'navigateBack' 时有效，表示回退的层数|-|
|app-id|	String|-|		当target="miniProgram"时有效，要打开的小程序 App Key (小程序后台设置-开发设置中)|	2.5.2
|path|	String|-|		当target="miniProgram"时有效，打开的页面路径，如果为空则打开首页|	2.5.2|
|extra-data|	Object|-|		当target="miniProgram"时有效，需要传递给目标小程序的数据，目标小程序可在 App.onLaunch()，App.onShow() 中获取到这份数据。详情|	2.5.2|
|version|	version|	release|	当target="miniProgram"时有效，要打开的小程序版本，有效值 develop（开发版），trial（体验版），release（正式版），仅在当前小程序为开发版或体验版时此参数有效；如果当前小程序是正式版，则打开的小程序必定是正式版。|2.5.2|
|hover-class | String  |navigator-hover |指定点击时的样式类，当`hover-class="none"`时，没有点击态效果||
|hover-stop-propagation | Boolean  | false | 指定是否阻止本节点的祖先节点出现点击态|-|
|hover-start-time |Number | 50  | 按住后多久出现点击态，单位毫秒 |-|
|hover-stay-time |Number |600 |手指松开后点击态保留时间，单位毫秒|-|
|bindsuccess|	String|-|		当target="miniProgram"时有效，跳转小程序成功|	2.5.2|
|bindfail|	String|-|		当target="miniProgram"时有效，跳转小程序失败 （android暂无法给出失败回调）|	2.5.2|
|bindcomplete|	String|-|		当target="miniProgram"时有效，跳转小程序完成|	2.5.2|

**open-type 有效值：**

|值 |说明 |最低版本|
|--- |--- |--- |
| navigate | 对应 `swan.navigateTo` 的功能|-|
| redirect | 对应 `swan.redirectTo` 的功能|-|
| switchTab | 对应 `swan.switchTab ` 的功能|-|
| reLaunch | 对应 `swan.reLaunch ` 的功能|-|
| navigateBack | 对应 `swan.navigateBack ` 的功能|-|
|exit|	退出小程序，target="miniProgram"时生效|	2.5.2|


**说明**:
`navigator-hover` 默认为:
```css
{
	background-color: rgba(0, 0, 0, 0.1);
	opacity: 0.7;
}
```
`<navigator/>` 的子节点背景色应为透明色。
**示例**： 
<a href="swanide://fragment/57e55a977e6df1610e996011da073bf11540396955" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

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
	<navigator url="/pages/navigate/navigate" hover-class="navigator-hover">跳转到新页面</navigator>
	<navigator url="/pages/detail/detail" open-type="redirect" hover-class="other-navigator-hover">在当前页打开</navigator>
	<navigator url="/pages/index/index" open-type="switchTab" hover-class="other-navigator-hover">切换 Tab</navigator>
</view>

```
