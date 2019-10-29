---
title: 分包加载
header: develop
nav: framework
sidebar: subpackages
---

普通分包
-----

某些情况下，开发者需要将智能小程序划分成不同的子包，在构建时打包成不同的分包，用户在使用时按需进行加载。

在智能小程序的打包中，默认会有一个主包，主包中包含了启动页面，和所有分包都会用到的公共资源/JS脚本。而分包则是根据开发者的配置划分的。
> 整个小程序所有分包大小不超过 8M，单个分包/主包大小不能超过 2M。
在小程序启动时，默认会下载主包并启动主包内页面，如果用户需要打开分包内某个页面，客户端会把对应分包下载下来，下载完成后再进行展示。

将智能小程序按照业务特点合理的分包，可以提升智能小程序的加载速度，优化用户体验。

### 使用方法
假设支持分包的小程序，目录结构如下：
```
├── app.js
├── app.json
├── app.css
├── subpackage
│   └── pages
│       ├── subpageone
│       │   ├── subpageone.swan
│       │   ├── subpageone.css
│       │   ├── subpageone.json
│       │   └── subpageone.js
│       └── suboagetwo
│           ├── suboagetwo.swan
│           ├── suboagetwo.css
│           ├── suboagetwo.json
│           └── suboagetwo.js
├── pages
│   └── index
        ├── index.swan
│       ├── index.css
│       ├── index.json
│       └── index.js
└── utils
```
开发者通过在 app.json subPackages 字段声明项目分包结构：

```js
{
    "pages": [
        "page/index/index"
    ],
    "subPackages": [
        {
            "root": "subpackage",
            "pages": [
                "pages/subpageone/subpageone",
                "pages/subpagetwo/subpagetwo"
            ]
        }
    ]
}
```

subPackages 中，每个分包的配置有以下几项：

|字段|	类型|	说明|
|---|---|---|
|root|	String|	分包根目录|
|name|	String|	分包别名，<a href="https://smartprogram.baidu.com/docs/develop/api/open_preloadsubpackage/#loadSubPackage/">分包预下载</a>时可以使用。|
|pages|	StringArray|	分包页面路径，相对于分包根目录。|
|independent|	Boolean|	分包是否是独立分包|

### 打包原则

- 声明 subPackages 后，将按 subPackages 配置路径进行打包，subPackages 配置路径外的目录将被打包到 app（主包） 中；
- app（主包）也可以有自己的 pages（即最外层的 pages 字段）；
- 首页的 TAB 页面必须在 app（主包）内。

### 引用原则

- 两个分包之间无法互相引用对方包中的js，但是分包中可以引用主包，或者自己分包内的js。


独立分包
-----

