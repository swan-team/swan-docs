---
title: recommendationButton
layout: gamedoc
topic: recommendationButton
categoryName: api
---

### recommendationButton
[swan.createRecommendationButton(opts)](/game/api/recommendationButton/createRecommendationButton) 创建的推荐按钮对象。

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
