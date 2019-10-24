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
