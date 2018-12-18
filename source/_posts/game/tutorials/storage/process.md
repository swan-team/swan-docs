
---
title: 小游戏的数据缓存
layout: gamedoc
categoryName: tutorials
topic: storage
priority: 05-01
---

每个百度小游戏都可以有自己的本地缓存，可以通过相关 API 对本地缓存进行读写和清理，详细的方法请参见[数据缓存 API](/api/storage/clearStorage/)。

**说明：**
同一个用户，同一个小游戏 storage 上限为 10MB。
storage 以用户维度隔离，同一台设备上，A 用户无法读取到 B 用户的数据。

**注意：**
如果用户存储空间不足，我们会清空最长时间未使用的小程序的本地缓存。我们不建议将关键信息全部存在 storage 中，以防出现存储空间不足或用户换设备的情况。

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
异步获取当前 storage 的相关信息，返回的具体信息参见相应 [API](/api/storage/getStorageInfo/)。
```javascript
swan.getStorageInfo({
    success: res => console.log(res.keys),
    fail: err => console.log('获取操作失败')
});
```
更多信息请参见[数据缓存 API](/api/storage/clearStorage/)。