> 基础库 3.60.2 及以上版本开始支持。开发者工具请使用 2.2.9 及以上版本，[可点此下载](https://smartprogram.baidu.com/docs/develop/devtools/history/)

- 独立分包是小程序中一种特殊类型的分包，可以独立于主包和其他分包运行。从独立分包中页面进入小程序时，不需要下载主包。当用户进入普通分包或主包内页面时，主包才会被下载。

- 开发者可以按需将某些具有一定功能独立性的页面配置到独立分包中。当小程序从普通的分包页面启动时，需要首先下载主包；而独立分包不依赖主包即可运行，可以很大程度上提升分包页面的启动速度。

- 一个小程序中可以有多个独立分包。

> 小游戏不支持独立分包。

## 配置方法
假设小程序目录结构如下：
```
├── app.js
├── app.json
├── app.css
├── moduleA
│   └── pages
│       ├── history
│       └── search
├── moduleB
│   └── pages
│       ├── counter
│       └── goods
├── pages
│   ├── index
│   └── logs
└── utils
```

开发者通过在`app.json`的`subPackages`字段中对应的分包配置项中定义`independent`字段声明对应分包为独立分包。

```json
{
  "pages": [
	  "pages/index",
	  "pages/logs"
   ],
  "subPackages": [
    {
      "root": "moduleA",
      "pages": [
	      "pages/history",
	      "pages/search"
	   ]
    },
    {
      "root": "moduleB",
      "pages": [
	      "pages/counter",
	      "pages/goods"
	   ],
      "independent": true
    }
  ]
}
```

**限制**

独立分包属于分包的一种。普通分包的所有限制都对独立分包有效。独立分包中<!-- 插件、 -->自定义组件的处理方式同普通分包。

**此外，使用独立分包时要注意：**

- **独立分包中不能依赖主包和其他分包中的内容**，包括js文件、template、css、自定义组件等。主包中的`app.css`对独立分包无效，应避免在独立分包页面中使用`app.css`中的样式；
- App 只能在主包内定义，独立分包中不能定义 App，会造成无法预期的行为。

**注意事项**

**（1）关于 `getApp`**

与普通分包不同，独立分包运行时，`App`并不一定被注册，因此`getApp`也不一定可以获得`App`对象：

- 当用户从独立分包页面启动小程序时，主包是不存在的，那么`App`也不存在，此时调用`getApp`获取到的是`undefined`。 当用户进入普通分包或主包内页面时，主包才会被下载，`App`才会被注册；
- 当用户是从普通分包或主包内页面跳转到独立分包页面时，主包已经存在，此时调用 `getApp` 可以获取到真正的App实例。
由于这一限制，开发者无法通过`App`方法实现独立分包和小程序其它部分的全局变量共享。

为了在独立分包中满足这一需求，基础库`3.60.2`版本开始`getApp`支持`[allowDefault]`参数，在`App`未定义时返回一个默认实现。当主包加载，`App`被注册时，默认实现中定义的属性会被覆盖合并到真正的`App`中。

**示例代码：**

- 独立分包中
```js
const app = getApp({allowDefault: true}); // {}
app.data = 456;
app.global = {};
```

- app.js 中
```js
App({
  data: 123,
  from: 'swan'
});

console.log(getApp()); // {global: {}, data: 456, from: 'swan'}

```

**（2）关于 App 生命周期**

当从独立分包启动小程序时，主包中 App 的`onLaunch`和首次`onShow`会在从独立分包页面首次进入主包或其他普通分包页面时调用；
由于独立分包中无法定义 App，小程序生命周期的监听可以使用`swan.onAppShow`，`swan.onAppHide`完成。App 上的其它事件可以使用`swan.onError`，`swan.onPageNotFound`监听。

**低版本兼容：**
- 在低于`3.60.2`的基础库版本运行时，独立分包视为普通分包处理，不具备独立运行的特性；
- **在兼容模式下，主包中的 app.css 可能会对独立分包中的页面产生影响，因此应避免在独立分包页面中使用 app.css 中的样式。**


## 分包预下载规则

**功能介绍**：开发者可以通过配置，在进入小程序某个页面时，由框架自动预下载可能需要的分包，提升进入后续分包页面时的启动速度。

分包预下载目前既支持通过全局配置方式使用，也支持开发者通过调用API完成。
API调用方式参考：<a href="https://smartprogram.baidu.com/docs/develop/api/open_preloadsubpackage/#loadSubPackage/">loadSubPackage</a>

全局配置方法：
```json
{
  "pages": ["pages/index"],
  "subPackages": [
    {
      "root": "important",
      "pages": ["index"],
    },
    {
      "root": "sub1",
      "pages": ["index"],
    },
    {
      "name": "hello",
      "root": "path/to",
      "pages": ["index"]
    },
    {
      "root": "sub3",
      "pages": ["index"]
    }
  ],
  "preloadRule": {
    "pages/index": {
      "network": "all",
      "packages": ["important"]
    },
    "sub1/index": {
      "packages": ["hello", "sub3"]
    },
    "sub3/index": {
      "packages": ["path/to"]
    }
}
```
preloadRule 中，key 是页面路径，value 是进入此页面的预下载配置，每个配置有以下几项：

|字段|类型|必填|默认值|说明|
|--|--|--|--|--|
|packages|StringArray|是 |无|进入页面后预下载分包的 root。|
|network |String|否|wifi |在指定网络下预下载，有效值为：<br/>**all:** 不限网络 <br/>**wifi:** 仅wifi下预下载|
