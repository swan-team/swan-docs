---
title: 导航
header: develop
nav: api
sidebar: show_tab
---
navigateTo
---
**解释：**保留当前页面，跳转到应用内的某个页面，使用 swan.navigateBack 可以返回到原页面。

**参数：**Object

**注意：**为了不让用户在使用智能小程序时造成困扰，我们规定页面路径只能是五层，请尽量避免多层级的交互方式。

**Object 参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|url |String  |是|   需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 ‘path?key=value&key2=value2’|
|success| Function  |  否  | 接口调用成功的回调函数|
|fail  |  Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```js
swan.navigateTo({
     //此路径为相对路径；如需写为绝对地址，则可写为‘/example/xxx?key=valu’。
    url: 'example/xxx?key=value'  
});
```



redirectTo
---
**解释：**关闭当前页面，跳转到应用内的某个页面

**参数：**Object

**Object 参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|url |String | 是  | 需要跳转的应用内非 tabBar 的页面的路径，路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 ‘path?key=value&key2=value2’|
|success| Function |   否  | 接口调用成功的回调函数|
|fail   | Function |   否  | 接口调用失败的回调函数|
|complete  |  Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|


**示例：**

```js
swan.redirectTo({
    //此路径为相对路径；如需写为绝对地址，则可写为‘/example/xxx?key=valu’。
    url: 'example/xxx?key=value'
});
```

switchTab
---
**解释：**跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面

**参数：**Object

**Object 参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|url |String | 是  | 需要跳转的 tabBar 页面的路径（需在 app.json 的 tabBar 字段定义的页面），路径后不能带参数|
|success |Function  |  否  | 接口调用成功的回调函数|
|fail   | Function |   否  | 接口调用失败的回调函数|
|complete |   Function |   否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```js
{
    "tabBar": {
        "list": [{
            "pagePath": "index",
            "text": "首页"
        },{
            "pagePath": "list",
            "text": "列表"
        }]
    }
}
```

```js
swan.switchTab({
    url: '/list',
});
```

navigateBack
---
**解释：**关闭当前页面，返回上一页面或多级页面。

**参数：**Object

**Object 参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|delta  | Number | 否  | 返回的页面数，如果 delta 大于现有页面数，则返回到首页。默认为 1|

**示例：**

```js
// 注意：调用 navigateTo 跳转时，调用页面会被加入堆栈，而 redirectTo 方法则不会。见下方示例代码

// 当前是首页
swan.navigateTo({
    url: 'list?key=value'
});

// 当前是列表页
swan.navigateTo({
    url: 'detail?key=value'
});

// 在详情页内 navigateBack，将返回首页
swan.navigateBack({
    delta: 2
});

```

reLaunch
---
**解释：**关闭所有页面，打开到应用内的某个页面。

**参数：**Object

**Object 参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|url |String | 是|   需要跳转的应用内页面路径 , 路径后可以带参数。参数与路径之间使用 ? 分隔，参数键与参数值用=相连，不同参数用 & 分隔；如 ‘path?key=value&key2=value2’，如果跳转的页面路径是 tabBar 页面则不能带参数|
|success| Function |   否 |  接口调用成功的回调函数|
|fail   | Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|


**示例：**

```js
swan.reLaunch({
  //此路径为相对路径；如需写为绝对地址，则可写为‘/example/xxx?key=valu’。
    url: 'example/xxx?key=value'
});
```
