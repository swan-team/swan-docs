---
title: promisify
header: develop
nav: extended
sidebar: smt-promisify
---



**解释：** `smt-promisify` 用于让 swan API 支持 Promise 方式调用。小程序中使用三方 npm 包方法，见 <a href="https://smartprogram.baidu.com/docs/develop/framework/custom-component_trdparty/" target="_self" title="npm使用说明">npm 使用说明</a>。




## 方法参数

 

### promisifyAll方法参数说明：

> 用于 promisify 全部 API，将 `source` 对象上的所有 API 复制到 `target` 对象上，如果 API 是异步 API （在内置的异步 API 列表中），则将该 API promisify 之后复制到 `target` 对象，如果是非异步 API 会直接复制到 `target` 对象。


| 参数 | 类型  | 必填 | 默认值 |说明|
| ---- | ---- | ---- | ----|----|
| source | Object | 是 | | API 的来源对象 |
| target | Object | 否 | {} | promisify API 的存放对象 |

### 返回值

| 值类型 | 说明 |
|---|---|
| Object | promisify 之后的 target 对象 |







### promisify方法参数说明 

> 用于将单个 API 函数 promisify，调用 promisify 后的函数，将返回一个 Promise 对象，这个 Promise 对象的 `resolve` 和 `reject` 状态对应原始 API 函数的 `success` 和 `fail`。同时，原始 API 函数执行的返回值，可以通过执行 promisify 后函数返回的 Promise 对象的 `returnValue` 属性获取。


| 参数 | 类型  | 必填 | 默认值 |说明|
| ---- | ---- | ---- | ----|----|
| apiFn | Function | 是 | | 原始 API 函数 |

### 返回值

| 值类型 | 说明 |
|---|---|
| Function | 经过 promisify 的 API 函数 |





 

### addAsyncAPIs方法参数说明：

> 用于添加额外的 API（名称数组）到内置异步 API 列表。对于宿主特有的 API 或则 swan 新增的 API，可以通过这个方法来设置，需要在 `promisifyAll` 之前调用。


| 参数 | 类型  | 必填 | 默认值 |说明|
| ---- | ---- | ---- | ----|----|
| APINames | Array.<string> | 是 | | 需要添加到内置异步 API 列表的 API 名称数组 |




 

 

### removeAsyncAPIs方法参数说明：

> 用于从内置异步 API 列表移除API（名称数组）。


| 参数 | 类型  | 必填 | 默认值 |说明|
| ---- | ---- | ---- | ----|----|
| APINames | Array.<string> | 是 | | 需要从内置异步 API 列表移除的 API 名称数组 |



## 代码示例

<a href="swanide://fragment/674eadd727d8a202ce48bb75f4acc7b51577343852289" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/subPackages_extensionsPackage_component_pages_smt-promisify.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>


### 图片示例

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/ezgif-6-e309dbc67f5d.gif">
    </div>  
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>    
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>       
</div>

### 安装 

```sh
npm i @smt-lib/promisify -S

```

### 代码示例1 - promisifyAll

```js

import {
    promisifyAll
} from '@smt-lib/promisify';

// promisify 全部 API
// 可以将 swanp 导出以便在任何地方使用
export const swanp = promisifyAll(swan);

// 调用异步 API 将返回 Promise
swanp.getSystemInfo().then(console.log);
swanp.showModal().then(swan.openSetting());

// 调用同步 API
swanp.getSystemInfoSync();

// 通过兼容方式调用
swanp.getSystemInfo({
    success(res) {
        console.log(res);
    }
});

```

### 代码示例2 - promisify

```js

import {
    promisify
} from '@smt-lib/promisify';

// promisify 单个 API
promisify(swan.getSystemInfo)().then(console.log);

```

### 代码示例3 - addAsyncAPIs

```js

import {
    promisifyAll,
    addAsyncAPIs
} from '@smt-lib/promisify';

// 假设宿主提供 myAsyncAPIName 私有 API
addAsyncAPIs(['myAsyncAPIName']);

// promisify 全部 API
// 可以将 swanp 导出以便在任何地方使用
export const swanp = promisifyAll(swan);

// 调用异步 API 将返回 Promise
swanp.myAsyncAPIName().then(console.log);

```

