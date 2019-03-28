---
title: 分包加载
header: develop
nav: framework
sidebar: subpackages
---

介绍
-----

某些情况下，开发者需要将智能小程序划分成不同的子包，在构建时打包成不同的分包，用户在使用时按需进行加载。

在智能小程序的打包中，默认会有一个主包，主包中包含了启动页面，和所有分包都会用到的公共资源/JS脚本。而分包则是根据开发者的配置划分的。
> 整个小程序所有分包大小不超过 8M，单个分包大小不能超过 2M。
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
│       └── suboagetwo
├── pages
│   └── index
└── utils
```
开发者通过在 app.json subPackages 字段声明项目分包结构：

```js
{
    "pages": [
        "page/index"
    ],
    "subPackages": [
        {
            "root": "subpackage",
            "pages": [
                "pages/subpageone",
                "pages/subpagetwo"
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
<!-- |independent|	Boolean|	分包是否是独立分包| -->

## 打包原则

- 声明 subPackages 后，将按 subPackages 配置路径进行打包，subPackages 配置路径外的目录将被打包到 app（主包） 中

- app（主包）也可以有自己的 pages（即最外层的 pages 字段）

- 首页的 TAB 页面必须在 app（主包）内

## 引用原则

- 两个分包之间无法互相引用对方包中的js，但是分包中可以引用主包，或者自己分包内的js

## 分包预下载规则 

**功能介绍**：开发者可以通过配置，在进入小程序某个页面时，由框架自动预下载可能需要的分包，提升进入后续分包页面时的启动速度。

分包预下载目前即支持通过全局配置方式使用，也支持开发者通过调用API完成。
API调用方式参考：<a href="https://smartprogram.baidu.com/docs/develop/api/open_preloadsubpackage/#loadSubPackage/">loadSubPackage</a>

全局配置方法：
```json
{
  "pages": ["pages/index"],
  "subpackages": [
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

|字段|    类型|    必填|    默认值|    说明|
|--|--|--|--|--|
|packages|    StringArray|    是 |   无  |  进入页面后预下载分包的 root。|
|network |   String|    否 |   wifi |   在指定网络下预下载，可选值为：<p>all: 不限网络 <p>wifi: 仅wifi下预下载|
