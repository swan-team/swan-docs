---
title: 普通分包
header: develop
nav: tutorial
sidebar: basic_subpackages
---


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
│       ├── index.swan
│       ├── index.css
│       ├── index.json
│       └── index.js
└── utils
```

开发者通过在 app.json subPackages 字段声明项目分包结构：

```json
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

