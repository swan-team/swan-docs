---
title: 用户截屏事件
header: develop
nav: api
sidebar: device_capture
---


## swan.onUserCaptureScreen

**解释：**监听用户主动截屏事件，用户使用系统截屏按键截屏时触发此事件。

**方法参数：**Function callback

**`callback`参数说明：**无

**示例：**

```js
swan.onUserCaptureScreen(function() {
    console.log('用户截屏了')
});
```
