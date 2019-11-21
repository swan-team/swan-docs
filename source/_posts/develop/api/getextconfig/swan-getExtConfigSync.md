---
title: swan.getExtConfigSync
header: develop
nav: api
sidebar: swan-getExtConfigSync
---



> 基础库 1.10.8 版本开始支持。

**解释**： [swan.getExtConfig](https://smartprogram.baidu.com/docs/develop/api/getextconfig/swan-getExtConfig/)的同步版本。

**方法参数**： 无

**返回说明**：

|参数 | 类型 | 说明|
|---- | ---- | ---- |
|extConfig |  Object | 第三方平台自定义的数据 |

**代码示例**：

<a href="swanide://fragment/ce597f3bb6e7ca606ccacb253f1726b41574213264242" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    getExtConfigSync() {
        try {
            const extData = swan.getExtConfigSync();
            swan.showToast({
                title: JSON.stringify(extData),
                icon: 'none'
            });
        } catch (err) {
            console.log('getExtConfigSync fail', err);
        }
    }
});
```

**Tip**

* swan.getExtConfigSync 暂时无法通过 swan.canIUse 判断是否兼容，开发者需要自行判断 swan.getExtConfigSync 是否存在兼容。
* 需要小程序授权第三方平台，并且添加自定义字段值（例：{"extEnable":true,"ext":{"appid":"xxx"}}），swan.getExtConfigSync()方法请求的时候返回的 extConfig 值才不为｛｝
