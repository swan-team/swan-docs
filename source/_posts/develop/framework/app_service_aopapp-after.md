---
title: App.after
header: develop
nav: framework
sidebar: app_service_aopapp-after
---

 

**解释：** App.after可以增加APP级的切面，触发的时机是在所拦截的对应生命周期方法执行之后。

**方法参数**：Object

#### **Object 参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|methods | Object | 否 | | 所有需要拦截的声明周期方法的集合 |

** 可拦截的所有方法 **

* onLaunch

* onShow

* onHide

* onError

* onPageNotFound

**示例代码：**

```js
// app.js
App({
    onShow() {
        console.log('normal onShow');
    }
});

App.after({
    methods: {
        onShow() {
            console.log('after app onshow');
        }
    }
});
/**
 * 打印结果
 * normal onShow
 * after app onshow
 */
```
