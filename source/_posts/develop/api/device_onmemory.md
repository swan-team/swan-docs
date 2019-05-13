---
title: 内存
header: develop
nav: api
sidebar: device_onmemory
---

## swan.onMemoryWarning

**解释：**监听内存不足的告警事件，Android 下有告警等级划分，只有 LOW 和 CRITICAL 会回调开发者；iOS 无等级划分。

**方法参数：**Function callback

**`callback`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|level |Number |是|-|仅 Android 有该字段，对应系统内存告警等级宏定义。|

Android下告警等级对应系统宏：

```
TRIM_MEMORY_RUNNING_MODERATE = 5
TRIM_MEMORY_RUNNING_LOW = 10
TRIM_MEMORY_RUNNING_CRITICAL = 15
```
**示例：**

<a href="swanide://fragment/fa0e47771625a386cdcb9b076efc0cf71557731171800" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    onMemoryWarning
</view>
```

* 在 js 文件中

```js
Page({
    onLoad() {
        swan.onMemoryWarning(function (res) {
            console.log('onMemoryWarningReceive', res);
        });
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
```