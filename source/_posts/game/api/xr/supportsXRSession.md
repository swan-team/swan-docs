---
title: supportsXRSession
layout: gamedoc
topic: xr
categoryName: api
priority: 10-02
draft: true
---

用于判断当前百度 App 版本和对应的机型、系统是否支持创建指定 XR 模式的会话。

 **参数值：**

 |属性|类型|是否必填|描述|
|-|-|-|-|
|opts|Object|是|传入的对象参数|
|opts.mode|string|是| XR 的模式|

 **返回值：**

该方法会立即返回一个布尔值表示是否支持。

 **使用示例：**

```js
if (swan.supportsXRSession({mode: 'ar'})) {
    swan.requestXRSession({
        mode: 'ar',
        ...
    })
}
else {
    // 提示不支持
}
```
