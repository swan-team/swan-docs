---
title: 代码构成
header: develop
nav: tutorial
sidebar: codedir
---


智能小程序是一种新的开放能力，开发者可以快速地开发一个智能小程序。通过搜索，用户可以在百度 App 内被便捷地获取和传播。

框架概述
-----

SWAN App 基本开发思路类似于前端开发，并增强调用大量端能力，性能体验优于普通 Web 。上层架构基于 JS 开发，可以辅助开发者进行良好的开发。

SWAN App 为开发者提供了 MVVM 的开发方式。JS 状态的变更引起视图的变化，视图的变更也可以反馈到逻辑层的状态中，开发者开发更加方便。

目录结构
-----

工程的工作目录中包含以下文件：

```
|____app.css
|____app.json
|____project.swan.json
|____pages
|       |____detail
|       |        |____detail.css
|       |        |____detail.swan
|       |        |____detail.js
|       |____index
|       |        |____index.js
|       |        |____index.swan
|       |        |____index.css
|____app.js
```

我们看到以下几类的文件：
1、 .json 为后缀的 JSON 配置文件，这个文件配置了 SWAN 智能小程序所有页面的路径和界面展现样式等；
2、 .swan 结尾的 SWAN 模板文件，这个文件是用来描述当前这个页面的文件结构，类似于网页中的 HTML 文件；
3、 .css 结尾的 CSS 样式文件，描述页面样式；
4、 .js 结尾的 JS 文件，处理这个页面和用户的交互。
