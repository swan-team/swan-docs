---
title: VideoContext.requestFullScreen 
header: develop
nav: api
sidebar: videocontext_VideoContext-requestFullScreen 
---

 
> 最低支持基础库版本 3.90.x 。

**解释**：按设置的视频全屏方向进入全屏。不指定视频全屏方向时则根据设备方向判断全屏方向。

**方法参数**：Object object

**direction 有效值**:

| 值 | 说明 |
| ---- | ---- |
| 0 | 正常竖向 |
| 90 | 屏幕顺时针90度 |
| -90 | 屏幕逆时针90度 |

**示例**
```
videoContext.requestFullScreen({direction: 90});
```

