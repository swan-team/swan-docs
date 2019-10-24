---
title: tabs 导航
header: develop
nav: component
sidebar: nav
---

 

**解释**：导航栏，用于让用户在不同的视图中进行切换。

> 基础库 3.100.4 版本开始支持。

很多小程序都有在首页分垂类设置顶部导航的需求。通常开发者实现顶部导航的方式是通过 js 实现一个纯前端的切换。这样的实现使所有 tab 对应页面的 url 为同一个，从而导致 tab 页对搜索爬虫不可知。
我们提供 tabs 和 [tab-item](#tab-item) 组件，既可以把它们作为一个基础的tab组件来使用，也可以利用它们来动态的变更当前页面 url。使它更容易被搜索检索到。


|属性名 |类型  |默认值  | 必填 |说明|最低版本|
|---- | ---- | ---- |---- |---- |---- |
|tabs-background-color|	String|	'#fff'| 否 |tabs 背景色,必须填写十六进制颜色|3.100.4|
|tabs-active-text-color| String |'#000'  |否 |tabs 激活 tab-item 文字颜色|3.100.4|
|tabs-inactive-text-color| String | '#666' |否 |tabs 非激活 tab-item 文字颜色|3.100.4|
|tabs-underline-color| String | '#333' |否 |tabs 激活 tab-item 下划线颜色|3.100.4|
|active-name| String | 无 | 否 |当前激活 tab-item 的 对应的name 值，须搭配bindtabchange 一起使用。|3.100.4|
|url-query-name| String | 无 |否 |当前 tab 所改变的 url query中参数 key，需要通过 tabs 修改页面 url 的时候设置。|3.100.4|
|max-tab-item-amount| Number | 5 |否 |当前 tabs 视图中最多容纳的 tab-item 数量，低于此数量均分排列，超出此数量划屏。默认五个，开发者根据业务需求调整|3.100.4|
|bindtabchange| EventHandle |  |否 |tab 被点击的回调，可以在e.detail.name中取到当前点击的tab-item对应name值|3.100.4|

> active-name 和 url-query-name 不要搭配在一起使用：
* 如果开发者需要的只是一个普通的顶部导航组件，可以通过 active-name 配合 bindtabchange 来控制当前选中tab-item；
* 如果开发者需要的是可以修改页面 url 的顶部导航组件，只需指定url-query-name，无需设置 active-name

