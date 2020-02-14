---
title: 添加到我的小程序引导
layout: gamedoc
topic: ui
categoryName: api
priority: 12-04
---

### swan.showFavoriteGuide()

> 基础库 swan-game.js 1.7.2 版本开始支持。

支持在小游戏内调起添加到我的小程序引导组件，引导用户添加到我的小程序。引导组件设计文档详见：[添加到我的小程序引导](/design/component/guide_add/)。

```js
swan.showFavoriteGuide(opts)
```

**参数值：**

|属性|类型|默认值|是否必填|描述|
|---|-------|---|-------|-------|
|type|String|bar|否|引导组件类型，有效值： bar/tip。|
|content|String|bar: 一键添加到我的小程序；<br> tip: 添加到我的小程序，下次使用更方便。|否|引导组件文字， bar类型限制少于11个字符，tip类型少于18个字符，超过长度将截断显示。|
|success|function||否|接口调用成功的回调|
|fail|function||否|接口调用失败的回调函数|
|complete|function||否|接口调用结束的回调函数（调用成功、失败都会执行）|

**展现形式：**

* 一直展现：用户点击引导组件旁边的关闭按钮才能关闭，点击添加按钮可直接添加到我的小程序。

![图片](../../../../img/game/assets/showFavoriteGuide_bar.jpeg)

**代码示例 1:**

```js
swan.showFavoriteGuide({
    type: 'bar',
    content: '一键添加到我的小程序',
    success: res => {
        console.log('添加成功：', res);
    },
    fail: err => {
        console.log('添加失败：', err);
    }
})
```

* 自动消失：引导组件 3s 后自动消失，点击添加按钮可直接添加到我的桌面。

![图片](../../../../img/game/assets/showFavoriteGuide_tip.jpeg)
**代码示例 2:**

```js
swan.showFavoriteGuide({
    type: 'tip',
    content: '一键添加到我的小程序',
    success: res => {
        console.log('添加成功：', res);
    },
    fail: err => {
        console.log('添加失败：', err);
    }
})
```

用户通过引导添加组件“添加到我的小程序”后，可以在宿主APP首页的智能小程序二楼“我的小程序”中看到它。

![图片](../../../../img/design/component/guide_add/2.png)