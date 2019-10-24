---
title: tabs 导航
header: develop
nav: component
sidebar: nav
---



**解释**：导航栏，用于让用户在不同的视图中进行切换。

> 基础库 3.100.4 版本开始支持。

导航组件分为两种：
**普通导航组件**和**可寻址导航组件**

普通导航组件与可寻址导航组件的区别是：可寻址导航组件在导航 tab 切换时，该页面的 uri 参数会同步变化；反之，跳转某页面 uri 时，指定导航栏绑定的参数值也会打开该值对应的 tab 页。由于这种绑定关系的存在，相比于普通导航栏，可寻址导航栏更利于搜索引擎收录。**建议开发者尽量使用可寻址导航栏组件实现页面主导航栏功能**。例如：主页的多频道切换。

导航组件的使用需要通过 tabs 和 [tab-item](#tab-item) 组件配合实现。


|属性名 |类型  |默认值  | 必填 |说明|最低版本|
|---- | ---- | ---- |---- |---- |---- |
|tabs-background-color|	String|	'#fff'| 否 |tabs 背景色,必须填写十六进制颜色|3.100.4|
|tabs-active-text-color| String |'#000'  |否 |tabs 激活 tab-item 文字颜色|3.100.4|
|tabs-inactive-text-color| String | '#666' |否 |tabs 非激活 tab-item 文字颜色|3.100.4|
|tabs-underline-color| String | '#333' |否 |tabs 激活 tab-item 下划线颜色|3.100.4|
|active-name| String | 无 | 否 |仅用于普通导航组件，当前激活 tab-item 的 对应的name 值，须搭配bindtabchange 一起使用。|3.100.4|
|url-query-name| String | 无 |否 |仅用于可寻址导航组件，当前 tab 所改变的 url query 中参数 key，需要通过 tabs 修改页面 url 的时候设置。|3.100.4|
|max-tab-item-amount| Number | 5 |否 |当前 tabs 视图中最多容纳的 tab-item 数量，低于此数量均分排列，超出此数量划屏。默认五个，开发者根据业务需求调整|3.100.4|
|bindtabchange| EventHandle |  |否 |tab 被点击的回调，可以在e.detail.name中取到当前点击的tab-item对应name值|3.100.4|

> active-name 和 url-query-name 不要搭配在一起使用：
* 如果开发者需要的只是一个普通的顶部导航组件，可以通过 active-name 配合 bindtabchange 来控制当前选中tab-item；
* 如果开发者需要的是可以修改页面 url 的顶部导航组件，只需指定url-query-name，无需设置 active-name

**示例一**：普通导航组件

<a href="swanide://fragment/ffdd42b9621602c7a89cdfa7e4cfab7b1566986567638" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

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

**示例二**：可寻址导航组件

<a href="swanide://fragment/dbd53a620ddde5781f09c0886955e0261566986685494" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>


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
            // 如果页面加载的时候，query是预期的，则不需要调用 swan.setURLQuery
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
