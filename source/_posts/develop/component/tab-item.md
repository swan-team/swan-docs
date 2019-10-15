---
title: tab-item 导航内容
header: develop
nav: component
sidebar: nav
---


**解释**： 搭配 tabs 一起使用，导航栏内单个 tab 内容。

> 基础库 3.100.4 版本开始支持。

|属性 | 类型 | 默认值 | 必填 | 说明 |最低版本|
|---- | ---- | ---- |---- |---- |---- |
|label| String | 无 |是 |tab-item内显示的文字|3.100.4|
|name| String | 无 |是 |tab-item对应的name值|3.100.4|
|badge-type| String | 无|否 |徽标类型badge-type分为圆点'dot'和文本'text'，不设置badge-type则不显示徽标|3.100.4|
|badge-text| String | 无|否 |badge-type为text的时候，徽标内的数字，为空时badge-type="text"不生效|3.100.4|

**badge-type 有效值**:

| 值 | 说明 |
| ---- | ---- |
| 'dot' | 徽标类型为圆点 |
| 'text'| 徽标类型为文字 |



**示例一**：普通的导航

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

**示例二**：能修改页面 url 的导航

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