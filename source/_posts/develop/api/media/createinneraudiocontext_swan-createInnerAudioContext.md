---
title: swan.createInnerAudioContext
header: develop
nav: api
sidebar: swan.createInnerAudioContext
---



> 在工具和真机中的实现有区别，详见[API 实现差异](https://smartapp.baidu.com/docs/develop/devtools/diff/)。


**解释**： 创建并返回内部 audio 上下文 `innerAudioContext` 对象。

**方法参数**： 无

**返回值**：innerAudioContext

#### 错误码

* Andriod

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确 |
|1001|执行失败|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确     |

**代码示例**：

<a href="swanide://fragment/6e677e1f5a5cf14b7a4d56369ae6d49b1569417414184" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```javascript
Page({
    onLoad() {
        const innerAudioContext = swan.createInnerAudioContext();
    }
});
```

