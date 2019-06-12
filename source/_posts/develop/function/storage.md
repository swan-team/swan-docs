---
title: 数据缓存
header: develop
nav: function
sidebar: storage
---

每个百度小程序都可以有自己的本地缓存，可以通过相关 API 对本地缓存进行读写和清理，详细的方法请参见[数据存储](https://smartprogram.baidu.com/docs/develop/api/storage_save/)。

**说明：**
1. 同一个用户，同一个小程序 storage 上限为 10MB。
2. 在未登录状态，若存入了 storage 数据，则在用户登录时，数据将被继承到该账户。
3. 在用户退出登录时，将清理运行中的小程序进程，同时清空 storage 数据。

**注意：**
同一个账户退出登录后重新登录，由于退登清理策略，原账户 storage 数据将会丢失。我们不建议将关键信息全部存在 storage 中，以防出现用户频繁切换账户或用户换设备的情况。

### 基本流程

数据缓存每个 API 提供同步和异步方法，使用的基本流程如下, 以异步存储为例：
1. 添加数据缓存
将数据异步存储在本地缓存指定的 key 中。如果之前存在同名 key ，会覆盖掉原来该 key 对应的内容。
```javascript
const key = 'mockData';
const data = {
    value1: 'getStorageData1',
    value2: 'getStorageData2'
};
swan.setStorage({
    key,
    data,
    success: () => console.log('添加成功'),
    fail: () => console.log('添加失败'),
    complete: () => console.log('添加完成')
});
```
2. 获取数据缓存
从本地缓存中异步获取指定 key 对应的内容。
```javascript
// 接上例
swan.getStorage({
    key,
    success: res => console.log('获取成功', res),
    fail: () => console.log('获取失败'),
    complete: () => console.log('获取完成')
})
```
3. 删除指定数据缓存
从本地缓存中异步移除指定 key。
```javascript
// 接上例
swan.removeStorage({
    key,
    success: res => console.log('删除成功', res),
    fail: () => console.log('删除失败'),
    complete: () => console.log('删除完成')
})
```
4. 清理本地缓存
清理本地数据缓存，会将本地缓存全部删除掉。
```javascript
swan.clearStorage({
    success: res => console.log('清除成功', res),
    fail: () => console.log('清除失败'),
    complete: () => console.log('清除完成')
})
```
5. 获取当前数据缓存的信息
异步获取当前 storage 的相关信息，返回的具体信息参见 [swan.getStorageInfo](https://smartprogram.baidu.com/docs/develop/api/storage_save/#swan-getStorageInfo/)。
```javascript
swan.getStorageInfo({
    success: res => console.log(res.keys),
    fail: err => console.log('获取操作失败')
});
```
