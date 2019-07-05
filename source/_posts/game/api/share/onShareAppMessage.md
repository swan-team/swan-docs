---
title: swan.onShareAppMessage()
layout: gamedoc
topic: share
categoryName: api
priority: 11-04
---

监听用户点击右上角菜单的“转发”按钮时触发的事件。

```js
swan.onShareAppMessage(callback)
```

**参数值：**

|属性|类型|是否必填|描述|
|-|-|-|-|
|callback|function|是|事件的回调函数|

**自定义分享参数：**

`Object` 类型的数据：

|属性|类型|描述|
|-|-|-|
|title|string|转发标题|
|imageUrl|string|转发显示图片的链接，只支持网络图片路径|
|query|string|查询字符串，从这条转发消息进入后，可通过 [`swan.getLaunchOptionsSync()`](/game/api/system/lifeCycle/#swan-getLaunchOptionsSync) 或 [`swan.onShow()`](/game/api/system/lifeCycle/#swan-onShow) 获取启动参数中的 query。必须是 key1=value1&key2=value2 的格式。|

**示例：**

```js
swan.onShareAppMessage(() => {
    return {
        title: 'shareTitle',
        imageUrl: 'http://b.bdstatic.com/searchbox/icms/searchbox/img/%E5%B0%8F%E6%9C%89%E5%90%8D%E6%B0%94H5.png',
        query: 'key1=1&key2=2&key3=3',
        success: res => {
            console.log('onShareAppMessage share success', JSON.stringify(res));
        },
        fail: err => {
            console.log('onShareAppMessage share fail', JSON.stringify(err));
        }
    }
});
```