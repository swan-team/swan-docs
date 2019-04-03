---
title: 获取第三方平台数据
header: develop
nav: api
sidebar: getextconfig
---

## swan.getExtConfig

>需要上传小程序包之后，才能通过API获取自定义数据，小程序包上传流程、数据配置参考：[小程序包管理](../../third/apppage/)。

**解释：**获取第三方平台自定义的数据字段。

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
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

**Tip**

1.`tip` : swan.getExtConfig 暂时无法通过 sawn.canIUse 判断是否兼容，开发者需要自行判断swan.getExtConfig 是否存在兼容。


## swan.getExtConfigSync


**解释：** [swan.getExtConfig](./#getExtConfig)的同步版本。

**方法参数：** 无

**返回说明：**

|参数 | 类型 | 说明|
|---- | ---- | ---- |
|extConfig |  Object | 第三方平台自定义的数据 |

**示例：**

```js
let data = swan.getExtConfigSync();
console.log(data.extConfig);
```

**Tip**

1.```tip```: swan.getExtConfigSync 暂时无法通过 swan.canIUse 判断是否兼容，开发者需要自行判断 swan.getExtConfigSync 是否存在兼容。