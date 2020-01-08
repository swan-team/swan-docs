---
title: swan.startLocationUpdate
header: develop
nav: api
sidebar: swan-startLocationUpdate
---

**解释**：开启小程序进入前台时接收位置消息

## 方法参数 
 
 Object object

 `object`参数说明 ：

|属性名 |类型 |必填 |默认值 |说明 |
|---- |----- |----- |----- |---- |
|success |Function |否 | |接口调用成功的回调函数 |
|fail |Function |否 | |接口调用失败的回调函数 |
|complete |Function |否 | |接口调用结束时的回调函数（调用成功、调用失败都会执行）|
## 示例
### 代码示例  
* 在 js 文件中

```js
Page({
    startLocationUpdate() {
        swan.startLocationUpdate({
            success: res => console.log('开启小程序接收位置消息成功'),
            fail: err => console.error('开启小程序接收位置消息失败：', err),
            complete: msg => console.log('调用开启小程序接收位置消息API完成')
        });
    }
})
```
