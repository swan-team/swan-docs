---
title: swan.getClipboardData
header: develop
nav: api
sidebar: swan-getClipboardData
---

 

**解释**：获取系统剪贴板内容

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success |Function |   否 | |  接口调用成功的回调函数|
|fail  |  Function |   否 | | 接口调用失败的回调函数|
|complete  |  Function |   否  | | 接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明**：

|参数名 |类型  |说明|
|---- | ---- | ---- |
|data   | String | 剪贴板的内容|

**代码示例**：
<a href="swanide://fragment/6fec884cc46de9ec15292cbd1da569701569485595295" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

>在 swan/js 文件中代码示例与[swan.setClipboardData](https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-setClipboardData/)相同。


#### 错误码
* Andriod

|错误码|说明|
|--|--|
|1001|执行失败   |