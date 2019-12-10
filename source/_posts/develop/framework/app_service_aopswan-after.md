---
title: swan.after
header: develop
nav: framework
sidebar: app_service_aopswan-after
---
 

**解释：** swan.after可以拦截所有当前运行小程序对于API的调用，默认传入`function`时，只在API函数调用的返回阶段拦截。如果传入Object，则可以选择拦截的阶段（例如: 返回阶段、回调调用阶段）。

**方法参数**：Object

 **Object 参数说明**：

|属性名 |类型  |默认值 必填 | |说明|
|---- | ---- | ---- | ----|----|
|[key] | String | |否 |要拦截的API的名称 |
|[value] | Object / Function | |否 |拦截之后的处理器(如果为function，则默认在returning阶段调用) |

** 可拦截的所有方法 **

参见API文档，API中所有swan调用的均可以拦截

**代码示例**

```js
swan.after({

    // 默认在returning阶段进行拦截
    request: function (context) {
        console.log('do something after request returning');
    },

    // 可以拦截success返回，fail返回，与returning
    request: {

        success(context) {
            console.log('do something after request success callback');
        },

        fail(context) {
            console.log('do something after request fail callback');
        },

        returning(context) {
            console.log('do something after request returning');
        }
    }
});
```
