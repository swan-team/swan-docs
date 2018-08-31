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

### 打包原则

- 声明 subPackages 后，将按 subPackages 配置路径进行打包，subPackages 配置路径外的目录将被打包到 app（主包） 中

- app（主包）也可以有自己的 pages（即最外层的 pages 字段）

- 首页的 TAB 页面必须在 app（主包）内

### 引用原则

- 两个分包之间无法互相引用对方包中的js，但是分包中可以引用主包，或者自己分包内的js

