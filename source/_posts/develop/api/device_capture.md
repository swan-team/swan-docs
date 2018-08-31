---
title: 用户截屏事件
header: develop
nav: api
sidebar: device_capture
---


onUserCaptureScreen
---
**解释：**监听用户主动截屏事件，用户使用系统截屏按键截屏时触发此事件。
**参数：**CALLBACK

**CALLBACK返回参数：**
无

****示例：****

```js
swan.onUserCaptureScreen(function() {
    console.log('用户截屏了')
});
```
