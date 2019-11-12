---
title: swan.clearStorageSync
header: develop
nav: api
sidebar: remove_swan-clearStorageSync
---

 
**解释**：同步清理本地数据缓存。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/storage.png"  class="demo-qrcode-image" />

**方法参数**：无

**代码示例**：

```js
try {
    swan.clearStorageSync();
} catch(e) {
}
```

#### 错误码
* Andriod

|错误码|说明|
|--|--|
|1001|执行失败    |

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确   |