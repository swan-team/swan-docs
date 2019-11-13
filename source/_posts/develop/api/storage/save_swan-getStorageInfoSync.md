---
title: swan.getStorageInfoSync
header: develop
nav: api
sidebar: save_swan-getStorageInfoSync
---


 
 

**解释**：同步获取当前 storage 的相关信息。

<a href="swanide://fragment/b030af90ec924e5ee3934fa2aeccb8e91569427287486" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

**方法参数**： 无

**代码示例**：

* 在 js 文件中

```js
try {
    const result = swan.getStorageInfoSync();
    console.log('getStorageInfoSync success', result);
} catch (err) {
    console.log('getStorageInfoSync fail', err);
}
```


#### 错误码

* Andriod

|错误码|说明|
|--|--|
|1001|执行失败  |

