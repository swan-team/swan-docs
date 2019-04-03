---
title: 子包预下载
header: develop
nav: api
sidebar: open_preloadsubpackage
---

## swan.loadSubPackage

**解释：**提前下载好子包的资源，目录结构配置参考[分包加载](https://smartprogram.baidu.com/docs/develop/framework/subpackages/)。

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|root | String | 是 | 要下载的子包的root |
|success | Function |  否  | 接口调用成功的回调函数|
|fail   | Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**
```js
swan.loadSubPackage({
    root: 'subpackage',
    success(res) {
        console.log('下载成功', res);
    },
    fail(err) {
        console.log('下载失败', err);
    }
});
```
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|1001|执行失败|

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|1001|预加载子包失败| -->