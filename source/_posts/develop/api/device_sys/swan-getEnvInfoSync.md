---
title: swan.getEnvInfoSync
header: develop
nav: api
sidebar: swan-getEnvInfoSync
---
 
> 基础库 2.0.28 版本开始支持。

**解释**：获取运行环境信息同步接口

**方法参数**：无


**同步返回参数说明**：

|参数  |类型|说明 |
|---- | ---- |---|---|
|appKey  |string| 智能小程序 App Key |
|appName |string|  智能小程序名称   |
|lastAppURL |string|  智能小程序最近一次打开的调起协议  |
|sdkVersion |string|  基础库版本   |
|scheme |string|  调起协议的协议头   |
|env |string|  智能小程序的版本（基础库 3.90.12 开始支持）。有效值：development，trial，production 。<br>development 代表开发版本；<br>trial 代表体验版本;<br>production 代表线上版本。  |

**代码示例**：

<a href="swanide://fragment/82e11bbc8ad46f16d1358e023478af9e1569478295415" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
try {
    const result = swan.getEnvInfoSync();
    console.log('getEnvInfoSync success', result);
} catch (e) {
    console.log('getEnvInfoSync fail', e);
}
```
