---
title: 直播组件控制
header: develop
nav: api
sidebar: media_liveplayercontext
---

## swan.createLivePlayerContext


**解释：** 操作对应的 `<live-player/>` 组件。 创建并返回 live-player 上下文 LivePlayerContext 对象。

**方法参数：** String domId

**返回值：**livePlayerContext

### livePlayerContext

**livePlayerContext 对象的方法列表：**

|方法 | 参数 | 说明|
|---- | ---- | ---- |
|play |Object | 播放  |
|stop |Object | 停止  |
|mute |Object| 静音 |
|pause |Object| 暂停 |
|resume |Object| 恢复 |
|requestFullScreen | Object |进入全屏|
|exitFullScreen| Object | 退出全屏|

**requestFullScreen 的 Object 参数列表：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|direction |Number  |  是  | 有效值为 0（正常竖向）, 90（屏幕逆时针90度）, -90（屏幕顺时针90度）。|
|success   |Function  |  否  | 接口调用成功的回调函数。|
|fail  |Function  |  否 |  接口调用失败的回调函数。|
|complete   | Function   | 否 |  接口调用结束的回调函数（调用成功、失败都会执行）。|

**其他方法的 Object 参数列表：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success   |Function  |  否  | 接口调用成功的回调函数|
|fail  |Function  |  否 |  接口调用失败的回调函数|
|complete   | Function   | 否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

