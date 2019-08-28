---
title: 导航
header: develop
nav: component
sidebar: nav
---

## navigator

**解释**：  页面链接，控制小程序的跳转，既可在当前小程序内部进行跳转，也可跳转至其他小程序。

> `navigator` 的子节点背景色应为透明色。


|属性名 |类型  |默认值  | 必填 |说明|最低版本|
|---- | ---- | ---- |---- |---- |---- |
|target|	String|	self| 否 |在哪个目标上发生跳转，默认当前小程序，可选值self/miniProgram|2.5.2|
| url | String |   | 否 |应用内的跳转链接 |-|
|open-type | String  | navigate  | 否 |跳转方式|-|
|delta | Number |  | 否 |当 open-type 为 'navigateBack' 时有效，表示回退的层数|-|
|app-id|	String| | 否 |	当target="miniProgram"时有效，要打开的小程序 App Key (小程序后台设置-开发设置中)|	2.5.2
|path|	String| | 否 | 当target="miniProgram"时有效，打开的页面路径，如果为空则打开首页。|	2.5.2|
|extra-data|	Object| | 否 |	当target="miniProgram"时有效，需要传递给目标小程序的数据，目标小程序可在 App.onLaunch()，App.onShow() 中获取到这份数据。<a href="https://smartprogram.baidu.com/docs/develop/framework/app_service_register/">详情</a>|	2.5.2|
|version|	version|	release| 否 | 当target="miniProgram"时有效，要打开的小程序版本，有效值 develop（开发版），trial（体验版），release（正式版），仅在当前小程序为开发版或体验版时此参数有效；如果当前小程序是正式版，则打开的小程序必定是正式版。|2.5.2|
|hover-class | String  |navigator-hover | 否 |指定点击时的样式类，当`hover-class="none"`时，没有点击态效果。||
|hover-stop-propagation | Boolean  | false | 否 |指定是否阻止本节点的祖先节点出现点击态。|-|
|hover-start-time |Number | 50  | 否 | 按住后多久出现点击态，单位毫秒。 |-|
|hover-stay-time |Number |600 | 否 |手指松开后点击态保留时间，单位毫秒。|-|
|bindsuccess|	String| | 否 |		当target="miniProgram"时有效，跳转小程序成功。|	2.5.2|
|bindfail|	String| | 否 |当target="miniProgram"时有效，跳转小程序失败。|	2.5.2|
|bindcomplete|	String|  | 否 |		当target="miniProgram"时有效，跳转小程序完成。|	2.5.2|

**target 有效值**:

| 值 | 说明 |
| ---- | ---- |
| self | 当前小程序 |
| miniProgram | 跳转到另一个小程序 |

**version 有效值**:

| 值 | 说明 |
| ---- | ---- |
| develop | 开发版 |
| trial | 体验版 |
| release | 正式版 |

**open-type 有效值**：

|值 |说明 |最低版本|
|--- |--- |--- |
| navigate | 对应 <a href="https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-navigateTo/">`swan.navigateTo`</a> 的功能|-|
| redirect | 对应 <a href="https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-redirectTo/">`swan.redirectTo` </a> 的功能|-|
| switchTab | 对应 <a href="https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-switchTab/">`swan.switchTab ` </a> 的功能|-|
| navigateBack | 对应 <a href="https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-navigateBack/">`swan.navigateBack `</a>  的功能|-|
| reLaunch | 对应 <a href="https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-reLaunch/">`swan.reLaunch `</a>  的功能|-|
|exit|	退出小程序，target="miniProgram"时生效|	2.5.2|


**说明**:
`navigator-hover` 默认为:
```css
{
	background-color: rgba(0, 0, 0, 0.1);
	opacity: 0.7;
}
```

**示例**：
<a href="swanide://fragment/9999477aff1012b1f8d10125c245360f1565511678971" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<button type="primary" class="btn">
	<navigator class="nav" url="/detail/detail?id=新页面" hover-class="navigator-hover">跳转到新页面</navigator>
</button>
<button type="primary" class="btn">
	<navigator class="nav" url="/detail/detail?id=当前页" open-type="redirect" hover-class="other-navigator-hover">在当前页打开</navigator>
</button>
<button type="primary" class="btn">
  	<navigator class="nav" target="miniProgram" open-type="navigate" app-id="79RKhZ2BTvyyHitg4W3Xle4kkFgwwXyp" version="release" bindsuccess="successHandler" bindfail="failHandler" bindcomplete="completeHandler">打开绑定的小程序</navigator>
