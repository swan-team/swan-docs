---
title: swan.shareVideo()
layout: gamedoc
topic: share
categoryName: api
priority: 11-06
---

> 基础库 swan-game.js 1.4.1 版本开始支持。

主动拉起发布视频界面。

```javascript
swan.shareVideo(opts)
```

**参数值**

|属性|类型|默认值|是否必填|描述|
|---|-------|---|-------|-------|
|videoPath|string||是|要转发的视频地址|
|query|string||否|查询字符串，必须是 key1=val1&key2=val2 的格式。<br>从这条转发消息进入后，可通过 swan.getLaunchOptionsSync() <br>或 swan.onShow() 获取启动参数中的 query。|
|title | string | | 否 | 要转发的视频描述 |
|success | function| | 否 | 剪辑成功的回调函数 |
|fail | function || 否| 剪辑失败的回调函数|
|complete | function || 否| 接口调用完成的回调函数（接口成功、失败都会执行）|


**示例**

```javascript
swan.shareVideo({
  videoPath: path,
  success () {
    console.log('分享成功');
  },
  fail (res) {
    console.log('分享失败');
  }
});

```