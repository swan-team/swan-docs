---
title: IntersectionObserver.observe 
header: develop
nav: api
sidebar: query_IntersectionObserver-observe 
---
 
 
**解释**：指定目标节点并开始监听相交状态变化情况

**方法参数**：String targetSelector, Function callback

**`targetSelector`参数说明**：选择器

**`callback`参数说明**：监听相交状态变化的回调函数

**回调结果说明**

|属性|  类型|  说明|
|---- | ---- | ---- |
|intersectionRatio  | number | 相交比例|
|intersectionRect   | Object | 相交区域的边界|
|boundingClientRect | Object |目标边界|
|relativeRect    |Object  |参照区域的边界|
|time  |  number | 相交检测时的时间戳|

**intersectionRect、boundingClientRect、relativeRect 结构说明**

|属性|  类型|  说明|
|---- | ---- | ---- |
|left |  number | 左边界|
|right  | number | 右边界|
|top| number | 上边界|
|bottom  |number | 下边界|

**代码示例**：

```javascript
swan.createIntersectionObserver(this, {
    selectAll: true
})
.relativeTo('.container')
.observe('.ball', res => {
    console.log(res.intersectionRect); // 相交区域
    console.log(res.intersectionRect.left); // 相交区域的左边界坐标
    console.log(res.intersectionRect.top); // 相交区域的上边界坐标
    console.log(res.intersectionRect.width); // 相交区域的宽度
    console.log(res.intersectionRect.height); // 相交区域的高度
});
```

