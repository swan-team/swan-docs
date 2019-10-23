---
title: swan.canIUse
header: develop
nav: api
sidebar: swan-canIUse
---
 

**解释**： 判断智能小程序的API，回调，参数，组件等是否在当前版本可用。暂无法校验宿主扩展的API。

**方法参数**： String schema

使用 `${API}.${method}.${param}.${options} `或者 `${component}.${attribute}.${option}` 方式来调用。

**`schema`参数说明**：

|参数  |说明 |
|---- | ---- |
|${API}  | API 名字 |
|${method} |  调用方式，有效值为return, success, object, callback   |
|${param} | 参数或者返回值  |
|${options} |参数的可选值   |
|${component} |   组件名字 |
|${attribute} | 组件属性 |
|${option}  |  组件属性的可选值 |


**示例**：

<a href="swanide://fragment/46118bb2080dbb4afe733717c987f6e31569478359497" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
Page({
    canIUse() {
        console.log('canIUse:view.hover-class', swan.canIUse('view.hover-class'));
        console.log('canIUse:scroll-view.scroll-x', swan.canIUse('scroll-view.scroll-x'));
        console.log('canIUse:cover-view', swan.canIUse('cover-view'));
        console.log('canIUse:button.size.default', swan.canIUse('view.button.size.default'));
        console.log('canIUse:request.object.success.data', swan.canIUse('request.object.success.data'));
        console.log('canIUse:getSavedFileList', swan.canIUse('getSavedFileList'));
        console.log('canIUse:getSavedFileList.object', swan.canIUse('getSavedFileList.object'));
        console.log('canIUse:getSavedFileList.object.success', swan.canIUse('getSavedFileList.object.success'));
    }
});
```

