---
title: 交叉推荐
layout: gamedoc
topic: ui
categoryName: api
---

<!--
todo 1. 说明交叉换量策略 @PM
todo 2. 客户端需要增加 right 和 bottom 属性 @客户端
 -->

### swan.createRecommendationButton(opts)

返回 recommendationButton 对象。

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


### recommendationButton
[swan.createRecommendationButton(opts)](./#swan-createRecommendationButton-opts) 创建的推荐按钮对象。

**属性**

|属性|类型|说明|
|-|-|-|
|style|Object|按钮的样式|

**属性style的合法值**

|值|说明|
|-|-|
|left|左上角横坐标|
|top|左上角纵坐标|
|width|宽度（固定值，不支持修改）|
|height|高度（固定值，不支持修改）|

** 示例：**
```javascript
// 获取按钮高宽、坐标
console.log(recommendationButton.style);
// 修改按钮坐标
recommendationButton.style.left = 100;
recommendationButton.style.top = 200;
```

### recommendationButton.onLoad(callback)
recommendationButton 对象上的方法，监听 recommendationButton 加载完成后的回调函数。

**参数值：**

|参数|类型|是否必填|描述|
|--|--|--|--|
|callback|function|是|推荐按钮加载完成后的回调函数|


### recommendationButton.offLoad()
recommendationButton 对象上的方法，取消监听 recommendationButton 加载事件。

### recommendationButton.load()
recommendationButton 对象上的方法，加载推荐资源。

### recommendationButton.show()
recommendationButton 对象上的方法，用于显示推荐按钮。注意需要在 recommendationButton 加载完后调用。

### recommendationButton.hide()
recommendationButton 对象上的方法，用于隐藏按钮。

### recommendationButton.onError(callback)
recommendationButton 对象上的方法，监听 recommendationButton 错误事件。

**参数值：**

|参数|类型|是否必填|描述|
|--|--|--|--|
|callback|function|是|推荐按钮错误事件的回调函数|


### recommendationButton.offError()
recommendationButton 对象上的方法，取消监听 recommendationButton 错误事件。

### recommendationButton.destroy()
recommendationButton 对象上的方法，销毁 recommendationButton 按钮。

**示例：**
``` javascript
// 获取按钮高宽、坐标
console.log(recommendationButton.style)

// 监听错误信息
recommendationButton.onError((e)=>{
	console.error(e);
})

// 监听按钮资源加载完成
recommendationButton.onLoad(() => {
    // 显示按钮
    recommendationButton.show();

    // 取消监听加载事件
    recommendationButton.offLoad(()=>{})

    // 更新坐标位置
    recommendationButton.style.left = 120;
    recommendationButton.style.top = 300;

    setTimeout(()=>{
        // 隐藏按钮
        recommendationButton.hide();

        // 销毁按钮
        recommendationButton.destroy();

        // 取消监听错误事件
        recommendationButton.offError();
    }, 10000)
})

// 触发资源加载
recommendationButton.load();

```

