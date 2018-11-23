---
title: 第三方平台
header: develop
nav: api
sidebar: ext
---
### 第三方平台 API 列表

|API|说明|
|----|----|
|<a href="https://smartprogram.baidu.com/docs/develop/api/getextconfig/#getExtConfig">getExtConfig</a>|获取第三方平台自定义的数据字段。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/getextconfig/#getExtConfigSync">getExtConfigSync</a>|获取第三方平台自定义的数据字段的同步接口。|

<!-- getExtConfig
-----

**解释：**获取第三方平台自定义的数据字段。

**参数：**Object

**Object参数说明：**

|参数 | 类型 | 必填 | 返回|
|---- | ---- | ---- | ---- |
|success| Function |   否 |  返回第三方平台自定义的数据|
|fail  |  Function |   否  |接口调用失败的回调函数|
|complete   | Function   | 否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**

|参数 | 类型 | 说明|
|---- | ---- | ---- |
|extConfig |  Object | 第三方平台自定义的数据 |

**示例：**

```js
swan.getExtConfig({
    success: function(res) {
      console.log(res.extConfig);
    }
});
```


getExtConfigSync
-----

**解释：**获取第三方平台自定义的数据字段的同步接口。

**返回说明：**

|参数 | 类型 | 说明|
|---- | ---- | ---- |
|extConfig |  Object | 第三方平台自定义的数据 |

**示例：**

```js
let extConfig = swan.getExtConfigSync();
console.log(extConfig);
``` -->
