---
title: swan.addEventOnCalendar
header: develop
nav: api
sidebar: swan-addEventOnCalendar
# webUrl: https://qft12m.smartapps.cn/swan-api/calendar/calendar
---


> 基础库 3.140.1 开始支持，低版本需做兼容处理。仅手百 App 可用。

**解释**：向系统日历写入一个活动，之后在设定的时间提醒

 
## 方法参数 

Object object

### `object` 参数说明 ：

|参数名 |类型  |是否必填  |默认值|说明|
|---- | ---- | ---- |--|---- |
|title|String|是|-|活动主题信息|
|startTime|Number|是|-|活动开始时间，单位：毫秒。如：1575017471000 对应为2019-11-29 16:51:11|
|endTime|Number|是|-|活动结束时间，单位：毫秒。如：1575017471000 对应为2019-11-29 16:51:11|
|url|String|否|-|回流url，可展示在日历活动信息上。请遵循 [小程序调起 Scheme](/develop/function/opensmartprogram/) 规则进行 url 的拼接|
|location|String|否|-|活动地点，不填时不进行展示|
|remindMinutesBefore|Number|否|10|提前多少分钟提醒|
| success | Function | 否 | - | 接口调用成功的回调函数 |
| fail | Function | 否 | - | 接口调用失败的回调函数 |
| complete | Function | 否 | - | 接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数说明: 

|参数名 |类型|说明|
|---- | ---- |--|
|eventId|String|这个活动的唯一标识|

## 示例

<a href="swanide://fragment/cb1f16806375e7bf2600af4a046ca4e81577432660697" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_calendar.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>


### 图片示例
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/eventOnCalendar.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>  
</div>
 

###  代码示例 



* 在 js 文件中

```js
swan.addEventOnCalendar({
    url: 'baiduboxapp://swan/sc9Tq1iKawTnj5GhG6i77vzeIt4Crt5u',
    location: 'string',
    remindMinutesBefore: 15,
    endTime: 1575028471000,
    startTime: 1575017471000,
    title: 'string',
    success: res => {
        console.log('添加活动成功', res)
    },
    fail: err => {
        console.log('添加活动失败', err)
    }
})
```
