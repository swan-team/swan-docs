---
title: swan.deleteEventOnCalendar
header: develop
nav: api
sidebar: swan-deleteEventOnCalendar
# webUrl: https://qft12m.smartapps.cn/subPackages/apiPackage/pages/calendar/calendar
---


> 基础库 3.140.1 开始支持，低版本需做兼容处理。仅手百 App 可用。

**解释**：删除日历上的某个活动

 
## 方法参数 

Object object

###  `object` 参数说明 ：

|参数名 |类型  |是否必填  |默认值|说明|
|---- | ---- | ---- |--|---- |
|eventId|String|是|-|活动唯一标识，可通过 [addEventOnCalendar](/develop/api/device_sys/swan-addEventOnCalendar/) 获取|
| success | Function | 否 | - | 接口调用成功的回调函数 |
| fail | Function | 否 | - | 接口调用失败的回调函数 |
| complete | Function | 否 | - | 接口调用结束的回调函数（调用成功、失败都会执行）|

## 示例

<a href="swanide://fragment/cb1f16806375e7bf2600af4a046ca4e81577432660697" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_calendar.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>



 

###  代码示例 



* 在 js 文件中

```js
swan.deleteEventOnCalendar({
    eventId: 'xxx', // 仅为示例，实际调用时请填写真实id
    success: res => {
        console.log('删除活动成功', res)
    },
    fail: err => {
        console.log('删除活动失败', err)
    }
})
```