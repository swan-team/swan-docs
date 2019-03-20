---
title: 菜单
header: develop
nav: api
sidebar: menu_info
---


## getmenuButtonBoundingClientRect

> 基础库 3.20.3 开始支持，低版本需做兼容处理。

**解释：**获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。

**返回参数说明：**

|参数 | 类型 | 说明|
|---- | ---- | ---- |
|width  |  number | 宽度，单位：px  |
|height  |  number | 高度，单位：px |
|top  |  number | 上边界坐标，单位：px  |
|right  |  number | 右边界坐标，单位：px  |
|bottom  |  number | 下边界坐标，单位：px  |
|left  |  number | 左边界坐标，单位：px  |

**示例：**

```js
try {
    var result = swan.getMenuButtonBoundingClientRect();
    console.log('isLoginSync', result);
} catch (e) {
    console.log('error', e);
}
```