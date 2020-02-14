---
title: UpdateManager
layout: gamedoc
topic: update
categoryName: api
priority: 16-02
---

### applyUpdate()

`applyUpdate()` 是 UpdateManager 对象的方法，该方法在 updateManager.onUpdateReady 的回调中调用，用来强制重启并使用新版本。

```js
updateManager.applyUpdate()
```

### onCheckForUpdate()

在 UpdateManager 对象上进行调用，监听检查更新结果事件，检查更新不需要开发者主动触发，会在小游戏首次被打开或被客户端主动销毁后再次打开时自动进行检查。

```js
updateManager.onCheckForUpdate(callback)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|callback|function|监听检查更新结果事件的回调函数|

`callback` 回调参数：

形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res|Object|回调返回对象|
|res.hasUpdate|boolean|是否有新的版本|

### onUpdateReady()

在 UpdateManager 对象上进行调用，监听小游戏有新版本可以更新的事件（新版本下载完成），客户端下载好新版本后触发回调函数。

```js
updateManager.onUpdateReady(callback)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|callback|function|监听小游戏有新版本可以更新的事件的回调函数|

### onUpdateFailed()

在 UpdateManager 对象上进行调用，监听小游戏更新失败的事件（新版本下载失败），客户端在下载失败时触发回调函数。

```js
updateManager.onUpdateFailed(callback)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|callback|function|监听小游戏更新失败的事件的回调函数|

**示例：**

```js
const updateManager = swan.getUpdateManager();

updateManager.onCheckForUpdate(res => console.log(res));

updateManager.onUpdateReady(() => {
    swan.showModal({
        title: '提示',
        content: '更新 ready， 是否重启',
        success: res => {
            if (res.confirm) {
                updateManager.applyUpdate();
            }
        }
    });
});

updateManager.onUpdateFailed(() => console.log('onUpdateFailed'));
```

