---
title: 菜单
header: develop
nav: api
sidebar: menu_info
---


## swan.getMenuButtonBoundingClientRect

> 基础库 3.20.3 开始支持，低版本需做兼容处理。

**解释**：获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。

**方法参数**： 无

**返回参数说明**：

|参数	|类型	|说明|
|--|--|--|
|width|	number|	宽度，单位：px|
|height|	number	|高度，单位：px|
|top	|number|	上边界坐标，单位：px|
|right|	number|	右边界坐标，单位：px|
|bottom|	number	|下边界坐标，单位：px|
|left	|number|	左边界坐标，单位：px|
 


**示例**：

<a href="swanide://fragment/58313b1eb5dd40b7ca199130b33b8f281557730380596" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="getMenuButtonBoundingClientRect">getMenuButtonBoundingClientRect</button>
</view>
```

* 在 js 文件中

```js
Page({
    getMenuButtonBoundingClientRect() {
        try {
            const result = swan.getMenuButtonBoundingClientRect();
            console.log('getMenuButtonBoundingClientRect success', result);
        } catch (err) {
            console.log('getMenuButtonBoundingClientRect fail', err);
        }
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
```
