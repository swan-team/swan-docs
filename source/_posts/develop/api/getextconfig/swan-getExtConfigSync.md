---
title: swan.getExtConfigSync
header: develop
nav: api
sidebar: swan-getExtConfigSync
---

  

> 基础库 1.10.8 版本开始支持。

**解释**： [swan.getExtConfig](./#getExtConfig)的同步版本。

**方法参数**： 无

**返回说明**：

|参数 | 类型 | 说明|
|---- | ---- | ---- |
|extConfig |  Object | 第三方平台自定义的数据 |

**代码示例**：

<a href="swanide://fragment/dcbff11e967bbe165470eadfd555d3ba1569485763978" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    getExtConfigSync() {
        try {
            const extData = swan.getExtConfigSync();
            console.log('getExtConfigSync success', extData);
        } catch (err) {
            console.log('getExtConfigSync fail', err);
        }
    }
});
```

**Tip**

```tip```: swan.getExtConfigSync 暂时无法通过 swan.canIUse 判断是否兼容，开发者需要自行判断 swan.getExtConfigSync 是否存在兼容。