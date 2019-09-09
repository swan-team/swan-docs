---
title: 页面路由
header: develop
nav: framework
sidebar: app_service_aop
---

## AOP说明

小程序的开发者或者服务商会提供一些lib库，用来代理小程序的生命周期或API等，进而想要进行一些通用逻辑的处理(例如: 打点/事件触发/统一登录等等通用逻辑)。

通常，小程序开发者们使用这些扩展包时，不得不在各个使用点（生命周期、事件触发等）处显式调用。

为解决该类问题，智能小程序在框架层提供切面。让扩展包的开发者可以在小程序运行的生命周期/事件触发/API调用等处，注入通用逻辑。

## App.after

**解释：** App.after可以增加APP级的切面，触发的时机是在所拦截的对应生命周期方法执行之后。

**方法参数**：Object

#### **Object 参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|methods | Object | 否 |-| 所有需要拦截的声明周期方法的集合 |

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

## Page.after

**解释：** Page.after可以增加Page级的切面，触发的时机是在所拦截的对应生命周期方法执行之后，也可以拦截所有页面上发生的事件（对于要拦截的事件，在swan文件上必须显示绑定了相应事件）。

**方法参数**：Object

#### **Object 参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|url |String | 否 |-| 要增加切面的页面的URL规则, 当URL参数不填时，则默认拦截所有页面 |
|methods | Object | 否 |-| 所有需要拦截的声明周期方法的集合 |
|events | Object | 否 |-| 所有要拦截的事件的集合 |

** 可拦截的所有方法 **

* onLoad

* onReady

* onShow

* onHide

* onUnload

* onForceReLaunch

* onPullDownRefresh

* onReachBottom

* onPageScroll

* onTabItemTap

* onURLQueryChange

**示例代码：**

```js
// 为url中含有page/index的page实例增加切面
Page.after({

    url: /pages\/index/,

    // 拦截页面中的生命周期onShow
    methods: {
        onShow(context) {
            console.log('message after normal show function');
        }
    },

    // 拦截页面中，属性有data-tag="1"的节点的tap事件
    events: {
        '[data-tag="1"]:tap': function (context) {
            console.log('message after a tag is tapped');
        }
    }
});
```

## swan.after

**解释：** swan.after可以拦截所有当前运行小程序对于API的调用，默认传入`function`时，只在API函数调用的返回阶段拦截。如果传入Object，则可以选择拦截的阶段（例如: 返回阶段、回调调用阶段）。

**方法参数**：Object

 **Object 参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|[key] | String |否 ||要拦截的API的名称 |
|[value] | Object / Function |否 ||拦截之后的处理器(如果为function，则默认在returning阶段调用) |

** 可拦截的所有方法 **

参见API文档，API中所有swan调用的均可以拦截

**示例代码：**

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