</button>
```

* 在 js 文件中

```js
Page({
    data: {},
    successHandler: function (e) {
        console.log('success');
    },
    failHandler: function (e) {
        console.log('fail');
    },
    completeHandler: function(e){
        console.log('complete');
    }
});
```

## tabs

**解释**：导航栏，用于让用户在不同的视图中进行切换。

> 很多小程序都有在首页分垂类设置顶部导航的需求。通常开发者实现顶部导航的方式是通过 js 实现一个纯前端的切换。这样的实现使所有 tab 对应页面的 url 为同一个，从而导致 tab 页对搜索爬虫不可知。
我们提供 tabs 和 tab-item 组件，你既可以把它作为一个基础的tab组件来使用，也可以利用它来动态的变更当前页面 url。使它更容易被搜索检索到。


|属性名 |类型  |默认值  | 必填 |说明|最低版本|
|---- | ---- | ---- |---- |---- |---- |
|tabs-background-color|	String|	'#fff'| 否 |tabs 背景色,必须填写十六进制颜色|3.100.3|
|tabs-active-text-color| String |'#000'  |否 |tabs 激活 tab-item 文字颜色|3.100.3|
|tabs-inactive-text-color| String | '#666' |否 |tabs 非激活 tab-item 文字颜色|3.100.3|
|tabs-underline-color| String | '#333' |否 |tabs 激活 tab-item 下划线颜色|3.100.3|
|active-name| String | 无 | 否 |当前激活 tab-item 的 对应的name 值，须搭配bindtabchange 一起使用。|3.100.3|
|url-query-name| String | 无 |否 |当前 tab 所改变的 url query中参数 key，需要通过 tabs 修改页面 url 的时候设置。|3.100.3|
|max-tab-item-amount| Number | 5 |否 |当前 tabs 视图中最多容纳的 tab-item 数量，低于此数量均分排列，超出此数量划屏。默认五个，开发者根据业务需求调整|3.100.3|
|bindtabchange| EventHandle |  |否 |tab 被点击的回调，可以在e.detail.name中取到当前点击的tab-item对应name值|3.100.3|

**注意:** active-name 和 url-query-name 不要搭配在一起使用，如果开发者需要的只是一个普通的顶部导航组件，可以通过 active-name 配合 bindtabchange 来控制当前选中tab-item，如果开发者需要的是可以修改页面 url 的顶部导航组件，只需指定url-query-name，无需设置 active-name

## tab-item

**解释** 搭配 tabs 一起使用，导航栏内单个 tab 内容

|属性 | 类型 | 默认值 | 必填 | 说明 |最低版本|
|---- | ---- | ---- |---- |---- |---- |
|label| String | 无 |是 |tab-item内显示的文字|3.100.3|
|name| String | 无 |是 |tab-item对应的name值|3.100.3|
|badge-type| String | 无|否 |徽标类型badge-type分为圆点'dot'和文本'text'，不设置badge-type则不显示徽标|3.100.3|
|badge-text| String | 无|否 |badge-type为text的时候，徽标内的数字，为空时badge-type="text"不生效|3.100.3|

**badge-type 有效值**:

| 值 | 说明 |
| ---- | ---- |
| 'dot' | 徽标类型为圆点 |
| 'text'| 徽标类型为文字 |



**示例一**：普通的导航

* 在 swan 文件中

```html
<tabs
    tabs-background-color="#3388ff"
    tabs-underline-color = "#fff"
    tabs-inactive-text-color="#fff"
    tabs-active-text-color="#fff"
    bindtabchange="onTabClick"
	active-name="{{activeName}}">
    <tab-item
        s-for="tab in tabs"
        badge-type="{{tab.badgeType}}"
        badge-text="{{tab.badgeText}}"
        name="{{tab.name}}"
        label="{{tab.label}}" />
</tabs>
```

* 在 js 文件中

```js
Page({
    data: {
        tabs: [
            {
                name: 'beijing',
                label: '北京',
                badgeType: 'dot'
            },
            {
                name: 'shanghai',
                label: '上海' ,
                badgeType: 'text'
                badgeText: '66'
            },
            {
                name: 'guangzhou',
                label: '广州'
            }
        ]
    },
    onTabClick(e) {
        console.log(e.detail.name);
        this.setData({
            activeName: e.detail.name,
        });
    }
});
```

**示例二**：能修改页面 url 的导航


* 在 swan 文件中

```html
<!-- 指定 url-query-name 后，通过修改url来控制当前选中的tab，无需指定 active-name -->
<!-- 虽然 bindtabchange 依旧会生效，但是直接使用 onURLQueryChange 是更好的做法 -->
<tabs url-query-name="city">
    <tab-item s-for="tab in tabs" name="{{tab.name}}" label="{{tab.label}}" />
</tabs>
```

* 在 js 文件中

```js
Page({
    data: {
        tabs: [
            {
                name: 'beijing',
                label: '北京'
            },
            {
                name: 'shanghai',
                label: '上海'
            },
            {
                name: 'guangzhou',
                label: '广州'
            }
        ]
    },
    onLoad(query) {
        if (query.city) {
            // 如果页面加在的时候，query是预期的，则不需要调用 swan.setURLQuery
            // 请求页面数据
        }
        swan.setURLQuery({
            city: 'shanghai'
        });
    },
    // 监听函数，点击切换 tabs 组件或者调用 swan.setURLQuery 时，url 发生变化自动触发
    onURLQueryChange({newURLQuery, oldURLQuery}) {
        console.log(newURLQuery, oldURLQuery)
	    // 此时tab切换，刷新tabs下方视图数据
    }
});
```