---
title: Page.after
header: develop
nav: framework
sidebar: app_service_aoppage-after
---
 

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