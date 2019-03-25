---
title: createRecommendationButton
layout: gamedoc
topic: recommendationButton
categoryName: api
---

 百度小游戏为开发者提供了交叉推荐能力，支持在游戏中添加交叉推荐组件，在为其他游戏导流的同时，可以获得来自其他游戏的用户。某游戏每为其他游戏导流一次，系统后台会为该游戏记录一次贡献值；某游戏每从其他游戏获得导流一次，系统后台会消耗该游戏一次贡献值。
 交叉推荐后台系统通过特定算法，每天推荐不同的游戏，最终为每个游戏带来其所贡献的流量。

 申请接入交叉推荐，联系百度小游戏商务： vgame-bd@baidu.com

 在接入交叉推荐组件时需兼顾游戏体验，建议不要在同一页面同时出现多个交叉推荐组件。


## swan.createRecommendationButton(opts)

返回 [recommendationButton](/game/api/recommendationButton/recommendationButton) 对象。

```js
swan.createRecommendationButton(opts)
```

**opts 对象属性说明：**

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|
|opts|Object|`{style: {left: 30, top: 300}, type: 1}`|否|创建推荐按钮的参数|
|opts.style|Object|`{left:30,top:300}`|否|推荐按钮的坐标|
|opts.type|string|'carousel'|否|类型，如轮播、列表|

**opts.style 的属性**

|属性|类型|默认值|是否必填|描述|
|-|-|
|style.left|number|30|否|左上角横坐标|
|style.top|number|300|否|左上角纵坐标|


**opts.type 的合法值**

|值|描述|
|-|-|
|carousel|轮播|
|list|聚合|


** 示例：**
```javascript
// 创建按钮
const recommendationButton = swan.createRecommendationButton({
    type: 'list',
    style: {
        left: 100,
        top: 300
    }
});

```

