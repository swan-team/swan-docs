---
title: 目录结构
header: develop
nav: framework
sidebar: dir
---

目录结构
-----

每个 SWAN App 中包含一个描述整体的、名为 app 的文件，和描述每个页面的 pages （目录）。
```
|____app.css
|____app.json
|____project.config.json
|____pages
|       |____detail
|       |        |____detail.css
|       |        |____detail.swan
|       |        |____detail.js
|       |        |____index
|       |        |____index.js
|       |        |____index.swan
|       |        |____index.css
|____app.js
```

一个 SWAN App 中的整体配置，由三个文件组成，放在 SWAN 的根目录下（调试工程放在 swan-demo 文件夹中）：

|文件|必填|作用|
|---|---|---|
|app.js|是| SWAN 整体逻辑|
|app.json|是| SWAN 整体配置|
|app.css|是| SWAN 公共样式|

一个 SWAN Page 由四个文件组成，分别是：

|文件|必填|作用|
|---|---|---|
|.js|是|当前页面的 JS 逻辑|
|.swan|是| SWAN 的模板文件|
|.css|否|当前页面的样式文件|
|.json|否|当前页面的标题显示|

<notice>Tips: </notice>请务必将 pages 文件夹下的文件，命名为与当前目录相同的名字。

如： /pages/detail  下的 CSS 文件，请命名为 detail.css 。 JS 文件，请命名为 detail.js 。
