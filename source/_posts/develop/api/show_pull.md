---
title: 下拉刷新
header: develop
nav: api
sidebar: show_pull
---
## onPullDownRefresh

详情参见<a href="http://smartprogram.baidu.com/docs/develop/framework/app_service_page/#%E9%A1%B5%E9%9D%A2%E7%9B%B8%E5%85%B3%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E5%87%BD%E6%95%B0/">页面相关事件处理函数</a>。

## swan.startPullDownRefresh

**解释：**开始下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success| Function |   否  | -|接口调用成功的回调函数|
|fail   | Function |   否  | -|接口调用失败的回调函数|
|complete  |  Function  |  否  |-| 接口调用结束的回调函数（调用成功、失败都会执行）|

<!-- **success返回参数说明：**

|参数名 |类型  |说明|
|---- | ---- | ---- |
|errMsg | String|  接口调用结果| -->

**示例：**

```js
swan.startPullDownRefresh();
```
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|1001|执行失败 |

**iOS**

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法。| -->

 
## swan.stopPullDownRefresh

**解释：** 停止当前页面下拉刷新。

**方法参数：** 无

**示例：**

```js
swan.stopPullDownRefresh();
```
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|1001|执行失败 |

**iOS**

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法。| -->