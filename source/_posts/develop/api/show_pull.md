---
title: 下拉刷新
header: develop
nav: api
sidebar: show_pull
---
onPullDownRefresh
---
**解释：**在 Page 中定义 onPullDownRefresh 处理函数，监听该页面用户下拉刷新事件。

**参数：**Object

**示例：**
<!-- <a href="swanide://fragment/fc0587d7ad5ffc1c3c8ad5182c14cc461548069060160" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果 </a> -->
```js
Page({
    onPullDownRefresh() {
        // do something
    }
});
```
**说明**：
* 需要在 config 的 `window` 选项中开启 `enablePullDownRefresh`；
* 如果需要单个页面支持下拉刷新，可以直接在页面目录下的 json 配置文件中开启`enablePullDownRefresh`；
* 当处理完数据刷新后，`swan.stopPullDownRefresh` 可以停止当前页面的下拉刷新。

startPullDownRefresh
---
**解释：**开始下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。

**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success| Function |   否  | 接口调用成功的回调函数|
|fail   | Function |   否  | 接口调用失败的回调函数|
|complete  |  Function  |  否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

<!-- **success返回参数说明：**

|参数名 |类型  |说明|
|---- | ---- | ---- |
|errMsg | String|  接口调用结果| -->

**示例：**

```js
swan.startPullDownRefresh();
```

stopPullDownRefresh
---
**解释：** 停止当前页面下拉刷新。

**参数：** 无

**示例：**

```js
swan.stopPullDownRefresh();
```
