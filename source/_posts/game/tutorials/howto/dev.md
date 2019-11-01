---
title: 如何开发小游戏
layout: gamedoc
categoryName: tutorials
topic: howto
priority: 01-01
---

### 准备开发工具

下载最新版开发者工具（[Windows 64 版下载地址](http://smartprogram.baidu.com/mappconsole/api/devDownload?system=windows&type=online) | [Mac 版下载地址](http://smartprogram.baidu.com/mappconsole/api/devDownload?system=mac&type=online)）进行代码的开发和上传。

### 小游戏项目创建

打开开发者工具，选择新建。
![](/img/game/tutorials/create.png)

在表单内填写项目路径、项目名称、AppID，项目类型为小游戏并选择完成。
![](/img/game/tutorials/fillin.png)

**注意：**
- 项目路径即要存放代码的地方，要选择一个空的文件夹，否则会提示文件夹不为空，不允许创建项目。
- AppID 是你的小游戏独有的编号，如果没有的话可以点击下方的**注册**来获取，或者点击 **小游戏** 来体验无 AppID 模式，但是部分功能（关于权限的操作、预览等功能）会受限。

### 目录结构
经过一个自动的编译之后我们便得到了一个项目模板。并且，进入到开发者工具中可以看到已经为您创建好的文件的目录。
其中两个必要的文件为：
1. game.js 小游戏的入口文件。
2. game.json 小游戏相关配置文件，详细配置内容参见[配置](/game/tutorials/howto/dev/#配置)。

![](/img/game/tutorials/project.png)

### 配置

通过小游戏的 game.json 文件，可以对小游戏进行相关的配置（格式如图），从而修改小游戏的界面渲染及属性配置。

**参数值：**

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|
|deviceOrientation|string| `'portrait'` |否|屏幕的方向，portrait 为竖屏，landscape 为横屏|
|networkTimeout|Object| |否|网络请求的超时时间，单位：毫秒|
|subpackages|array.<`Object`\>| |否|分包结构配置|

`networkTimeout` 的有效值：

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|request|number|`6000`|否|swan.request 的超时时间，单位：毫秒。|
|connectSocket|number|`6000`|否|swan.connectSocket 的超时时间，单位：毫秒。|
|uploadFile|number|`6000`|否|swan.uploadFile 的超时时间，单位：毫秒。|
|downloadFile|number|`6000`|否|swan.downloadFile 的超时时间，单位：毫秒。|

**示例：**

```js
// game.json
{
	// 支持的屏幕方向
    "deviceOrientation": "portrait",
    "networkTimeout":
    {
	    // swan.request 的超时时间，单位：毫秒
        "request": 5000,
        // swan.connectSocket 的超时时间，单位：毫秒
        "connectSocket": 5000,
        // swan.uploadFile 的超时时间，单位：毫秒
        "uploadFile": 5000,
        // swan.downloadFile 的超时时间，单位：毫秒
        "downloadFile": 5000
    },
    // 配置Worker代码放置的目录
    "workers": "workers",
    // 开放数据域的代码目录
    "openDataContext": "src/myOpenDataContext",
    // 分包配置
    "subpackages": [
    {
        "name": "stage1",
        "root": "stage1/"
    },
    {
        "name": "stage2",
        "root": "stage2.js"
    }]
}
```

#### 分包

**代码包大小限制：**

 1.所有包的总大小不超过 8M。
 2.单个分包/主包大小不超过 4M。

**分包配置：**

需要先在 game.json 配置分包信息。

```js
{
  ...
  "subpackages": [
    {
      "name": "stage1",
      "root": "stage1/" // 可以指定一个目录，目录根目录下的 index.js 会作为入口文件，目录下所有资源将会统一打包
    }, {
      "name": "stage2",
      "root": "stage2.js" // 也可以指定一个 JS 文件
    }
  ]
  ...
}
```
配置在 subpackages 字段内的目录或 js 文件，将按照配置打包成一个个「分包」，没有配置在 subpackages 中的目录和 js，将会被打包到主包中。

#### 小游戏工程依赖文件
project.swan.json

```js
{
    // appid
    "appid": "1482513113",
    // 小游戏编译类型
    "compileType": "game",
    // 小游戏库版本
    "libVersion": "1.0.0",
    "bundle":
    {
	    // 不会被打包入到 zip 包的路径/文件配置
        "exclude": ["node_moudules"],
        // 打包入口文件
        "entry": "game.js",
        // 编译相关配置
        "compilers": [
        {
	        // 使用 babel 转义
            "type": "babel"
        }]
    }
}
```

### 使用 API

不同于传统的 web 开发，在小游戏的运行环境中没有 BOM（[浏览器对象模型](https://www.w3.org/DOM/)）和 DOM（[文档对象模型](https://en.wikipedia.org/wiki/Browser_Object_Model)），我们直接通过使用的 [swan API](/game/api/openApi/authorize/) 就可以来完成一款游戏的开发。

接下来，我们通过使用百度开发者工具来实现一些 demo， 来体验一下 API 的使用。

#### 系统信息

我们可以通过 [swan.getSystemInfoSync()](/game/api/system/systemInfo/#swan-getSystemInfoSync) 来获取系统信息，比如手机的品牌、型号、可使用窗口的宽高。
```js
const {windowWidth, windowHeight, brand, model} = swan.getSystemInfoSync();
console.log(res.brand);
console.log(res.model);
console.log(res.windowWidth);
console.log(res.windowHeight);
```

#### canvas
小游戏是需要使用 [canvas](https://www.baidu.com/s?wd=canvas%20百度百科) 绘制出来的。我们先通过调用 [swan.createCanvas()](/game/api/render/createCanvas/) 方法来创建**画布**，相当于制作了一张**白纸**，然后通过 [canvas.getContext('2d')](/game/api/render/CanvasRenderingContext2D/) 可以获取 canvas 的上下文对象，相当于获得了**画笔**，再通过修改**画笔**的性质来绘制出我们的游戏界面。

```js
// 获取屏幕宽高
const {windowWidth, windowHeight} = swan.getSystemInfoSync();
// 创建“画纸”
const canvas = swan.createCanvas();
// 获得“画笔”
const context = canvas.getContext('2d');
// 修改填充样式
context.fillStyle = '#ffffff';
// 将背景置填充为白色（“画笔”将背景涂白）
context.fillRect(0, 0, windowWidth, windowHeight);
// 设置字体样式
context.font = '40px Arial';
context.fillStyle = '#000000';
// 绘制文字
context.fillText('99', 60, 150);
```

我们可以先把 game.js 的代码清空，然后写入下放代码来创建一个画布并在画布中绘制数字 `99`，保存代码并等待刷新。如果没有刷新，请点击`编译`按钮，此时我们便会看到绘制出来的 `99` 的字样。
![](/img/game/tutorials/question.png)

首次调用 `swan.createCanvas`，创建的是上屏 canvas，宽高与屏幕相同。之后如果再次调用此 API，创建的都是离屏 canvas，可以想象成是另一层`画纸`，既在离屏上的绘制不会显示在屏幕上，如果想要显示，我们需要把它渲染绘制到上屏的 canvas 上。

```js
// 创建离屏 canvas
const offScreenCanvas = swan.createCanvas();
const offContext = offScreenCanvas.getContext('2d');
// 离屏绘制
offContext.fillStyle = '#bbbbbb';
offContext.font = '60px Arial';
offContext.fillRect(0, 0, windowWidth, windowHeight);
offContext.fillStyle = '#ffffff';
offContext.fillText('3', 20, 120);
offContext.font = '30px Arial';
offContext.fillText('11', 100, 220);
offContext.font = '20px Arial';
offContext.fillText('25', 200, 120);
offContext.font = '80px Arial';
offContext.fillText('9', 30, 400);
offContext.font = '40px Arial';
offContext.fillText('88', 250, 400);
offContext.fillText('找出最大的数：', 20, 60);
// 将离屏渲染到上屏上，显示出来
context.drawImage(offScreenCanvas, 0, 0);
```

此时便把离屏 canvas 绘制到了屏幕上。

![](/img/game/tutorials/answer.png)

如果想要使用清除功能，可以调用 [context.clearRect()](/game/api/render/CanvasRenderingContext2D/#clearRect)。

```js
// 使用 clearRect 清除
context.clearRect(20, 320, 60, 60);
```

![](/img/game/tutorials/clear_1.png)

我们可以看到在矩形中清除出一个方块区域。我们也可以把清除放在离屏 canvas 上，但是要注意，操作完离屏 canvas 需要重新绘制到上屏 canvas 上。

```js
// 使用 clearRect 清除
offContext.clearRect(20, 320, 40, 40);
// 将上屏 canvas 清空后在把离屏 canvas 绘制上
context.fillStyle = '#ffffff';
context.clearRect(0, 0, windowWidth, windowHeight);
context.fillRect(0, 0, windowWidth, windowHeight);
context.fillStyle = '#000000';
context.fillText('99', 60, 150);
context.drawImage(offScreenCanvas, 0, 0);
```

![](/img/game/tutorials/clear_2.png)

更多 canvas 的绘制操作参见 [CanvasRenderingContext2D](/game/api/render/CanvasRenderingContext2D/)。

#### 触摸事件

想要实现与游戏的交互，我们可以在 swan 对象上进行屏幕触摸事件的监听和解绑。

```js
swan.onTouchStart(() => {
    swan.onTouchMove(e => {
        // 获取用户触摸滑动的位置，并将位置设置为清除的中心点
        let cX = e.touches[0].clientX - 20;
        let cY = e.touches[0].clientY - 20;
        // 清除划过的位置
        offContext.clearRect(cX, cY, 40, 40);
        // 将上屏 canvas 清空后在把离屏 canvas 绘制上
        context.fillStyle = '#ffffff';
        context.clearRect(0, 0, windowWidth, windowHeight);
        context.fillRect(0, 0, windowWidth, windowHeight);
        context.fillStyle = '#000000';
        context.fillText('99', 60, 150);
        context.drawImage(offScreenCanvas, 0, 0);
    });
    swan.onTouchEnd(() => {
        swan.offTouchMove();
        swan.offTouchEnd();
    });
});
```

现在我们滑动屏幕时便可以随着滑动进行清除。更多事件的操作参见[触摸事件](/game/api/system/touchEvents/)。

![](/img/game/tutorials/touchclear.png)

#### 交互

通过调用 API 来实现显示模态对话框、显示消息提示框等，更多交互操作参见[交互](/game/api/ui/interaction/)。

```js
// 模态对话框
swan.showModal({
    title: '标题',
    content: '这是一个模态弹窗',
    cancelColor: '#ff0000',
    confirmColor: '#fff000',
    success: res => {
        if (res.confirm) {
            console.log('点击了确定');
        } else if (res.cancel) {
            console.log('点击了取消');
        }
    }
});
// 消息提示框
swan.showToast({
    title: '标题',
    icon: 'success',
    duration: 1000,
    success: () => console.log('提示框显示成功')
});
```

### 真机预览

如果想在真机运行体验，我们在登录账号并填写了对应的正确 AppID 的情况下，开发者工具上部会有`预览`按钮，点击按钮产生二维码，通过手机百度扫描二维码便可以进行真机预览。

![](/img/game/tutorials/preview.png)


**注意：**

目前真机运行的时候需要有绘制的逻辑才会取消 loading 的界面，如果您的 demo 中没有这个逻辑,会导致长时间的卡在 loading 界面，您可以在代码中加上如下代码解决这个问题：

```js
const canvas = swan.createCanvas();
const ctx = canvas.getContext('2d');
ctx.fillRect(0, 0, 0, 0);
```

### 日志查看

iOS 和 Android 的日志查看均可使用 sConsole 调试工具查看，详见[ sConsole 教程 ](/game/tutorials/devtools/smartappdebug/#sConsole)。