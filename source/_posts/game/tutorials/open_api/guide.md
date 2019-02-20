
---
title: 关系链数据使用指南
layout: gamedoc
categoryName: tutorials
topic: open_api
priority: 07-01
---

一个百度用户的关系链数据目前包括：

+ 该用户双向关注（用户与好友两者相互关注）的好友的用户数据。

为了丰富游戏的社交玩法，我们提供了获取关系链数据的 API：

+ swan.getFriendCloudStorage() 获取当前用户也玩该款小游戏的双向关注好友的用户数据。

调用该 API 的返回结果是一个对象数组，数组的每一个元素都是一个表示用户数据的对象，结构如下：

|属性|类型|描述|
|-|-|-|
|avatarUrl|string|用户的百度账号头像 url|
|swanId|string|用户的 swanId|
|nickname|string|用户的百度账号昵称|
|KVDataList|Array.<[KVData](/game/api/openApi/openData/#KVData)\>|用户托管的 KVData 游戏数据列表|

用户托管的游戏数据是指，用户的段位、战绩等游戏业务特有的数据，通过调用 [swan.setUserCloudStorage()](/game/api/openApi/openData/#swan-setUserCloudStorage) 可以将当前用户的游戏数据托管在百度后台。只有被托管过游戏数据的用户，才会出现在 [swan.getFriendCloudStorage()](/game/api/openApi/openData/#swan-getFriendCloudStorage) 返回的对象数组中。

除此之外，我们还提供了如下 API：

+ [swan.removeUserCloudStorage()](/game/api/openApi/openData/#swan-removeUserCloudStorage) 删除用户托管的游戏数据中指定字段的数据。

+ [swan.getUserCloudStorage()](/game/api/openApi/openData/#swan-getUserCloudStorage) 获取当前用户的托管数据。

[swan.getUserCloudStorage()](/game/api/openApi/openData/#swan-getUserCloudStorage) 和 [swan.getFriendCloudStorage()](/game/api/openApi/openData/#swan-getFriendCloudStorage) 只能在 `开放数据域` 使用。

[swan.setUserCloudStorage()](/game/api/openApi/openData/#swan-setUserCloudStorage) 和 [swan.removeUserCloudStorage()](/game/api/openApi/openData/#swan-removeUserCloudStorage) 可以同时在 `主域` 和 `开放数据域` 中调用。

### 开放数据域

开放数据域是一个封闭、独立的 JavaScript 作用域。要让代码运行在开放数据域，需要在 `game.json` 中添加配置项 `openDataContext` 指定开放数据域的代码目录。添加该配置项表示**小游戏启用了开放数据域**，这将会导致一些[限制](#限制)。

```js
{
    "deviceOrientation": "portrait",
    "openDataContext": "src/openDataContext"
}
```

同时还需要在该目录下创建 `index.js` 作为开放数据域的入口文件，其代码运行在开放数据域。`game.js` 是整个游戏的入口文件，其代码运行在 `主域`，注意请不要弄混淆。对应以上配置，应该有如下的项目目录结构：

```js
|—— src
|   |—— openDataContext
|       |—— index.js
|       |—— ...
|—— game.js
|—— game.json
|—— ...
```

其中， src/openDataContext 是 `开放数据域的代码目录`。除 src/openDataContext 以外，是 `主域的代码目录`。

主域和开放数据域是分开打包的、两个相互独立的 JavaScript 作用域。这两个作用域中都有一些限制另一个域使用的 API，所有这两个作用域的代码文件之间最好不要相互 require，以免引入一些在当前作用域不工作的 API，而发生程序错误。

### 主域和开放数据域的通信

开放数据域不能向主域发送消息，主域可以向开放数据域发送消息。

在主域调用 [swan.getOpenDataContext()](/game/api/openApi/openDataContext/#swan-getOpenDataContext) 方法可以获取开放数据域实例，调用实例上的 [postMessage()](/game/api/openApi/openDataContext/#openDataContext-postMessage) 方法可以向开放数据域发送消息。

```js
// game.js
const openDataContext = swan.getOpenDataContext();
openDataContext.postMessage({
    name: 'tony',
    age: 28
});
```

在开放数据域调用 [swan.onMessage()](/game/api/openApi/openDataContext/#swan-onMessage) 方法可以监听来自主域的消息。

```js
// src/openDataContext/index.js
swan.onMessage(data => {
    /*
    data 的内容如下：
    {
        name: 'tony',
        age: 28
    }
    */
    console.log(data);
});
```

### 展示关系链数据

如果想要展示通过关系链 API 获取到的用户数据，如绘制排行榜等业务场景，需要在开放数据域将排行榜绘制到 `sharedCanvas` 上，再在主域将 sharedCanvas 渲染上屏。

![](/img/game/tutorials/open-api.png)

```js
// src/openDataContext/index.js
const sharedCanvas = swan.getSharedCanvas();

function drawRankList(data) {
    data.forEach((item, index) => {
        // ...
    });
}

swan.getFriendCloudStorage({
    keyList: ...,
    success: res => {
        let data = res.data;
        drawRankList(data);
    }
});
```

sharedCanvas 是主域和开放数据域都可以访问的一个离屏 canvas。在开放数据域调用 [swan.getSharedCanvas()](/game/api/openApi/openData/#swan-getSharedCanvas) 将返回 sharedCanvas。

```js
// src/openDataContext/index.js
const sharedCanvas = swan.getSharedCanvas();
const context = sharedCanvas.getContext('2d');
context.fillStyle = 'blue';
context.fillRect(0, 0, 50, 40);
```

在主域中可以通过开放数据域实例访问 sharedCanvas，并且调用 drawImage() 方法可以将 sharedCanvas 绘制到上屏 canvas.

```js
// game.js
const openDataContext = swan.getOpenDataContext();
const sharedCanvas = openDataContext.canvas;

const onscreenCanvas = swan.createCanvas();
const onscreenCtx = onscreenCanvas.getContext('2d');

onscreenCtx.drawImage(sharedCanvas, 0, 0);
```

sharedCanvas 的宽高只能在主域中设置，不能在开放数据域中设置。

```js
// game.js
sharedCanvas.width = 300;
sharedCanvas.height = 250;
```

sharedCanvas 本质上是一个离屏 canvas，而重设 canvas 的宽高会清空 canvas 上的内容。所以要通知开放数据域去重绘 sharedCanvas。

```js
// game.js
openDataContext.postMessage({
    command: 'rerender'
});
```

```js
// src/openDataContext/index.js
openDataContext.onMessage(data => {
    if (data.command === 'rerender') {
        // ... 重绘 sharedCanvas
    }
});
```

### 限制

当游戏中启动开放数据域，即在 game.json 中配置 openDataContext 配置项时，小游戏环境会对主域和开放数据域应用一些限制。

#### 主域

1. 主域中任一被 sharedCanvas 污染的 canvas 不能调用 toDataURL、toTempFilePath 和 toTempFilePathSync，其 context 不能调用 getImageData。

2. sharedCanvas 不能调用 toDataURL、toTempFilePath 和 toTempFilePathSync，并且其 context 不能调用 getImageData。

3. sharedCanvas 的宽高只能在主域设置。

#### 开放数据域

1. 不能设置 sharedCanvas 的宽高。

开放数据域只能调用有限的 API，如下所示：

**帧率**

+ [requestAnimationFrame()](/game/api/render/framerate/#requestAnimationFrame)
+ [cancelAnimationFrame()](/game/api/render/framerate/#cancelAnimationFrame) -->

**Timer**

+ [setTimeout()](/game/api/system/timeout/#setTimeout)
+ [clearTimeout()](/game/api/system/timeout/#clearTimeout)
+ [setInterval()](/game/api/system/timeout/#setInterval)
+ [clearInterval()](/game/api/system/timeout/#clearInterval) -->

**触摸事件**

+ [swan.onTouchStart()](/game/api/system/touchEvents/#swan-onTouchStart)
+ [swan.onTouchMove()](/game/api/system/touchEvents/#swan-onTouchMove)
+ [swan.onTouchEnd()](/game/api/system/touchEvents/#swan-onTouchEnd)
+ [swan.onTouchCancel()](/game/api/system/touchEvents/#swan-onTouchCancel)
+ [swan.offTouchStart()](/game/api/system/touchEvents/#swan-offTouchStart)
+ [swan.offTouchMove()](/game/api/system/touchEvents/#swan-offTouchMove)
+ [swan.offTouchEnd()](/game/api/system/touchEvents/#swan-offTouchEnd)
+ [swan.offTouchCancel()](/game/api/system/touchEvents/#swan-offTouchCancel) -->

**画布**

+ [swan.createCanvas()](/game/api/render/Canvas/#canvas-createCanvas)
+ [swan.getSharedCanvas()](/game/api/openApi/openData/#swan-getSharedCanvas)

开放数据域的所有 canvas 只支持 `2d` 渲染模式。

**图片**

+ [swan.createImage()](/game/api/render/image/#swan-createImage)

开放数据域的 Image 对象只能使用本地或百度 CDN 的图片，不能使用开发者自己服务器上的图片。对于非本地或非百度 CDN 的图片，可以先从主域调用 [swan.downloadFile()](/game/api/net/downloadFile/#swan-downloadFile) 下载图片文件，再通过 [openDataContext.postMessage()](/game/api/openApi/openDataContext/#openDataContext-postMessage) 把文件路径传给开放数据域去使用。

**开放数据**

+ [swan.getFriendCloudStorage()](/game/api/openApi/openData/#swan-getFriendCloudStorage)
+ [swan.getUserCloudStorage()](/game/api/openApi/openData/#swan-getUserCloudStorage)
+ [swan.setUserCloudStorage()](/game/api/openApi/openData/#swan-setUserCloudStorage)
+ [swan.removeUserCloudStorage()](/game/api/openApi/openData/#swan-removeUserCloudStorage)
+ [swan.getUserInfo](/game/api/openApi/openData/#swan-getUserInfo)

**监听主域消息**

+ [swan.onMessage](/game/api/openApi/openDataContext/#swan-onMessage)

